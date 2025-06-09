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

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="header flex flex-col md:flex-row justify-between items-center max-w-screen-xl mx-auto py-4 px-4 sticky top-0 bg-black z-50 shadow-lg">
      <div className="flex w-full md:w-auto justify-between items-center">
        <Title />
        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Desktop Navigation */}
      <nav className="hidden overflow-y-hidden md:flex flex-row justify-center items-center gap-8 w-full md:w-auto">
        <ul className="flex flex-row gap-8">
          <li>
            <Link to="/about" className="text-white">About</Link>
          </li>
          <li>
            <Link to="/projects" className="text-white">Projects</Link>
          </li>
          <li>
            <Link to="/services" className="text-white">Services</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white">Contact</Link>
          </li>
          <li>
            <Link to="https://medium.com/@alsoshubham" className="text-white">Blog</Link>
          </li>
        </ul>
      </nav>
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-gray-900 z-50 shadow-lg animate-fade-in">
          <ul className="flex flex-col gap-4 p-6">
            <li>
              <Link to="/about" className="text-white" onClick={() => setMobileMenuOpen(false)}>About</Link>
            </li>
            <li>
              <Link to="/projects" className="text-white" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </li>
            <li>
              <Link to="/blog" className="text-white" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            </li>
            <li>
              <Link to="/services" className="text-white" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            </li>
            <li>
              <Link to="https://medium.com/@alsoshubham" className="text-white" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
export default Header;
