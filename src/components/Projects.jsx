import React from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  ShoppingCart,
  LayoutDashboard,
  Ticket,
  ArrowRight,
} from "lucide-react";
import ProjectCard from "./ProjectCard";

const Projects = ({ isVisible }) => {
  const projects = [
    {
      title: "CodeBlue Multi-Tenant Platform",
      description:
        "Contributed to building and verifying data segregation, session persistence, and role-based access controls with real-time updates.",
      tech: ["React", "Multi-Tenant", "Real-time", "RBAC"],
      links: { demo: "https://codeblue-app.netlify.app" },
      icon: Shield,
    },
    {
      title: "Bye-Bye Store Vendor Platform",
      description:
        "Developed and validated authentication, CRUD operations, error handling, and conducted exploratory testing for usability.",
      tech: ["React", "REST APIs", "Authentication", "E-commerce"],
      links: { demo: "https://bye-bye-store.netlify.app/user-ads" },
      icon: ShoppingCart,
    },
    {
      title: "Kalys House Platform",
      description:
        "Built registration flow with Prisma database integration, email service (Resend), and admin dashboard with user management and filtering capabilities",
      tech: ["Nextjs", "Prisma", "Typescript", "Resend", "Sanity CMS"],
      links: { demo: "https://www.kalyshouse.live/" },
      icon: LayoutDashboard,
    },
    {
      title: "BallGbee Platform",
      description:
        "Built ticketing system and dashboard and contributed key sections, dashboard controls, notifications, and cross-browser functionality.",
      tech: ["Next.js", "Dashboard", "Ticketing", "Testing"],
      links: { demo: "https://ballgbee.live/" },
      icon: Ticket,
    },
  ];

  return (
    <section
      id="projects"
      className="relative px-4 sm:px-6 py-12 sm:py-16 md:py-20"
      style={{ minHeight: "100vh" }}
    >
      <div className="relative max-w-6xl mx-auto w-full z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <SectionHeader
            text="Featured Projects"
            gradient="from-yellow-500 to-yellow-300"
          />

          <p className="text-lg text-gray-400 mb-8 text-center max-w-2xl mx-auto">
            A selection of my recent work. View all projects for more details.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>

          {/* See More Button */}
          <div className="text-center">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 hover:border-yellow-500/40 hover:from-yellow-500/20 hover:to-yellow-500/10 transition-all duration-300"
            >
              <span className="text-yellow-500 font-semibold text-lg">
                View All Projects
              </span>
              <ArrowRight className="w-5 h-5 text-yellow-500 transform group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionHeader = ({ text, gradient }) => (
  <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center">
    <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-yellow-500 to-transparent" />
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
      <span
        className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
      >
        {text}
      </span>
    </h2>
    <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-yellow-500" />
  </div>
);

export default Projects;
