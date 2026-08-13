import React, { useRef } from 'react'
import vdo from '../assets/maatangi_techwin_vdo.mp4'
import { motion } from 'motion/react'
// import { motion, useScroll, useTransform } from 'motion/react'

const Video = () => {

  return (
    <section  className='bg-[#0f4a85] pt-8 pb-8'>
        <div className='max-w-7xl px-4 mx-auto py-8'>
            {/* vdo */}
            <motion.div initial={{scale:0.5, opacity:0, originZ:0}} whileInView={{scale:1,opacity:1, originZ:1}} transition={{duration:2}} className='border rounded-2xl overflow-hidden border-2'>
                <video
                controls
                autoPlay
                loop
                src={vdo}>

                 </video>
            </motion.div>
        </div>
    </section>
  )
}

export default Video