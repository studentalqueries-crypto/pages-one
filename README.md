# StuDental - BDS Course Hub

A comprehensive educational platform for BDS dental students preparing for NTRUHS & KNRUHS university examinations.

## Features

- **Course Registration**: Multi-step registration form with payment integration
- **Previous Year Papers**: Download question papers organized by university and year
- **Probable Questions**: High-probability exam topics with percentage analysis
- **Mobile Responsive**: Optimized for all devices with touch-friendly interface
- **Google Sheets Integration**: Automatic data collection and management
- **Bank Payment Support**: Multiple payment options including UPI and bank transfer

## Pages

- **Landing Page** (`index.html`) - Course overview and features
- **Registration** (`join.html`) - Multi-step course enrollment form
- **Downloads** (`downloads.html`) - Previous papers and contact form
- **About Us** (`about.html`) - Team information and company details
- **Privacy Policy** (`privacy.html`) - Comprehensive privacy policy

## Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Custom CSS with responsive design
- **Integration**: Google Apps Script for form submissions
- **Hosting**: Static hosting compatible (Netlify, Vercel, GitHub Pages)

## Quick Start

1. **Clone or download** this repository
2. **Configure Google Sheets** integration (see DEPLOYMENT.md)
3. **Update payment QR codes** in the `public/` directory
4. **Deploy** to your preferred static hosting service

## File Structure

\`\`\`
├── index.html              # Landing page
├── join.html               # Registration form
├── downloads.html          # Downloads and contact
├── about.html              # About us page
├── privacy.html            # Privacy policy
├── styles.css              # Main stylesheet
├── script.js               # General JavaScript
├── join.js                 # Registration form logic
├── downloads.js            # Downloads page functionality
├── public/                 # Static assets
│   ├── studental-bds-payment-qr.png
│   └── payment-qr.png
├── scripts/
│   └── google-apps-script.js    # Google Sheets integration
├── DEPLOYMENT.md           # Deployment instructions
└── README.md               # This file
\`\`\`

## Configuration

### Google Sheets Integration

1. Create Google Sheets for data collection
2. Deploy the Google Apps Script as a web app
3. Update the `GOOGLE_SCRIPT_URL` in `join.js` and `downloads.js`

### Payment Details

Update bank account information in `join.html`:
- Account Name: StuDental Education Services
- Account Number: Update with actual details
- IFSC Code: Update with actual code
- Bank Name: Update with actual bank

### QR Codes

Replace QR code images in the `public/` directory with your actual payment QR codes.

## Deployment

See `DEPLOYMENT.md` for detailed deployment instructions for various hosting platforms.

## Support

For technical support or inquiries:
- Email: studental.queries@gmail.com
- Website: [Your deployed URL]

## License

© 2024 StuDental. All rights reserved.
