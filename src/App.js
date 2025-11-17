import React, { useState } from 'react';
import { Github, Linkedin, Mail, Code, BookOpen, Briefcase, User, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      window.location.href = `mailto:mm_lazib@esi.dz?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    }
  };

  const projects = [
  {
    title: "1. Quiz & Logic Game (2023 – First Year)",
    description: "A web-based quiz and logic game developed as a team of four, focusing on interactive gameplay and problem-solving.",
    tech: ["HTML", "CSS", "JavaScript", "Web", "Logic", "Collaboration"],
    link: "https://angeallain.github.io/our-site"
  },
  {
    title: "2. Sports Club Management Application (2024 – Second Year)",
    description: "A Java desktop application to manage members, events, and reporting for a sports club.",
    tech: ["Java", "OOP", "Desktop", "Teamwork"],
    link: "https://github.com/Angeallain/2CP-Projet-Pluridisciplinaire"
  },
  {
    title: "3. Orthophonist Practice Management (2024 – Second Year)",
    description: "A Java desktop app for managing patient records, appointments, and sessions in an orthophonist practice.",
    tech: ["Java", "GUI", "Data", "Organization"],
    link: "https://github.com/Angeallain/Orthophonist_Practice_Management"
  },
  {
    title: "4. Malak_Bookstore Web Application (2025 – Third Year)",
    description: "An e-commerce web app for browsing and purchasing books, with an admin interface for managing products and orders.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Fullstack", "E-commerce"],
    link: "https://github.com/Angeallain/my_bookstore"
  },
  {
    title: "5. AI Chatbot Project (2025 – Fourth Year)",
    description: "A conversational AI chatbot built following a FreeCodeCamp tutorial, integrating modern AI tools and vector search.",
    tech: ["Node.js", "React.js", "MongoDB", "Gemini", "AI", "Frontend", "Backend", "Database"],
    link: "https://github.com/Angeallain/AI-Chatbot-Project"
  },
  {
    title: "6. ECSEL Expo Hackathon – Smart Recommendation System (2025)",
    description: "Third-place winner at the Hackathon. Built a recommendation system to predict users’ next purchases, with an interactive web interface and AI chatbot.",
    tech: ["Python", "FastAPI", "Tailwind", "Figma", "AI", "Backend", "Frontend", "Data"],
    link: "https://github.com/Angeallain/ECSEL-Expo-Hackathon-Smart-Recommendation-System-2025-"
  }
];


  const skills = [
    { name: "Html/CSS", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "SQL", level: 75 },
    { name: "UI/UX", level: 70 },
    { name: "Java", level: 65 },
    { name: "Php", level: 65 },
    { name: "Python", level: 60 },
    { name: "React", level: 50 },
    { name: "Node.js", level: 50 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4D067B] via-[#7209B7] to-[#B984DB]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#4D067B]/90 backdrop-blur-sm z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#E2BD6B]">Portfolio</h1>
          <div className="flex gap-6">
            <a href="#about" className="text-[#F8E2D4] hover:text-[#E2BD6B] transition">About</a>
            <a href="#education" className="text-[#F8E2D4] hover:text-[#E2BD6B] transition">Education</a>
            <a href="#projects" className="text-[#F8E2D4] hover:text-[#E2BD6B] transition">Projects</a>
            <a href="#experience" className="text-[#F8E2D4] hover:text-[#E2BD6B] transition">Experience</a>
            <a href="#contact" className="text-[#F8E2D4] hover:text-[#E2BD6B] transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
      
      {/* Avatar */}
      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#7209B7] to-[#E2BD6B] flex items-center justify-center text-5xl md:text-6xl font-bold text-white shadow-xl mb-6 md:mb-0">
        LM
      </div>
      
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4D067B] mb-2">Lazib Malak</h2>
        <p className="text-xl md:text-2xl text-[#E2BD6B] font-semibold mb-4">Software Engineering Student</p>
        <p className="text-gray-600 text-base md:text-lg mb-6">
          Passionate about building innovative solutions and learning new technologies. 
          Currently pursuing my degree in Software Engineering with a focus on full-stack development & AI learning.
        </p>
        <div className="flex justify-center md:justify-start gap-4 flex-wrap">
          <a href="https://github.com/Angeallain" target="_blank" rel="noopener noreferrer" 
             className="bg-[#4D067B] text-white px-6 py-3 rounded-full hover:bg-[#7209B7] transition flex items-center gap-2 shadow-lg">
            <Github size={20} /> GitHub
          </a>
          <a href="https://linkedin.com/in/lazib-malak" target="_blank" rel="noopener noreferrer"
             className="bg-[#E2BD6B] text-[#4D067B] px-6 py-3 rounded-full hover:bg-[#F8E2D4] transition flex items-center gap-2 shadow-lg">
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12">
            <div className="flex items-center gap-3 mb-8">
              <User className="text-[#7209B7]" size={32} />
              <h2 className="text-4xl font-bold text-[#4D067B]">About Me</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  I'm a dedicated software engineering student with a passion for creating elegant solutions 
                  to complex problems. My journey in tech started with curiosity and has evolved into a 
                  commitment to continuous learning and innovation.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  I specialize in full-stack development, with experience in modern web technologies 
                  and software architecture. I'm always eager to take on new challenges 
                  and collaborate on exciting projects.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4D067B] mb-4">Skills</h3>
                {skills.map((skill, idx) => (
                  <div key={idx} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-[#7209B7] font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-[#7209B7] to-[#E2BD6B] h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="text-[#7209B7]" size={32} />
              <h2 className="text-4xl font-bold text-[#4D067B]">Education</h2>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-[#E2BD6B] pl-6 py-4">
                <h3 className="text-2xl font-bold text-[#4D067B]">Software Engineer</h3>
                <p className="text-[#7209B7] font-semibold text-lg">USTHB</p>
                <p className="text-gray-600">2024 - 2027 (Expected)</p>
                <p className="text-gray-700 mt-2">
                  Relevant coursework: Data Structures, Algorithms, Database Systems, Web Development, 
                  Software Architecture, Networks.
                </p>
              </div>
              <div className="border-l-4 border-[#E2BD6B] pl-6 py-4">
                <h3 className="text-2xl font-bold text-[#4D067B]">Preparatory classes in Computer Science</h3>
                <p className="text-[#7209B7] font-semibold text-lg">ESI - Algiers</p>
                <p className="text-gray-600">2022 - 2024</p>
                <p className="text-gray-700 mt-2">
                  Relevant coursework: Data Structures, Algorithms,Mathematics, Web Development, 
                  Software Architecture.
                </p>
              </div>
              <div className="border-l-4 border-[#E2BD6B] pl-6 py-4">
                <h3 className="text-2xl font-bold text-[#4D067B]">Baccalaureate Degree</h3>
                <p className="text-[#7209B7] font-semibold text-lg">Mohammed Lamine Debaghine High School - Algiers</p>
                <p className="text-gray-600">2019 - 2022</p>
                <p className="text-gray-700 mt-2">
                  Mathematics, Grade: 17,53/20
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Code className="text-white" size={32} />
            <h2 className="text-4xl font-bold text-white">Projects</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:transform hover:scale-105 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7209B7] to-[#E2BD6B] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Code className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#4D067B] mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-[#B984DB]/20 text-[#4D067B] px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-[#7209B7] font-semibold hover:text-[#E2BD6B] transition flex items-center gap-2">
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-[#7209B7]" size={32} />
              <h2 className="text-4xl font-bold text-[#4D067B]">Experience</h2>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-[#E2BD6B] pl-6 py-4">
                <h3 className="text-2xl font-bold text-[#4D067B]">Member of Design Department</h3>
                <p className="text-[#7209B7] font-semibold text-lg">Club Scientifique de l'ESI</p>
                <p className="text-gray-600">Sep 2022 - Present</p>
                <ul className="text-gray-700 mt-2 space-y-1 list-disc list-inside">
                  <li>Participated in graphic design for club events and internal activities</li>
                  <li>Collaborated with team members to organize activities</li>
                  <li>Contributed to creative projects and event management</li>
                </ul>
              </div>
              <div className="border-l-4 border-[#E2BD6B] pl-6 py-4">
                <h3 className="text-2xl font-bold text-[#4D067B]">Entrepreneurship Project 1st Place Winner</h3>
                <p className="text-[#7209B7] font-semibold text-lg">Ecole Nationale Supérieure d'Informatique (ESI)</p>
                <p className="text-gray-600">Dec 2024</p>
                <ul className="text-gray-700 mt-2 space-y-1 list-disc list-inside">
                  <li>Selected among top projects in START pre-incubation program</li>
                  <li>Refined project ideas and developed entrepreneurial skills</li>
                  <li>Collaborated with mentors and coaches to improve project quality</li>
                </ul>
              </div>
              <div className="border-l-4 border-[#E2BD6B] pl-6 py-4">
                <h3 className="text-2xl font-bold text-[#4D067B]">Startup Weekend Participant</h3>
                <p className="text-[#7209B7] font-semibold text-lg">Startup Weekend Algiers</p>
                <p className="text-gray-600">Sep 2025</p>
                <ul className="text-gray-700 mt-2 space-y-1 list-disc list-inside">
                  <li>Developed a project from idea to prototype in an intensive event</li>
                  <li>Collaborated with team members to solve real-world challenges</li>
                  <li>Gained experience in rapid prototyping and innovation</li>
                </ul>
              </div>
              <div className="border-l-4 border-[#E2BD6B] pl-6 py-4">
                <h3 className="text-2xl font-bold text-[#4D067B]">Hackathon 3rd Place Winner</h3>
                <p className="text-[#7209B7] font-semibold text-lg">ECSEL Expo</p>
                <p className="text-gray-600">Oct 2025</p>
                <ul className="text-gray-700 mt-2 space-y-1 list-disc list-inside">
                  <li>Built a smart recommendation system to predict user purchases</li>
                  <li>Developed backend with FastAPI and frontend with Tailwind CSS</li>
                  <li>Integrated AI chatbot to provide recommendations and insights</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12">
            <div className="flex items-center gap-3 mb-8">
              <Mail className="text-[#7209B7]" size={32} />
              <h2 className="text-4xl font-bold text-[#4D067B]">Get In Touch</h2>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#7209B7] focus:outline-none transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#7209B7] focus:outline-none transition"
                  placeholder="mm_lazib@esi.dz"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#7209B7] focus:outline-none transition"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-[#7209B7] to-[#E2BD6B] text-white font-bold py-4 rounded-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4D067B]/90 backdrop-blur-sm text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#F8E2D4]">© 2025 Lazib Malak. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://github.com/Angeallain" className="hover:text-[#E2BD6B] transition">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/lazib-malak" className="hover:text-[#E2BD6B] transition">
              <Linkedin size={24} />
            </a>
            <a href="mailto:mm_lazib@esi.dz" className="hover:text-[#E2BD6B] transition">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}