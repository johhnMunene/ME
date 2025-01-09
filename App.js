import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-[#0f111a] text-[#cdd3de] font-mono">
      <Header />
      <Hero />
      <Section id="about" title="About Me" content={aboutContent} />
      <Section id="skills" title="Skills" content={skillsContent} />
      <Section id="projects" title="Projects" content={projectsContent} />
      <Section id="contact" title="Contact Me" content={contactContent} />
      <Footer />
    </div>
  );
};

const aboutContent = (
  <p>
    I am a cybersecurity specialist with a strong background in software engineering. I focus on ensuring systems are secure, reliable, and scalable by leveraging my expertise in penetration testing, secure coding practices, and network security design.
  </p>
);

const skillsContent = (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Skill title="Cybersecurity" skills={['Penetration Testing', 'Vulnerability Assessment', 'Threat Hunting', 'Tools: Metasploit, Nmap, Wireshark']} />
    <Skill title="Software Engineering" skills={['Python, JavaScript, React', 'FastAPI, Node.js', 'PostgreSQL, MongoDB', 'CI/CD Pipelines']} />
    <Skill title="Networking" skills={['VLANs, ACLs, IDS/IPS', 'Cisco Packet Tracer', 'pfSense Firewall']} />
  </div>
);

const Skill = ({ title, skills }) => (
  <div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <ul className="mt-4 list-disc ml-4">
      {skills.map((skill, idx) => (
        <li key={idx}>{skill}</li>
      ))}
    </ul>
  </div>
);

const projectsContent = (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        title: 'Vulnerability Assessment',
        description: 'Conducted security assessments using Nmap, Metasploit, and Wireshark, identifying and mitigating critical vulnerabilities.',
      },
      {
        title: 'Secure Network Design',
        description: 'Designed a secure network topology with VLANs, ACLs, and IDS/IPS for improved efficiency and reduced attack surface.',
      },
      {
        title: 'FastAPI Web Application',
        description: 'Built a FastAPI web app with secure authentication, role-based access control, and hardened against OWASP vulnerabilities.',
      },
    ].map((project, idx) => (
      <div key={idx}>
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-4">{project.description}</p>
      </div>
    ))}
  </div>
);

const contactContent = (
  <div className="text-center">
    <p>Have a project in mind or want to collaborate? Let’s connect!</p>
    <a
      href="mailto:your.edwardsjohnny64@gmail.com"
      className="mt-6 inline-block px-6 py-3 rounded border-2 border-blue-500 hover:bg-blue-500 hover:text-black"
    >
      Email Me
    </a>
  </div>
);

export default App;

