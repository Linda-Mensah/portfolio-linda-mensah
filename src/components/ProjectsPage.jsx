import React, { useState, useRef, useEffect } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Code,
  Globe,
  Smartphone,
  LayoutDashboard,
  Calendar,
  Users,
  Target,
  Sparkles,
  ChevronRight,
  Zap,
  Layers,
  Palette,
  Command,
  CornerUpRight,
  Maximize2,
  Filter,
  Grid,
  List,
  Eye,
  Star,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState("gallery");
  const containerRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Care Agency Management",
      description:
        "Mobile app for care agencies with scheduling, client records, and staff management.",
      role: "QA Analyst & Tester",
      context: "Company",
      type: "Mobile",
      tags: ["iOS", "Android", "RBAC", "UAT"],
      liveUrl: "https://apps.apple.com/gh/app/getcama/id6739525178",
      githubUrl: null,
      image: "/cama-thumbnail.png",
      techStack: ["React Native", "Node.js", "MongoDB", "Firebase"],
      date: "2024",
      accentColor: "#3B82F6",
      intensity: "high",
      category: "mobile",
    },
    {
      id: 2,
      title: "Oval Admissions System",
      description:
        "School admissions platform with payments, scheduling, and automated notifications.",
      role: "QA Lead & Tester",
      context: "Company",
      type: "Web App",
      tags: ["Admissions", "Payments", "Automation", "UAT"],
      liveUrl: "https://ghschools.regr.online/buy-form",
      githubUrl: null,
      image: "/oval-admissions.png",
      techStack: ["Next.js", "TypeScript", "Prisma", "Stripe", "PostgreSQL"],
      date: "2023-2024",
      accentColor: "#10B981",
      intensity: "medium",
      category: "web",
    },
    {
      id: 3,
      title: "CodeBlue Multi-Tenant Platform",
      description:
        "Emergency response platform with real-time coordination and data segregation.",
      role: "Frontend Developer & QA",
      context: "Company",
      type: "Web App",
      tags: ["Multi-Tenant", "Real-time", "RBAC", "React"],
      liveUrl: "https://codeblue-app.netlify.app",
      githubUrl: "https://github.com/Linda-Mensah",
      image: "/codeblue-thumbnail.png",
      techStack: ["React", "Socket.io", "Node.js", "PostgreSQL", "Redis"],
      date: "2024",
      accentColor: "#8B5CF6",
      intensity: "high",
      category: "web",
    },
    {
      id: 4,
      title: "Bye-Bye Store Vendor Platform",
      description:
        "E-commerce vendor platform with authentication, payments, and analytics dashboard.",
      role: "Full Stack Developer",
      context: "Personal",
      type: "Web App",
      tags: ["E-commerce", "Authentication", "Dashboard", "React"],
      liveUrl: "https://bye-bye-store.netlify.app/user-ads",
      githubUrl: "https://github.com/Linda-Mensah",
      image: "/bb-store-thumbnail.png",
      techStack: ["React", "Express.js", "MongoDB", "JWT", "Stripe"],
      date: "2023",
      accentColor: "#F59E0B",
      intensity: "medium",
      category: "web",
    },
    {
      id: 5,
      title: "Kalys House Platform",
      description:
        "Property management platform with registration, dashboard, and content management.",
      role: "Full Stack Developer",
      context: "Freelance",
      type: "Web App",
      tags: ["Property Management", "Dashboard", "Next.js", "Prisma"],
      liveUrl: "https://www.kalyshouse.live/",
      githubUrl: null,
      image: "/kalyshouse-thumbnail.png",
      techStack: ["Next.js", "TypeScript", "Prisma", "Resend", "Sanity CMS"],
      date: "2024",
      accentColor: "#EC4899",
      intensity: "low",
      category: "web",
    },
    {
      id: 6,
      title: "BallGbee Platform",
      description:
        "Event ticketing system with dashboard controls and real-time notifications.",
      role: "Frontend Developer",
      context: "Company",
      type: "Website",
      tags: ["Ticketing", "Dashboard", "Next.js", "Events"],
      liveUrl: "https://ballgbee.live/",
      githubUrl: null,
      image: "/ballgbee-thumbnail.png",
      techStack: ["Next.js", "Tailwind CSS", "Firebase", "Stripe"],
      date: "2023-2024",
      accentColor: "#06B6D4",
      intensity: "medium",
      category: "web",
    },
    {
      id: 7,
      title: "Livewell Website",
      description:
        "Festival website with responsive design and integrated Sanity CMS.",
      role: "Frontend Developer",
      context: "Freelance",
      type: "Website",
      tags: ["Festival", "CMS", "Responsive", "Next.js"],
      liveUrl: "livewellfestival.life",
      githubUrl: null,
      image: "/livewell-thumbnail.png",
      techStack: ["Next.js", "Sanity CMS", "TypeScript", "Tailwind CSS"],
      date: "2024",
      accentColor: "#84CC16",
      intensity: "low",
      category: "web",
    },
    {
      id: 8,
      title: "Peeva Invitational",
      description:
        "Sports tournament website with real-time updates and participant registration.",
      role: "Frontend Developer & QA",
      context: "Freelance",
      type: "Website",
      tags: ["Sports", "Tournament", "CMS", "UI Development"],
      liveUrl: "https://peeva-invitational.pages.dev",
      githubUrl: null,
      image: "/peeva-thumbnail.png",
      techStack: ["Next.js", "Sanity CMS", "JavaScript", "CSS3"],
      date: "2024",
      accentColor: "#EF4444",
      intensity: "medium",
      category: "web",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (p) =>
            p.category === activeFilter ||
            p.context.toLowerCase() === activeFilter
        );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24px,theme(colors.gray.900/10)_25px,transparent_26px)] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-yellow-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="group flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500/20 to-transparent rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-2 rounded-lg bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20">
                  <ArrowLeft className="w-5 h-5 text-yellow-500" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  Back to
                </span>
                <span className="text-yellow-500 font-bold">Portfolio</span>
              </div>
            </Link>

            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-4">
                <button
                  onClick={() => setViewMode("gallery")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "gallery"
                      ? "bg-yellow-500/20 border-yellow-500/30"
                      : "border-gray-800/50"
                  } border`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "list"
                      ? "bg-yellow-500/20 border-yellow-500/30"
                      : "border-gray-800/50"
                  } border`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
                <span className="text-lg font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
                  {projects.length}
                </span>
                <span className="text-sm text-gray-400">Projects</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {/* <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20">
              <Zap className="w-4 h-4 text-yellow-500 animate-bounce" />
              <span className="text-sm text-yellow-500 font-medium">
                Interactive Portfolio
              </span>
            </div> */}

            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-yellow-500 via-yellow-300 to-amber-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                PROJECTS
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              An{" "}
              <span className="text-yellow-500 font-semibold">
                interactive journey
              </span>{" "}
              through my work. Each project tells a unique story of{" "}
              <span className="text-yellow-500 font-semibold">innovation</span>{" "}
              and{" "}
              <span className="text-yellow-500 font-semibold">expertise</span>.
            </p>

            {/* Interactive filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <FilterButton
                label="All Projects"
                active={activeFilter === "all"}
                onClick={() => setActiveFilter("all")}
                icon={<Layers className="w-4 h-4" />}
              />
              <FilterButton
                label="Web Apps"
                active={activeFilter === "web"}
                onClick={() => setActiveFilter("web")}
                icon={<LayoutDashboard className="w-4 h-4" />}
              />
              <FilterButton
                label="Mobile"
                active={activeFilter === "mobile"}
                onClick={() => setActiveFilter("mobile")}
                icon={<Smartphone className="w-4 h-4" />}
              />
              <FilterButton
                label="Company"
                active={activeFilter === "company"}
                onClick={() => setActiveFilter("company")}
                icon={<Command className="w-4 h-4" />}
              />
              <FilterButton
                label="Freelance"
                active={activeFilter === "freelance"}
                onClick={() => setActiveFilter("freelance")}
                icon={<Palette className="w-4 h-4" />}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <StatCard
              icon={<Code className="w-6 h-6" />}
              value="8"
              label="Total Projects"
              color="text-yellow-500"
            />
            <StatCard
              icon={<Users className="w-6 h-6" />}
              value="4"
              label="Different Roles"
              color="text-blue-500"
            />
            <StatCard
              icon={<Target className="w-6 h-6" />}
              value="15+"
              label="Technologies"
              color="text-green-500"
            />
            <StatCard
              icon={<Calendar className="w-6 h-6" />}
              value="2022-2024"
              label="Timeline"
              color="text-purple-500"
            />
          </div>
        </div>
      </div>

      {/* Interactive Gallery */}
      <div className="relative pb-32" ref={containerRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === "gallery" ? (
            <div className="relative">
              {/* Connection lines */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent hidden lg:block" />

              {/* Projects arranged in a creative staggered layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`relative ${
                      index % 3 === 0
                        ? "lg:mt-12"
                        : index % 3 === 2
                        ? "lg:-mt-12"
                        : ""
                    }`}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <CreativeProjectCard
                      project={project}
                      isHovered={hoveredProject === project.id}
                      index={index}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // List View (alternative)
            <div className="space-y-6">
              {filteredProjects.map((project) => (
                <ProjectRow key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-yellow-500/10 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Linda Akmensah • Crafted with
            precision
          </p>
        </div>
      </footer>
    </div>
  );
};

const FilterButton = ({ label, active, onClick, icon }) => (
  <button
    onClick={onClick}
    className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-300 ${
      active
        ? "bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 border-yellow-500/30 text-yellow-500"
        : "border-gray-800/50 text-gray-400 hover:border-yellow-500/30 hover:text-yellow-500"
    }`}
  >
    {icon}
    <span className="text-sm font-medium">{label}</span>
    {active && <Sparkles className="w-3 h-3" />}
  </button>
);

const StatCard = ({ icon, value, label, color }) => (
  <div className="relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900/30 to-black/20 border border-gray-800/30 backdrop-blur-sm">
      <div className={`${color} mb-3`}>{icon}</div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  </div>
);

const CreativeProjectCard = ({ project, isHovered, index }) => {
  return (
    <div className="relative h-full">
      {/* Animated glow effect */}
      <div
        className="absolute -inset-4 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"
        style={{ backgroundColor: `${project.accentColor}20` }}
      />

      {/* Connection dot */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-yellow-500 to-amber-500 hidden lg:block" />

      {/* Main card */}
      <div
        className={`relative bg-gradient-to-br from-gray-900/40 to-black/40 border border-gray-800/30 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 ${
          isHovered
            ? "scale-105 border-yellow-500/40 shadow-2xl shadow-yellow-500/10"
            : "scale-100"
        }`}
      >
        {/* Project image with creative overlay */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
          {/* Creative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/60" />

          {/* Floating badges */}
          <div className="absolute top-4 left-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-xs text-white border border-white/20">
                {project.date}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 text-yellow-500 text-xs font-medium border border-yellow-500/20">
                {project.type}
              </span>
            </div>
          </div>

          {/* Hover expand button */}
          <div
            className={`absolute top-4 right-4 transform transition-all duration-500 ${
              isHovered ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          >
            <button className="p-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-colors">
              <Eye className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Content with creative layout */}
        <div className="p-6">
          {/* Title with accent line */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">
              {project.title}
            </h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full mb-3" />
          </div>

          {/* Role and context in creative layout */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500" />
              <span className="text-sm font-medium text-yellow-500">
                {project.role}
              </span>
            </div>
            <span className="text-sm text-gray-400 px-3 py-1 rounded-full border border-gray-800/50">
              {project.context}
            </span>
          </div>

          {/* Description with fade effect */}
          <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Tech stack as color-coded dots */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 4).map((tech, idx) => (
                <div key={idx} className="relative group/tech">
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-lg blur opacity-0 group-hover/tech:opacity-100" />
                  <span className="relative px-3 py-1.5 rounded-lg bg-gradient-to-br from-gray-900/50 to-black/50 text-gray-300 text-xs font-medium border border-gray-800/50 group-hover/tech:border-yellow-500/30 transition-colors">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action buttons with creative layout */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-800/30">
            <div className="flex items-center gap-2">
              {project.tags.slice(0, 2).map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 rounded-md bg-gray-900/30 text-gray-300 text-xs border border-gray-700/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4 text-gray-400 hover:text-yellow-500 transition-colors" />
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={
                    project.liveUrl.startsWith("http")
                      ? project.liveUrl
                      : `https://${project.liveUrl}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 text-yellow-500 hover:bg-yellow-500/10 hover:border-yellow-500/30 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 group/btn"
                >
                  <span className="text-sm font-medium">Explore</span>
                  <CornerUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectRow = ({ project }) => {
  return (
    <div className="group relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative bg-gradient-to-br from-gray-900/30 to-black/20 border border-gray-800/30 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-yellow-500/30">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 w-32 h-32 rounded-xl overflow-hidden border border-gray-800/50">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-500 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-yellow-500 font-medium">
                    {project.role}
                  </span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-400">{project.type}</span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-400">{project.date}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-gray-800 hover:border-yellow-500/50 transition-colors"
                  >
                    <Github className="w-4 h-4 text-gray-400 hover:text-yellow-500" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-2 rounded-lg bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 text-yellow-500 hover:bg-yellow-500/10 transition-colors text-sm font-medium"
                  >
                    <span>Visit</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-gray-400 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-gray-900/30 text-gray-300 text-xs border border-gray-700/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
