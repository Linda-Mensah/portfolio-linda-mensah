import React from "react";
import { Github, Linkedin } from "lucide-react";

const Contact = ({ isVisible }) => {
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
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center px-6 py-20"
    >
      <div className="relative max-w-4xl mx-auto w-full text-center z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
              Open to new opportunities and collaborations. Reach out to discuss
              how we can work together!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <EmailButton />
            <LinkedInButton />
          </div>

          <div className="flex gap-8 justify-center">
            {socialLinks.map((social) => (
              <SocialIcon key={social.label} {...social} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const EmailButton = () => (
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
);

const LinkedInButton = () => (
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
);

const SocialIcon = ({ icon: Icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group p-4 rounded-lg border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 hover:scale-110"
    aria-label={label}
  >
    <Icon
      size={28}
      className="text-gray-400 group-hover:text-yellow-500 transition-colors duration-300"
    />
  </a>
);

export default Contact;
