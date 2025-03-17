import emailjs from '@emailjs/browser';
export const sendEmail = (data) => {

    emailjs
      .sendForm('service_qaq4udg', 'template_4mfkxh7', data, {
        publicKey: 'KtINPv02hLSyOQSGe',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  };