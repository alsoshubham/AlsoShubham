import emailjs from '@emailjs/browser';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
export const sendEmail = (data) => {

    emailjs
      .sendForm('service_qaq4udg', 'template_4mfkxh7', data, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          window.alert('Email sent successfully!');
        },
        (error) => {
          window.alert('Failed to send email. Please try again later.');
          console.error('FAILED...', error);
        },
      );
  };