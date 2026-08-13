import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { data } from 'motion/react-client';
import { motion, scale } from 'motion/react';

const Data = [
    {
        title: "College Training",
        para: "Practical industry training for college students to build strong technical skills and gain real-world exposure.Programs focus on hands-on learning, projects, and industry-relevant applications."
    },
    {
        title: "Customize Training",
        para: "Customized training programs designed around specific technical requirements and industry needs.Training content, duration, and practical sessions can be tailored to your organization."
    },
    {
        title: "Softskill Training",
        para: "Develop essential communication, teamwork, leadership, and professional skills for career success.Our sessions help students and professionals become more confident and workplace-ready."
    },
    {
        title: "Inhouse Training",
        para: "Specialized training delivered at your organization according to your team's requirements.Practical sessions help employees improve their technical knowledge, productivity, and skills."
    },
]

   const fadeUp = {
        hidden: {
            opacity: 0,
            y: 60,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    }

const Events = () => {
    return (
        <section className='bg-white pt-18 pb-18'>
            <motion.div variants="fadeUp" variants={fadeUp} initial="hidden" whileInView="visible" className='max-w-7xl px-4 mx-auto py-8'>
                <Swiper 
                    slidesPerView={3}
                    autoplay={{
                        delay:0,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={2000}
                    spaceBetween={30}
                    navigation={true}
                    autoplay={true}
                    // spaceBetween={40}

                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {
                        Data.map((item, idx) => (
                            <SwiperSlide className=' shadow-xl rounded-xl' key={idx}>
                                <div className=' overflow-hidden'>
                                    {/* top */}
                                    <div className='bg-[#0f4a85] text-white text-lg font-bold text-center py-1'>{item.title}</div>
                                    {/* content */}
                                    <div className=' bg-[#E0F1FF]/15 p-5 text-gray-600 overflow-hidden'>
                                        <p>
                                            {item.para}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </motion.div>
        </section>
    )
}

export default Events