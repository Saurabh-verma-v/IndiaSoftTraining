import React from 'react'

import img1 from '../assets/images/testi-thumb3.png'
import { motion } from 'motion/react'

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
        <section className='bg-gradient-to-b from-white to-[#E0F1FF] pt-8 py-8'>
            <div className='max-w-7xl px-4 mx-auto'>
                <div className='flex gap-8 mt-25 '>
                    {/* left */}
                    <div className=' w-1/2 h-full flex-1'>
                        <motion.h1 variants={fadeLeft} initial="hidden" whileInView="visible"
 className='text-[60px] font-bold uppercase text-[#0f4a85] leading-15 mt-20'>Growup Your Learning 
                            Skills with <span className='text-[#ffb703]'>Maatangi Techwin</span>
                        </motion.h1>
                        <motion.p variants={fadeLeft} initial="hidden" whileInView="visible"
 className='text-[16px] text-gray-600 mt-10'>Maatangi Techwin the ultimate destination for knowledge seekers and educators alike. We are committed to transforming education</motion.p>

                        <motion.div initial={{opacity:0, scale:0.5,originZ:0}} whileInView={{opacity:1, scale:1, originZ:1}} transition={{duration:1.4, ease:"circInOut"}} className='w-full h-full bg-[#0f4a85] py-6 px-3 rounded-2xl mt-15 font-semibold'>
                            <h1 className='text-white text-5xl'>Learn Anytime, Anywhere
                                Start Your Free Trial!
                            </h1>
                        </motion.div>
                        <div className='mx-50'>
                            <motion.button whileHover={{scale:1.2}} transition={{duration:0.3, ease:"easeInOut"}} whileTap={{scale:0.9}} className=' px-6 py-3 font-semibold text-[#0f4a85] bg-[#ffb703] rounded-xl text-lg shadow cursor-pointer mt-20'>
                            Contact Us
                        </motion.button>
                        </div>
                    </div>
                    {/* right */}
                    <motion.div variants={fadeRight} initial="hidden" whileInView="visible"  className=' w-1/2 h-full flex-1'>
                        <img className='w-full h-full object-contain' src={img1} alt="gir_img" />
                    </motion.div>
                </div>

            </div>
        </section>
    )
}

export default StartLearning