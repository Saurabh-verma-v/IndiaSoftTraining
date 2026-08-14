import React from 'react'

import img1 from '../assets/images/testi-thumb3.png'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom';


const StartLearning = () => {

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

    return (
        <section className='bg-gradient-to-b from-white to-[#E0F1FF] pt-6 sm:pt-8 pb-8 overflow-hidden'>
            <div className='max-w-7xl px-4 sm:px-6 mx-auto'>
                <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mt-8 sm:mt-12 lg:mt-20'>
                    {/* left */}
                    <div className='w-full lg:w-1/2 h-full flex-1'>
                        <motion.h1
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            // viewport={{ once: true, amount: 0.2 }}
                            className='text-4xl sm:text-5xl lg:text-[60px] font-bold uppercase text-[#0f4a85] leading-tight lg:leading-[1.05] mt-4 lg:mt-20'
                        >Growup Your Learning 
                            Skills with <span className='text-[#ffb703]'>Maatangi Techwin</span>
                        </motion.h1>
                        <motion.p
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            // viewport={{ once: true, amount: 0.2 }}
                            className='text-sm sm:text-base text-gray-600 mt-6 sm:mt-8 lg:mt-10 leading-6'
                        >Maatangi Techwin the ultimate destination for knowledge seekers and educators alike. We are committed to transforming education</motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, originZ: 0 }}
                            whileInView={{ opacity: 1, scale: 1, originZ: 1 }}
                            // viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 1.4, ease: "circInOut" }}
                            className='w-full bg-[#0f4a85] py-6 sm:py-8 px-4 sm:px-6 rounded-2xl mt-8 sm:mt-10 lg:mt-15 font-semibold'
                        >
                            <h1 className='text-white text-3xl sm:text-4xl lg:text-5xl leading-tight'>Learn Anytime, Anywhere
                                Start Your Free Trial!
                            </h1>
                        </motion.div>
                        <div className='flex justify-center sm:justify-start lg:justify-center'>
                           <Link to="/contact">
                              <motion.button
                                whileHover={{ scale: 1.08 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                whileTap={{ scale: 0.9 }}
                                className='px-5 sm:px-6 py-3 font-semibold text-[#0f4a85] bg-[#ffb703] rounded-xl text-base sm:text-lg shadow cursor-pointer mt-8 sm:mt-10 lg:mt-12'
                              >
                              Contact Us
                              </motion.button>
                            </Link>
                        </div>
                    </div>
                    {/* right */}
                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        // viewport={{ once: true, amount: 0.2 }}
                        className='w-full lg:w-1/2 h-full flex-1'
                    >
                        <img
                            className='w-full h-auto max-h-[520px] object-contain'
                            src={img1}
                            alt="Maatangi Techwin learning"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    )
}

export default StartLearning