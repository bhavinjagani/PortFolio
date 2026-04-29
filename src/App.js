import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import logo from "./assets/logo.svg";
import email from "./assets/email.png";
import linkedin from "./assets/linkedin-dark.svg";
import github from "./assets/github-dark.svg";
import { FiMenu, FiX, FiExternalLink, FiGithub, FiMail, FiDownload } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import "./App.css";

const skillCategories = [
  {
    label: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL", "Python"],
  },
  {
    label: "Frontend",
    skills: ["React.js", "Next.js", "Angular", "Redux", "Zustand", "React Query", "Module Federation", "Material-UI", "Tailwind CSS", "Bootstrap", "Webpack"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "OAuth / JWT", "Microservices", "Redis"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "DynamoDB"],
  },
  {
    label: "DevOps & Cloud",
    skills: ["AWS (Lambda, S3, EC2)", "Google Cloud", "Docker", "CI/CD", "GitHub Actions", "Git", "Jest"],
  }
];

const experiences = [
  {
    title: "Full Stack Developer",
    company: "FabLab – University of Texas at Arlington",
    period: "Aug 2025 – Present",
    type: "Full-time",
    link: "https://www.uta.edu/",
    highlights: [
      "Developed and scaled full-stack features for FabApp, a SaaS makerspace management platform serving 15,000+ students and faculty — owning the full development lifecycle across a React/JavaScript frontend, Node.js API layer, and MySQL backend deployed on AWS with CI/CD pipelines.",
      "Improved system reliability by 35% and reduced booking conflicts by 30% through TDD-driven enhancements to user role management, on-call-incident-managed workflows, and reservation scheduling modules.",
      "Refactored shared UI into reusable component libraries, increasing reusability by 30% and reducing code duplication following microservices-based design principles.",
      "Optimized frontend and backend performance with Datadog observability and GitHub Actions CI/CD for automated, production-grade deployments.",
    ],
  },
  {
    title: "Web Developer",
    company: "Get It Right Software Services (Oracle NetSuite Alliance Partner)",
    period: "May 2022 – July 2024",
    type: "Full-time",
    link: "https://girsoftwareservices.com/",
    highlights: [
      "Engineered a pre-order/back-order inventory management solution with real-time stock visibility, improving order accuracy by 30% and enhancing customer satisfaction metrics.",
      "Improved frontend performance via code splitting, lazy loading, and bundle optimization — reducing initial page load time by 40% and boosting Lighthouse score from 68 to 92.",
      "Enhanced mobile responsiveness with targeted HTML/CSS/JS optimizations, achieving a 40% increase in mobile user interactions within one month of launch.",
      "Streamlined checkout UX with form optimization and flow improvements, reducing cart abandonment by 25% and driving measurable revenue growth.",
      "Built a multi-step Gift Box Builder in React + TypeScript, attracting 500+ monthly active users and lifting personalized gifting interactions by 30%.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "WiseDV Electronics India Pvt. Ltd",
    period: "Dec 2021 – Mar 2022",
    type: "Internship",
    link: "https://wisedv.com/",
    highlights: [
      "Developed a dynamic form builder frontend using Angular, improving usability and streamlining data collection workflows.",
      "Built a MySQL database integration handling 1,500+ monthly form submissions with optimized storage and retrieval.",
      "Designed RESTful APIs with Node.js for seamless frontend-backend data interaction, improving operational efficiency.",
    ],
  },
];

const projects = [
  {
    title: "OLX Replica",
    subtitle: "Full-Stack Marketplace · 2023",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "AWS Lambda", "PostgreSQL"],
    bullets: [
      "Architected a full-stack buy/sell marketplace with JWT-based secure user authentication and real-time listings.",
      "Built and deployed a serverless API using AWS Lambda & API Gateway with PostgreSQL for structured data storage.",
    ],
    github: "https://github.com/bhavinjagani",
  },
  {
    title: "FabApp – Makerspace Platform",
    subtitle: "Enterprise SaaS · Production",
    stack: ["React.js", "Node.js", "MySQL", "AWS", "GitHub Actions", "Datadog"],
    bullets: [
      "Production SaaS platform at UT Arlington serving 15,000+ users across 50+ equipment assets.",
      "Full lifecycle ownership: frontend, API layer, MySQL backend, AWS deployment, CI/CD, and observability.",
      "35% reliability improvement and 30% reduction in booking conflicts post-refactor.",
    ],
    github: "https://github.com/bhavinjagani",
  },
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "3", label: "Companies" },
  { value: "50K+", label: "Users Impacted" },
  { value: "10+", label: "Technologies" },
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Texas at Arlington",
    period: "Aug 2024 – Present",
    gpa: "CGPA: 3.66 / 4.0",
    location: "Arlington, TX, USA",
  },
  {
    degree: "Bachelor of Technology in Computer Engineering",
    school: "Charotar University of Science and Technology",
    period: "June 2018 – May 2022",
    gpa: "CGPA: 8.33 / 10.0",
    location: "Gujarat, India",
  },
];

const navLinks = ["about", "skills", "experience", "projects", "education", "contact"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay } }),
};

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="text-gray-900 bg-white">
      {/* ── Navbar ── */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex justify-between items-center">
          <div
            className="flex items-center space-x-2.5 cursor-pointer"
            onClick={() => scroll.scrollToTop()}
          >
            <img src={logo} alt="Logo" className="h-9 w-9 rounded-full ring-2 ring-indigo-500" />
            <span className="text-xl font-bold text-gray-900">Bhavin Jagani</span>
          </div>

          <button
            className="md:hidden text-2xl text-gray-600 p-1"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle menu"
          >
            {navOpen ? <FiX /> : <FiMenu />}
          </button>

          <ul
            className={`md:flex md:items-center md:space-x-8 absolute md:static bg-white w-full left-0 top-[61px] md:top-auto shadow-md md:shadow-none md:w-auto px-6 py-4 md:p-0 transition-all duration-300 ${
              navOpen ? "block" : "hidden"
            }`}
          >
            {navLinks.map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-72}
                  onClick={() => setNavOpen(false)}
                  className="cursor-pointer block py-2 md:py-0 text-sm font-semibold text-gray-500 hover:text-indigo-600 capitalize transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={`${process.env.PUBLIC_URL}/Resume_Bhavin_Master.pdf`}
                download="Resume_Bhavin_Master.pdf"
                onClick={() => setNavOpen(false)}
                className="flex items-center gap-1.5 py-2 md:py-0 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                <FiDownload className="text-sm" /> Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="hero-section min-h-screen flex flex-col justify-center items-center text-center px-6 pt-16 relative">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full mb-5"
          >
            Open to Opportunities
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-4"
          >
            Hi, I'm{" "}
            <span className="gradient-text">Bhavin Jagani</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="text-xl md:text-2xl text-gray-500 font-medium mb-8 h-9"
          >
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Developer",
                  "React & Node.js Engineer",
                  "3+ Years of Professional Experience",
                  "Building Scalable Web Applications",
                ],
                autoStart: true,
                loop: true,
                delay: 45,
                deleteSpeed: 25,
              }}
            />
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mb-14">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-72}
              className="cursor-pointer px-8 py-3.5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
            >
              Get In Touch
            </Link>
            <a
              href={`${process.env.PUBLIC_URL}/Resume_Bhavin_Master.pdf`}
              download="Resume_Bhavin_Master.pdf"
              className="flex items-center gap-2 px-8 py-3.5 border-2 border-gray-200 text-gray-700 font-semibold rounded-lg hover:border-indigo-400 hover:text-indigo-600 transition-colors"
            >
              <FiDownload className="text-base" /> Download Resume
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center"
              >
                <div className="text-3xl font-extrabold text-indigo-600">{s.value}</div>
                <div className="text-xs text-gray-500 font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="scroll-indicator absolute bottom-8 flex flex-col items-center gap-1 text-gray-400 text-xs">
          <span>Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Social sidebar ── */}
      <div className="fixed top-1/2 left-4 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
        {[
          { href: "mailto:bhavinjagani2001@gmail.com", src: email, alt: "Email", size: "h-5 w-5" },
          { href: "https://www.linkedin.com/in/bhavin-jagani-6ab1101a4/", src: linkedin, alt: "LinkedIn", size: "h-6 w-6" },
          { href: "https://github.com/bhavinjagani", src: github, alt: "GitHub", size: "h-6 w-6" },
        ].map((item) => (
          <a
            key={item.alt}
            href={item.href}
            target={item.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow-md border border-gray-100 hover:bg-indigo-50 hover:border-indigo-200 transition-all"
          >
            <img src={item.src} alt={item.alt} className={item.size} />
          </a>
        ))}
      </div>

      {/* ── About ── */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">
              About Me
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-6">
              Seasoned developer. Reliable engineer.
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                I'm a{" "}
                <strong className="text-gray-900">
                  Full-Stack Developer with 3+ years of professional experience
                </strong>{" "}
                building and scaling production web applications — from enterprise e-commerce
                platforms driving measurable revenue growth to SaaS tools serving 15,000+ users
                at a major US university.
              </p>
              <p>
                My core stack is{" "}
                <strong className="text-gray-900">
                  React, TypeScript, Node.js, GraphQL, and AWS
                </strong>
                , with deep experience in Redux/Zustand state architecture, micro-frontend
                patterns, and SQL/NoSQL databases. I've delivered consistent outcomes across
                every role: 35% better system reliability, Lighthouse scores from 68 → 92,
                25% fewer cart abandonments.
              </p>
              <p>
                Currently pursuing a{" "}
                <strong className="text-gray-900">
                  Master's in Computer Science (GPA 3.66) at UT Arlington
                </strong>{" "}
                while working as a Full Stack Developer on a production SaaS platform —
                deepening both engineering depth and computer science fundamentals simultaneously.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">
              Technical Skills
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-10">
              What I work with
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((cat, i) => (
                <motion.div
                  key={cat.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.08}
                  variants={fadeUp}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
                >
                  <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-4">
                    {cat.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-badge px-3 py-1.5 text-sm font-medium rounded-lg cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">
              Work History
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-12">Experience</h2>
          </motion.div>

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
                variants={fadeUp}
                className="experience-card bg-white rounded-2xl p-7 border border-gray-100 shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-indigo-600 font-semibold hover:underline mt-1 text-sm"
                    >
                      {exp.company} <FiExternalLink className="text-xs" />
                    </a>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 flex-wrap">
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full">
                      {exp.type}
                    </span>
                    <span className="text-sm text-gray-500 font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                      <span className="text-indigo-400 mt-0.5 flex-shrink-0 font-bold">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">
              Portfolio
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-10">
              Featured Projects
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col gap-4 hover:border-indigo-100 hover:shadow-md transition-all"
              >
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{proj.title}</h3>
                  <p className="text-xs text-indigo-600 font-semibold mt-0.5">{proj.subtitle}</p>
                </div>
                <ul className="space-y-1.5 flex-1">
                  {proj.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 text-sm text-gray-600 leading-relaxed">
                      <span className="text-indigo-400 flex-shrink-0 font-bold mt-0.5">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {proj.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-white border border-gray-200 text-gray-600 text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-500 font-semibold hover:text-indigo-600 transition-colors"
                >
                  <FiGithub className="text-base" /> View on GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section id="education" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">
              Education
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-10">Academic Background</h2>
          </motion.div>
          <div className="space-y-5">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
                variants={fadeUp}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-3"
              >
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-indigo-600 font-semibold text-sm mt-0.5">{edu.school}</p>
                  <p className="text-gray-400 text-sm mt-0.5">{edu.location}</p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1.5 flex-shrink-0">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full">
                    {edu.gpa}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">{edu.period}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 bg-indigo-600">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-indigo-200 font-semibold text-sm uppercase tracking-widest">
              Let's Talk
            </span>
            <h2 className="text-4xl font-extrabold text-white mt-2 mb-4">
              Open for new roles
            </h2>
            <p className="text-indigo-200 text-lg mb-10 max-w-xl mx-auto">
              I'm actively looking for full-stack or front-end engineering opportunities. If you
              think I'd be a good fit, I'd love to connect.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:bhavinjagani2001@gmail.com"
                className="flex items-center gap-2 px-8 py-3.5 bg-white text-indigo-700 font-bold rounded-lg hover:bg-indigo-50 transition-colors shadow-lg"
              >
                <FiMail /> bhavinjagani2001@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/bhavin-jagani-6ab1101a4/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-8 py-3.5 border-2 border-white/40 text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
              >
                <img src={linkedin} alt="LinkedIn" className="h-5 w-5 brightness-[100] invert" />
                LinkedIn
              </a>
              <a
                href="https://github.com/bhavinjagani"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-8 py-3.5 border-2 border-white/40 text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
              >
                <FiGithub className="text-lg" /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-900 py-5 text-center text-gray-500 text-sm">
        Designed & built by{" "}
        <span className="text-white font-semibold">Bhavin Jagani</span> ·{" "}
        {new Date().getFullYear()}
      </footer>
    </div>
  );
}
