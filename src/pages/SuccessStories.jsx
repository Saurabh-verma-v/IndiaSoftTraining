import { motion } from 'motion/react'
import React from 'react'
import NavTab from '../compnents/NavTab'
import { IoStarSharp } from "react-icons/io5";

import profile1 from '../assets/images/ProfileImg/Profile1.png'
import profile5 from '../assets/images/ProfileImg/Profile5.png'
import profile2 from '../assets/images/ProfileImg/Profile2.png'
import profile6 from '../assets/images/ProfileImg/Profile6.png'
import profile3 from '../assets/images/ProfileImg/Profile3.png'
import { Link } from 'react-router-dom';
import Footer from '../compnents/Footer';

const StudentCard = [
    {
        image: profile1,
        name: "Adarsh Dubey",
        badge1: "Diploma In AutoCAD",
        rating: <IoStarSharp />,
        desc: "This 2-month course is really effective for my career growth. Shifting to a higher position with a higher salary in the same company is truly a nice experience.",
        multiBadge: [
            {
                b1: "Learned Required Skills",
                b2: "Effectively Understand Designing",
                b3: "Batch 2025-2026"
            }
        ]
    },
    {
        image: profile5,
        name: "Nisha Verma",
        badge1: "Advanced Digital Marketing Course",
        rating: <IoStarSharp />,
        desc: "This Advanced Digital Marketing Course has helped me a lot in learning new skills and using the latest AI tools to make my work easier. Now, I feel more confident and secure about my career.",
        multiBadge: [
            {
                b1: "Learned High Demand Skills",
                b2: "Effectively Use AI",
                b3: "Batch 2026"
            }
        ]
    },
    {
        image: profile2,
        name: "Azad Goswami",
        badge1: "AutoCAD",
        rating: <IoStarSharp />,
        desc: "The curriculum is highly industry-relevant. I learned AutoCAD, Revit, and BIM through completely practical classes and real-world projects. I was also placed as an AutoCAD Draftsman Intern at a reputed architectural and structural design firm in Noida.",
        multiBadge: [
            {
                b1: "Placed in Noida",
                b2: "Learned Practical Skills",
                b3: "Batch 2026"
            }
        ]
    },
    {
        image: profile6,
        name: "Ayesha Khan",
        badge1: "Advanced E-commerce",
        rating: <IoStarSharp />,
        desc: "If you seriously want to make e-commerce your full-time business, then this course will be very helpful for you.",
        multiBadge: [
            {
                b1: "Seller Central",
                b2: "Flipkart Seller Dashboard",
                b3: "Batch 2026"
            }
        ]
    },
    {
        image: profile3,
        name: "Yuraj Gupta",
        badge1: "Autocad & BIM Engineer",
        rating: <IoStarSharp />,
        desc: "The labs and the AutoCAD trainer were very helpful. HTS India gave me the practical skills and confidence needed to succeed in the industry. I now work as a Structural Engineer at a reputed company in Kalkaji, Delhi, with a higher salary.",
        multiBadge: [
            {
                b1: "BIM Engineer",
                b2: "IBM Certified",
                b3: "Batch 2026"
            }
        ]
    },
]

const SuccessStories = () => {
    return (
        <>
            <NavTab />
            <section className='bg-gradient-to-b from-white to-[#E0F1FF] pt-8 pb-8'>
                <div className='max-w-7xl px-4 mx-auto py-8'>
                    <div className='text-center space-y-3 sm:space-y-4'>
                        <motion.div
                            initial={{ opacity: 0, skewY: 18 }}
                            whileInView={{ opacity: 1, skewY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                            className='text-center mt-5 sm:mt-6'
                        >
                            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-[36px] leading-tight font-extrabold text-[#0f4a85] uppercase'>
                                Student <span className='text-[#ffb703]'>Success</span> Stories
                            </h1>
                        </motion.div>
                        <p className='text-center text-gray-600 text-sm sm:text-base px-4'>
                            Over 65,000+ learners have transformed their careers with HTS India. <br className='hidden sm:block' />
                            Read real experiences from students who mastered in-demand IT skills and landed <br className='hidden sm:block' />
                            dream jobs.
                        </p>

                        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 p-8 sm:p-5 border border-[#0f4a85] rounded-full inline-flex bg-white/50 mx-auto'>
                            <div className='text-center'>
                                <div className='text-[#ffb703] font-bold text-2xl sm:text-3xl'>65,000 +</div>
                                <p className='text-gray-600 font-semibold text-xs sm:text-sm'>Student Trained</p>
                            </div>
                            <div className='text-center'>
                                <div className='text-[#ffb703] font-bold text-2xl sm:text-3xl'>92 %</div>
                                <p className='text-gray-600 font-semibold text-xs sm:text-sm'>Placement Assistance</p>
                            </div>
                            <div className='text-center'>
                                <div className='text-[#ffb703] font-bold text-2xl sm:text-3xl'>4.9/5</div>
                                <p className='text-gray-600 font-semibold text-xs sm:text-sm'>Student Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* student section */}
            <section className='bg-white pt-4 sm:pt-8 pb-8'>
                <div className='max-w-7xl px-4 mx-auto py-4 sm:py-8'>
                    <div className='grid gap-5 sm:gap-7'>
                        {StudentCard.map((item, idx) => (
                            <div
                                className='flex flex-col md:flex-row gap-6 md:gap-10 items-center bg-gray-50 p-4 sm:p-6 rounded-3xl border border-gray-200 shadow'
                                key={idx}
                            >
                                {/* image */}
                                <div className='rounded-full w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] border-2 p-0.5 border-[#ffb703] flex-shrink-0'>
                                    <img
                                        className='rounded-full w-full h-full object-cover'
                                        src={item.image}
                                        alt={item.name}
                                    />
                                </div>
                                {/* content */}
                                <div className='space-y-2 sm:space-y-3 text-center md:text-left flex-1'>
                                    <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-[#0f4a85]'>
                                        {item.name}
                                    </h1>
                                    <p className='bg-[#ffb703]/10 text-[#ffb703] font-semibold inline-flex py-1 px-2.5 rounded-2xl text-xs sm:text-sm mx-auto md:mx-0'>
                                        {item.badge1}
                                    </p>
                                    <div className='flex items-center gap-1 sm:gap-2 text-yellow-400 justify-center md:justify-start'>
                                        <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp />
                                    </div>
                                    <p className='border-l-4 px-2 sm:px-3 border-[#0f4a85] text-gray-600 text-sm sm:text-base'>
                                        {item.desc}
                                    </p>
                                    <div className='flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3'>
                                        {item.multiBadge.map((badgess, idx) => (
                                            <React.Fragment key={idx}>
                                                <span className='bg-[#ffb703]/10 text-[#ffb703] font-semibold inline-flex py-1 px-2.5 rounded-2xl text-xs sm:text-sm'>
                                                    {badgess.b1}
                                                </span>
                                                <span className='bg-[#ffb703]/10 text-[#ffb703] font-semibold inline-flex py-1 px-2.5 rounded-2xl text-xs sm:text-sm'>
                                                    {badgess.b2}
                                                </span>
                                                <span className='bg-[#ffb703]/10 text-[#ffb703] font-semibold inline-flex py-1 px-2.5 rounded-2xl text-xs sm:text-sm'>
                                                    {badgess.b3}
                                                </span>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 sm:py-16 bg-[#ffb703]">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f4a85] mb-3 sm:mb-4">
                        Ready to Write Your Own Success Story?
                    </h2>
                    <p className="text-[#0f4a85] text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                        Get industry-ready with our comprehensive training programs. Enroll today and take the first step toward a successful career in IT.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.08 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#0f4a85] text-white px-6 sm:px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl cursor-pointer text-sm sm:text-base"
                            >
                                Enroll Now
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </>
    )
}

export default SuccessStories