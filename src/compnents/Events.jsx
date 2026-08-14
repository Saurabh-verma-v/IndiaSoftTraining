import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'motion/react';

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
        <section className='bg-white pt-8 sm:pt-12 lg:pt-18 pb-8 sm:pb-12 lg:pb-18 overflow-hidden'>
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                // viewport={{ once: true, amount: 0.15 }}
                className='max-w-7xl px-3 sm:px-4 mx-auto py-6 sm:py-8'
            >
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 18,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={2000}
                    spaceBetween={14}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper !pb-2"
                >
                    {
                        Data.map((item, idx) => (
                            <SwiperSlide className='shadow-xl rounded-xl h-auto' key={idx}>
                                <div className='overflow-hidden rounded-xl h-full flex flex-col'>
                                    {/* top */}
                                    <div className='bg-[#0f4a85] text-white text-base sm:text-lg font-bold text-center py-2 px-3 min-h-10 flex items-center justify-center'>
                                        {item.title}
                                    </div>

                                    {/* content */}
                                    <div className='bg-[#E0F1FF]/15 p-4 sm:p-5 text-gray-600 flex-1'>
                                        <p className='text-sm sm:text-base leading-6 sm:leading-7'>
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