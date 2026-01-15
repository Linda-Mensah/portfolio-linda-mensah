import React from "react";
import { TestTube2, Shield, Cpu, Code } from "lucide-react";

const Skills = ({ isVisible }) => {
  const skillGroups = [
    {
      category: "Technical",
      skills: [
        "HTML/CSS/TailwindCSS",
        "JavaScript/TypeScript",
        "React",
        "Next.js",
        "REST APIs",
      ],
      icon: Code,
    },

    {
      category: "Auth & Security",
      skills: [
        "Login/Registration",
        "RBAC",
        "Session Validation",
        "Data Integrity",
      ],
      icon: Shield,
    },
    {
      category: "Testing",
      skills: [
        "Functional Testing",
        "Exploratory Testing",
        "Regression Testing",
        "Negative Testing",
        "UAT",
        "Cross-Browser",
      ],
      icon: TestTube2,
    },
    {
      category: "Tools",
      skills: ["Jira", "Confluence", "Asana", "Git/GitHub", "Postman"],
      icon: Cpu,
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center px-6 py-20"
    >
      <div className="relative max-w-6xl mx-auto w-full z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <SectionHeader
            text="Skills"
            gradient="from-yellow-500 to-yellow-300"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((group, idx) => (
              <SkillGroup key={idx} {...group} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionHeader = ({ text, gradient }) => (
  <div className="flex items-center gap-4 mb-12">
    <div className="w-12 h-px bg-linear-to-r from-yellow-500 to-transparent" />
    <h2 className="text-5xl font-bold">
      <span
        className={`bg-linear-to-r ${gradient} bg-clip-text text-transparent`}
      >
        {text}
      </span>
    </h2>
  </div>
);

const SkillGroup = ({ category, skills, icon: Icon }) => (
  <div className="bg-linear-to-br from-gray-900/50 to-black/50 border border-gray-800/50 rounded-2xl p-8 backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-500 group">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-yellow-500/10 rounded-lg">
        <Icon size={20} className="text-yellow-500" />
      </div>
      <h3 className="text-2xl font-bold text-white">{category}</h3>
    </div>

    <ul className="space-y-3">
      {skills.map((skill, i) => (
        <li
          key={i}
          className="text-gray-300 text-sm flex items-center gap-2 group-hover:text-gray-200 transition-colors"
        >
          <span className="w-1 h-1 bg-yellow-500 rounded-full" />
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default Skills;
