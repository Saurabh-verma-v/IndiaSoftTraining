import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow, Autoplay,Navigation} from 'swiper/modules';

import ai from '../assets/images/OurProgramimg/AI.png'
import language from '../assets/images/OurProgramimg/Language.png'
import marketing from '../assets/images/OurProgramimg/D_Marketing.png'
import Web from '../assets/images/OurProgramimg/Web_Design.png'
import software from '../assets/images/OurProgramimg/S_Testing.png'

import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const sliderData=[
    {
        image:ai,
        title:"Artificial Intelligence",
        duration:"4-8 Week",
        btntext:"Learn More",
        icno:<IoIosArrowRoundForward size={34} />
    },
    {
        image:language,
        title:"Python/Java/C++",
        duration:"4-8 Week",
        btntext:"Learn More",
        icno:<IoIosArrowRoundForward size={34} />
    },
    {
        image:marketing,
        title:"Digital Marketing Training",
        duration:"4-8 Week",
        btntext:"Learn More",
        icno:<IoIosArrowRoundForward size={34} />
    },
    {
        image:Web,
        title:"Web Design Training",
        duration:"4-8 Week",
        btntext:"Learn More",
        icno:<IoIosArrowRoundForward size={34} />
    },
    {
        image:software,
        title:"Sowtware Testing Training",
        duration:"4-8 Week",
        btntext:"Learn More",
        icno:<IoIosArrowRoundForward size={34} />
    }
]


const OurPrograms = () => {
    return (
        <section className='bg-gradient-to-b from-white to-[#E0F1FF] pt-8 pb-8'>
            <div className='max-w-7xl px-4 mx-auto py-8'>
                {/* small heading */}
                <motion.div initial={{ opacity: 0, skewY: 18 }} whileInView={{ opacity: 1, skewY: 0 }} transition={{ duration: 1.2 }} className='text-center pt-6 sm:pt-10'>
                    <span className='inline-block uppercase px-4 sm:px-5 py-2 text-xs sm:text-sm bg-[#0f4a85]/70 text-white font-semibold rounded-3xl'>EXPLORE OUR PROGRAMS</span>
                </motion.div>
                {/* main heading */}
                <motion.div initial={{ opacity: 0, skewY: 18 }} whileInView={{ opacity: 1, skewY: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className='text-center mt-5 sm:mt-6'>
                    <h1 className='text-3xl sm:text-4xl lg:text-[36px] leading-tight font-extrabold text-[#0f4a85]'>Choose the Right <span className='text-[#ffb703]'>Training</span> for Your Career</h1>
                </motion.div>

                {/* scroll animation */}
                <div className='mt-10 sm:mt-14'>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        autoplay={true}
                        pagination={true}
                        // speed={5000}
                        loop={true}
                        navigation={true}
                        modules={[EffectCoverflow,Autoplay,Navigation]}
                        className="mySwiper "
                    >
                        {
                            sliderData.map((item, idx) => (
                                <SwiperSlide key={idx} className='overflow-hidden group'>
                                    <img
                                        className='w-full aspect-[16/10] sm:aspect-[4/3] object-cover rounded-t-2xl group-hover:scale-105 transition-all duration-300'
                                        src={item.image}
                                        alt={item.title}
                                    />
                                    <div className='bg-[#0f4a85] px-4 py-3 sm:px-3 sm:py-2 rounded-b-2xl'>
                                        <h1 className='text-white text-base sm:text-[18px] font-semibold leading-6'>{item.title}</h1>
                                        <p className='text-white text-xs sm:text-[14px]'>{item.duration}</p>
                                        <button className=' cursor-pointer flex items-center text-[#ffb703] font-bold group-hover:scale-105 transition-all duration-200'>
                                            {item.btntext}
                                            <span>{item.icno}</span>
                                        </button>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                {/* view all button */}
                <Link to="/program" className="block w-fit mx-auto">
                    <motion.button whileHover={{scale:1.2}} transition={{duration:0.3, ease:"easeInOut"}} whileTap={{scale:0.9}} className='flex items-center px-5 sm:px-6 py-3 font-semibold text-[#0f4a85] bg-[#ffb703] rounded-xl text-sm sm:text-md shadow cursor-pointer mx-auto mt-12 sm:mt-20'>
                    Explore More
                    <IoIosArrowRoundForward size={34} />
                </motion.button>
                </Link>
            </div>
        </section>
    )
}

export default OurPrograms