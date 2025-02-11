import { useState } from "react";
import { Link,animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import logo from "./assets/logo.png";
import email from "./assets/email.png";
import 'reactjs-popup/dist/index.css';
import linkedin from "./assets/linkedin-dark.svg";
import github from "./assets/github-dark.svg";
import { FiMenu, FiX } from "react-icons/fi";
import Typewriter from "typewriter-effect";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [popupTitle, setPopupTitle] = useState("");
  const [popupLink, setPopupLink] = useState("");
  const [navOpen, setNavOpen] = useState(false);

  const handlePopup = (title, link, content) => {
    setPopupContent(content);
    setPopupTitle(title);
    setPopupLink(link);
    setShowPopup(true);
  };
  return (
    <div className=" text-gray-900">
      <nav className="p-4 flex justify-between items-center bg-white fixed w-full z-10 shadow-lg">
        <div className="flex items-center space-x-2 ml-7 cursor-pointer" onClick={() => scroll.scrollToTop()} >
          <img src={logo} alt="Logo" className="h-8 w-8 rounded-full" />
          <h1 className="text-2xl font-bold">Bhavin Jagani</h1>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setNavOpen(!navOpen)} className="text-3xl">
            {navOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <ul className={`md:flex md:space-x-6 absolute md:static bg-white w-full left-0 top-16 md:top-auto shadow-md md:shadow-none md:w-auto p-4 md:p-0 transition-all duration-300 ease-in-out ${navOpen ? "block" : "hidden"}`}>
          <li><Link to="about" smooth={true} duration={500} className="cursor-pointer block py-2 md:py-0 font-semibold">About</Link></li>
          <li><Link to="skills" smooth={true} duration={500} className="cursor-pointer block py-2 md:py-0 font-semibold">Skills</Link></li>
          <li><Link to="experience" smooth={true} duration={500} className="cursor-pointer block py-2 md:py-0 font-semibold">Experience</Link></li>
          <li><Link to="projects" smooth={true} duration={500} className="cursor-pointer block py-2 md:py-0 font-semibold">Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer block py-2 md:py-0 font-semibold">Contact</Link></li>
        </ul>
      </nav>

      <div className="p-10 pt-20 bg-gray-100">
        <section className="py-20 text-center">
          <motion.h2 className="text-4xl font-bold" animate={{ y: [-20, 0], opacity: [0, 1] }}>Hi, I'm Bhavin Jagani</motion.h2>
          <span className="text-lg mt-2">
            <Typewriter
              options={{
                strings: [
                  "Web Developer | Logical Thinker",
                  "Bridging Creativity & Logic in Web Development",
                  "Turning Ideas into Interactive Experiences"
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </span>
        </section>
        <div className="md:flex  gap-10 md:ml-2" >
          <section id="about" className="ml-5 py-20 text-center basis-3/5">
            <motion.h2 className="text-4xl font-bold" animate={{ y: [-20, 0], opacity: [0, 1] }}>About Me</motion.h2>
            <div className="text-lg mt-2 leading-relaxed">
              <p className="text-left mb-2">Dynamic and results-driven <strong>Front-end developer</strong> with over 2 years of professional experience specializing in e-commerce platforms. Expertise in<strong> HTML, CSS, JavaScript, TypeScript, React.js, Angular,</strong> and modern front-end frameworks.</p><p className="text-left mb-2"><strong>Skilled in responsive web design, user experience (UX) optimization, and RESTful API development.</strong>  Currently advancing knowledge in web technologies and software development through a Master’s in Computer Science.</p>
            </div>
          </section>
          <section id="skills" className="py-20 text-center basis-2/5 ml-2">
            <h2 className="text-4xl font-bold">Technical Skills</h2>
            <div className="flex  flex-wrap gap-2 mt-4 glass">
              <span className="px-4 py-2 mt-1 mb-1 bg-gray-300  rounded">HTML</span>
              <span className="px-4 py-2 mt-1 mb-1 bg-gray-300  rounded">CSS</span>
              <span className="px-4 py-2 mt-1 mb-1 bg-gray-300  rounded">JavaScript</span>
              <span className="px-4 py-2 mt-1 mb-1 bg-gray-300  rounded">TypeScript</span>
              <span className="px-4 py-2 mt-1 mb-1 bg-gray-300  rounded">Python</span>
              <span className="px-4 py-2 mt-1 mb-1 bg-gray-300  rounded">React.js</span>
              <span className="px-4 py-2 mt-1 mb-1 bg-gray-300  rounded">Angular.js</span>
              <span className="px-4 py-2 mt-1 mb-1 bg-gray-300  rounded">Express.js</span>
              <span className="px-4 py-2 mt-1 mb-1 bg-gray-300  rounded">MySql</span>
              <span className="px-4 py-2 mt-1 mb-1 bg-gray-300  rounded">MongoDB</span>
              <span className="px-4 py-2 mt-1 mb-1 bg-gray-300  rounded">SEO</span>
              <span className="px-4 py-2 mt-1 mb-1 bg-gray-300  rounded">Github</span>
              <span className="px-4 py-2 mt-1 mb-1 bg-gray-300  rounded">Git</span>

            </div>
          </section>
        </div>
        <div className="fixed z-10 text-center top-1/3 left-0 p-2 md:p-4  rounded-md   bg-white">
          <ul className="flex flex-col gap-3 ">
            <li className="self-center">
              <a href="mailto:bhavinjagani2001@gmail.com" ><img src={email} alt="Logo" className="h-6 w-6" /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/bhavin-jagani-6ab1101a4/" className="text-blue-500"><img src={linkedin} alt="Logo" className="h-8 w-8" /></a>
            </li>
            <li>
              <a href="https://github.com/bhavinjagani"><img src={github} alt="Logo" className="h-8 w-8" /></a>
            </li>
          </ul>
        </div>
        <section id="experience" className="py-20">
          <h2 className="text-3xl font-bold text-center">Experience</h2>
          <div className="mt-6 space-y-4 max-w-3xl mx-auto">
            <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-gray-200 dark:bg-gray-800 rounded shadow cursor-pointer relative" onClick={() => handlePopup("GIR Software Services - Oracle NetSuite Alliance Partner", "https://girsoftwareservices.com/", " • Crafted a strategic solution for managing pre-order and back-order inventory that established clear visibility of stock levels, resulting in a 30% improvement in order accuracy and enhanced customer experience metrics.\n • Enhanced the performance of existing web pages by employing HTML, CSS, and JavaScript to optimize them for mobile devices; directly resulted in a 40% increase in mobile user interactions within one-month post-launch. \n • Streamlined the checkout process, reducing cart abandonment by 25% and boosting transaction completion rates, leading to increased sales over three months.\n • Implemented custom tags and functions to track product details in Google Analytics, enabling detailed performance analysis.\n • Developed a unique multi-step 'Gift Box Builder' tool on the e-commerce site, attracting more than 500 monthly users while enhancing personalized gifting experiences and elevating overall user interaction rates by approximately 30%.")}>
              <h3 className="font-semibold">Web Developer - Get It Right Software Services</h3>
              <p className="text-sm">May 2022 - July 2024</p>
              <button className="px-1 py-2 mt-1 mb-1 bg-gray-300 absolute rounded right-4 bottom-4">More Details</button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-gray-200 dark:bg-gray-800 rounded shadow cursor-pointer relative" onClick={() => handlePopup("WiseDV Electronics", "https://wisedv.com/", " • Developed and implemented a dynamic form frontend inspired by Google Forms using modern web technologies, resulting in improved usability and streamlined data collection. \n • Built a robust connection between the frontend and a MySQL database, optimizing storage and retrieval for over 1,500 monthly form submissions.\n • Developed RESTful APIs for seamless data interaction between frontend and backend systems, improving operational efficiency.")}>
              <h3 className="font-semibold">Web Developer Intern - WiseDV Electronics</h3>
              <p className="text-sm">Dec 2021 - Mar 2022</p>
              <button className="px-1 py-2 mt-1 mb-1 bg-gray-300 absolute rounded right-4 bottom-4">More Details</button>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="py-20 text-center">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 max-w-4xl mx-auto">
            <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-white dark:bg-gray-800 rounded shadow">
              <h2 className="font-semibold">OLX Replica – MERN Stack</h2>
              <p className="font-semibold">Tools: MongoDB,React.js,Node.js,Tailwindcss</p>
              <p className="text-sm">Developed a full-stack application for buying and selling pre-owned products, mirroring OLX's functionality</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-white dark:bg-gray-800 rounded shadow">
              <h2 className="font-semibold">Google Forms Clone</h2>
              <p className="font-semibold">Tools: Angular.js,Node.js, MySql , Bootstrap</p>
              <p className="text-sm">Developed and implemented a dynamic form frontend inspired by Google Forms using modern web technologies.</p>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-20 text-center">
          <h2 className="text-3xl font-bold">Contact</h2>
          <div className="mt-6">
          <ul className="flex justify-center items-center gap-10">
            <li className="self-center">
              <a href="mailto:bhavinjagani2001@gmail.com" ><img src={email} alt="Logo" className="h-6 w-6" /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/bhavin-jagani-6ab1101a4/" className="text-blue-500"><img src={linkedin} alt="Logo" className="h-8 w-8" /></a>
            </li>
            <li>
              <a href="https://github.com/bhavinjagani"><img src={github} alt="Logo" className="h-8 w-8" /></a>
            </li>
          </ul>
          </div>
        </section>
      </div>

      {showPopup && (
        <motion.div  animate={{ scale: 1.3 }}
        whileInView={{ opacity: 1 }} className="fixed z-20 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg max-w-2xl w-full relative">
            <button className="absolute top-2 right-2  text-2xl bg-black text-white" onClick={() => setShowPopup(false)}><FiX /></button>
            <h3 className="text-xl font-semibold mb-2 text-blue-500 underline"> <a href={popupLink} className="text-blue-500\" target="_blank\">{popupTitle}</a></h3>
            <p className="whitespace-pre-wrap font-bold text-sm">Work highlights</p>
            <p className="whitespace-pre-wrap text-sm">{popupContent}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
