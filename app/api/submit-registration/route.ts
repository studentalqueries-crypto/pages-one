import { type NextRequest, NextResponse } from "next/server"

interface RegistrationData {
  name: string
  email: string
  whatsapp: string
  university: string
  year: string
  college: string
  selectedSubjects: string[]
  paymentMethod: string
  upiId: string
  bankDetails: string
  utrNumber: string
  totalAmount: number
}

export async function POST(request: NextRequest) {
  try {
    const data: RegistrationData = await request.json()

    // Validate required fields
    if (
      !data.name ||
      !data.email ||
      !data.whatsapp ||
      !data.university ||
      !data.year ||
      !data.college ||
      !data.selectedSubjects.length ||
      !data.utrNumber
    ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Prepare data for Google Sheets
    const sheetData = {
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      whatsapp: data.whatsapp,
      university: data.university,
      year: data.year,
      college: data.college,
      subjects: data.selectedSubjects.join(", "),
      subjectCount: data.selectedSubjects.length,
      paymentMethod: data.paymentMethod,
      upiId: data.paymentMethod === "upi" ? data.upiId : "",
      bankDetails: data.paymentMethod === "bank" ? data.bankDetails : "",
      utrNumber: data.utrNumber,
      totalAmount: data.totalAmount,
      status: "Pending Verification",
    }

    // Send to Google Sheets via Apps Script Web App
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL

    if (!GOOGLE_SCRIPT_URL) {
      console.error("Google Script URL not configured")
      // Fallback mechanism when Google Sheets is not configured
      console.log("[v0] Fallback: Logging registration data locally")
      console.log("[v0] Registration Data:", JSON.stringify(sheetData, null, 2))

      return NextResponse.json({
        success: true,
        message: "Registration received (Google Sheets not configured - data logged locally)",
        fallback: true,
        id: "local-" + Date.now(),
      })
    }

    console.log("[v0] Attempting to send data to Google Sheets:", GOOGLE_SCRIPT_URL)

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "addRegistration",
        data: sheetData,
      }),
    })

    console.log("[v0] Google Sheets response status:", response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error("[v0] Google Sheets API error response:", errorText)

      // Fallback for API errors
      console.log("[v0] Fallback: Logging registration data due to API error")
      console.log("[v0] Registration Data:", JSON.stringify(sheetData, null, 2))

      return NextResponse.json({
        success: true,
        message: "Registration received (Google Sheets error - data logged locally)",
        fallback: true,
        error: `Google Sheets API error: ${response.status}`,
        id: "fallback-" + Date.now(),
      })
    }

    const responseText = await response.text()
    console.log("[v0] Google Sheets raw response:", responseText.substring(0, 200) + "...")

    // Check if response is JSON
    let result
    try {
      result = JSON.parse(responseText)
    } catch (parseError) {
      console.error("[v0] Failed to parse Google Sheets response as JSON:", parseError)

      // Fallback for JSON parsing errors
      console.log("[v0] Fallback: Logging registration data due to JSON parse error")
      console.log("[v0] Registration Data:", JSON.stringify(sheetData, null, 2))

      if (responseText.includes("<!DOCTYPE") || responseText.includes("<html>")) {
        return NextResponse.json({
          success: true,
          message: "Registration received (Google Apps Script needs configuration - data logged locally)",
          fallback: true,
          error: "Google Apps Script returning HTML instead of JSON",
          suggestion: "Please redeploy your Google Apps Script and run verifySheets() function",
          id: "fallback-" + Date.now(),
        })
      }

      return NextResponse.json({
        success: true,
        message: "Registration received (Google Sheets response error - data logged locally)",
        fallback: true,
        error: "Invalid response from Google Sheets API",
        id: "fallback-" + Date.now(),
      })
    }

    console.log("[v0] Parsed Google Sheets result:", result)

    if (!result.success) {
      // Fallback for Google Sheets errors
      console.log("[v0] Fallback: Logging registration data due to Google Sheets error")
      console.log("[v0] Registration Data:", JSON.stringify(sheetData, null, 2))

      return NextResponse.json({
        success: true,
        message: "Registration received (Google Sheets processing error - data logged locally)",
        fallback: true,
        error: result.error || "Unknown error from Google Sheets",
        id: "fallback-" + Date.now(),
      })
    }

    return NextResponse.json({
      success: true,
      message: "Registration submitted successfully to Google Sheets",
      id: result.id || "unknown",
    })
  } catch (error) {
    console.error("[v0] Registration submission error:", error)

    // Final fallback for any unexpected errors
    console.log("[v0] Final fallback: Logging registration data due to unexpected error")
    try {
      const data: RegistrationData = await request.json()
      const sheetData = {
        timestamp: new Date().toISOString(),
        name: data.name,
        email: data.email,
        whatsapp: data.whatsapp,
        university: data.university,
        year: data.year,
        college: data.college,
        subjects: data.selectedSubjects.join(", "),
        subjectCount: data.selectedSubjects.length,
        paymentMethod: data.paymentMethod,
        upiId: data.paymentMethod === "upi" ? data.upiId : "",
        bankDetails: data.paymentMethod === "bank" ? data.bankDetails : "",
        utrNumber: data.utrNumber,
        totalAmount: data.totalAmount,
        status: "Pending Verification",
      }
      console.log("[v0] Registration Data:", JSON.stringify(sheetData, null, 2))
    } catch (dataError) {
      console.error("[v0] Could not log registration data:", dataError)
    }

    return NextResponse.json({
      success: true,
      message: "Registration received (system error - data logged locally)",
      fallback: true,
      error: error instanceof Error ? error.message : "Unknown error",
      id: "error-fallback-" + Date.now(),
    })
  }
}
