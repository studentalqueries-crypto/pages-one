# StuDental Deployment Guide

## Prerequisites

- A static hosting service account (Netlify, Vercel, GitHub Pages, etc.)
- Google account for Sheets integration
- Domain name (optional)

## Step-by-Step Deployment

### 1. Prepare Files

Ensure you have all required files:
- ✅ `index.html` - Landing page
- ✅ `join.html` - Registration form
- ✅ `downloads.html` - Downloads page
- ✅ `about.html` - About page
- ✅ `privacy.html` - Privacy policy
- ✅ `styles.css` - Stylesheet
- ✅ `script.js` - General JavaScript
- ✅ `join.js` - Form logic
- ✅ `downloads.js` - Downloads functionality
- ✅ `public/studental-bds-payment-qr.png` - Payment QR code
- ✅ `scripts/google-apps-script.js` - Sheets integration

### 2. Deploy to Static Hosting

#### Option A: Netlify (Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder to the deploy area
3. Your site will be live instantly with a random URL
4. Optional: Configure custom domain in site settings

#### Option B: Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will automatically detect it as a static site
4. Deploy with default settings

#### Option C: GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `username.github.io/repository-name`

### 3. Configure Google Sheets Integration

#### Create Google Sheets
1. Create a new Google Sheet named "StuDental Registrations"
2. Create another sheet named "StuDental Contacts"
3. Note down both Sheet IDs from the URLs

#### Setup Google Apps Script
1. Go to [script.google.com](https://script.google.com)
2. Create new project
3. Replace default code with content from `scripts/google-apps-script.js`
4. Update the SHEET_IDs:
   \`\`\`javascript
   const REGISTRATION_SHEET_ID = "your-registration-sheet-id"
   const CONTACT_SHEET_ID = "your-contact-sheet-id"
   \`\`\`
5. Save the project

#### Deploy Web App
1. Click "Deploy" > "New deployment"
2. Choose "Web app" as type
3. Set execute as "Me"
4. Set access to "Anyone"
5. Click "Deploy"
6. Copy the web app URL

#### Update Website Configuration
1. Open `join.js`
2. Update the Google Script URL:
   \`\`\`javascript
   const GOOGLE_SCRIPT_URL = "your-web-app-url-here"
   \`\`\`
3. Redeploy your static site

### 4. Test Integration

1. Visit your deployed website
2. Fill out the registration form
3. Check if data appears in your Google Sheets
4. Test the contact form as well
5. Verify email notifications are working

### 5. Custom Domain (Optional)

#### For Netlify:
1. Go to Site settings > Domain management
2. Add custom domain
3. Configure DNS records as instructed

#### For Vercel:
1. Go to Project settings > Domains
2. Add your domain
3. Configure DNS records

#### For GitHub Pages:
1. Add CNAME file with your domain
2. Configure DNS to point to GitHub Pages

### 6. SSL Certificate

Most hosting providers automatically provide SSL certificates. Verify your site loads with `https://`.

### 7. Performance Optimization

- Enable gzip compression (usually automatic)
- Configure caching headers
- Optimize images if needed
- Test mobile responsiveness

## Troubleshooting

### Google Sheets Not Working
- Check if web app is deployed with "Anyone" access
- Verify Sheet IDs are correct
- Check browser console for CORS errors
- Test the Google Apps Script directly

### Form Submission Errors
- Verify all required fields are filled
- Check network connectivity
- Ensure Google Script URL is correct
- Look for JavaScript errors in browser console

### Mobile Issues
- Test on actual devices
- Check touch target sizes (minimum 44px)
- Verify responsive breakpoints
- Test form functionality on mobile

## Maintenance

- Regularly check Google Sheets for new submissions
- Monitor Google Apps Script execution logs
- Update QR codes if payment details change
- Keep contact information current

## Support

If you encounter issues:
1. Check browser console for errors
2. Verify Google Apps Script logs
3. Test individual components
4. Contact studental.queries@gmail.com for assistance
