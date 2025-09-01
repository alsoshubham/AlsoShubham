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
    window.open('https://calendly.com/hello-alsoshubham/30min', '_blank');
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
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-row justify-center items-center gap-8 w-full md:w-auto">
        <ul className="flex flex-row gap-8">
          <li>
            <Link to="/about" className="text-white hover:text-purple-400 transition-colors duration-200">About</Link>
          </li>
          <li>
            <Link to="/projects" className="text-white hover:text-purple-400 transition-colors duration-200">Projects</Link>
          </li>
          <li>
            <a href="https://medium.com/@alsoshubham" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors duration-200">Blog</a>
          </li>
        </ul>
        <button
          className="px-7 py-3 rounded-full bg-transparent border-2 border-purple-500 text-purple-300 font-semibold text-base hover:bg-purple-600/10 hover:text-white hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
          onClick={openCalendly}
        >
          Say Hello!
        </button>
      </nav>
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 z-50 shadow-lg animate-fade-in border-b border-gray-800">
          <ul className="flex flex-col gap-4 p-6">
            <li>
              <Link to="/about" className="text-white text-lg hover:text-purple-400 transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>About</Link>
            </li>
            <li>
              <Link to="/projects" className="text-white text-lg hover:text-purple-400 transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white text-lg hover:text-purple-400 transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </li>
            <li>
              <a href="https://medium.com/@alsoshubham" target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-purple-400 transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>Blog</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
export default Header;
