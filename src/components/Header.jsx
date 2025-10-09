import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <div className="flex items-center gap-2">
    <Link to="/" className="text-black dark:text-white text-xl font-sans-bold">
      alsoshubham
    </Link>
  </div>
);

// Icon components to avoid repeated inline SVGs
// eslint-disable-next-line react/prop-types
const SunIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 2.22a1 1 0 011.415 0l.707.707a1 1 0 11-1.414 1.415l-.708-.707a1 1 0 010-1.415zM18 9a1 1 0 110 2h-1a1 1 0 110-2h1zM6.636 4.636a1 1 0 010 1.414L5.93 6.758A1 1 0 114.514 5.343l.707-.707a1 1 0 011.415 0zM4 9a1 1 0 100 2H3a1 1 0 100-2h1zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm6.364-1.364a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM6.636 15.364a1 1 0 01-1.415 0l-.707-.707a1 1 0 011.414-1.414l.708.707a1 1 0 010 1.414z" />
  </svg>
);

// eslint-disable-next-line react/prop-types
const MoonIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
    <path d="M17.293 13.293a1 1 0 01-1.414 1.414A7 7 0 118.293 4.707a1 1 0 011.414-1.414A9 9 0 1017.293 13.293z" />
  </svg>
);

// eslint-disable-next-line react/prop-types
const MenuIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

// eslint-disable-next-line react/prop-types
const CloseIcon = ({ className = "w-7 h-7" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const openCalendly = () => {
  window.open("https://calendly.com/alsoshubham/30min", "_blank");
};

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "system";
    } catch {
      return "system";
    }
  });

  useEffect(() => {
    try {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else if (theme === "light") {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        localStorage.removeItem("theme");
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        if (prefersDark) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
      }
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };
  return (
    <header className="header flex flex-col md:flex-row justify-between items-center max-w-screen-xl mx-auto pt-3 px-4 fixed top-0 left-0 right-0 bg-white/60 dark:bg-black/60 backdrop-blur-md z-50 dark:border-gray-800">
      <div className="flex w-full md:w-auto justify-between items-center">
        <Title />
        {/* Hamburger Icon for Mobile */}
        <div className="flex items-center gap-2">
          <button
            className="md:hidden inline-flex object-cover items-center justify-center p-2 hover:scale-105 transition-transform duration-150"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to light" : "Switch to dark"}
            aria-pressed={theme === "dark"}
          >
            {theme === "dark" ? <MoonIcon /> : <SunIcon />}
          </button>
          <button
            className="md:hidden text-black dark:text-white focus:outline-none p-2 rounded hover:bg-gray-800 transition-colors duration-200"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <MenuIcon className="w-8 h-8 text-current" />
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-row justify-center items-center gap-8 w-full md:w-auto">
          <ul className="flex flex-row gap-8">
          <li>
            <Link
              to="/about"
              className="text-black dark:text-white hover:text-purple-400 transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-black dark:text-white hover:text-purple-400 transition-colors duration-200"
            >
              Projects
            </Link>
          </li>
          <li>
            <a
              href="https://medium.com/@alsoshubham"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-purple-400 transition-colors duration-200"
            >
              Blog
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <button
            className="inline-flex items-center justify-center p-2 hover:scale-105 transition-transform duration-150"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to light" : "Switch to dark"}
            aria-pressed={theme === "dark"}
          >
            {theme === "dark" ? <MoonIcon /> : <SunIcon />}
          </button>
          <button
            className="px-7 py-3 rounded-full bg-transparent border-2 border-purple-500 text-purple-700 font-semibold text-base hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2"
            onClick={openCalendly}
          >
            Book a Call!
          </button>
        </div>
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
      role="dialog"
      aria-modal="true"
      className="md:hidden fixed top-0 left-0 w-full z-50 animate-slide-down"
      style={{
        borderBottomLeftRadius: "1rem",
        borderBottomRightRadius: "1rem",
        overflow: "hidden",
      }}
    >
      <div className="relative bg-gray-900/95 shadow-lg border-b border-gray-800 px-6 pt-6 pb-8 flex flex-col items-center">
        {/* Close Icon */}
        <button
          className="absolute top-4 right-4 text-white p-2 rounded hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <CloseIcon />
        </button>

        {/* Nav Links */}
        <ul className="flex flex-col items-center gap-2 w-full mt-2">
          {[
            { label: "About", to: "/about" },
            { label: "Projects", to: "/projects" },
            {
              label: "Blog",
              href: "https://medium.com/@alsoshubham",
              external: true,
            },
          ].map(({ label, to, href, external }) => (
            <li key={label} className="w-full">
              {external ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full min-h-[44px] text-white text-lg font-medium rounded-md transition-all duration-200 hover:bg-purple-700/20 hover:underline focus:bg-purple-700/30 active:bg-purple-800/30"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </a>
              ) : (
                <Link
                  to={to}
                  className="flex items-center justify-center w-full min-h-[44px] text-white text-lg font-medium rounded-md transition-all duration-200 hover:bg-purple-700/20 hover:underline focus:bg-purple-700/30 active:bg-purple-800/30"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="w-full flex flex-col items-center gap-3">
          <button
            className="mt-2 mb-2 w-full max-w-xs px-7 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 border-2 border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
            onClick={openCalendly}
          >
            Book a Call
          </button>
        </div>
      </div>
    </nav>
  </>
)}

    </header>
  );
}
export default Header;
