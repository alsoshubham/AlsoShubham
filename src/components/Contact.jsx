import { useState, useRef } from "react";
import { IoIosSend } from "react-icons/io";

import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setIsSubmitting(true);

      // Replace with your EmailJS service ID, template ID, and public key
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      formRef.current.reset();
    } catch (error) {
      window.alert("Failed to send email. Please try again later.");
      console.error("FAILED...", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section relative py-2 text-black dark:text-white overflow-hidden my-10 md:my-20">
      <div className="container mx-auto px-4 md:px-0">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Get in touch
          </h2>
          <p className="max-w-xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach
            out!
          </p>
        </div>
          <div className="backdrop-blur-lg rounded-2xl justify-center items-center p-8 border border-white/10 shadow-lg max-w-3xl mx-auto">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2 text-left">
                  <label htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="user_name"
                    placeholder="Your name"
                    required
                    className="border-white/10 placeholder:text-gray-500 bg-gray-200 block w-full px-4 py-3 rounded-lg"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="border-white/10 placeholder:text-gray-500 bg-gray-200 block w-full px-4 py-3 rounded-lg"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    placeholder="What is this regarding?"
                    required
                    className="border-white/10 placeholder:text-gray-500 bg-gray-200 block w-full px-4 py-3 rounded-lg"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or inquiry..."
                    required
                    className="min-h-[150px] border-white/10 placeholder:text-gray-500 bg-gray-200  block w-full px-4 py-3 rounded-lg"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-purple-700 py-3 rounded-lg transition-all"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <IoIosSend className="w-4 h-4" />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
      </div>
    </section>
  );
}
