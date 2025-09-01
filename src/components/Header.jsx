import { useState } from "react";
import { Link } from "react-router-dom";
const Title = () => {
  return (
    <div className="flex items-center gap-2">
      <Link
        to="/"
        className="text-white text-xl font-sans-bold fontweight-bold"
      >
        alsoshubham
      </Link>
    </div>
  );
};

const openCalendly = () => {
  window.open("https://calendly.com/alsoshubham/30min", "_blank");
};

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="header flex flex-col md:flex-row justify-between items-center max-w-screen-xl mx-auto py-3 px-4 fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md z-50 shadow-lg border-b border-gray-800">
      <div className="flex w-full md:w-auto justify-between items-center">
        <Title />
        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none p-2 rounded hover:bg-gray-800 transition-colors duration-200"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-row justify-center items-center gap-8 w-full md:w-auto">
        <ul className="flex flex-row gap-8">
          <li>
            <Link
              to="/about"
              className="text-white hover:text-purple-400 transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-white hover:text-purple-400 transition-colors duration-200"
            >
              Projects
            </Link>
          </li>
          <li>
            <a
              href="https://medium.com/@alsoshubham"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors duration-200"
            >
              Blog
            </a>
          </li>
        </ul>
        <button
          className="px-7 py-3 rounded-full bg-transparent border-2 border-purple-500 text-purple-300 font-semibold text-base hover:bg-purple-600/10 hover:text-white hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
          onClick={openCalendly}
        >
          Book a Call!
        </button>
      </nav>
      {/* Mobile Navigation & Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu overlay"
          ></div>
          {/* Slide-down Menu */}
          <nav
            className="md:hidden fixed top-0 left-0 w-full z-50 animate-slide-down"
            style={{ borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem', overflow: 'hidden' }}
          >
            <div className="relative bg-gray-900/95 shadow-lg border-b border-gray-800 px-6 pt-6 pb-8 flex flex-col items-center">
              {/* Close Icon */}
              <button
                className="absolute top-4 right-4 text-white p-2 rounded hover:bg-gray-800 transition-colors duration-200 focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <ul className="flex flex-col items-center gap-2 w-full mt-2">
                <li className="w-full">
                  <Link
                    to="/about"
                    className="flex items-center justify-center w-full min-h-[44px] text-white text-lg font-medium rounded-md transition-all duration-200 hover:bg-purple-700/20 hover:underline focus:bg-purple-700/30 active:bg-purple-800/30"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li className="w-full">
                  <Link
                    to="/projects"
                    className="flex items-center justify-center w-full min-h-[44px] text-white text-lg font-medium rounded-md transition-all duration-200 hover:bg-purple-700/20 hover:underline focus:bg-purple-700/30 active:bg-purple-800/30"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Projects
                  </Link>
                </li>
                <li className="w-full">
                  <a
                    href="https://medium.com/@alsoshubham"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full min-h-[44px] text-white text-lg font-medium rounded-md transition-all duration-200 hover:bg-purple-700/20 hover:underline focus:bg-purple-700/30 active:bg-purple-800/30"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </a>
                </li>
              </ul>
              <button
                className="mt-8 mb-2 w-full max-w-xs px-7 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 border-2 border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
                onClick={openCalendly}
              >
                Book a Call
              </button>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
export default Header;
