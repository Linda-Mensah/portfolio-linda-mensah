import React from "react";
import { ExternalLink } from "lucide-react";

// Image mapping for projects
const projectImages = {
  "Care Agency Management": "/cama-thumbnail.png",
  "CodeBlue Multi-Tenant Platform": "/codeblue-thumbnail.png",
  "Bye-Bye Store Vendor Platform": "/bb-store-thumbnail.png",
  "Oval Admissions System": "/oval-admissions.png",
  "Kalys House Platform": "/kalyshouse-thumbnail.png",
  "BallGbee Platform": "/ballgbee-thumbnail.png",
  "Livewell Website": "/livewell-thumbnail.png",
  "Peeva Invitational": "/peeva-thumbnail.png",

  default: "/hero-background-img.jpg",
};

const ProjectCard = ({ title, description, tech, links, icon: Icon }) => {
  const imageUrl = projectImages[title] || projectImages["default"];

  return (
    <div className="group relative h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm h-full transition-all duration-500 group-hover:border-yellow-500/50 group-hover:scale-[1.01] sm:group-hover:scale-[1.02]">
        {/* Project Image */}
        <div className="overflow-hidden rounded-lg sm:rounded-xl -mx-4 sm:-mx-8 mb-4 sm:mb-6">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-32 sm:h-44 object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex items-start justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-yellow-500/10 rounded-lg">
              <Icon size={20} className="text-yellow-500" />{" "}
              {/* FIXED: Removed sm:size-24 */}
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
              {title}
            </h3>
          </div>

          {links.demo && <DemoLink href={links.demo} />}
        </div>

        <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-1 sm:gap-2">
          {tech.map((t, i) => (
            <TechTag key={i} text={t} />
          ))}
        </div>
      </div>
    </div>
  );
};

const DemoLink = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-1 sm:p-2 rounded-lg border border-gray-800 hover:border-yellow-500/50 transition-colors"
    aria-label="Live Demo"
  >
    <ExternalLink
      size={16}
      className="text-gray-400 hover:text-yellow-500 transition-colors"
    />
  </a>
);

const TechTag = ({ text }) => (
  <span className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 text-yellow-500 text-xs font-medium">
    {text}
  </span>
);

export default ProjectCard;
