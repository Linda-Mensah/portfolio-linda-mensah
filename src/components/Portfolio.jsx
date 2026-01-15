import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import About from "./About";
import ExperienceSection from "./ExperienceSection";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Use a slightly lower threshold and a negative bottom root margin so
    // sections become "visible" a bit earlier on smaller screens.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="relative bg-black text-white min-h-screen font-sans overflow-x-hidden">
      {/* Background Elements */}
      <BackgroundElements cursorPosition={cursorPosition} />

      {/* Custom Cursor */}
      <CustomCursor cursorPosition={cursorPosition} />

      {/* Navigation - Updated with Projects link */}
      <Navigation
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      {/* Sections */}
      <Hero isVisible={isVisible.home} scrollToSection={scrollToSection} />

      <About isVisible={isVisible.about} />

      <ExperienceSection isVisible={isVisible.experience} />

      <Projects isVisible={isVisible.projects} />

      <Skills isVisible={isVisible.skills} />

      <Contact isVisible={isVisible.contact} />

      <Footer />
    </div>
  );
};

// Background Elements Component
const BackgroundElements = ({ cursorPosition }) => (
  <div className="fixed inset-0 z-0">
    <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-black to-gray-900" />
    <div
      className="absolute w-125 h-125 rounded-full blur-3xl opacity-10 animate-pulse"
      style={{
        background:
          "radial-gradient(circle, rgba(234,179,8,0.3) 0%, rgba(0,0,0,0) 70%)",
        left: `${cursorPosition.x / 20}px`,
        top: `${cursorPosition.y / 20}px`,
      }}
    />
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(rgba(234,179,8,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(234,179,8,0.1) 1px, transparent 1px)`,
        backgroundSize: "50px 50px",
      }}
    />
  </div>
);

// Custom Cursor Component
const CustomCursor = ({ cursorPosition }) => (
  <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
    <div
      className="absolute w-6 h-6 rounded-full border border-yellow-500/30 mix-blend-difference transition-all duration-100 ease-out"
      style={{
        transform: `translate(${cursorPosition.x - 12}px, ${
          cursorPosition.y - 12
        }px)`,
      }}
    />
  </div>
);

export default Portfolio;
