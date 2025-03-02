"use client"

import { useState, useRef } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"
// import { toast } from "@/components/ui/use-toast"
import { FiMapPin,  } from "react-icons/fi";
import { CiPhone, CiMail } from "react-icons/ci";
import { FaInstagram, FaLinkedinIn , FaTwitter , FaGithub } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import emailjs from "@emailjs/browser"

export default function ContactSection() {
  const formRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formRef.current) return

    try {
      setIsSubmitting(true)

      // Replace with your EmailJS service ID, template ID, and public key
      await emailjs.sendForm("service_qaq4udg", "template_4mfkxh7", formRef.current, "KtINPv02hLSyOQSGe")

      // toast({
      //   title: "Message sent successfully!",
      //   description: "I'll get back to you as soon as possible.",
      //   variant: "default",
      // })

      formRef.current.reset()
    } catch (error) {
      console.error(error)
      // toast({
      //   title: "Something went wrong!",
      //   description: "Please try again later.",
      //   variant: "destructive",
      // })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative w-full py-20 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-gradient-to-r from-red-500 to-orange-500 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in touch</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left side - Contact Information */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl text-start font-bold text-white mb-8">Contact Information</h3>

              <div className="space-y-6 text-left">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <FiMapPin className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">New Delhi, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <CiPhone className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium">+91 1234567890</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                    <CiMail className="text-pink-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">your.email@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-xl text-start font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/alsoshubham.here"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <FaInstagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/alsoshubham/"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <FaLinkedinIn className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://x.com/alsoshubham_"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <FaTwitter className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://github.com/alsoshubham"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <FaGithub className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2 text-left">
                  <label htmlFor="name" className="text-white">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="user_name"
                    placeholder="Your name"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 block w-full px-4 py-3 rounded-lg"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label htmlFor="email" className="text-white">
                    Email
                  </label>
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 block w-full px-4 py-3 rounded-lg"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label htmlFor="subject" className="text-white">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    placeholder="What is this regarding?"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 block w-full px-4 py-3 rounded-lg"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label htmlFor="message" className="text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or inquiry..."
                    required
                    className="min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-gray-500  block w-full px-4 py-3 rounded-lg"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-3 rounded-lg transition-all"
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
      </div>
    </section>
  )
}

