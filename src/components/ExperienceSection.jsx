import React, { useState, useEffect } from "react";
import ExperienceCard from "./ExperienceCard";
import ExperienceHeader from "./ExperienceHeader";
import { Building2 } from "lucide-react";

const ExperienceSection = ({ isVisible }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const p = Array.from({ length: 15 }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${i * 0.5}s`,
      animationDuration: `${2 + Math.random() * 3}s`,
    }));

    const timer = setTimeout(() => setParticles(p), 0);
    return () => clearTimeout(timer);
  }, []);

  const experiences = [
    {
      role: "Junior Software Developer",
      organization: "Utopia Technologies",
      location: "Ghana",
      icon: "Code",
      color: "from-gray-700 to-gray-900",
      bgColor:
        "bg-gradient-to-br from-gray-900/5 via-gray-800/5 to-transparent",
      borderColor: "border-gray-700/20",
      tagline: "Building & Testing Modern Web Applications",
      glowColor: "rgba(0, 0, 0, 0.25)",
      tags: ["Web Development", "QA Testing", "API Validation", "Bug Tracking"],
    },
    {
      role: "Project Coordinator",
      organization: "Moko Afrika",
      location: "DR Congo",
      icon: "Cpu",
      color: "from-gray-700 to-gray-900",
      bgColor:
        "bg-gradient-to-br from-gray-900/5 via-gray-800/5 to-transparent",
      borderColor: "border-gray-700/20",
      tagline: "Streamlining Operations & Documentation",
      glowColor: "rgba(0, 0, 0, 0.25)",
      tags: [
        "Project Management",
        "Documentation",
        "Workflow Design",
        "Process Improvement",
      ],
    },
    {
      role: "QA Lead & Project Manager",
      organization: "Gazelle Web-Tech",
      location: "UK",
      icon: "Shield",
      color: "from-gray-700 to-gray-900",
      bgColor:
        "bg-gradient-to-br from-gray-900/5 via-gray-800/5 to-transparent",
      borderColor: "border-gray-700/20",
      tagline: "Leading Quality Assurance Initiatives",
      glowColor: "rgba(0, 0, 0, 0.25)",
      tags: [
        "Quality Assurance",
        "Team Leadership",
        "Stakeholder Management",
        "Release Coordination",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center px-4 sm:px-6 py-20 overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-gray-400 rounded-full animate-pulse"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.animationDelay,
              animationDuration: p.animationDuration,
            }}
          />
        ))}
      </div>

      {/* Floating accent elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-gray-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gray-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto w-full z-10">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <ExperienceHeader />

          {/* Experience Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {experiences.map((exp, idx) => (
              <ExperienceCard
                key={idx}
                exp={exp}
                index={idx}
                isLast={idx === experiences.length - 1}
              />
            ))}
          </div>

          <TimelineDots count={experiences.length} />
        </div>
      </div>
    </section>
  );
};

const TimelineDots = ({ count }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="hidden lg:flex items-center justify-center gap-12 mt-16">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="relative"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className={`w-4 h-4 rounded-full border-2 border-gray-800 transition-all duration-500 ${
              hoveredIndex === idx
                ? "scale-150 border-gray-400 bg-gray-400/20"
                : "bg-gray-900"
            }`}
          />
          <div
            className={`absolute inset-0 rounded-full animate-ping transition-all duration-500 ${
              hoveredIndex === idx ? "bg-gray-400/30" : "hidden"
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
