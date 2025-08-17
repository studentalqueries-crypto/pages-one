# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration for the StuDental BDS Course website.

## Prerequisites

- Google account
- Access to Google Sheets and Google Apps Script

## Step 1: Create Google Sheets

1. Go to [Google Sheets](https://sheets.google.com)
2. Create two new spreadsheets:
   - **StuDental Registrations** - for course registrations
   - **StuDental Contacts** - for contact form submissions

3. Note down the Sheet IDs from the URLs:
   - URL format: `https://docs.google.com/spreadsheets/d/SHEET_ID/edit`
   - Copy the SHEET_ID part

## Step 2: Set up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the content from `scripts/google-apps-script.js`
4. Update the configuration variables:
   \`\`\`javascript
   const REGISTRATION_SHEET_ID = 'your_registration_sheet_id_here'
   const CONTACT_SHEET_ID = 'your_contact_sheet_id_here'
   \`\`\`

## Step 3: Deploy the Script

1. Click "Deploy" > "New deployment"
2. Choose type: "Web app"
3. Set execute as: "Me"
4. Set access: "Anyone"
5. Click "Deploy"
6. Copy the Web app URL

## Step 4: Configure Environment Variables

Add the following environment variable to your Vercel project:

\`\`\`
GOOGLE_SCRIPT_URL=your_web_app_url_here
\`\`\`

## Step 5: Test the Integration

1. Run the `testSetup()` function in Google Apps Script to verify sheet access
2. Submit a test registration through your website
3. Check if data appears in your Google Sheets

## Sheet Structure

### Registration Sheet Columns:
- Timestamp
- Name
- Email
- WhatsApp
- University
- Year
- College
- Subjects
- Subject Count
- Payment Method
- UPI ID
- Bank Details
- UTR Number
- Total Amount
- Status

### Contact Sheet Columns:
- Timestamp
- Name
- Email
- Subject
- Message
- Status

## Email Notifications (Optional)

The script can send email notifications for new submissions. Update the notification email in the script:

\`\`\`javascript
const notificationEmail = 'studental.queries@gmail.com'
\`\`\`

## Troubleshooting

1. **Permission Issues**: Make sure the script has permission to access your sheets
2. **CORS Errors**: Ensure the web app is deployed with "Anyone" access
3. **Data Not Appearing**: Check the Google Apps Script logs for errors
4. **Environment Variable**: Verify GOOGLE_SCRIPT_URL is correctly set in Vercel

## Security Notes

- The Google Apps Script URL should be kept secure
- Consider implementing additional validation in the script
- Regularly review access permissions
- Monitor the sheets for any suspicious activity

## Support

For issues with the integration, check:
1. Google Apps Script execution logs
2. Browser developer console for client-side errors
3. Vercel function logs for server-side errors
