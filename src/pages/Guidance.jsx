import React from 'react'
import NavTab from '../compnents/NavTab'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { GrAnnounce } from "react-icons/gr";
import Footer from '../compnents/Footer';

const Guidance = () => {
  return (
    <>
      <NavTab/>
      <section className='bg-gradient-to-b from-white to-[#E0F1FF] pt-8 pb-8'>
        <div className='max-w-7xl px-4 mx-auto '>
            <motion.div initial={{ opacity: 0, skewY: 18 }} whileInView={{ opacity: 1, skewY: 0 }} transition={{ duration: 1.2 }} className='text-center pt-6 sm:pt-10'>
                <span className='inline-block  px-4 sm:px-5 py-2 text-xs sm:text-sm bg-[#0f4a85]/70 text-white font-semibold rounded-3xl'>Trusted by 50,000+ Students Across India</span>
            </motion.div>
            <div className='text-center  max-w-3xl mx-auto space-y-5'>
                <motion.div initial={{ opacity: 0, skewY: 18 }} whileInView={{ opacity: 1, skewY: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className='text-center mt-5 sm:mt-6'>
                <h1 className=' text-3xl sm:text-4xl lg:text-[48px] leading-tight font-extrabold text-[#0f4a85]'>Shape Your Future with Expert Career Guidance in High Technologies</h1>
                </motion.div>
                <p className='text-gray-600'>Get personalized mentorship from industry experts. Discover the right tech career path in AI, Cloud Computing, Cybersecurity, Data Science, and more — tailored to your strengths and ambitions.</p>
                <Link to="/contact" className="mt-3">
                    <motion.button whileTap={{ scale: 0.95 }} className=" bg-[#ffb703] px-5 py-3 rounded-xl text-base font-semibold text-white cursor-pointer"> Get Free Career Assessment
                    </motion.button> 
                </Link>
            </div>
            {/* stat  */}
          <div className='bg-white p-5 rounded-2xl inline-flex items-center justify-center gap-20 mt-10 ml-80 shadow'>
            <div className='text-center'>
              <div className='text-[#ffb703] font-bold text-3xl'>15 + </div>
              <p className='text-gray-600 font-semibold'>Year Experience</p>
            </div>
            <div className='text-center'>
              <div className='text-[#ffb703] font-bold text-3xl'>50K +</div>
              <p className='text-gray-600 font-semibold'>Student Guidance</p>
            </div>
            <div className='text-center'>
              <div className='text-[#ffb703] font-bold text-3xl'>200 +</div>
              <p className='text-gray-600 font-semibold'>Industry Mentors</p>
            </div>
          </div>
        </div>

      </section>

      <section className='bg-white pt-8 pb-8'>
        <div className='max-w-7xl px-4 mx-auto'>
          <motion.div initial={{ opacity: 0, skewY: 18 }} whileInView={{ opacity: 1, skewY: 0 }} transition={{ duration: 1.2 }} className='text-center pt-6 sm:pt-10 mb-2'>
              <span className='inline-block  px-4 sm:px-5 py-2 text-xs sm:text-sm bg-[#0f4a85]/70 text-white font-semibold rounded-3xl'>Career Tracks</span>
            </motion.div>
            <div className='text-center space-y-3'>
              <h1 className='text-4xl font-bold text-[#0f4a85]'>Explore High-Tech Career Paths</h1>
              <p className='text-gray-600 text-md'>Choose from our expertly curated technology domains, <br /> each designed to launch your career in the most in-demand fields.</p>
            </div>
        </div>
      </section>

      <section  className='bg-white pt-8 pb-8'>
        <div className='max-w-7xl px-4 mx-auto'>
            <div  className=' bg-gray-100 p-20 rounded-2xl space-y-5 border-l-8 border-[#ffb703] p-5 rounded-2xl'>
              {/* icon */}
              <div>
                <GrAnnounce size={48} className=' bg-[#0f4a85]/20 text-[#0f4a85] p-2 rounded-2xl' />
              </div>
              <div className=' space-y-4'>
                <h1 className=' text-3xl font-bold text-[#0f4a85]'>Career In Digital Marketing: A Complete Guide for 2026</h1>
                <p className=' text-gray-600 text-md sm:text-base'>The best digital marketing career guide available on the internet.

                Thinking about building a career in Digital Marketing? Discover what the industry looks like in 2026, which skills and career paths are in demand, expected salaries, job and freelancing opportunities, and how you can get started. Read this practical career guide to make a smarter decision about your future.</p>
              </div>
              <div >
                <p className='bg-[#ffb703]/10 text-[#ffb703] font-semibold inline-flex py-1 px-2.5 rounded-2xl text-sm ml-5 mt-8'>Digital Marketer</p>
                <p className='bg-[#ffb703]/10 text-[#ffb703] font-semibold inline-flex py-1 px-2.5 rounded-2xl text-sm ml-5 mt-8'>Performance Marketer</p>
                <p className='bg-[#ffb703]/10 text-[#ffb703] font-semibold inline-flex py-1 px-2.5 rounded-2xl text-sm ml-5 mt-8'>SEO Professional</p>
                <p className='bg-[#ffb703]/10 text-[#ffb703] font-semibold inline-flex py-1 px-2.5 rounded-2xl text-sm ml-5 mt-8'>Google Ads Expert</p>
                <p className='bg-[#ffb703]/10 text-[#ffb703] font-semibold inline-flex py-1 px-2.5 rounded-2xl text-sm ml-5 mt-8'>Meta Ads Specialist</p>
                <p className='bg-[#ffb703]/10 text-[#ffb703] font-semibold inline-flex py-1 px-2.5 rounded-2xl text-sm ml-5 mt-8'>Social Media Specialist</p>
                <p className='bg-[#ffb703]/10 text-[#ffb703] font-semibold inline-flex py-1 px-2.5 rounded-2xl text-sm ml-5 mt-8'>Website Designer</p>
                <p className='bg-[#ffb703]/10 text-[#ffb703] font-semibold inline-flex py-1 px-2.5 rounded-2xl text-sm ml-5 mt-8'>E-mail Marketer</p>
                <p className='bg-[#ffb703]/10 text-[#ffb703] font-semibold inline-flex py-1 px-2.5 rounded-2xl text-sm ml-5 mt-8'>Affeliate Marketer</p>
              </div>
            </div>
        </div>
      </section>

      <section className="py-16 bg-[#ffb703]">
              <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{
                duration: 1
              }} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0f4a85] mb-4">
                  Ready to Launch Your Tech Career?
                </h2>
                <p className="text-[#0f4a85] text-lg mb-8 max-w-2xl mx-auto">
                  Get industry-ready with our comprehensive training programs. Enroll today and take the first step toward a successful career in IT.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/contact">
                    <motion.button whileHover={{ scale: 1.2 }} transition={{ duration: 0.3, ease: "easeInOut" }} whileTap={{ scale: 0.9 }} className="bg-[#0f4a85]  text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl cursor-pointer">
                      Enroll Now
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
      </section>

      <Footer/>
    </>
  )
}

export default Guidance