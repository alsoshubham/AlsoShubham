import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLinkedin, SiMedium } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  const handleCallClick = () => {
    window.open("tel:+918826291451");
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I need help with scaling my early stage startup. Can you assist me?"
    );
    window.open(`https://wa.me/918826291451?text=${message}`, "_blank");
  };

  const handleSubscribe = () => {
    if (!email) {
      toast.error("Please enter your email address to subscribe.");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.success(
      "Thank you for subscribing to our newsletter. You'll receive weekly tax tips and updates."
    );

    // Here you would typically send the email to your backend
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="z-10 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg text-center shadow-lg relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 justify-between">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold">alsoshubham</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed"></p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-blue-400" />
                <button
                  onClick={handleCallClick}
                  className="hover:text-white transition-colors"
                >
                  +91 8826291451
                </button>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-blue-400" />
                <a
                  href="mailto:hello@alsoshubham.com"
                  className="hover:text-white transition-colors"
                >
                  hello@alsoshubham.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Dwarka, New Delhi</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <Link
                to="https://x.com/alsoshubham_"
                className="text-gray-400 hover:text-white"
                aria-label="Twitter"
              >
                <FaTwitter size={24} alt="Twitter" />
              </Link>
              <Link
                to="https://www.instagram.com/alsoshubham.here/"
                className="text-gray-400 hover:text-white"
                aria-label="Instagram"
              >
                <FaInstagram size={24} alt="Instagram" />
              </Link>
              <Link
                to="https://medium.com/@alsoshubham"
                className="text-gray-400 hover:text-white"
                aria-label="Medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiMedium size={24} alt="Medium" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/alsoshubham"
                className="text-gray-400 hover:text-white"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLinkedin size={24} alt="LinkedIn" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4"></p>
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-3 py-2 rounded-l-md bg-gray-800 text-white focus:outline-none w-full sm:w-64"
              />
              <button
                onClick={handleSubscribe}
                className="px-6 py-3 w-full sm:w-fit border border-purple-500 rounded-md mr-6 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-700 hover:to-purple-900 text-white font-medium shadow-lg transition-colors duration-200"
              >
                Subscribe
              </button>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="mt-6 flex items-center space-x-2 text-green-400 hover:text-green-500 transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="text-center md:text-left md:flex md:items-center md:justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-gray-400 text-sm">
            © {currentYear} alsoshubham. All rights reserved.
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Tawk.to Live Chat Widget */}
      <script type="text/javascript">
        {`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/your_property_id/1hxxxxxxx'; // Replace with your Tawk.to property ID
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();
        `}
      </script>
    </footer>
  );
};

export default Footer;
