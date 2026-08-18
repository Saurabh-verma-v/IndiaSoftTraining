import React from 'react'
import NavTab from '../compnents/NavTab'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom';
import Footer from '../compnents/Footer'

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaBrain } from "react-icons/fa";
import { MdAppSettingsAlt } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";
import { MdScience } from "react-icons/md";
import { SiCardmarket } from "react-icons/si";
import Campus from '../assets/images/CampusNetwork.png'
import WhyChoose from '../assets/images/WhyChoose.png'

const featureCard=[
  {
    icon:<MdAppSettingsAlt size={38} className='text-white' />,
    title:"App Development",
    para:"Android and iOS app development using Flutter, React Native, and native technologies."
  },
  {
    icon:<FaCode size={38} className='text-white' />,
    title:"Web Development",
    para:"From HTML/CSS basics to advanced MERN/MEAN stack web applications."
  },
  {
    icon:<FaCloud size={38} className='text-white' />,
    title:"Cloud Computing",
    para:"Hands-on exposure to AWS, Azure, and Google Cloud platforms with real projects."
  },
  {
    icon:<MdScience size={38} className='text-white' />,
    title:"Data Science",
    para:"Data analysis, visualization, and decision-making insights with Python and R."
  },
  {
    icon:<SiCardmarket size={38} className='text-white' />,
    title:"Digital Marketing",
    para:"SEO, social media marketing, Google Ads, content strategy, and performance analytics."
  },
  {
    icon:<FaBrain size={38} className='text-white' />,
    title:"AI & Machine Learning",
    para:"Fundamentals, real-world projects, and industry use cases with hands-on Python implementation."
  },
]

const CampusTrainPage = () => {
  return (
    <>
      <NavTab />
      {/* heading */}
      <section className='bg-gradient-to-b from-white to-[#E0F1FF] pt-8 pb-8'>
        <div className='max-w-7xl px-4 mx-auto py-8'>
          {/* main heading */}
          <motion.div initial={{ opacity: 0, skewY: 18 }} whileInView={{ opacity: 1, skewY: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className='text-center mt-5 sm:mt-6'>
            <h1 className='text-3xl sm:text-4xl lg:text-[36px]  font-extrabold text-[#0f4a85]'>College <span className='text-[#ffb703]'>Training</span></h1>
          </motion.div>
          {/* small heading */}
          <motion.div initial={{ opacity: 0, skewY: 18 }} whileInView={{ opacity: 1, skewY: 0 }} transition={{ duration: 1.2 }} className='text-center sm:pt-10'>
            <span className='inline-block uppercase px-4 sm:px-5 py-2 text-xs sm:text-sm bg-[#0f4a85]/70 text-white font-semibold rounded-3xl'>Home
              College Training</span>
          </motion.div>
        </div>
      </section>

      {/* powering Students: Campus Training Program */}
      <section className='bg-white' >
        <div className='max-w-7xl px-4 mx-auto py-8'>
          {/* content */}
          <div className='space-y-7'>
            <motion.div initial={{ opacity: 0, skewY: 18 }} whileInView={{ opacity: 1, skewY: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className='text-center mt-5 sm:mt-6'>
              <h1 className='text-3xl sm:text-4xl lg:text-[36px]  font-extrabold text-[#0f4a85]'>Empowering Students: <span className='text-[#ffb703]'>Campus</span> Training Program </h1>
            </motion.div>
            <p className='text-gray-600 text-md sm:text-base text-center tracking-wide leading-8'>At High Technologies Solutions, we understand the ever-evolving landscape of high-tech industries. To stay ahead in today's competitive world, students must develop strong technical foundations and practical skills. Our college training solutions are designed to empower students to thrive in a dynamic, fast-paced environment.</p>
          </div>
          {/* botton images section */}
        </div>
      </section>

      {/* big cards grid */}
      <section className='bg-white pt-8 pb-8'>
        <div className='max-w-7xl px-4 mx-auto py-8'>
          {/* two column */}

          <div className='flex gap-6'>
            {/* left */}
            <div className='overflow-hidden space-y-7 bg-white rounded-2xl shadow w-1/2 '>
              <div className=' bg-[#0f4a85] p-4 w-full px-6 py-6 '>
                <h1 className='text-white text-3xl sm:4xl font-bold'>Our Campus Network</h1>
              </div>
              <div className='px-6'>
                <h2 className='text-[#0f4a85] text-xl font-bold'>Colleges Where Maatangi Techwin Has Conducted Campus Training</h2>
              </div>
              <div className='px-6'>
                <ul className='space-y-6 list-none'>
                  <li className='flex items-center gap-4 p-2  text-gray-600 text-md sm:text-base rounded-2xl hover:bg-[#ffb703] group'> <span className='bg-yellow-500 text-[blue] rounded-full p-1 group-hover:bg-[blue] group-hover:text-yellow-500'><MdKeyboardDoubleArrowRight size={16} /></span> Yamuna Group of Institutions, Yamuna Nagar</li>
                  <li className='flex items-center gap-4 p-2  text-gray-600 text-md sm:text-base rounded-2xl hover:bg-[#ffb703] group'> <span className='bg-yellow-500 text-[blue] rounded-full p-1 group-hover:bg-[blue] group-hover:text-yellow-500'><MdKeyboardDoubleArrowRight size={16} /></span> JIMS, Greater Noida</li>
                  <li className='flex items-center gap-4 p-2  text-gray-600 text-md sm:text-base rounded-2xl hover:bg-[#ffb703] group'> <span className='bg-yellow-500 text-[blue] rounded-full p-1 group-hover:bg-[blue] group-hover:text-yellow-500'><MdKeyboardDoubleArrowRight size={16} /></span> Swami Vivekanand Subharti University (SVSU), Meerut</li>
                  <li className='flex items-center gap-4 p-2  text-gray-600 text-md sm:text-base rounded-2xl hover:bg-[#ffb703] group'> <span className='bg-yellow-500 text-[blue] rounded-full p-1 group-hover:bg-[blue] group-hover:text-yellow-500'><MdKeyboardDoubleArrowRight size={16} /></span> World College of Technology & Management (WCTM), Gurugram</li>
                  <li className='flex items-center gap-4 p-2  text-gray-600 text-md sm:text-base rounded-2xl hover:bg-[#ffb703] group'> <span className='bg-yellow-500 text-[blue] rounded-full p-1 group-hover:bg-[blue] group-hover:text-yellow-500'><MdKeyboardDoubleArrowRight size={16} /></span> Institute of Technology & Management (ITM), Aligarh</li>
                  <li className='flex items-center gap-4 p-2  text-gray-600 text-md sm:text-base rounded-2xl hover:bg-[#ffb703] group'> <span className='bg-yellow-500 text-[blue] rounded-full p-1 group-hover:bg-[blue] group-hover:text-yellow-500'><MdKeyboardDoubleArrowRight size={16} /></span> Delhi Technological University (DTU), Delhi</li>
                  <li className='flex items-center gap-4 p-2  text-gray-600 text-md sm:text-base rounded-2xl hover:bg-[#ffb703] group'> <span className='bg-yellow-500 text-[blue] rounded-full p-1 group-hover:bg-[blue] group-hover:text-yellow-500'><MdKeyboardDoubleArrowRight size={16} /></span> Maharaja Agrasen Institute of Technology, Delhi</li>
                  <li className='flex items-center gap-4 p-2  text-gray-600 text-md sm:text-base rounded-2xl hover:bg-[#ffb703] group'> <span className='bg-yellow-500 text-[blue] rounded-full p-1 group-hover:bg-[blue] group-hover:text-yellow-500'><MdKeyboardDoubleArrowRight size={16} /></span> Guru Gobind Singh Indraprastha University, Delhi</li>
                </ul>
              </div>
            </div>
            {/* right */}
            <div className='w-1/2'>
              <div className='overflow-hidden rounded-2xl'>
                <img className='w=full h-full rounded-2xl' src={Campus} alt="Our Campus Network" />
              </div>
            </div>
          </div>

          {/* botton part card */}
          <div className='flex gap-6 mt-20'>

            {/* left */}
            <div className='w-1/2'>
              <div className='overflow-hidden rounded-2xl'>
                <img className='w=full h-full rounded-2xl' src={WhyChoose} alt="Our Campus Network" />
              </div>
            </div>

            {/* right */}
            <div className='overflow-hidden space-y-7 bg-white rounded-2xl shadow w-1/2 '>
              <div className=' bg-[#0f4a85] p-4 w-full px-6 py-6 '>
                <h1 className='text-white text-3xl sm:4xl font-bold'>Why Choose Maatangi Techwin</h1>
              </div>
              <div className='px-6'>
                <h2 className='text-[#0f4a85] text-xl font-bold'>Why Choose Maatangi Techwin for College Training</h2>
              </div>
              <div className='px-6'>
                <ul className='space-y-6 list-none'>
                  <li className='flex items-center gap-4 p-2  text-gray-600 text-md sm:text-base rounded-2xl hover:bg-[#ffb703] group'> <span className='bg-yellow-500 text-[blue] rounded-full p-1 group-hover:bg-[blue] group-hover:text-yellow-500'><MdKeyboardDoubleArrowRight size={16} /></span> Versatile & Customizable Workshops: Programs tailored to college and student requirements across multiple technologies.</li>
                  <li className='flex items-center gap-4 p-2  text-gray-600 text-md sm:text-base rounded-2xl hover:bg-[#ffb703] group'> <span className='bg-yellow-500 text-[blue] rounded-full p-1 group-hover:bg-[blue] group-hover:text-yellow-500'><MdKeyboardDoubleArrowRight size={16} /></span> Experienced Faculty: Industry-experienced trainers sharing practical insights and latest trends.</li>
                  <li className='flex items-center gap-4 p-2  text-gray-600 text-md sm:text-base rounded-2xl hover:bg-[#ffb703] group'> <span className='bg-yellow-500 text-[blue] rounded-full p-1 group-hover:bg-[blue] group-hover:text-yellow-500'><MdKeyboardDoubleArrowRight size={16} /></span> State-of-the-Art Infrastructure: Facilities capable of handling batches up to 100 students with personalized attention.</li>
                  <li className='flex items-center gap-4 p-2  text-gray-600 text-md sm:text-base rounded-2xl hover:bg-[#ffb703] group'> <span className='bg-yellow-500 text-[blue] rounded-full p-1 group-hover:bg-[blue] group-hover:text-yellow-500'><MdKeyboardDoubleArrowRight size={16} /></span> Pan-India Reach: On-site training delivery at colleges across India.</li>
                  <li className='flex items-center gap-4 p-2  text-gray-600 text-md sm:text-base rounded-2xl hover:bg-[#ffb703] group'> <span className='bg-yellow-500 text-[blue] rounded-full p-1 group-hover:bg-[blue] group-hover:text-yellow-500'><MdKeyboardDoubleArrowRight size={16} /></span> Placement Assistance: Direct connection to our hiring partners for trained students.</li>
                  <li className='flex items-center gap-4 p-2  text-gray-600 text-md sm:text-base rounded-2xl hover:bg-[#ffb703] group'> <span className='bg-yellow-500 text-[blue] rounded-full p-1 group-hover:bg-[blue] group-hover:text-yellow-500'><MdKeyboardDoubleArrowRight size={16} /></span> Updated Curriculum: Course content regularly updated with industry requirements.</li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-gradient-to-b from-white to-[#E0F1FF] pt-8 pb-8'>
        {/* heading */}
        <div className='max-w-7xl px-4 mx-auto py-8 border-l-8 border-l-[#0f4a85] rounded-2xl'>
          <motion.div initial={{ opacity: 0, skewY: 18 }} whileInView={{ opacity: 1, skewY: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className='text-center mt-5 sm:mt-6'>
            <h1 className='text-3xl sm:text-4xl lg:text-[36px]  font-extrabold text-[#0f4a85]'>Our Comprehensive Workshop Offerings </h1>
          </motion.div>

          {/* cards */}

          <div className='grid grid-cols-3 gap-6 mt-20'>
            {featureCard.map((item, idx) => (
              <div className="w-full max-w-[485px] min-h-[308px] rounded-2xl  bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"key={idx}>

                {/* Icon */}
                <div className="flex h-[75px] w-[75px] items-center justify-center rounded-2xl bg-[#ffb703]">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="mt-7">
                  <h2 className="text-[24px] font-bold text-[#0f4a85]">
                    {item.title}
                  </h2>

                  <p className="mt-4 max-w-[400px] text-[20px] leading-[1.55] text-gray-600">
                    {item.para}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       
       {/* small CTA */}
      <section className="py-16 bg-[#ffb703]">
        <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{
          duration: 1
        }} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f4a85] mb-4">
            Ready to Start Your Journey?
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

export default CampusTrainPage