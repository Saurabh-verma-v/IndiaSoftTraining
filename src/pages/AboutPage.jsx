import React, { useState } from 'react'
import NavTab from '../compnents/NavTab'
import bannnerVdo from '../assets/bannervdo.mp4'

import { FaGraduationCap, FaBookOpen, FaGlobe, FaBriefcase } from 'react-icons/fa';
import Counter from '../compnents/Counter';

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import vision from '../assets/images/vision.png'
import mission from '../assets/images/mission.png'
import group from '../assets/images/ThreeStudent.png'
import Footer from '../compnents/Footer';
import { motion } from 'motion/react';

const AboutPage = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const sliderCards = [
    {
      title: 'Build',
      description: 'Your future career, with access to expert guidance, and with placements and job offers from 250+ top-level companies',
      bgClass: 'bg-yellow-500 text-gray-800'
    },
    {
      title: 'Leadership',
      description: 'Maatangi, who dreamed of building an institution where education is not a destination, but a journey of empowerment and transformation',
      bgClass: 'bg-yellow-500 text-gray-800'
    },
    {
      title: 'Exposure',
      description: 'Your future career, with access to expert guidance, and with placements and job offers from 250+ top-level companies',
      bgClass: 'bg-yellow-500 text-gray-800'
    },
    {
      title: 'Explore',
      description: 'Your curiosity and contribute to breakthroughs in diverse fields through our research initiatives',
      bgClass: 'bg-yellow-500 text-gray-800'
    },
    {
      title: 'Experience',
      description: 'A vibrant campus life through our student clubs, sports facilities, homely campus accommodation, and exciting campus events.',
      bgClass: 'bg-yellow-500 text-gray-800'
    },
    {
      title: 'Dive',
      description: 'Into a dynamic learning journey with our cutting-edge industry-driven programs, expert faculty, modern infrastructure, and wide range of scholarships.',
      bgClass: 'bg-yellow-500 text-gray-800'
    },
  ]

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + sliderCards.length) % sliderCards.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % sliderCards.length)
  }

   const fadeLeft = {
    hidden: {
      opacity: 0,
      x: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  }

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

   const cardAnimation = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

    const fadeRight = {
    hidden: {
      opacity: 0,
      x: 80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  }


  return (
    <>
      <NavTab />
      {/* hero with vdo */}
      <section>
        {/* Hero with Video */}
        <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[75vh] overflow-hidden">

          {/* Background Video */}
          <video
            src={bannnerVdo}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/20"></div>
        </div>
      </section>
      {/* introduction */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          {/* Heading */}
          <motion.h2 initial={{scaleX:0,opacity:0}} whileInView={{scaleX:1,opacity:1}} transition={{duration:1.3}} className="text-4xl md:text-5xl font-bold text-[#0f4a85] mb-6">
            About Maatangi Techwin
          </motion.h2>

          {/* Description */}
          <motion.p variants={fadeLeft} initial="hidden" whileInView="visible" className="text-gray-600 text-base md:text-lg leading-relaxed max-w-4xl mb-12">
            Maatangi Techwin is an IT company focused on providing practical, industry-oriented training and internship opportunities for students. We help students transform their academic knowledge into real-world technical skills through hands-on learning and live projects. Our programs cover modern technologies and essential professional skills required by today's industry.
          </motion.p>

          {/* Stats Grid */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {/* Stat 1 */}
            <motion.div variants={cardAnimation} whileHover={{y:-8, scale:1.03}} className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-3">
                <FaGraduationCap className="text-4xl text-blue-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#ffb703]"><Counter end={15} suffix='+' /></div>
              <div className="text-sm text-[#0f4a85] font-bold mt-1">Years Of Experience</div>
            </motion.div>

            {/* Stat 2 */}
            <motion.div variants={cardAnimation} whileHover={{y:-8, scale:1.03}} className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-3">
                <FaBookOpen className="text-4xl text-green-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#ffb703]"><Counter end={20} suffix='+' /></div>
              <div className="text-sm text-[#0f4a85] font-bold mt-1">Number Of Courses</div>
            </motion.div>

            {/* Stat 3 */}
            <motion.div variants={cardAnimation} whileHover={{y:-8, scale:1.03}} className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-violet-50 hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-3">
                <FaGlobe className="text-4xl text-purple-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#ffb703]"><Counter end={1200} suffix='+' /></div>
              <div className="text-sm text-[#0f4a85] font-bold mt-1">Students</div>
            </motion.div>

            {/* Stat 4 */}
            <motion.div variants={cardAnimation} whileHover={{y:-8, scale:1.03}} className="text-center p-6 rounded-lg bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-3">
                <FaBriefcase className="text-4xl text-orange-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#ffb703]"><Counter end={100} suffix='+' /></div>
              <div className="text-sm text-[#0f4a85] font-bold mt-1">Number Of Placements</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className='bg-gradient-to-b from-white to-[#E0F1FF] pt-8 pb-8'>
        <div className='max-w-7xl px-4 mx-auto py-8'>
          {/* container */}
          <div className='w-full max-7xl flex justify-center lg:flex-row gap-12'>
            {/* left */}
            <div className='flex flex-col w-[300px] pl-10 '>
              <h2 className=' text-[28px] lg:text-[3.125rem] font-bold'>
                <span className='block'>Why</span>
                <span className='block'>Maantagi Techwin</span>
              </h2>
              <p className='text-xl text-gray-600 mb-8 max-w-sm'>At Maatangi Techwin, you will</p>
              <div className='flex gap-4'>
                <button onClick={handlePrev} className="text-gray-700 hover:text-white hover:bg-[#ffb703] hover:border-[#ffb703] bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full border border-gray-200 z-10 cursor-pointer">
                  <IoIosArrowBack />
                </button>
                <button onClick={handleNext} className="text-gray-700 hover:text-white hover:bg-[#ffb703] hover:border-[#ffb703] bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full border border-gray-200 z-10 cursor-pointer">
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
            {/* right */}
            <div className=' w-full'>
              <div className='overflow-hidden'>
                <div
                  className='flex transition-transform duration-500 ease-in-out'
                  style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
                >
                  {sliderCards.map((card, index) => (
                    <div key={index} className="flex-shrink-0 w-full sm:px-3 py-4">
                      <div className={`h-full px-8 py-12 rounded-2xl shadow-xl transition-all duration-300 transform ${card.bgClass}`}>
                        <h2 className="text-2xl mb-4 font-bold text-[#0f4a85]">{card.title}</h2>
                        <p className="text-[15.945px] text-white">{card.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='mt-14'></div>
            </div>
          </div>
        </div>
      </section>
      {/* vision and misson */}

      <section className='bg-[#0f4a85] pt-8'>
          <div className='max-w-7xl px-4 mx-auto py-8'>
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className='text-center'>
                    <h1 className='text-[36px] font-extrabold text-white'>Vision & Mission</h1>
                    <p className='text-white text-md'>Maatangi Techwin is committed to building a transformative learning experience for all.Explore our mission and vision statements</p>
                </motion.div>
                {/* card */}
                <div class="flex flex-col w-full sm:flex-row gap-6 sm:gap-12 pb-10 lg:pb-35 mt-20">

                    <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" class="w-full border border-transparent hover:border-[#ffb703]  bg-white shadow-lg rounded-2xl overflow-hidden  transition-all duration-300">
                        <div className='overflow-hidden'>
                          <img class="w-full h-[280px] object-cover object-center transform transition-transform duration-500 hover:scale-110" src={vision} alt="vision" />
                        </div>
                        <div class="p-5 sm:p-15">
                            <h2 class="text-xl sm:text-2xl font-semibold text-[#1B3A6F] mb-4"> Vission</h2>
                            <ul class="list-disc pl-4 sm:pl-6 text-gray-700 space-y-2">
                              <li class="text-sm sm:text-[16px] leading-relaxed marker:text-[#ffb703] marker:text-2xl text-justify">To become a trusted platform for industry-focused IT training and career development.We aim to empower students with practical knowledge and real-world experience.We envision creating confident, skilled, and future-ready IT professionals.We continuously adapt our training to meet evolving technology and industry needs.Our vision is to bridge the gap between academic learning and professional careers.</li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeRight} initial="hidden" whileInView="visible" class="w-full border border-transparent hover:border-[#ffb703]  bg-white shadow-lg rounded-2xl overflow-hidden  transition-all duration-300">
                        <div className='overflow-hidden'>
                          <img class="w-full h-[280px] object-cover object-center transform transition-transform duration-500 hover:scale-110" src={mission}t="vision" />
                        </div>
                        <div class="p-5 sm:p-15">
                            <h2 class="text-xl sm:text-2xl font-semibold text-[#1B3A6F] mb-4"> Mission</h2>
                            <ul class="list-disc pl-4 sm:pl-6 text-gray-700 space-y-2">
                              <li class="text-sm sm:text-[16px] leading-relaxed marker:text-[#ffb703] marker:text-2xl text-justify">To provide quality, practical, and industry-relevant IT training to students.We focus on hands-on projects, modern technologies, and real development practices.Our trainers guide students to strengthen their technical and professional skills.We encourage problem-solving, innovation, teamwork, and continuous learning.Our mission is to help every learner become career-ready and industry-capable.</li>
                            </ul>
                        </div>
                    </motion.div>
                  
                </div>
          </div>
      </section>
      
      {/* our values */}
      <section className="py-16 px-4 bg-white">
        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" className="container mx-auto max-w-6xl">
               {/* content */}
              <div className=' border-4 border-[#ffb703] rounded-2xl shadow-2xl p-15 font-bold space-y-3 lg:w-[75%] relative '>
                <h1 className=' text-[3.125rem]'>Our Core Values</h1>
                <div className=' text-gray-500'>
                  <p className='font-normal'> <span className='font-bold'>Student-Centric: </span> We put students at the heart of everything <br /> we do, providing practical training, guidance, and support to help them <br /> achieve their career goals.</p>
                </div>
                <div className=' text-gray-500'>
                  <p className='font-normal'> <span className='font-bold'>Practical Learning: </span> We believe in learning by doing. Our programs <br /> focus on hands-on  projects, real-world applications, and practical <br />  exposure to modern technologies.</p>
                </div>
                <div className=' text-gray-500'>
                  <p className='font-normal'> <span className='font-bold'>Industry Relevance: </span> We continuously align our training with current industry <br /> requirements, helping students <br /> develop the technical skills and knowledge expected by employers.</p>
                </div>
                <div className=' text-gray-500'>
                  <p className='font-normal'> <span className='font-bold'>Innovation & Growth: </span> We encourage curiosity, creativity, problem-solving, <br /> and continuous learning to help students adapt to the rapidly changing IT industry.</p>
                </div>
                <div className=' text-gray-500'>
                  <p className='font-normal'> <span className='font-bold'>Integrity & Professionalism: </span> We promote honesty, responsibility, teamwork, <br />and professional ethics, preparing students not only to become skilled <br /> professionals but also responsible members of the workplace.</p>
                </div>
                {/* floating image */}
            <motion.div animate={{
              y: [0, -30, 30, 0],
            }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }} className=' border-2 shadow-2xl border-[#ffb703] rounded-2xl overflow-hidden absolute w-[60vh] h-[60vh] top-10 -right-60 '>
                  <img className='w-full h-full object-cover' src={group} alt="group student" />
                </motion.div>
              </div>
        </motion.div>
      </section>

      <section>
        <Footer/>
      </section>
    </>
  )
}

export default AboutPage