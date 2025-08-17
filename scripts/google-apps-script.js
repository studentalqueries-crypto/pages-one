/**
 * Google Apps Script for StuDental BDS Course Registration
 *
 * Setup Instructions:
 * 1. Go to script.google.com
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Create two Google Sheets:
 *    - "StuDental Registrations" for course registrations
 *    - "StuDental Contacts" for contact form submissions
 * 5. Update the SHEET_IDs below with your actual sheet IDs
 * 6. Deploy as a web app with execute permissions for "Anyone"
 * 7. Copy the web app URL and add it as GOOGLE_SCRIPT_URL environment variable
 *
 * @fileoverview Google Apps Script for handling form submissions
 *
 * Note: SpreadsheetApp, ContentService, and MailApp are global objects
 * provided by the Google Apps Script runtime environment.
 */

// Declare global objects
const SpreadsheetApp = SpreadsheetApp
const ContentService = ContentService
const MailApp = MailApp

// Configuration - Replace with your actual Google Sheet IDs
const REGISTRATION_SHEET_ID = "1AdUUIc-gSKhzwiUgLRnhs32fCC7r_Ynx602GEf-dCFg"
const CONTACT_SHEET_ID = "1xBK1O9ifSLuatklUFXmtaLtfuSaob6D1x8uIcKWgFKY"

// Registration sheet headers
const REGISTRATION_HEADERS = [
  "Timestamp",
  "Name",
  "Email",
  "WhatsApp",
  "University",
  "Year",
  "College",
  "Subjects",
  "Subject Count",
  "Payment Method",
  "UPI ID",
  "Bank Details",
  "UTR Number",
  "Total Amount",
  "Status",
]

// Contact sheet headers
const CONTACT_HEADERS = ["Timestamp", "Name", "Email", "Subject", "Message", "Status"]

/**
 * Main function to handle POST requests
 * @param {GoogleAppsScript.Events.DoPost} e - The POST event
 * @returns {GoogleAppsScript.Content.TextOutput} Response
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents)
    const action = data.action

    switch (action) {
      case "addRegistration":
        return addRegistration(data.data)
      case "addContact":
        return addContact(data.data)
      default:
        return ContentService.createTextOutput(JSON.stringify({ error: "Invalid action" })).setMimeType(
          ContentService.MimeType.JSON,
        )
    }
  } catch (error) {
    console.log("Error in doPost: " + error.toString())
    return ContentService.createTextOutput(JSON.stringify({ error: "Server error: " + error.toString() })).setMimeType(
      ContentService.MimeType.JSON,
    )
  }
}

/**
 * Add registration data to Google Sheets
 * @param {Object} data - Registration data
 * @returns {GoogleAppsScript.Content.TextOutput} Response
 */
function addRegistration(data) {
  try {
    const sheet = SpreadsheetApp.openById(REGISTRATION_SHEET_ID).getActiveSheet()

    // Initialize headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, REGISTRATION_HEADERS.length).setValues([REGISTRATION_HEADERS])
      sheet.getRange(1, 1, 1, REGISTRATION_HEADERS.length).setFontWeight("bold")
      sheet.setFrozenRows(1)
    }

    // Prepare row data
    const rowData = [
      data.timestamp,
      data.name,
      data.email,
      data.whatsapp,
      data.university,
      data.year,
      data.college,
      data.subjects,
      data.subjectCount,
      data.paymentMethod,
      data.upiId,
      data.bankDetails,
      data.utrNumber,
      data.totalAmount,
      data.status,
    ]

    // Add data to sheet
    const lastRow = sheet.getLastRow()
    sheet.getRange(lastRow + 1, 1, 1, rowData.length).setValues([rowData])

    // Auto-resize columns
    sheet.autoResizeColumns(1, REGISTRATION_HEADERS.length)

    // Send email notification (optional)
    sendRegistrationNotification(data)

    const response = {
      success: true,
      id: lastRow + 1,
      message: "Registration added successfully",
    }

    return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    console.log("Error in addRegistration: " + error.toString())
    return ContentService.createTextOutput(
      JSON.stringify({ error: "Failed to add registration: " + error.toString() }),
    ).setMimeType(ContentService.MimeType.JSON)
  }
}

/**
 * Add contact form data to Google Sheets
 * @param {Object} data - Contact form data
 * @returns {GoogleAppsScript.Content.TextOutput} Response
 */
function addContact(data) {
  try {
    const sheet = SpreadsheetApp.openById(CONTACT_SHEET_ID).getActiveSheet()

    // Initialize headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, CONTACT_HEADERS.length).setValues([CONTACT_HEADERS])
      sheet.getRange(1, 1, 1, CONTACT_HEADERS.length).setFontWeight("bold")
      sheet.setFrozenRows(1)
    }

    // Prepare row data
    const rowData = [data.timestamp, data.name, data.email, data.subject, data.message, data.status]

    // Add data to sheet
    const lastRow = sheet.getLastRow()
    sheet.getRange(lastRow + 1, 1, 1, rowData.length).setValues([rowData])

    // Auto-resize columns
    sheet.autoResizeColumns(1, CONTACT_HEADERS.length)

    // Send email notification (optional)
    sendContactNotification(data)

    const response = {
      success: true,
      id: lastRow + 1,
      message: "Contact form submitted successfully",
    }

    return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    console.log("Error in addContact: " + error.toString())
    return ContentService.createTextOutput(
      JSON.stringify({ error: "Failed to add contact: " + error.toString() }),
    ).setMimeType(ContentService.MimeType.JSON)
  }
}

/**
 * Send email notification for new registration (optional)
 * @param {Object} data - Registration data
 */
function sendRegistrationNotification(data) {
  try {
    const subject = `New Course Registration - ${data.name}`
    const body = `
New course registration received:

Name: ${data.name}
Email: ${data.email}
WhatsApp: ${data.whatsapp}
University: ${data.university}
Year: ${data.year}
College: ${data.college}
Subjects: ${data.subjects}
Total Amount: ₹${data.totalAmount}
Payment Method: ${data.paymentMethod}
UTR Number: ${data.utrNumber}

Please verify the payment and update the status accordingly.
    `

    // Replace with your notification email
    const notificationEmail = "studental.queries@gmail.com"

    MailApp.sendEmail({
      to: notificationEmail,
      subject: subject,
      body: body,
    })
  } catch (error) {
    console.log("Error sending registration notification: " + error.toString())
  }
}

/**
 * Send email notification for new contact form (optional)
 * @param {Object} data - Contact form data
 */
function sendContactNotification(data) {
  try {
    const subject = `New Contact Form - ${data.subject}`
    const body = `
New contact form submission:

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}
Message: ${data.message}

Please respond to the inquiry.
    `

    // Replace with your notification email
    const notificationEmail = "studental.queries@gmail.com"

    MailApp.sendEmail({
      to: notificationEmail,
      subject: subject,
      body: body,
    })
  } catch (error) {
    console.log("Error sending contact notification: " + error.toString())
  }
}

/**
 * Verify sheets are accessible and properly configured
 */
function verifySheets() {
  try {
    console.log("=== StuDental Sheets Verification ===")

    // Test registration sheet
    const regSheet = SpreadsheetApp.openById(REGISTRATION_SHEET_ID).getActiveSheet()
    console.log("✓ Registration sheet accessible")
    console.log("  - Sheet name: " + regSheet.getName())
    console.log("  - Current rows: " + regSheet.getLastRow())

    // Test contact sheet
    const contactSheet = SpreadsheetApp.openById(CONTACT_SHEET_ID).getActiveSheet()
    console.log("✓ Contact sheet accessible")
    console.log("  - Sheet name: " + contactSheet.getName())
    console.log("  - Current rows: " + contactSheet.getLastRow())

    console.log("=== Verification Complete ===")
    return true
  } catch (error) {
    console.log("❌ Verification failed: " + error.toString())
    return false
  }
}

/**
 * Test registration data submission
 */
function testRegistrationSubmission() {
  try {
    console.log("=== Testing Registration Submission ===")

    const testData = {
      timestamp: new Date().toISOString(),
      name: "Test Student",
      email: "test@example.com",
      whatsapp: "+91 9876543210",
      university: "NTRUHS",
      year: "2nd Year",
      college: "Government Dental College, Hyderabad",
      subjects: "Oral Pathology, Pharmacology",
      subjectCount: 2,
      paymentMethod: "UPI",
      upiId: "test@paytm",
      bankDetails: "",
      utrNumber: "TEST123456789",
      totalAmount: "2000",
      status: "Pending Verification",
    }

    const result = addRegistration(testData)
    const response = JSON.parse(result.getContent())

    if (response.success) {
      console.log("✓ Registration test successful")
      console.log("  - Row ID: " + response.id)
      console.log("  - Message: " + response.message)
    } else {
      console.log("❌ Registration test failed: " + response.error)
    }

    return response.success
  } catch (error) {
    console.log("❌ Registration test error: " + error.toString())
    return false
  }
}

/**
 * Test contact form submission
 */
function testContactSubmission() {
  try {
    console.log("=== Testing Contact Submission ===")

    const testData = {
      timestamp: new Date().toISOString(),
      name: "Test User",
      email: "testuser@example.com",
      subject: "Test Inquiry",
      message: "This is a test message to verify the contact form integration is working properly.",
      status: "New",
    }

    const result = addContact(testData)
    const response = JSON.parse(result.getContent())

    if (response.success) {
      console.log("✓ Contact test successful")
      console.log("  - Row ID: " + response.id)
      console.log("  - Message: " + response.message)
    } else {
      console.log("❌ Contact test failed: " + response.error)
    }

    return response.success
  } catch (error) {
    console.log("❌ Contact test error: " + error.toString())
    return false
  }
}

/**
 * Run all tests in sequence
 */
function runAllTests() {
  console.log("🚀 Starting StuDental Integration Tests")
  console.log("=====================================")

  // Step 1: Verify sheets
  const sheetsOk = verifySheets()
  if (!sheetsOk) {
    console.log("❌ Cannot proceed - sheets verification failed")
    return
  }

  console.log("")

  // Step 2: Test registration
  const regOk = testRegistrationSubmission()

  console.log("")

  // Step 3: Test contact
  const contactOk = testContactSubmission()

  console.log("")
  console.log("=== Test Summary ===")
  console.log("Sheets Access: " + (sheetsOk ? "✓ PASS" : "❌ FAIL"))
  console.log("Registration: " + (regOk ? "✓ PASS" : "❌ FAIL"))
  console.log("Contact Form: " + (contactOk ? "✓ PASS" : "❌ FAIL"))

  if (sheetsOk && regOk && contactOk) {
    console.log("🎉 All tests passed! Your StuDental integration is ready.")
  } else {
    console.log("⚠️  Some tests failed. Please check the errors above.")
  }
}
