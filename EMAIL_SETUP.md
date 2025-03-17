# Email Setup Instructions

This portfolio website offers two methods for sending emails from the contact form:

1. **EmailJS (Recommended)** - A client-side solution that's easier to set up
2. **Node.js/Nodemailer** - A server-side solution that requires more configuration

## Option 1: EmailJS Setup (Recommended)

EmailJS allows you to send emails directly from client-side JavaScript without needing a server. This is the recommended approach for this portfolio.

1. **Create an EmailJS Account**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Verify your account

2. **Create an Email Service**
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service" and connect your email provider (Gmail, Outlook, etc.)
   - Follow the instructions to authenticate your email account

3. **Create an Email Template**
   - Go to "Email Templates" in your dashboard
   - Click "Create New Template"
   - Design your template with the following variables:
     - `{{from_name}}` - The name of the person contacting you
     - `{{from_email}}` - The email of the person contacting you
     - `{{subject}}` - The subject of the message
     - `{{message}}` - The message content

4. **Configure Your Environment Variables**
   - Open the `.env.local` file in your project root
   - Fill in the EmailJS configuration:
   ```
   NEXT_PUBLIC_EMAILJS_USER_ID=your-emailjs-user-id
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your-emailjs-service-id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your-emailjs-template-id
   ```
   - You can find these IDs in your EmailJS dashboard

5. **Restart Your Development Server**
   - If your development server is running, restart it to apply the new environment variables

## Option 2: Node.js/Nodemailer Setup

If you prefer a server-side approach, you can use Nodemailer with Gmail.

### Setting up Gmail with App Password

1. **Enable 2-Step Verification**
   - Go to your [Google Account](https://myaccount.google.com/)
   - Select "Security" from the left navigation panel
   - Under "Signing in to Google," select "2-Step Verification" and follow the steps to turn it on

2. **Create an App Password**
   - After enabling 2-Step Verification, go back to the Security page
   - Under "Signing in to Google," select "App passwords"
   - Select "Mail" as the app and "Other" as the device (you can name it "Portfolio Website")
   - Click "Generate"
   - Google will display a 16-character password. Copy this password.

3. **Configure Your Environment Variables**
   - Open the `.env.local` file in your project root
   - Replace `your-email@gmail.com` with your Gmail address
   - Replace `your-app-password` with the 16-character App Password you generated

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

4. **Restart Your Development Server**
   - If your development server is running, restart it to apply the new environment variables

## Testing the Contact Form

After setting up either method, you can test the contact form by:
1. Fill out all fields in the contact form
2. Submit the form
3. Check your email to see if you received the message

## Troubleshooting

If you're not receiving emails:
- Make sure your credentials are correct
- Check your spam folder
- Verify that your email account doesn't have additional security restrictions
- Check the browser console or server logs for any error messages

## Security Notes

- Never commit your `.env.local` file to version control
- The credentials give access to your email account, so keep them secure
- For production environments, consider using environment variables in your hosting platform 