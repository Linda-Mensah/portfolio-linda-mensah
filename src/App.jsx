import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Code,
  TestTube2,
  Shield,
  Cpu,
  ClipboardCheck,
  ShoppingCart,
  LayoutDashboard,
  Ticket,
  Globe,
  Trophy,
  Activity,
  LocateIcon,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

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
      { threshold: 0.2 }
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

  const menuItems = [
    "home",
    "about",
    "experience",
    "projects",
    "skills",
    "contact",
  ];

  return (
    <div className="relative bg-black text-white min-h-screen font-sans overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-black to-gray-900" />
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-10 animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(234,179,8,0.3) 0%, rgba(0,0,0,0) 70%)",
            left: `${cursorPosition.x / 20}px`,
            top: `${cursorPosition.y / 20}px`,
          }}
        />
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(234,179,8,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(234,179,8,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Custom Cursor Effect */}
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

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xl border-b border-gray-800/50" />
        <div className="relative max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#home"
            className="relative group"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            <div className="absolute -inset-2 bg-linear-to-r from-yellow-500/20 to-transparent rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative text-3xl font-bold bg-linear-to-r from-yellow-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              L.M
            </span>
          </a>

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
                  <div className="absolute inset-0 bg-linear-to-r from-yellow-500/10 to-transparent rounded-lg" />
                )}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/4 h-px bg-linear-to-r from-transparent via-yellow-500 to-transparent transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="relative md:hidden z-50 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="absolute -ins-2 bg-yellow-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <div
            className={`transition-all duration-1000 ${
              isVisible.home
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 rounded-full px-4 py-2 mb-8 animate-pulse">
              <Sparkles size={16} className="text-yellow-500" />
              <span className="text-sm text-yellow-500 font-medium">
                Frontend Developer & QA Analyst
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-linear-to-r from-yellow-500 via-yellow-300 to-yellow-500 bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient">
                Linda A.K. Mensah
              </span>
            </h1>

            <p className="text-2xl md:text-4xl text-gray-300 mb-6">
              Building <span className="text-yellow-500">reliable</span>,{" "}
              <span className="text-yellow-500">user-focused</span> web
              experiences
            </p>

            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Combining modern frontend development with meticulous quality
              assurance to deliver exceptional digital products
            </p>

            {/* Social Links with Hover Effects */}
            <div className="flex gap-6 justify-center mb-12">
              {[
                {
                  icon: Github,
                  href: "https://github.com/Linda-Mensah",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/lindamensah/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:lindaakmensah@gmail.com",
                  label: "Email",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3"
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-yellow-500/0 via-yellow-500/5 to-yellow-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <social.icon
                    size={28}
                    className="relative text-gray-400 group-hover:text-yellow-500 transition-all duration-300 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>

            {/* Scroll Indicator */}
            <button
              onClick={() => scrollToSection("about")}
              className="group animate-bounce mt-8"
              aria-label="Scroll to next section"
            >
              <div className="relative p-2">
                <div className="absolute inset-0 rounded-full border border-yellow-500/30 group-hover:border-yellow-500 transition-colors" />
                <ChevronDown
                  size={32}
                  className="relative text-yellow-500 group-hover:text-yellow-400 transition-colors"
                />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative min-h-screen flex items-center px-6 py-20"
      >
        <div className="relative max-w-6xl mx-auto z-10">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible.about
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-px bg-linear-to-r from-yellow-500 to-transparent" />
              <h2 className="text-5xl font-bold">
                <span className="bg-linear-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  QA Analyst skilled in testing web and mobile applications,
                  with expertise in authentication, Role-Based Access Control
                  (RBAC), and data validation workflows.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  I combine software development knowledge with systematic
                  testing approaches to identify defects and improve software
                  reliability.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Currently contributing to development and testing at Utopia
                  Technologies, where I build responsive interfaces and validate
                  complex workflows including registration, login, session
                  management, and role-based access controls.
                </p>
              </div>

              <div className="bg-linear-to-br from-gray-900/50 to-black/50 border border-gray-800/50 rounded-2xl p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-yellow-500/10 rounded-lg">
                      <Phone size={24} className="text-yellow-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-lg text-white">(+233) 24 118 5635</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-yellow-500/10 rounded-lg">
                      <Mail size={24} className="text-yellow-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-lg text-white">
                        lindaakmensah@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-yellow-500/10 rounded-lg">
                      <span className="text-2xl text-yellow-500">
                        <LocateIcon />
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-lg text-white">Accra, Ghana</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="relative min-h-screen flex items-center px-6 py-20"
      >
        <div className="relative max-w-6xl mx-auto w-full z-10">
          <div
            className={`transition-all duration-1000 ${
              isVisible.experience
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-px bg-linear-to-r from-yellow-500 to-transparent" />
              <h2 className="text-5xl font-bold">
                <span className="bg-linear-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
                  Experience
                </span>
              </h2>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-linear-to-b from-yellow-500 via-yellow-500/30 to-transparent md:block hidden" />

              <div className="space-y-12">
                {[
                  {
                    title: "Junior Software Developer / QA Contributor",
                    company: "Utopia Technologies",
                    location: "Accra, Ghana",
                    period: "09/2025 - Present",
                    duties: [
                      "Contribute to development and testing of web interfaces",
                      "Validate registration, login, and role-based access workflows",
                      "Test backend-driven features via UI including data handling",
                      "Report and track defects with developers for efficient bug fixes",
                    ],
                    icon: Code,
                  },
                  {
                    title: "Project Coordinator",
                    company: "Moko Afrika",
                    location: "DR Congo (Remote)",
                    period: "08/2024 - 08/2025",
                    duties: [
                      "Managed Jira and Confluence workflows for operational systems.",
                      "Implemented structured workflows, approvals, and automated notifications.",
                      "Supported quality assurance through clear documentation and acceptance criteria.",
                    ],
                    icon: Cpu,
                  },
                  {
                    title: "QA Lead & Project Manager",
                    company: "Gazelle Web-Tech",
                    location: "UK - Remote",
                    period: "09/2022 - 06/2024",
                    duties: [
                      "Led manual QA and UAT for cross-platform applications",
                      "Tested authentication and secure data handling workflows",
                      "Logged and tracked defects in Jira",
                      "Facilitated stakeholder UAT sessions",
                    ],
                    icon: Shield,
                  },
                ].map((job, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-8 transform -translate-x-1/2 w-4 h-4 rounded-full bg-yellow-500 border-4 border-black z-10 md:block hidden" />

                    <div className="ml-0 md:ml-16">
                      <div className="bg-linear-to-br from-gray-900/50 to-black/50 border border-gray-800/50 rounded-2xl p-8 backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-500 hover:scale-[1.02]">
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 bg-yellow-500/10 rounded-lg">
                              <job.icon size={24} className="text-yellow-500" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-2">
                                {job.title}
                              </h3>
                              <p className="text-yellow-500 font-semibold text-lg">
                                {job.company}
                              </p>
                            </div>
                          </div>
                          <div className="lg:text-right">
                            <p className="text-gray-400">{job.location}</p>
                            {/* <p className="text-yellow-500/80 font-medium">
                              {job.period}
                            </p> */}
                          </div>
                        </div>

                        <ul className="space-y-3">
                          {job.duties.map((duty, i) => (
                            <li
                              key={i}
                              className="text-gray-300 flex gap-3 items-start"
                            >
                              <span className="text-yellow-500 mt-1.5">↳</span>
                              <span>{duty}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative min-h-screen flex items-center px-6 py-20"
      >
        <div className="relative max-w-6xl mx-auto w-full z-10">
          <div
            className={`transition-all duration-1000 ${
              isVisible.projects
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-px bg-linear-to-r from-yellow-500 to-transparent" />
              <h2 className="text-5xl font-bold">
                <span className="bg-linear-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Care Agency Management",
                  description:
                    "Conducted UAT for scheduling, client records, and staff management modules. Tested role-based permissions and data privacy compliance.",
                  tech: ["UAT", "RBAC", "Data Privacy", "iOS/Android"],
                  links: {
                    demo: "https://apps.apple.com/gh/app/getcama/id6739525178",
                  },
                  icon: TestTube2,
                },
                {
                  title: "Oval Admissions System",
                  description:
                    "Performed QA and UAT for an end-to-end school admissions platform, testing payment flows, form submission, interview scheduling, admission and rejection workflows, and automated notifications.",
                  tech: [
                    "QA Testing",
                    "UAT",
                    "Functional Testing",
                    "RBAC",
                    "Payments",
                    "Notifications",
                  ],
                  links: {
                    demo: "https://ghschools.regr.online/buy-form",
                  },
                  icon: Activity,
                },

                {
                  title: "CodeBlue Multi-Tenant Platform",
                  description:
                    "Contributed to building and verifying data segregation, session persistence, and role-based access controls with real-time updates.",
                  tech: ["React", "Multi-Tenant", "Real-time", "RBAC"],
                  links: {
                    demo: "https://codeblue-app.netlify.app",
                  },
                  icon: Shield,
                },
                {
                  title: "Bye-Bye Store Vendor Platform",
                  description:
                    "Developed and validated authentication, CRUD operations, error handling, and conducted exploratory testing for usability.",
                  tech: ["React", "REST APIs", "Authentication", "E-commerce"],
                  links: {
                    demo: "https://bye-bye-store.netlify.app/user-ads",
                  },
                  icon: ShoppingCart,
                },
                {
                  title: "Kalys House Platform",
                  description:
                    "Built registration flow with Prisma database integration, email service (Resend), and admin dashboard with user management and filtering capabilities",
                  tech: [
                    "Nextjs",
                    "Prisma",
                    "Typescript",
                    "Resend",
                    "Sanity CMS",
                  ],
                  links: {
                    demo: "https://www.kalyshouse.live/",
                  },
                  icon: LayoutDashboard,
                },

                {
                  title: "BallGbee Platform",
                  description:
                    "Built ticketing system and dashboard and contributed key sections, dashboard controls, notifications, and cross-browser functionality.",
                  tech: ["Next.js", "Dashboard", "Ticketing", "Testing"],
                  links: {
                    demo: "https://ballgbee.live/",
                  },
                  icon: Ticket,
                },
                {
                  title: "Livewell Website",
                  description:
                    "Developed responsive platofrm with Next.js, integrated Sanity CMS for content management, and implemented dynamic data fetching.",
                  tech: [
                    "Next.js",
                    "Sanity CMS",
                    "TypeScript",
                    "Responsive Design",
                  ],
                  links: {
                    demo: "livewellfestival.life",
                  },
                  icon: Globe,
                },
                {
                  title: "Peeva Invitational",
                  description:
                    "Built core UI components and integrated Sanity CMS. Tested responsive sections, validating real-time data accuracy, cross-browser behavior, and UI consistency.",
                  tech: [
                    "Next.js",
                    "Sanity CMS",
                    "UI Development",
                    "Responsive",
                  ],
                  links: {
                    demo: "https://peeva-invitational.pages.dev",
                  },
                  icon: Trophy,
                },
              ].map((project, idx) => (
                <ProjectCard key={idx} {...project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative min-h-screen flex items-center px-6 py-20"
      >
        <div className="relative max-w-6xl mx-auto w-full z-10">
          <div
            className={`transition-all duration-1000 ${
              isVisible.skills
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-px bg-linear-to-r from-yellow-500 to-transparent" />
              <h2 className="text-5xl font-bold">
                <span className="bg-linear-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
                  Skills
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
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
                  category: "Tools",
                  skills: [
                    "Jira",
                    "Confluence",
                    "Asana",
                    "Git/GitHub",
                    "Postman",
                  ],
                  icon: Cpu,
                },
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
              ].map((group, idx) => (
                <div
                  key={idx}
                  className="bg-linear-to-br from-gray-900/50 to-black/50 border border-gray-800/50 rounded-2xl p-8 backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-500 group"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-yellow-500/10 rounded-lg">
                      <group.icon size={20} className="text-yellow-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {group.category}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {group.skills.map((skill, i) => (
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative min-h-screen flex items-center px-6 py-20"
      >
        <div className="relative max-w-4xl mx-auto w-full text-center z-10">
          <div
            className={`transition-all duration-1000 ${
              isVisible.contact
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col items-center gap-4 mb-12">
              <div className="w-12 h-px bg-linear-to-r from-yellow-500 to-transparent" />
              <h2 className="text-5xl font-bold">
                <span className="bg-linear-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
                  Let's Connect
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl">
                Open to new opportunities and collaborations. Reach out to
                discuss how we can work together!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a
                href="mailto:lindaakmensah@gmail.com"
                className="group relative px-8 py-4 rounded-xl overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-linear-to-r from-yellow-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-linear-to-r from-yellow-500/20 to-yellow-400/20" />
                <span className="relative font-semibold text-white group-hover:text-black transition-colors duration-300">
                  Send Email
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/lindamensah/"
                target="_blank"
                className="group relative px-8 py-4 rounded-xl border border-yellow-500/30 hover:border-yellow-500 transition-colors duration-300 w-full sm:w-auto"
              >
                <span className="text-yellow-500 group-hover:text-white transition-colors duration-300 font-semibold">
                  Connect with Me
                </span>
              </a>
            </div>

            <div className="flex gap-8 justify-center">
              {[
                {
                  icon: Github,
                  href: "https://github.com/Linda-Mensah",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/lindamensah/",
                  label: "LinkedIn",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-lg border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon
                    size={28}
                    className="text-gray-400 group-hover:text-yellow-500 transition-colors duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-800/50 py-8 px-6 text-center z-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-400">
            &copy; 2026 Linda Akmensah. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

const ProjectCard = ({ title, description, tech, links, icon: Icon }) => {
  return (
    <div className="group relative h-full">
      <div className="absolute inset-0 bg-linear-to-br from-yellow-500/10 via-transparent to-yellow-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-linear-to-br from-gray-900/50 to-black/50 border border-gray-800/50 rounded-2xl p-8 backdrop-blur-sm h-full transition-all duration-500 group-hover:border-yellow-500/50 group-hover:scale-[1.02]">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-yellow-500/10 rounded-lg">
              <Icon size={24} className="text-yellow-500" />
            </div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-gray-800 hover:border-yellow-500/50 transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink
                size={20}
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              />
            </a>
          )}
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1.5 rounded-full bg-linear-to-r from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 text-yellow-500 text-sm font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

// Don't forget to add the style tag in your main HTML or CSS file:
// <style>{styles}</style>
