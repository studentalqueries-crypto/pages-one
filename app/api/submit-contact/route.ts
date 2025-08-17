import { type NextRequest, NextResponse } from "next/server"

interface ContactData {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactData = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Prepare data for Google Sheets
    const sheetData = {
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      status: "New",
    }

    // Send to Google Sheets via Apps Script Web App
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL

    if (!GOOGLE_SCRIPT_URL) {
      console.error("Google Script URL not configured")
      return NextResponse.json({ error: "Integration not configured" }, { status: 500 })
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "addContact",
        data: sheetData,
      }),
    })

    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.status}`)
    }

    const result = await response.json()

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
      id: result.id,
    })
  } catch (error) {
    console.error("Contact submission error:", error)
    return NextResponse.json({ error: "Failed to submit contact form" }, { status: 500 })
  }
}
