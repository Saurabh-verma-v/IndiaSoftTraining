import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

// Import your banner images
import banner1 from '../assets/images/bannerImg/banner1.png';
import banner2 from '../assets/images/bannerImg/banner2.png';
import banner3 from '../assets/images/bannerImg/banner3.png';
import banner4 from '../assets/images/bannerImg/banner4.png';

const Hero = () => {
  return (
    <section className="w-full overflow-hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        // pagination={{ clickable: true }}
        autoplay={true}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[70vh] w-full"
      >
        {/* ===== SLIDE 1 ===== */}
        <SwiperSlide className="relative">
          <img
            className="h-full w-full object-cover"
            src={banner1}
            alt="Internship Banner"
          />

          {/* Content - centered on all screens */}
          <div className="absolute inset-0  sm:max-w-8xl sm:top-15 sm:-right-190 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-center ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="space-y-0 sm:space-y-3 md:space-y-4 sm:max-w-4xl mx-auto  w-[200px] sm:w-full ml-50 sm:ml-auto"
            >
              <h1 className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-extrabold uppercase text-black">
                2/4/7 weeks
              </h1>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-white leading-tight">
                Summer / Winter <br className="hidden sm:block" /> Internship Training
              </h1>
              <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#0f4a85]">
                For Engineering Student/Professional
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-red-600">
                Eligibility : Diploma/B.Tech/BCA/BSc./BBA
              </p>
            </motion.div>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                whileTap={{ scale: 0.9 }}
                className="mt-4 sm:mt-5 md:mt-6 bg-[#054a85] px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-xl text-sm sm:text-base md:text-lg font-semibold text-white cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
              >
                Enroll Now
              </motion.button>
            </Link>
          </div>
        </SwiperSlide>

        {/* ===== SLIDE 2 ===== */}
        <SwiperSlide className="relative">
          <img
            className="h-full w-full object-cover"
            src={banner2}
            alt="Placement Banner"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-center sm:max-w-8xl sm:top-15 sm:-right-190">
            <div className="  space-y-0 sm:space-y-4 md:space-y-6 max-w-4xl mx-auto w-[200px] sm:w-full ml-50 sm:ml-auto">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0f4a85]">
                Industrial Training /{' '}
                <span className="text-[#ffb703]">100% Placement</span>
              </h1>

              <ul className="space-y-0 sm:space-y-3 md:space-y-4">
                {[
                  'In Campus / College Training',
                  'Webinar & Offline/Online Classes',
                  'Soft Skills & Personality Development',
                  'Guest Lecture by Experts',
                  'Hands on Practical',
                ].map((text, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="flex sm:justify-start gap-2 sm:gap-3 md:gap-4 text-sm sm:text-base md:text-lg font-medium sm:border-l-4 border-l-yellow-500 pl-2 sm:pl-3 group "
                  >
                    <span className="text-[#0f4a85] group-hover:text-[#ffb703] transition-colors">
                      <FaCheckCircle />
                    </span>
                    {text}
                  </motion.li>
                ))}
              </ul>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  whileTap={{ scale: 0.9 }}
                  className="mt-2 sm:mt-4 md:mt-6 bg-[#ffb703] px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-xl text-sm sm:text-base md:text-lg font-semibold text-white cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
                >
                  Enroll Now
                </motion.button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* ===== SLIDE 3 ===== */}
        <SwiperSlide className="relative">
          <img
            className="h-full w-full object-cover"
            src={banner3}
            alt="Courses Banner"
          />

          <div className="absolute  flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-center left-0 sm:top-10 top-5">
            <div className="space-y-3 sm:space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold uppercase text-[#ffb703] leading-tight">
                Software / IT Courses
              </h1>

              <ul className="space-y-2 sm:space-y-3 md:space-y-4 ">
                {[
                  'Full Stack Development',
                  'Web Design & Development',
                  'Machine Learning',
                  'Artificial Intelligence',
                  'Data Science',
                ].map((text, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="flex  sm:justify-start gap-2 sm:gap-3 md:gap-4 text-sm sm:text-base md:text-lg font-medium border-l-4 border-l-yellow-500 pl-2 sm:pl-3 text-white group"
                  >
                    <span className="text-[#ffb703] group-hover:text-white transition-colors">
                      <FaCheckCircle />
                    </span>
                    {text}
                  </motion.li>
                ))}
              </ul>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  whileTap={{ scale: 0.9 }}
                  className="mt-2 sm:mt-4 md:mt-6 bg-[#ffb703] px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-xl text-sm sm:text-base md:text-lg font-semibold text-white cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
                >
                  Enroll Now
                </motion.button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;