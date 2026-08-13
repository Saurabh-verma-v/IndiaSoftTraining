import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import banner1 from '../assets/images/bannerImg/banner1.png'
import banner2 from '../assets/images/bannerImg/banner2.png'
import banner3 from '../assets/images/bannerImg/banner3.png'
import banner4 from '../assets/images/bannerImg/banner4.png'

import { FaCheckCircle } from "react-icons/fa";
import { motion } from 'motion/react';


// const banner=[
//     {
//         title:""
//         image:banner1
//     },
//     {
//         image:banner2
//     },
//     {
//         image:banner3
//     },
//     {
//         image:banner4
//     },
// ]

const Hero = () => {
  
  return (
     <section>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='h-[70vh]'
      >
        <SwiperSlide className=' relative'>
            <img className='h-full w-full object-cover' src={banner1} alt="#" />
            {/* content */}
            <div className=' absolute  inset-0 max-w-8xl text-center top-15 -right-190'>
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{ duration:2}}  className='text-center  tracking-tight space-y-3'>
                    <h1 className='text-3xl font-extrabold uppercase text-black '>2/4/7 weeks</h1>
                    <h1 className='text-6xl font-extrabold uppercase text-white'>Summer / winter <br /> Internship Training</h1>
                    <h3 className='text-[#0f4a85] font-semibold text-3xl'>For Engineering Student/Professional</h3>
                    <p className='text-red-600 font-bold text-xl'>Eligibility : Diploma/B.Tech/BCA/BSc./BBA</p>
                </motion.div>
                <motion.button whileHover={{scale:1.2}} transition={{duration:0.3, ease:"easeInOut"}} whileTap={{scale:0.9}} className='mt-6 bg-[#054a85] px-5 py-2 rounded-xl text-lg font-semibold text-white   cursor-pointer'>Enroll Now</motion.button>
            </div>
        </SwiperSlide>
        {/* slide 2 */}
        <SwiperSlide className=' relative'>
            <img className='h-full w-full object-cover' src={banner2} alt="#" />
            {/* content */}
            <div className=' absolute inset-0 max-w-8xl  top-15 left-200'>
                <div className='tracking-tight space-y-6 text-center'>
                    <h1 className='text-4xl font-extrabold text-[#0f4a85]'>Industrial Trainning / <span className='text-[#ffb703]'>100 % Placement</span></h1>
                    <ul className='space-y-6 '>
                        <motion.li whileHover={{scale:1.2}} transition={{duration:0.3}} className='flex items-center gap-4 text-lg font-medium border-l-4 pl-3 border-l-yellow-500 group '><span className='text-[#0f4a85] group-hover:text-[#ffb703]'><FaCheckCircle /></span>In Campus / College Training</motion.li>
                        <motion.li whileHover={{scale:1.2}} transition={{duration:0.3}} className='flex items-center gap-4 text-lg font-medium border-l-4 pl-3 border-l-yellow-500 group '><span className='text-[#0f4a85] group-hover:text-[#ffb703]'><FaCheckCircle /></span>Webinar & Offline/Online Classes</motion.li>
                        <motion.li whileHover={{scale:1.2}} transition={{duration:0.3}} className='flex items-center gap-4 text-lg font-medium border-l-4 pl-3 border-l-yellow-500 group '><span className='text-[#0f4a85] group-hover:text-[#ffb703]'><FaCheckCircle /></span>Soft Skills & Personality Development</motion.li>
                        <motion.li whileHover={{scale:1.2}} transition={{duration:0.3}} className='flex items-center gap-4 text-lg font-medium border-l-4 pl-3 border-l-yellow-500 group '><span className='text-[#0f4a85] group-hover:text-[#ffb703]'><FaCheckCircle /></span>Guest Lecture by Experts</motion.li>
                        <motion.li whileHover={{scale:1.2}} transition={{duration:0.3}} className='flex items-center gap-4 text-lg font-medium border-l-4 pl-3 border-l-yellow-500 group '><span className='text-[#0f4a85] group-hover:text-[#ffb703]'><FaCheckCircle /></span>Hands on Practical</motion.li>
                    </ul>
                    <motion.button whileHover={{scale:1.2}} transition={{duration:0.3, ease:"easeInOut"}} whileTap={{scale:0.9}} className='mt-6 bg-[#ffb703] px-5 py-2 rounded-xl text-lg font-semibold text-white   cursor-pointer'>Enroll Now</motion.button>
                </div>
            </div>
        </SwiperSlide>
        {/* slide 3 */}
        <SwiperSlide className=' relative'>
            <img className='h-full w-full object-cover' src={banner3} alt="#" />
            {/* content */}
            <div className=' absolute inset-0 max-w-8xl  top-15 left-18'>
                <div className='tracking-tight space-y-6'>
                    <h1 className='text-6xl font-extrabold uppercase text-[#ffb703]'>Software / IT Courses</h1>
                    <ul className='space-y-6 '>
                        <motion.li whileHover={{zoom:1.2}} transition={{duration:0.3}} className='flex items-center gap-4 text-lg font-medium border-l-4 pl-3 border-l-yellow-500 group text-white'><span className='text-[#ffb703] group-hover:text-white'><FaCheckCircle /></span>Full Stack Development</motion.li>
                        <motion.li whileHover={{zoom:1.2}} transition={{duration:0.3}} className='flex items-center gap-4 text-lg font-medium border-l-4 pl-3 border-l-yellow-500 group text-white'><span className='text-[#ffb703] group-hover:text-white'><FaCheckCircle /></span>Web Design & Development</motion.li>
                        <motion.li whileHover={{zoom:1.2}} transition={{duration:0.3}} className='flex items-center gap-4 text-lg font-medium border-l-4 pl-3 border-l-yellow-500 group text-white'><span className='text-[#ffb703] group-hover:text-white'><FaCheckCircle /></span>Machine Learning</motion.li>
                        <motion.li whileHover={{zoom:1.2}} transition={{duration:0.3}} className='flex items-center gap-4 text-lg font-medium border-l-4 pl-3 border-l-yellow-500 group text-white'><span className='text-[#ffb703] group-hover:text-white'><FaCheckCircle /></span>Artificial Intelligence</motion.li>
                        <motion.li whileHover={{zoom:1.2}} transition={{duration:0.3}} className='flex items-center gap-4 text-lg font-medium border-l-4 pl-3 border-l-yellow-500 group text-white'><span className='text-[#ffb703] group-hover:text-white'><FaCheckCircle /></span>Data Science</motion.li>
                    </ul>
                    <motion.button whileHover={{scale:1.2}} transition={{duration:0.3, ease:"easeInOut"}} whileTap={{scale:0.9}} className='mt-2 ml-60 bg-[#ffb703] px-5 py-2 rounded-xl text-lg font-semibold text-white cursor-pointer'>Enroll Now</motion.button>
                </div>
            </div>
        </SwiperSlide>  
      </Swiper>
    </section>
  )
}

export default Hero


// {banner.map((item,idx)=>(
//             <SwiperSlide key={idx}>{item.image}</SwiperSlide>
//         ))}


// {banner.map((item,idx)=>(
//            <SwiperSlide key={idx}>
//             <img className='object-cover w-full h-full' src={item.image}/>
//            </SwiperSlide>
//          ))}