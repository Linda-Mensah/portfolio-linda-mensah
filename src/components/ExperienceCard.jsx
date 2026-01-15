import React, { useState } from "react";
import {
  Building2,
  MapPin,
  Calendar,
  ArrowUpRight,
  Code,
  Cpu,
  Shield,
} from "lucide-react";

const ExperienceCard = ({ exp, isLast }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Map icon strings to actual components
  const iconMap = {
    Code,
    Cpu,
    Shield,
  };

  const IconComponent = iconMap[exp.icon] || Code;

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Glow Effect */}
      <div
        className="absolute -inset-4 rounded-3xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"
        style={{
          backgroundColor: exp.glowColor,
          transform: isHovered ? "scale(1.05)" : "scale(1)",
        }}
      />

      {/* Main Card */}
      <div
        className={`relative h-full rounded-2xl border ${exp.borderColor} ${exp.bgColor} backdrop-blur-sm p-8 transition-all duration-500 group-hover:scale-[1.02] group-hover:border-opacity-40 overflow-hidden`}
      >
        {/* Floating icon background */}
        <IconComponent className="absolute -right-8 -top-8 w-40 h-40 text-gray-900/10" />

        {/* Decorative corner elements */}
        <div
          className={`absolute top-0 right-0 w-16 h-16 bg-linear-to-bl ${exp.color} opacity-5`}
        />
        <div
          className={`absolute bottom-0 left-0 w-16 h-16 bg-linear-to-tr ${exp.color} opacity-5`}
        />

        {/* Icon with gradient border */}
        <div className="relative mb-8">
          <div
            className={`absolute inset-0 bg-linear-to-br ${exp.color} rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
          />
          <div className="relative w-16 h-16 rounded-xl bg-black/50 border border-gray-800/50 flex items-center justify-center backdrop-blur-sm">
            <IconComponent
              className={`w-8 h-8 bg-linear-to-br ${exp.color} bg-clip-text text-transparent`}
            />
          </div>
        </div>

        {/* Role with animated underline */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-yellow-500 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-500">
            {exp.role}
          </h3>
          <div className="w-12 h-1 bg-linear-to-r from-gray-700 to-transparent rounded-full group-hover:w-20 group-hover:from-gray-300 group-hover:to-gray-400 transition-all duration-500" />
        </div>

        {/* Organization */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="w-5 h-5 text-gray-400" />
            <span className="text-xl font-bold bg-linear-to-r from-gray-200 to-gray-300 bg-clip-text text-transparent">
              {exp.organization}
            </span>
          </div>

          {/* Location and period inline */}
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{exp.location}</span>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-gray-400 italic text-sm mb-6 border-l-2 border-gray-700/50 pl-4 py-2 group-hover:border-gray-400/50 transition-colors duration-500">
          {exp.tagline}
        </p>

        {/* Hover expandable details */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isHovered ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 border-t border-gray-800/50">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Focus Areas
              </span>
              <ArrowUpRight className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-gray-800/10 text-gray-300 text-xs font-medium border border-gray-700/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-gray-800/50 to-transparent group-hover:from-gray-400/50 group-hover:via-gray-400/50 group-hover:to-gray-400/50 transition-all duration-500" />
      </div>

      {/* Animated connection lines between cards on desktop */}
      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-linear-to-l from-gray-800 to-transparent group-hover:from-gray-400 group-hover:to-gray-500 transition-all duration-500" />
      )}
    </div>
  );
};

export default ExperienceCard;
