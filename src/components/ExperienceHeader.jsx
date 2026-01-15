import React from "react";
import { Building2 } from "lucide-react";

const ExperienceHeader = () => {
  return (
    <div className="text-center mb-20">
      <div className="inline-flex items-center gap-3 mb-6">
        <div className="w-20 h-px bg-linear-to-r from-transparent via-gray-500 to-transparent" />
        <Building2 className="w-8 h-8 text-gray-400" />
        <div className="w-20 h-px bg-linear-to-r from-transparent via-gray-500 to-transparent" />
      </div>
      <h2 className="text-6xl md:text-7xl font-bold mb-6">
        <span className="bg-linear-to-r from-gray-600 via-gray-400 to-gray-700 bg-clip-text text-transparent">
          Experience
        </span>
      </h2>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto">
        Organizations I have worked with
      </p>
    </div>
  );
};

export default ExperienceHeader;
