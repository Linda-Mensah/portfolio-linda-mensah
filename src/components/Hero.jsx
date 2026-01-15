import React from "react";
import { Github, Linkedin, Mail, ChevronDown, Sparkles } from "lucide-react";

const Hero = ({ isVisible, scrollToSection }) => {
  const socialLinks = [
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
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/hero-background-img.jpg')" }}
      />
      <div className="absolute inset-0 z-0 bg-linear-to-b from-black/30 via-black/70 to-black/90" />

      <div className="relative max-w-6xl mx-auto text-center z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-linear-to-r mt-3 from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 rounded-full px-4 py-4 mb-8 animate-pulse">
            <Sparkles size={16} className="text-yellow-500" />
            <span className="text-sm text-yellow-500 font-medium">
              Frontend Developer & QA Analyst
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-white bg-size-[200%_auto] animate-gradient">
              Linda A.K. Mensah
            </span>
          </h1>

          <p className="text-2xl md:text-4xl text-gray-300 mb-6">
            Building <span className="text-yellow-500">reliable</span>,{" "}
            <span className="text-yellow-500">user-focused</span> web
            experiences
          </p>

          {/* Social Links */}
          <div className="flex flex-col">
            <div>
              <div className="flex gap-6 justify-center mb-4">
                {socialLinks.map((social) => (
                  <SocialLink key={social.label} {...social} />
                ))}
              </div>

              <div>
                <a
                  href="https://www.linkedin.com/in/lindamensah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 rounded-xl border border-yellow-500/30 hover:border-yellow-500 transition-colors duration-300 w-full sm:w-auto"
                >
                  <span className="text-yellow-500 group-hover:text-white transition-colors duration-300 font-semibold">
                    Connect with Me
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection("about")}
            className="group animate-bounce mt-12"
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
  );
};

const SocialLink = ({ icon: Icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-3"
    aria-label={label}
  >
    <div className="absolute inset-0 bg-linear-to-br from-yellow-500/0 via-yellow-500/5 to-yellow-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <Icon
      size={28}
      className="relative text-gray-400 group-hover:text-yellow-500 transition-all duration-300 group-hover:scale-110"
    />
  </a>
);

export default Hero;
