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
    return (
        <section className="bg-gradient-to-b from-white via-[#CEE0EF] to-white py-8 sm:py-10 overflow-hidden">
            <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 mx-auto">

                {/* Small heading */}
                <motion.div
                    initial={{ opacity: 0, skewY: 18 }}
                    whileInView={{ opacity: 1, skewY: 0 }}
                    // viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="text-center pt-6 sm:pt-10"
                >
                    <span className="inline-block uppercase px-4 sm:px-5 py-2 bg-[#0f4a85]/70 text-white text-xs sm:text-sm font-semibold rounded-3xl">
                        About Our Training Program
                    </span>
                </motion.div>

                {/* Main heading */}
                <motion.div
                    initial={{ opacity: 0, skewY: 10 }}
                    whileInView={{ opacity: 1, skewY: 0 }}
                    // viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="text-center mt-5 sm:mt-6"
                >
                    <h1 className="text-3xl sm:text-4xl lg:text-[36px] leading-tight font-extrabold text-[#0f4a85]">
                        Learn Today. Build Your{" "}
                        <span className="text-[#ffb703]">Career</span> Tomorrow.
                    </h1>

                    <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7 mt-4 max-w-3xl mx-auto">
                        Our training and internship programs are designed to bridge the gap between
                        academic knowledge and industry requirements through practical learning,
                        expert guidance and real-world projects.
                    </p>
                </motion.div>

                {/* Main content - stacks on mobile */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mt-12 sm:mt-16 lg:mt-20">

                    {/* Image side */}
                    <div className="w-full lg:w-1/2">
                        <div className="w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto lg:h-full min-h-[300px] sm:min-h-[400px] rounded-3xl overflow-hidden relative shadow-xl">

                            <motion.img
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                // viewport={{ once: true }}
                                transition={{ duration: 2 }}
                                className="w-full h-full object-cover"
                                src={trainningImg}
                                alt="Training Img"
                            />

                            {/* Training Domain badge */}
                            <motion.div
                                animate={{ x: [0, -10, 0, 10, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute top-3 left-3 sm:top-5 sm:left-5 bg-white py-2 px-3 sm:px-4 rounded-xl shadow-xl border border-[#0f4a85] text-center max-w-[150px] sm:max-w-none"
                            >
                                <h1 className="text-[#ffb703] text-xl sm:text-2xl font-bold">
                                    10 +
                                </h1>
                                <p className="text-[#0f4a85] font-semibold text-xs sm:text-base">
                                    Training Domain
                                </p>
                            </motion.div>

                            {/* Students badge */}
                            <motion.div
                                animate={{ x: [0, -10, 0, 10, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 bg-white py-2 px-3 sm:px-4 text-center rounded-xl shadow-xl border border-[#0f4a85] max-w-[160px] sm:max-w-none"
                            >
                                <h1 className="text-[#ffb703] text-xl sm:text-2xl font-bold">
                                    1000 +
                                </h1>
                                <p className="text-[#0f4a85] font-semibold text-xs sm:text-base">
                                    Students Trained
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Content / cards side */}
                    <div className="w-full lg:w-1/2">
                        <motion.h1
                            initial={{ opacity: 0, scale: 1.2 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            // viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                            className="text-base sm:text-lg lg:text-xl font-bold uppercase leading-6 sm:leading-7 text-blue-900"
                        >
                            Gain practical knowledge through structured training programs
                            designed around real industry requirements.
                        </motion.h1>

                        {/* Cards */}
                        <div className="mt-7 sm:mt-10 flex flex-col gap-4 sm:gap-5">
                            {cardData.map((item, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    // viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                                    key={item.id}
                                    className="bg-white border border-gray-300 border-l-4 sm:border-l-8 border-l-[#ffb703] rounded-2xl p-4 sm:p-5 shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-2xl hover:border-[#0f4a85] hover:border-l-[#0f4a85] group"
                                >
                                    {/* Top */}
                                    <div className="flex items-center gap-3 sm:gap-4 mb-2">
                                        <span className="shrink-0 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0f4a85] text-white font-bold text-base sm:text-lg transition-all duration-300 group-hover:bg-[#ffb703] group-hover:text-[#0f4a85]">
                                            {item.id}
                                        </span>

                                        <h3 className="text-base sm:text-xl font-bold text-[#0f4a85] leading-6 sm:leading-7">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7">
                                        {item.des}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTraining