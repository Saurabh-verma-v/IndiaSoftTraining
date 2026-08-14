import React, { useState } from 'react';
import NavTab from '../compnents/NavTab';
import bannnerVdo from '../assets/bannervdo.mp4';
import { FaGraduationCap, FaBookOpen, FaGlobe, FaBriefcase } from 'react-icons/fa';
import Counter from '../compnents/Counter';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import vision from '../assets/images/vision.png';
import mission from '../assets/images/mission.png';
import group from '../assets/images/ThreeStudent.png';
import Footer from '../compnents/Footer';
import { motion } from 'motion/react';

const AboutPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderCards = [
    {
      title: 'Build',
      description:
        'Your future career, with access to expert guidance, and with placements and job offers from 250+ top-level companies',
      bgClass: 'bg-yellow-500 text-gray-800',
    },
    {
      title: 'Leadership',
      description:
        'Maatangi, who dreamed of building an institution where education is not a destination, but a journey of empowerment and transformation',
      bgClass: 'bg-yellow-500 text-gray-800',
    },
    {
      title: 'Exposure',
      description:
        'Your future career, with access to expert guidance, and with placements and job offers from 250+ top-level companies',
      bgClass: 'bg-yellow-500 text-gray-800',
    },
    {
      title: 'Explore',
      description:
        'Your curiosity and contribute to breakthroughs in diverse fields through our research initiatives',
      bgClass: 'bg-yellow-500 text-gray-800',
    },
    {
      title: 'Experience',
      description:
        'A vibrant campus life through our student clubs, sports facilities, homely campus accommodation, and exciting campus events.',
      bgClass: 'bg-yellow-500 text-gray-800',
    },
    {
      title: 'Dive',
      description:
        'Into a dynamic learning journey with our cutting-edge industry-driven programs, expert faculty, modern infrastructure, and wide range of scholarships.',
      bgClass: 'bg-yellow-500 text-gray-800',
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + sliderCards.length) % sliderCards.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % sliderCards.length);
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <>
      <NavTab />

      {/* ===== HERO WITH VIDEO ===== */}
      <section className="overflow-hidden">
        <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] overflow-hidden">
          <video
            src={bannnerVdo}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/20"></div>
        </div>
      </section>

      {/* ===== INTRODUCTION ===== */}
      <section className="py-10 sm:py-14 md:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.3 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f4a85] mb-4 sm:mb-6"
          >
            About Maatangi Techwin
          </motion.h2>

          <motion.p
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mb-8 sm:mb-12"
          >
            Maatangi Techwin is an IT company focused on providing practical,
            industry-oriented training and internship opportunities for students. We
            help students transform their academic knowledge into real-world
            technical skills through hands-on learning and live projects. Our
            programs cover modern technologies and essential professional skills
            required by today's industry.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6"
          >
            {[
              { icon: FaGraduationCap, color: 'blue', end: 15, label: 'Years Of Experience' },
              { icon: FaBookOpen, color: 'green', end: 20, label: 'Number Of Courses' },
              { icon: FaGlobe, color: 'purple', end: 1200, label: 'Students' },
              { icon: FaBriefcase, color: 'orange', end: 100, label: 'Number Of Placements' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={cardAnimation}
                whileHover={{ y: -6, scale: 1.03 }}
                className={`text-center p-4 sm:p-5 md:p-6 rounded-lg bg-gradient-to-br from-${stat.color}-50 to-${stat.color === 'blue' ? 'indigo' : stat.color === 'green' ? 'emerald' : stat.color === 'purple' ? 'violet' : 'amber'}-50 hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="flex justify-center mb-2 sm:mb-3">
                  <stat.icon className={`text-2xl sm:text-3xl md:text-4xl text-${stat.color}-600`} />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ffb703]">
                  <Counter end={stat.end} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-[#0f4a85] font-bold mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== WHY MAATANGI TECHWIN ===== */}
      <section className="bg-gradient-to-b from-white to-[#E0F1FF] py-8 sm:py-12">
        <div className="max-w-7xl px-4 mx-auto">
          <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12">
            {/* Left */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-[3.125rem] font-bold">
                <span className="block">Why</span>
                <span className="block">Maantagi Techwin</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 lg:mb-8 max-w-sm">
                At Maatangi Techwin, you will
              </p>
              <div className="flex gap-3 sm:gap-4">
                <button
                  onClick={handlePrev}
                  className="text-gray-700 hover:text-white hover:bg-[#ffb703] hover:border-[#ffb703] bg-white shadow-lg w-11 h-11 sm:w-13 sm:h-13 flex items-center justify-center rounded-full border border-gray-200 cursor-pointer transition-all"
                >
                  <IoIosArrowBack />
                </button>
                <button
                  onClick={handleNext}
                  className="text-gray-700 hover:text-white hover:bg-[#ffb703] hover:border-[#ffb703] bg-white shadow-lg w-11 h-11 sm:w-13 sm:h-13 flex items-center justify-center rounded-full border border-gray-200 cursor-pointer transition-all"
                >
                  <IoIosArrowForward />
                </button>
              </div>
            </div>

            {/* Right - Slider */}
            <div className="w-full lg:flex-1">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
                >
                  {sliderCards.map((card, index) => (
                    <div key={index} className="flex-shrink-0 w-full px-2 sm:px-3 py-2 sm:py-4">
                      <div
                        className={`h-full px-6 sm:px-8 py-8 sm:py-10 md:py-12 rounded-2xl shadow-xl transition-all duration-300 transform ${card.bgClass}`}
                      >
                        <h2 className="text-xl sm:text-2xl mb-3 sm:mb-4 font-bold text-[#0f4a85]">
                          {card.title}
                        </h2>
                        <p className="text-sm sm:text-base text-white">{card.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VISION & MISSION ===== */}
      <section className="bg-[#0f4a85] py-8 sm:py-12 overflow-hidden">
        <div className="max-w-7xl px-4 mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-center"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-white">
              Vision & Mission
            </h1>
            <p className="text-white text-sm sm:text-base max-w-2xl mx-auto mt-2 sm:mt-3">
              Maatangi Techwin is committed to building a transformative learning
              experience for all. Explore our mission and vision statements.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 mt-8 sm:mt-12 lg:mt-20 pb-8 sm:pb-10 lg:pb-35">
            {/* Vision */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              className="w-full bg-white shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:border hover:border-[#ffb703]"
            >
              <div className="overflow-hidden">
                <img
                  className="w-full h-[200px] sm:h-[240px] md:h-[280px] object-cover object-center transform transition-transform duration-500 hover:scale-110"
                  src={vision}
                  alt="vision"
                />
              </div>
              <div className="p-5 sm:p-8 md:p-10 lg:p-15">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#1B3A6F] mb-3 sm:mb-4">
                  Vision
                </h2>
                <ul className="list-disc pl-4 sm:pl-6 text-gray-700 space-y-2">
                  <li className="text-sm sm:text-[16px] leading-relaxed marker:text-[#ffb703] marker:text-xl sm:marker:text-2xl text-justify">
                    To become a trusted platform for industry-focused IT training and
                    career development. We aim to empower students with practical
                    knowledge and real-world experience. We envision creating
                    confident, skilled, and future-ready IT professionals. We
                    continuously adapt our training to meet evolving technology and
                    industry needs. Our vision is to bridge the gap between academic
                    learning and professional careers.
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              className="w-full bg-white shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:border hover:border-[#ffb703]"
            >
              <div className="overflow-hidden">
                <img
                  className="w-full h-[200px] sm:h-[240px] md:h-[280px] object-cover object-center transform transition-transform duration-500 hover:scale-110"
                  src={mission}
                  alt="mission"
                />
              </div>
              <div className="p-5 sm:p-8 md:p-10 lg:p-15">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#1B3A6F] mb-3 sm:mb-4">
                  Mission
                </h2>
                <ul className="list-disc pl-4 sm:pl-6 text-gray-700 space-y-2">
                  <li className="text-sm sm:text-[16px] leading-relaxed marker:text-[#ffb703] marker:text-xl sm:marker:text-2xl text-justify">
                    To provide quality, practical, and industry-relevant IT training to
                    students. We focus on hands-on projects, modern technologies, and
                    real development practices. Our trainers guide students to
                    strengthen their technical and professional skills. We encourage
                    problem-solving, innovation, teamwork, and continuous learning. Our
                    mission is to help every learner become career-ready and
                    industry-capable.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== OUR CORE VALUES ===== */}
      <section className="py-10 sm:py-14 md:py-16 px-4 bg-white">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-6xl"
        >
          <div className="border-4 border-[#ffb703] rounded-2xl shadow-2xl p-6 sm:p-10 md:p-15 font-bold space-y-3 lg:w-[75%] relative">
            <h1 className="text-2xl sm:text-3xl lg:text-[3.125rem]">Our Core Values</h1>

            <div className="text-gray-500 space-y-3 sm:space-y-4">
              <p className="font-normal text-sm sm:text-base">
                <span className="font-bold">Student-Centric: </span>
                We put students at the heart of everything we do, providing practical
                training, guidance, and support to help them achieve their career
                goals.
              </p>
              <p className="font-normal text-sm sm:text-base">
                <span className="font-bold">Practical Learning: </span>
                We believe in learning by doing. Our programs focus on hands-on
                projects, real-world applications, and practical exposure to modern
                technologies.
              </p>
              <p className="font-normal text-sm sm:text-base">
                <span className="font-bold">Industry Relevance: </span>
                We continuously align our training with current industry requirements,
                helping students develop the technical skills and knowledge expected
                by employers.
              </p>
              <p className="font-normal text-sm sm:text-base">
                <span className="font-bold">Innovation & Growth: </span>
                We encourage curiosity, creativity, problem-solving, and continuous
                learning to help students adapt to the rapidly changing IT industry.
              </p>
              <p className="font-normal text-sm sm:text-base">
                <span className="font-bold">Integrity & Professionalism: </span>
                We promote honesty, responsibility, teamwork, and professional ethics,
                preparing students not only to become skilled professionals but also
                responsible members of the workplace.
              </p>
            </div>

            {/* Floating Image - Hidden on small screens, visible on large */}
            <motion.div
              animate={{
                y: [0, -30, 30, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
              className="hidden lg:block border-2 shadow-2xl border-[#ffb703] rounded-2xl overflow-hidden absolute w-[40vh] md:w-[50vh] lg:w-[60vh] h-[40vh] md:h-[50vh] lg:h-[60vh] top-10 -right-10 md:-right-20 lg:-right-60"
            >
              <img className="w-full h-full object-cover" src={group} alt="group student" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;