import React from "react";
import NavTab from '../compnents/NavTab'
import Footer from '../compnents/Footer'
import { motion } from "motion/react";

const Testimonials = () => {

  const testimonialsData = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "B.Tech CSE, 2025",
      company: "Placed at TCS Digital",
      avatar: "PS",
      quote:
        "The summer internship training at Maatangii Techwin completely transformed my coding skills. The live projects on AI & ML gave me the confidence to crack top placements. Highly recommend!",
      rating: 5,
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "BCA Graduate",
      company: "Now at Infosys",
      avatar: "RV",
      quote:
        "I joined the 8-week Python program with zero industry exposure. The mentors are fantastic and the hands-on approach made me job-ready. I owe my first offer to Maatangii.",
      rating: 5,
    },
    {
      id: 3,
      name: "Sneha Patel",
      role: "Diploma (IT), 2024",
      company: "Intern → Full-time @ TechHub",
      avatar: "SP",
      quote:
        "From Data Analytics to Mobile Dev, I explored multiple domains. Maatangii’s training is practical, affordable, and career-focused. The placement support is incredible!",
      rating: 5,
    },
    {
      id: 4,
      name: "Amit Kumar",
      role: "B.Sc. CS",
      company: "Hired at Amazon",
      avatar: "AK",
      quote:
        "The AI & ML track was a game-changer. We built real-world models and even deployed one. The 4-week winter internship gave me a massive edge in my placement interviews.",
      rating: 5,
    },
    {
      id: 5,
      name: "Neha Gupta",
      role: "B.Tech ECE",
      company: "Product Engineer @ Microsoft",
      avatar: "NG",
      quote:
        "I loved the collaborative environment and the focus on building a portfolio. The 'Learn Today. Build Your Career Tomorrow.' is not just a tagline – it's their ethos.",
      rating: 5,
    },
    {
      id: 6,
      name: "Vikram Singh",
      role: "MCA, 2025",
      company: "Data Scientist @ Fractal",
      avatar: "VS",
      quote:
        "Maatangii's 12-week ML program is structured perfectly. I got to work on a live client project which became the highlight of my resume. Truly industry-aligned.",
      rating: 5,
    },
  ];

  const Stars = ({ count = 5 }) => (
    <div className="flex items-center gap-0.5 text-amber-400 text-sm">
      {[...Array(count)].map((_, i) => (
        <span key={i} className="text-amber-400">★</span>
      ))}
    </div>
  );

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 60,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: 'easeOut',
            },
        },
    }

  return (
    <>
    <NavTab/>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      {/* header with title and subtle decoration */}
      <motion.div initial={{scale:0.7}} whileInView={{scale:1}} transition={{duration:1.2, ease:'circOut'}} className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0f4a85] text-sm font-medium px-4 py-1.5 rounded-full mb-4">
          <span className="w-1.5 h-1.5 bg-[#ffb703] rounded-full"></span>
          Testimonials
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f4a85] tracking-tight">
          What our <span className="text-[#ffb703]">students</span> say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-base">
          Real stories from engineering students and professionals who transformed
          their careers with Maatangii Techwin.
        </p>
      </motion.div>

      {/* grid of testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {testimonialsData.map((item) => (
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" 
            key={item.id}
            className="testimonial-card bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col h-full transition-all duration-200 hover:translate-y-[-4px] hover:shadow-lg"
          >
            {/* top: quote + avatar */}
            <div className="flex items-start justify-between">
              <div className="relative">
                <span className="quote-mark text-[#ffb703] absolute -top-2 -left-1 select-none text-4xl font-serif">
                  “
                </span>
                <p className="text-gray-600 text-sm leading-relaxed mt-2 pl-4 pr-1">
                  {item.quote}
                </p>
              </div>
              {/* avatar circle */}
              <div className="flex-shrink-0 ml-2">
                <div className="w-11 h-11 rounded-full bg-[#ffb703] text-white flex items-center justify-center text-sm font-semibold shadow-sm">
                  {item.avatar}
                </div>
              </div>
            </div>

            {/* rating stars */}
            <div className="mt-4 flex items-center gap-1">
              <Stars count={item.rating} />
              <span className="text-xs text-gray-600 ml-1">5.0</span>
            </div>

            {/* bottom: name + role + company */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between">
              <div>
                <h4 className="text-[#0f4a85] font-semibold text-base">
                  {item.name}
                </h4>
                <p className="text-gray-600 text-xs">{item.role}</p>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-50 text-[#0f4a85] border border-blue-100/50">
                {item.company}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* bottom CTA / note – consistent with brand */}
      <div className="mt-16 text-center">
        <p className="text-slate-500 text-sm max-w-lg mx-auto">
          Join <span className="font-semibold text-slate-700">1200+</span> students
          who have built their careers with our
          <span className="text-[#0f4a85] font-medium">
            {" "}
            summer/winter internship
          </span>{" "}
          programs.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#ffb703] hover:bg-blue-700 text-white text-sm font-medium px-6 py-2.5 rounded-full shadow-sm transition-all duration-200"
          >
            Enroll Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-400 bg-white text-slate-700 text-sm font-medium px-6 py-2.5 rounded-full shadow-sm transition-all duration-200"
          >
            View Programs
          </a>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Testimonials;