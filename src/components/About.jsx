import React from "react";
import { Phone, Mail, LocateIcon } from "lucide-react";

const About = ({ isVisible }) => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "(+233) 24 118 5635",
    },
    {
      icon: Mail,
      label: "Email",
      value: "lindaakmensah@gmail.com",
    },
    {
      icon: LocateIcon,
      label: "Location",
      value: "Accra, Ghana",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center px-6 py-20"
    >
      <div className="relative max-w-6xl mx-auto z-10">
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <SectionHeader
            text="About Me"
            gradient="from-yellow-500 to-yellow-300"
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                QA Analyst skilled in testing web and mobile applications, with
                expertise in authentication, Role-Based Access Control (RBAC),
                and data validation workflows.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                I combine software development knowledge with systematic testing
                approaches to identify defects and improve software reliability.
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
                {contactInfo.map((info) => (
                  <ContactItem key={info.label} {...info} />
                ))}
              </div>
            </div>
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

const ContactItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-4">
    <div className="p-3 bg-yellow-500/10 rounded-lg">
      <Icon size={24} className="text-yellow-500" />
    </div>
    <div>
      <p className="text-sm text-gray-400">{label}</p>
      <p className="text-lg text-white">{value}</p>
    </div>
  </div>
);

export default About;
