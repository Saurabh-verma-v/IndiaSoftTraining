import React from 'react'
import NavTab from '../compnents/NavTab'
import { motion } from 'motion/react'
import TrainerApplicationForm from '../compnents/TrainerApplicationForm'
import { Link } from 'react-router-dom'
import Footer from '../compnents/Footer'

const CareerPage = () => {
  return (
    <>
      <NavTab/>
       <section className='bg-gradient-to-b from-white to-[#E0F1FF] pt-8 pb-8'>
        <div className='max-w-7xl px-4 mx-auto py-8'>
          {/* main heading */}
          <motion.div initial={{ opacity: 0, skewY: 18 }} whileInView={{ opacity: 1, skewY: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className='text-center mt-5 sm:mt-6'>
            <h1 className='text-3xl sm:text-4xl lg:text-[36px]  font-extrabold text-[#0f4a85]'>Join as  <span className='text-[#ffb703]'>Trainer</span></h1>
          </motion.div>
          {/* small heading */}
          <motion.div initial={{ opacity: 0, skewY: 18 }} whileInView={{ opacity: 1, skewY: 0 }} transition={{ duration: 1.2 }} className='text-center sm:pt-10'>
            <span className='inline-block uppercase px-4 sm:px-5 py-2 text-xs sm:text-sm bg-[#0f4a85]/70 text-white font-semibold rounded-3xl'>Home
              Join  as Trainer</span>
          </motion.div>
        </div>
      </section>

       <section className='bg-white' >
              <div className='max-w-7xl px-4 mx-auto py-8'>
                {/* content */}
                <div className='space-y-7'>
                  <motion.div initial={{ opacity: 0, skewY: 18 }} whileInView={{ opacity: 1, skewY: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className='text-center mt-5 sm:mt-6'>
                    <h1 className='text-2xl sm:text-3xl lg:text-[30px]  font-extrabold text-[#0f4a85]'>Apply as a <span className='text-[#ffb703]'>Professional</span> Trainer</h1>
                    <p className=' text-md sm:text-base text-gray-600 mt-2'>Share your expertise and build careers with High Technologies Solutions</p>
                  </motion.div>
                </div>
              </div>
      </section>
      {/* form section */}
      <section className='bg-white'>
        <div className='max-w-7xl px-4 mx-auto py-8'>
            <TrainerApplicationForm/>
        </div>
      </section>

      {/* CTA */}
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

      {/* Footer */}
      <Footer/>
    </>
  )
}

export default CareerPage