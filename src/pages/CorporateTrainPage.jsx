import React from 'react'
import NavTab from '../compnents/NavTab'
import { addAttrValue, motion } from 'motion/react'
import student from '../assets/images/StuWithLaptop.png'
import { Link } from 'react-router-dom'
import { FaCheckCircle } from "react-icons/fa";
import Footer from '../compnents/Footer'

import wipro from '../assets/images/MarqueeLogo/wipro.png'
import rioTinto from '../assets/images/MarqueeLogo/rioTinto.png'
import mando from '../assets/images/MarqueeLogo/mando.png'
import hcl from '../assets/images/MarqueeLogo/hcl.png'
import adani from '../assets/images/MarqueeLogo/adani.png'
import accenture from '../assets/images/MarqueeLogo/accenture.png'

import ExpertTrainer from '../assets/images/ExpertTrainer.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

import trainingSession from '../assets/images/TrainingSession.png'
import Trusted from '../assets/images/TrustedLeaers.png'
import { ImOffice } from 'react-icons/im'

const marqueeData=[
    {
        image:wipro
    },
    {
        image:rioTinto
    },
    {
        image:mando
    },
    {
        image:hcl
    },
    {
        image:adani
    },
    {
        image:accenture
    },
    {
        image:wipro
    },
    {
        image:rioTinto
    },
    {
        image:mando
    },
    {
        image:hcl
    },
    {
        image:adani
    },
    {
        image:accenture
    }
]

const cardData=[
    {
        id:1,
        title:"Performance Evaluation",
        para:"Regular assessments, progress tracking, and feedback mechanisms to ensure learning objectives are met and ROI is maximized."
    },
    {
        id:2,
        title:"Interactive Delivery",
        para:"Engaging hands-on sessions with real-world projects, case studies, and practical exercises using modern teaching methodologies."
    },
    {
        id:3,
        title:"Customized Curriculum",
        para:"Development of tailored training programs that align with your business objectives, industry standards, and employee roles."
    },
    {
        id:4,
        title:"Needs Analysis",
        para:"We begin by thoroughly analyzing your organization's specific training requirements and skill gaps through detailed consultations and assessments."
    },
]
const CorporateTrainPage = () => {
    return (
        <>
            <NavTab />
            {/* heading */}
            <section className='bg-gradient-to-b from-white to-[#E0F1FF] pt-8 pb-8'>
                <div className='max-w-7xl px-4 mx-auto py-8'>
                    {/* main heading */}
                    <motion.div initial={{ opacity: 0, skewY: 18 }} whileInView={{ opacity: 1, skewY: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className='text-center mt-5 sm:mt-6'>
                        <h1 className='text-3xl sm:text-4xl lg:text-[36px]  font-extrabold text-[#0f4a85]'>Corporate <span className='text-[#ffb703]'>Training</span></h1>
                    </motion.div>
                    {/* small heading */}
                    <motion.div initial={{ opacity: 0, skewY: 18 }} whileInView={{ opacity: 1, skewY: 0 }} transition={{ duration: 1.2 }} className='text-center sm:pt-10'>
                        <span className='inline-block uppercase px-4 sm:px-5 py-2 text-xs sm:text-sm bg-[#0f4a85]/70 text-white font-semibold rounded-3xl'>home corporate training</span>
                    </motion.div>
                </div>
            </section>

            {/* Transform Your Workforce with Expert Corporate Training */}
            <section className=' bg-gradient-to-b from-white to-[#E0F1FF] '>
                {/* image */}
                <div className='w-full h-[60vh] relative'>
                    <img className=' w-full h-full object-cover' src={student} alt="StudengWithlapto" />
                    {/* overlay */}
                    <div className=' bg-black/60 w-full h-full absolute inset-0 backdrop-blur-[1px]'></div>
                    {/* content */}
                    <div className=' absolute inset-0 space-y-5 flex flex-col items-center justify-center text-center'>
                        <h1 className='text-white text-2xl sm:text-3xl font-bold'>Transform Your Workforce with Expert Corporate Training</h1>
                        <p className='text-sm sm:text-base text-white'>Empower your team with cutting-edge skills and drive business success through our <br /> customized training solutions.</p>
                        <Link to="/contact" className="hidden lg:block">
                            <motion.button whileHover={{ scale: 1.08 }} transition={{ duration: 0.3, ease: "easeInOut" }} whileTap={{ scale: 0.95 }} className="bg-[#ffb703] px-5 py-2                      rounded-xl                         text-base                          font-semibold                           text-white                           cursor-pointer                           whitespace-nowrap                       " >
                                Schedule a Consultation
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Unlocking Success: Corporate Training Solutions */}
            <section className='bg-white pb-8' >
                <div className='max-w-7xl px-4 mx-auto py-8'>
                    {/* content */}
                    <div className='space-y-7'>
                        <motion.div initial={{ opacity: 0, skewY: 18 }} whileInView={{ opacity: 1, skewY: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className='text-center mt-5 sm:mt-6'>
                            <h1 className='text-3xl sm:text-4xl lg:text-[36px]  font-extrabold text-[#0f4a85]'>Unlocking Success: <span className='text-[#ffb703]'>Corporate</span> Training Solutions </h1>
                        </motion.div>
                        <p className='text-gray-600 text-md sm:text-base text-center tracking-wide leading-8'>Training is a fundamental part of any organization. Its main goal is to educate and upskill employees so they can deliver better performance, improve productivity, and contribute to overall business success. High Technologies Solutions has a proven record of providing the best corporate training in Lucknow & other city, offering personalized learning solutions after carefully analyzing each company's specific requirements. We deliver industry-focused corporate programs in areas such as Python (Base & Advanced), Python with AI & ML, Data Science & Analytics, Web & Full Stack Development, MERN/MEAN Stack, Digital Marketing, Cloud Computing (AWS/Azure), Cybersecurity, Business Analytics, and Soft Skills & Leadership, along with customized training options as per organizational needs.</p>
                    </div>
                    {/* botton images section */}
                    <div className='flex gap-5 mt-8'>
                        {/* left side */}
                        <div className='overflow-hidden rounded-2xl relative'>
                            <img className=' hover:scale-[1.05] transition-all duration-900' src={trainingSession} alt="interactive Training Sessions" />
                            {/* text */}
                            <div className=' absolute bottom-0  ' >
                                <h1 className=' text-2xl font-bold text-white p-4 bg-black/20 backdrop-blur-2xl rounded-xl border-l-4 ml-4'>Interactive Training Sessions</h1>
                            </div>
                        </div>
                        {/* right side */}
                        <div className='overflow-hidden rounded-2xl relative'>
                            <img className='rounded-2xl hover:scale-[1.05] transition-all duration-900' src={Trusted} alt="Trusted by Industry Leaders" />
                            {/* text */}
                            <div className=' absolute bottom-0  ' >
                                <h1 className=' text-2xl font-bold text-white p-4 bg-black/20 backdrop-blur-2xl rounded-xl border-l-4 ml-4'>Interactive Training Sessions</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* two column cards */}
            <section className='bg-gradient-to-b from-[#E0F1FF] to-[#E0F1FF] pb-8' >
                <div className='max-w-7xl px-4 mx-auto py-8'>
                    {/* two cards */}
                    <div className='flex items-center gap-7'>
                        {/* Card 1: Benefits */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 py-12  flex-1 border-t-4 border-[#ffb703]">
                            <h2 className="text-3xl font-bold text-[#0f4a85] mb-6 flex items-center">
                                Benefits of Our Corporate Training
                            </h2>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-[#ffb703] mr-3 mt-1">✓</span>
                                    <span className="text-gray-700">Flexible timings based on organizational requirements</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#ffb703] mr-3 mt-1">✓</span>
                                    <span className="text-gray-700">Customized training solutions for specific business needs</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#ffb703] mr-3 mt-1">✓</span>
                                    <span className="text-gray-700">Formal and informal training including workshops</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#ffb703] mr-3 mt-1">✓</span>
                                    <span className="text-gray-700">Small and large batch availability</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#ffb703] mr-3 mt-1">✓</span>
                                    <span className="text-gray-700">Live sessions, presentations, and mock interviews</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#ffb703] mr-3 mt-1">✓</span>
                                    <span className="text-gray-700">Focus on practical, real-world application</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#ffb703] mr-3 mt-1">✓</span>
                                    <span className="text-gray-700">Post-training support and resources</span>
                                </li>
                            </ul>
                        </div>
                        {/* Card 2: our clients */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#ffb703] space-y-5 flex-1">
                            <h2 className="text-3xl font-bold text-[#0f4a85] mb-6 flex items-center">
                                Corporate Training Counduect for
                            </h2>
                            <div className=' grid grid-cols-2 gap-3'>
                                <div>
                                    <ul className='space-y-3 cursor-pointer'>
                                        <li className=' p-2 text-md sm:text-base rounded-xl hover:bg-[#ffb703]'>Accenture</li>
                                        <li className=' p-2 text-md sm:text-base rounded-xl hover:bg-[#ffb703]'>Delta Corporation</li>
                                        <li className=' p-2 text-md sm:text-base rounded-xl hover:bg-[#ffb703]'>Mando Automotive</li>
                                        <li className=' p-2 text-md sm:text-base rounded-xl hover:bg-[#ffb703]'>Adani Group</li>
                                        <li className=' p-2 text-md sm:text-base rounded-xl hover:bg-[#ffb703]'>Rio Tinto</li>
                                        <li className=' p-2 text-md sm:text-base rounded-xl hover:bg-[#ffb703]'>Olympus Corporation</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className='space-y-3 cursor-pointer'>
                                        <li className=' p-2 text-md sm:text-base rounded-xl hover:bg-[#ffb703]'>NSG Group</li>
                                        <li className=' p-2 text-md sm:text-base rounded-xl hover:bg-[#ffb703]'>MESL Infrastructure</li>
                                        <li className=' p-2 text-md sm:text-base rounded-xl hover:bg-[#ffb703]'>HCL Technologies</li>
                                        <li className=' p-2 text-md sm:text-base rounded-xl hover:bg-[#ffb703]'>Wipro Technologies</li>
                                        <li className=' p-2 text-md sm:text-base rounded-xl hover:bg-[#ffb703]'>Tech Mahindra</li>
                                        <li className=' p-2 text-md sm:text-base rounded-xl hover:bg-[#ffb703]'>HCL Technologies</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* marquee section */}
            <section className=' bg-[#0f4a85] '>
                <div className='max-w-7xl px-4 mx-auto py-8'>
                    {/* main heading */}
                    <motion.div initial={{ opacity: 0, skewY: 18 }} whileInView={{ opacity: 1, skewY: 0 }}  transition={{ duration: 1.2 }} className='text-center mt-5 sm:mt-6'>
                        <h1 className='text-3xl sm:text-4xl lg:text-[36px]  font-extrabold text-white'>Trusted by Leading <span className='text-[#ffb703]'>Companies</span></h1>
                    </motion.div>
                    {/* slider */}
                    <div className='mt-8 sm:mt-12'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={50}
                            loop={true}
                            autoplay={{ delay: 0}}
                            speed={2000}
                            breakpoints={{
                                480: { slidesPerView: 2, spaceBetween: 15 },
                                640: { slidesPerView: 3, spaceBetween: 18 },
                                768: { slidesPerView: 4, spaceBetween: 20 },
                                1024: { slidesPerView: 5, spaceBetween: 20 },
                                1280: { slidesPerView: 7, spaceBetween: 20 }
                            }}
                            modules={[Pagination, Navigation, Autoplay]}
                            className="mySwiper"
                        >
                            {marqueeData.map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="bg-white p-3 sm:p-5 rounded-xl sm:rounded-2xl h-[90px] sm:h-[110px] flex items-center justify-center">
                                        <img src={item.image} alt="Recruiting company" className="max-w-full max-h-full object-contain" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            {/* training methodlogy */}
            <section className='bg-gradient-to-b from-[white] to-[#E0F1FF] pb-8 pt-6'>
                <div className='max-w-7xl px-4  mx-auto py-8 bg-white shadow rounded-2xl'>
                    {/* main heading */}
                    <motion.div initial={{ opacity: 0, skewY: 18 }} whileInView={{ opacity: 1, skewY: 0 }}  transition={{ duration: 1.2 }} className='text-center mt-5 sm:mt-6'>
                        <h1 className='text-3xl sm:text-4xl lg:text-[36px]  font-extrabold text-[#0f4a85]'>Our Training Methodology</h1>
                    </motion.div>
                    {/* cards */}
                    <div className=' space-y-14 cursor-pointer mt-16'>
                        {
                            cardData.map((item, idx) => (
                                <div className='flex items-center gap-5 group p-3 rounded-2xl hover:shadow 'key={idx}>
                                    <span className=' bg-[#0f4a85] text-[#ffb703] rounded-full  py-2 px-4 font-semibold text-lg group-hover:bg-[#ffb703] group-hover:text-[#0f4a85]'>
                                        {item.id}
                                    </span>
                                    <div>
                                        <h1 className='text-[#0f4a85] text-xl font-bold'>{item.title}</h1>
                                        <p className='text-md sm:text-base text-gray-600'>{item.para}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className='bg-white pb-8'>
                <div className='max-w-7xl px-4 mx-auto py-8'>
                    {/* two column */}
                    <div className='flex gap-8 items-center'>
                        {/* left side */}
                     <div className='space-y-6 w-1/2 border border-gray-200 border-l-8 border-l-[#0f4a85] p-3 rounded-2xl'>
                        <div className='space-y-4'>
                            <h1 className='text-2xl sm:text-3xl text-[#0f4a85] font-bold'>Meet Our Expert Trainer</h1>
                            <p className='text-md sm:text-base text-gray-600'>Our corporate trainers have over 10+ years of industry experience, working with top multinational companies. They bring real-world expertise and a strong command of software and workplace techniques to every training session.</p>
                        </div>
                        <div className='grid grid-cols-2 space-y-5 gap-3'>
                           <p className='flex items-center gap-6 text-md sm:text-base text-gray-600 p-4 shadow rounded-2xl'><span className='text-[#ffb703]'><FaCheckCircle size={20} /></span>Industry Certified Professionals</p>
                           <p className='flex items-center gap-6 text-md sm:text-base text-gray-600 p-4 shadow rounded-2xl'><span className='text-[#ffb703]'><FaCheckCircle size={20} /></span>Corporate Training Specialists</p>
                           <p className='flex items-center gap-6 text-md sm:text-base text-gray-600 p-4 shadow rounded-2xl'><span className='text-[#ffb703]'><FaCheckCircle size={20} /></span>Real-World Project Experience</p>
                           <p className='flex items-center gap-6 text-md sm:text-base text-gray-600 p-4 shadow rounded-2xl'><span className='text-[#ffb703]'><FaCheckCircle size={20} /></span>Excellent Communication Skills</p>
                        </div>
                    </div>   
                     {/* right side */}
                     <div className='w-1/2'>
                        <div className='overflow-hidden rounded-2xl'>
                            <img src={ExpertTrainer} alt="kd" />
                        </div>
                     </div>
                    </div>
                </div>
            </section>
                
            <Footer/>
        </>
    )
}

export default CorporateTrainPage