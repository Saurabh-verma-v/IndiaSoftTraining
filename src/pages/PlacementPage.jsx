import React from 'react'
import banner from '../assets/images/MultiStu.png'
import { section } from 'motion/react-client'
import NavTab from '../compnents/NavTab'
import Footer from '../compnents/Footer'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import adani from '../assets/images/CompanyLogo/Adani.png'
import Berger from '../assets/images/CompanyLogo/Berger.png'
import coforge from '../assets/images/CompanyLogo/coforge.png'
import Deltoid from '../assets/images/CompanyLogo/Deltoid.png'
import Infosys from '../assets/images/CompanyLogo/Infosys.png'
import Manking from '../assets/images/CompanyLogo/Manking.png'
import TCS from '../assets/images/CompanyLogo/TCS.png'
import Toorent from '../assets/images/CompanyLogo/Toorent.png'
import Ultratech from '../assets/images/CompanyLogo/Ultratech.png'
import Zydus from '../assets/images/CompanyLogo/Zydus.png'


import vdo from '../assets/footevdo.mp4'
import { motion } from 'motion/react'


const sliderData = [
    {
        goal: "Goal One",
        title: "TO BUILD INDUSTRY-READY IT PROFESSIONALS.",
        para: "We provide practical, technology-focused training that helps students develop strong technical knowledge, problem-solving abilities, and hands-on experience aligned with current industry requirements."
    },
    {
        goal: "Goal Two",
        title: "TO BUILD STRONG INDUSTRY CONNECTIONS.",
        para: "We aim to develop meaningful relationships with IT companies, industry professionals, and technology experts to create valuable learning, internship, and career opportunities for our students."
    },
    {
        goal: "Goal Three",
        title: "TO PROMOTE CONTINUOUS LEARNING AND INNOVATION.",
        para: "We encourage students to explore emerging technologies, develop creative solutions, and continuously improve their technical skills to stay prepared for the rapidly evolving IT industry."
    },
    {
        goal: "Goal Four",
        title: "TO PROVIDE REAL-WORLD INDUSTRY EXPOSURE.",
        para: "We focus on practical projects, internships, workshops, live assignments, and hands-on training to help students understand how technology is applied in real professional environments."
    },
    {
        goal: "Goal Five",
        title: "TO SUPPORT STUDENTS IN BUILDING SUCCESSFUL CAREERS.",
        para: "Our career-focused approach helps students strengthen their technical and professional skills, prepare for interviews, build confidence, and take meaningful steps toward employment and long-term career growth."
    },
]

const companyData=[
    {
        logo:adani
    },
    {
        logo:Berger
    },
    {
        logo:coforge
    },
    {
        logo:Deltoid
    },
    {
        logo:Infosys
    },
    {
        logo:Infosys
    },
    {
        logo:Manking
    },
    {
        logo:TCS
    },
    {
        logo:Toorent
    },
    {
        logo:Ultratech
    },
    {
        logo:Zydus
    }
]

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



const PlacementPage = () => {
    return (
        <>  
            {/* navbar */}
            <NavTab />
            {/* banner */}
            <section>
                {/* Hero with image */}
                <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[75vh] overflow-hidden">

                    {/* Background Video */}
                    <motion.img initial={{scale:1}} whileInView={{scale:1.5}} transition={{duration:9, ease:'linear', repeat:Infinity, repeatType: "reverse"}}  src={banner} alt="banner" />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-black/20"></div>
                </div>
            </section>
            {/* overview */}
            <section>
                <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                    <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all hover:scale-[1.02] duration-300">
                        <div className="relative">
                            {/* Decorative top bar */}
                            <motion.div initial={{scaleX:0}} whileInView={{scaleX:1}} style={{originX:0.5}} transition={{duration:2, ease:'linear'}} className="h-2 bg-[#ffb703]"></motion.div>

                            <div className="p-8 sm:p-12 lg:p-16">
                                {/* Icon/Decoration */}
                                <div className="flex justify-center mb-6">
                                    <div className="bg-[#ffb703] p-4 rounded-full shadow-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>

                                <motion.h1 initial={{scaleX:0}} whileInView={{scaleX:1}} style={{originX:0.5}} transition={{duration:1.3, ease:'linear'}} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-gray-600 tracking-tight">
                                    <span className="bg-clip-text text-transparent bg-[#0f4a85]">
                                        Placement Overview
                                    </span>
                                </motion.h1>

                                <div className="mt-8 space-y-6 text-gray-700 text-lg sm:text-xl leading-relaxed">
                                    <p className="font-medium">
                                        Turning Skills Into Successful Careers
                                    </p>

                                    <motion.p variants={fadeLeft} initial="hidden" whileInView="visible" className="border-l-4 border-[#ffb703] pl-6 italic text-gray-600">
                                        At Maatangi Techwin, we transform technical skills and career aspirations into meaningful professional opportunities. Our focus is to prepare students with the knowledge, practical experience, and confidence required to begin their careers in the IT industry
                                    </motion.p>

                                    <motion.p variants={fadeRight} initial="hidden" whileInView="visible" className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                                        Our goal is not just to provide training, but to help students bridge the gap between learning and employment. With continuous guidance and career support, we help learners take confident steps toward opportunities in the growing IT industry.
                                    </motion.p>
                                </div>

                                {/* Statistics or Highlights */}
                                <motion.div  variants={fadeUp} initial="hidden" whileInView="visible" className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300 border-2 border-[#ffb703]">
                                        <div className="text-3xl font-bold text-[#0f4a85]">500+</div>
                                        <div className="text-sm text-gray-600 mt-1">Companies Visited</div>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300 border-2 border-[#ffb703]">
                                        <div className="text-3xl font-bold text-[#0f4a85]">95%</div>
                                        <div className="text-sm text-gray-600 mt-1">Placement Rate</div>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300 border-2 border-[#ffb703]">
                                        <div className="text-3xl font-bold text-[#0f4a85]">1000+</div>
                                        <div className="text-sm text-gray-600 mt-1">Students Placed</div>
                                    </div>
                                </motion.div>

                                {/* Call to Action */}
                                <div className="mt-10 text-center">
                                    <motion.button whileHover={{scale:1.2}} transition={{duration:0.3, ease:"easeInOut"}} whileTap={{scale:0.9}} className="bg-[#ffb703] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl   text-lg">
                                        Join Our Placement Cell
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* our goals */}
            <section className='bg-white pt-8 pb-8'>
                <div className='max-w-7xl px-4 mx-auto py-8'>
                    {/* main heding */}
                    <motion.div initial={{skewY:18}} whileInView={{skewY:0}} transition={{duration:1.3}} className='text-center leading-17 '>
                        <h1 className='text-[36px] font-extrabold text-[#0f4a85]'>Our <span className='text-[#ffb703]'>Goals</span></h1>
                    </motion.div>
                    <div className=' text-center'>
                        <p className='text-gray-600 text-md'>At Maatangi Techwin, our goal is to empower students with practical IT skills, real-world experience, and the confidence needed to build successful careers in the technology industry.</p>
                    </div>

                    {/* slider */}
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={true}
                        navigation={true}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper mt-8"
                    >
                        {
                            sliderData.map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    <div class="h-full p-4 sm:p-8 rounded-2xl overflow-hidden  bg-whitehover:bg-[#fffefa] border border-[#f7b822] sm:border-white hover:border-[#f7b822]" >
                                        <h2 className='lg:text-[28px] md:text-[15px] text-[14px] font-bold text-[#0f4a85] mb-4'>{item.goal}</h2>
                                        <p class="text-[#212529] font-bold lg:text-[17px] md:text-[15.945px] sm:text-[14.882px] text-[14.882px] mb-2">{item.title}</p>
                                        <p class="text-[#212529] lg:text-[17px] md:text-[15.945px] sm:text-[14.882px] text-[14.882px]">{item.para}</p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>

                </div>
            </section>
            {/* video section */}
            <section className='bg-white pt-8 pb-8'>
                <div className='max-w-7xl px-4 mx-auto py-8'>
                    <div className='rounded-2xl border border-amber-400 overflow-hidden blur-[0px] w-full h-[70vh]'>
                       <video className='w-full h-full object-cover' src={vdo}
                       controls={true}
                       autoPlay={true}
                       loop={true}>
                       </video>
                       {/* overlay */}
                       <div className=' absolute w-1/2 bg-gradient-to-r from-black/100 to-black/0 h-full inset-0'></div>
                       {/* content */}
                       <div className=' absolute inset-0 left-10 top-10 max-w-2xl space-y-5'>
                            <h1 className=' text-white text-3xl font-bold leading-12 tracking-normal'>
                                BUILD SKILLS. <br />
                                GAIN EXPERIENCE. <br />
                                START YOUR CAREER.
                            </h1>
                            <p className=' p-5 text-white backdrop-blur-2xl rounded-xl border-l-4 border-[#ffb703]'>From hands-on training and internships to career guidance, Maatangi Techwin helps students turn their skills into meaningful professional opportunities.</p>
                       </div>
                    </div>
                </div>
            </section>
            {/* Recruiters */}
            <section className='bg-[#DFE4F2] rounded-3xl  py-7 md:py-10 lg:py-14 px-4 md:px-6 lg:px-8'>
                <div className='max-w-7xl px-4 mx-auto py-8'>
                    <div  className='block md:flex justify-between items-center'>
                        <motion.h2 variants={fadeLeft} initial="hidden" whileInView="visible" class=" text-[22px] sm:text-[28px] lg:text-[3.125rem] font-bold text-[#172F64]  pb-2">Our Recruiters</motion.h2>
                        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" class="w-full md:w-[60%] text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] md:ml-auto">Our recruitment partners include a wide range of industry leaders, across disciplines, fields, and professional landscapes.</motion.p>
                    </div>

                    <div className='text-center mt-20'>
                        <motion.h1 initial={{scaleX:0}} whileInView={{scaleX:1}} style={{originX:0.5}} transition={{duration:1.8, ease:'linear'}}  className='text-3xl font-bold text-[#172F64]'>Company Visited for Placement</motion.h1>
                    </div>

                    {/* marquee effect */}
                    <div className='mt-17'>
                        <Swiper
                            slidesPerView={7}
                            spaceBetween={20}
                            loop={true}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            autoplay={{
                                delay:0,
                                disableOnInteraction: false,
                            }}
                            speed={4000}
                            // navigation={true}
                            modules={[Pagination, Navigation ,Autoplay]}
                            className="mySwiper"
                        >
                            {companyData.map((item,idx)=>(
                                <SwiperSlide key={idx}>
                                    <div className='bg-white p-5 rounded-2xl'>
                                        <img src={item.logo}/>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
            {/* footer */}
            <Footer/>
        </>
    )
}

export default PlacementPage