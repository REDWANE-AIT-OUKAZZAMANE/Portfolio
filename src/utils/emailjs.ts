import emailjs from '@emailjs/browser';

// Initialize EmailJS with your User ID
export const initEmailJS = () => {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID || '');
};

// Send email using EmailJS
export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
      templateParams
    );

    return { success: true, response };
  } catch (error) {
    console.error('Error sending email with EmailJS:', error);
    return { success: false, error };
  }
}; 