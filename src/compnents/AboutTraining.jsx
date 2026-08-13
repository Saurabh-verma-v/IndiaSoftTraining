import React from 'react'
import trainningImg from '../assets/images/TrainingImg.png'
import { motion } from 'motion/react'




const cardData = [
    {
        id: 1,
        title: "Practical Training",
        des: "Hands-on learning with projects, tools and real-world applications."
    },
    {
        id: 2,
        title: "Expert Trainers",
        des: "Learn from experienced professionals with practical industry knowledge."
    },
    {
        id: 3,
        title: "Industry Certification",
        des: "Receive certification that validates your training and skills."
    },
    {
        id: 4,
        title: "Career Support",
        des: "Get guidance to improve your career opportunities and professional readiness."
    },
]
const AboutTraining = () => {
    
    // fadeup animation
    const fadeUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  }

    return (
        <section className='bg-gradient-to-b from-white via-[#CEE0EF] to-white pt-8 pb-8'>
            <div className='max-w-7xl px-4 mx-auto py-8'>
                {/* small heading */}
                <motion.div initial={{ opacity: 0, skewY: 18 }} whileInView={{ opacity: 1, skewY: 0 }} transition={{ duration: 1.5 }} className='text-center pt-10'>
                    <span className=' uppercase px-5 py-1 bg-[#0f4a85]/70 text-white font-semibold rounded-3xl'>about our training program</span>
                </motion.div>
                {/* main heading */}
                <motion.div initial={{ opacity: 0, skewY: 10 }} whileInView={{ opacity: 1, skewY: 0 }} transition={{ duration: 1.2 }} className='text-center leading-17 '>
                    <h1 className='text-[36px] font-extrabold text-[#0f4a85]'>Learn Today. Build Your <span className='text-[#ffb703]'>Career</span> Tomorrow.</h1>
                    <p className='text-base text-gray-600'>Our training and internship programs are designed to  bridge the gap between academic <br /> knowledge and industry requirements through practical <br /> learning, expert guidance and real-world projects.</p>
                </motion.div>
                {/* tow column */}
                <div className='flex gap-8 mt-25 '>
                    {/* left */}
                    <div className=' w-1/2 h-full rounded-3xl overflow-hidden relative shadow-xl'>
                        <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} className='w-full h-full object-cover' src={trainningImg} alt="Training Img" />
                        {/* floating badge */}
                        <motion.div animate={{
                            x: [0, -15, 0, 15, 0],
                        }} transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }} className=' absolute bg-white py-2 px-1 rounded-xl top-0 shadow-xl border border-[#0f4a85] text-center'>
                            <h1 className=' text-[#ffb703] text-2xl font-bold'>10 +</h1>
                            <p className=' text-[#0f4a85] font-semibold text-lg'>Training Domain</p>
                        </motion.div>
                        <motion.div animate={{
                            x: [0, -15, 0, 15, 0],
                        }} transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }} className=' absolute bg-white py-2 px-1 text-center rounded-xl bottom-0 right-0 shadow-xl border border-[#0f4a85]'>
                            <h1 className=' text-[#ffb703] text-2xl font-bold '>1000 +</h1>
                            <p className=' text-[#0f4a85] font-semibold text-lg'>Students Trained</p>
                        </motion.div>
                    </div>
                    {/* right */}
                    <div className=' w-1/2 h-full'>
                        <motion.h1 initial={{opacity:0, scale:1.2}} whileInView={{opacity:1, scale:1}} transition={{duration:1.5}} className='text-xl font-bold uppercase text-blue-900'>Gain practical knowledge through structured training programs designed around real industry requirements.</motion.h1>

                        {/* cards */}
                        <div className="mt-10 flex flex-col gap-5">
                            {cardData.map((item, idx) => (
                                <motion.div initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.5 }}
                                    key={idx}
                                    className="bg-white border border-gray-300 border-l-4 md:border-l-8 border-l-[#ffb703] rounded-2xl p-2 shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#0f4a85] hover:border-l-[#0f4a85] group"
                                >
                                    {/* Top */}
                                    <div className="flex items-center gap-4 mb-2 ">

                                        <span className=" flex items-center justify-center w-10 h-10 rounded-full bg-[#0f4a85] text-white font-bold text-lg transition-all duration-300 group-hover:bg-[#ffb703] group-hover:text-[#0f4a85]">
                                            {item.id}
                                        </span>

                                        <h3 className="text-lg sm:text-xl font-bold text-[#0f4a85] leading-7">
                                            {item.title}
                                        </h3>

                                    </div>

                                    {/* Description */}
                                    <p className="text-sm sm:text-base text-gray-600 leading-7">
                                        {item.des}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>

                <div></div>
            </div>
        </section>
    )
}

export default AboutTraining