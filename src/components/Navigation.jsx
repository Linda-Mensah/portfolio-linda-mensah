import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = ({
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
}) => {
  const menuItems = [
    "home",
    "about",
    "experience",
    "projects",
    "skills",
    "contact",
  ];

  return (
    <nav className="fixed top-0 w-full z-40">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xl border-b border-gray-800/50" />
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => scrollToSection("home")}
          className="relative group"
        >
          <div className="bg-yellow-300 rounded-full p-1">
            <img
              src="/profile-photo.PNG"
              className="w-12 h-12 object-cover rounded-full"
              alt="Profile"
            />
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-2">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="relative group px-4 py-2"
            >
              <span
                className={`relative z-10 capitalize transition-all duration-300 ${
                  activeSection === item
                    ? "text-yellow-500"
                    : "text-gray-400 group-hover:text-white"
                }`}
              >
                {item}
              </span>
              {activeSection === item && (
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-lg" />
              )}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/4 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent transition-all duration-300" />
            </button>
          ))}

          {/* All Projects Link */}
          <Link to="/projects" className="relative group px-4 py-2">
            <span className="relative z-10 transition-all duration-300 text-gray-400 group-hover:text-yellow-500">
              All Projects
            </span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/4 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent transition-all duration-300" />
          </Link>

          <a href="/projects" className="relative group px-4 py-2">
            <span className="relative z-10 transition-all duration-300 text-gray-400 group-hover:text-yellow-500">
              CV
            </span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/4 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent transition-all duration-300" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="relative md:hidden z-50 group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="absolute -inset-2 bg-yellow-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-gray-800/50 transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 py-4">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="py-3 text-left group"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-1 h-4 rounded-full transition-all duration-300 ${
                    activeSection === item
                      ? "bg-yellow-500"
                      : "bg-gray-800 group-hover:bg-yellow-500/50"
                  }`}
                />
                <span
                  className={`capitalize transition-all duration-300 ${
                    activeSection === item
                      ? "text-yellow-500 font-semibold"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                >
                  {item}
                </span>
              </div>
            </button>
          ))}

          {/* All Projects Link for mobile */}
          <Link
            to="/projects"
            className="py-3 text-left group"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center gap-3">
              <div className="w-1 h-4 rounded-full bg-gray-800 group-hover:bg-yellow-500/50 transition-all duration-300" />
              <span className="text-gray-400 group-hover:text-yellow-500 transition-all duration-300 font-semibold">
                All Projects
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
