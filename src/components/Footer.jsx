import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLinkedin, SiMedium } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleCallClick = () => {
    window.open("tel:+918826291451");
  };
  return (
    <footer className="z-10 relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 justify-between ">
        <div className="space-y-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between">
          <div className="flex items-center space-x-3 text-sm">
            <Phone className="w-4 h-4 text-blue-400" />
            <a
              onClick={handleCallClick}
              className="text-gray-400 transition-colors cursor-pointer"
            >
              +91 8826291451
            </a>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <Mail className="w-4 h-4 text-blue-400" />
            <a
              href="mailto:hello.alsoshubham@gmail.com"
              className="text-gray-400 transition-colors cursor-pointer"
            >
              hello.alsoshubham@gmail.com
            </a>
          </div>
          <div className="flex space-x-4 ">
            <Link
              to="https://x.com/alsoshubham_"
              className="text-gray-400 transition-colors cursor-pointer"
              aria-label="Twitter"
            >
              <FaTwitter size={24} alt="Twitter" />
            </Link>
            <Link
              to="https://www.instagram.com/alsoshubham.here/"
              className="text-gray-400 transition-colors cursor-pointer"
              aria-label="Instagram"
            >
              <FaInstagram size={24} alt="Instagram" />
            </Link>
            <Link
              to="https://medium.com/@alsoshubham"
              className="text-gray-400 transition-colors cursor-pointer"
              aria-label="Medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiMedium size={24} alt="Medium" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/alsoshubham"
              className="text-gray-400 transition-colors cursor-pointer"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin size={24} alt="LinkedIn" />
            </Link>
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
    </footer>
  );
};

export default Footer;
