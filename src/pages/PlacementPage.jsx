import React from 'react'
import banner from '../assets/images/MultiStu.png'
import NavTab from '../compnents/NavTab'
import Footer from '../compnents/Footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import adani from '../assets/images/CompanyLogo/Adani.png'
import Berger from '../assets/images/CompanyLogo/Berger.png'
import coforge from '../assets/images/CompanyLogo/coforge.png'
import Deltoid from '../assets/images/CompanyLogo/Deltoid.png'
import Infosys from '../assets/images/CompanyLogo/Infosys.png'
import Manking from '../assets/images/CompanyLogo/Manking.png'
import TCS from '../assets/images/CompanyLogo/TCS.png'
import Toorent from '../assets/images/CompanyLogo/Toorent.png'
import Ultratech from '../assets/images/CompanyLogo/Ultratech.png'
import Zydus from '../assets/images/CompanyLogo/Zydus.png'
import vdo from '../assets/footevdo.mp4'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

const sliderData = [
 {goal:'Goal One',title:'TO BUILD INDUSTRY-READY IT PROFESSIONALS.',para:'We provide practical, technology-focused training that helps students develop strong technical knowledge, problem-solving abilities, and hands-on experience aligned with current industry requirements.'},
 {goal:'Goal Two',title:'TO BUILD STRONG INDUSTRY CONNECTIONS.',para:'We aim to develop meaningful relationships with IT companies, industry professionals, and technology experts to create valuable learning, internship, and career opportunities for our students.'},
 {goal:'Goal Three',title:'TO PROMOTE CONTINUOUS LEARNING AND INNOVATION.',para:'We encourage students to explore emerging technologies, develop creative solutions, and continuously improve their technical skills to stay prepared for the rapidly evolving IT industry.'},
 {goal:'Goal Four',title:'TO PROVIDE REAL-WORLD INDUSTRY EXPOSURE.',para:'We focus on practical projects, internships, workshops, live assignments, and hands-on training to help students understand how technology is applied in real professional environments.'},
 {goal:'Goal Five',title:'TO SUPPORT STUDENTS IN BUILDING SUCCESSFUL CAREERS.',para:'Our career-focused approach helps students strengthen their technical and professional skills, prepare for interviews, build confidence, and take meaningful steps toward employment and long-term career growth.'}
]

const companyData = [
 {logo:adani},{logo:Berger},{logo:coforge},{logo:Deltoid},{logo:Infosys},
 {logo:Manking},{logo:TCS},{logo:Toorent},{logo:Ultratech},{logo:Zydus}
]

const fadeLeft = {hidden:{opacity:0,x:-80},visible:{opacity:1,x:0,transition:{duration:1,ease:'easeOut'}}}
const fadeRight = {hidden:{opacity:0,x:80},visible:{opacity:1,x:0,transition:{duration:1,ease:'easeOut'}}}
const fadeUp = {hidden:{opacity:0,y:60},visible:{opacity:1,y:0,transition:{duration:1,ease:'easeOut'}}}

const PlacementPage = () => {
 return (
  <>
   <NavTab />

   {/* HERO */}
   <section className="w-full overflow-hidden">
    <div className="relative w-full h-[42vh] min-h-[280px] sm:h-[52vh] md:h-[62vh] lg:h-[72vh] overflow-hidden">
     <motion.img
      initial={{scale:1}}
      animate={{scale:1.12}}
      transition={{duration:9,ease:'linear',repeat:Infinity,repeatType:'reverse'}}
      src={banner}
      alt="Maatangi Techwin placement"
      className="absolute inset-0 w-full h-full object-cover"
     />
     <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/10" />
     <div className="absolute inset-0 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="max-w-2xl">
        <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.9}}
         className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
         Placement &amp;
         <span className="block text-[#ffb703]">Career Opportunities</span>
        </motion.h1>
        <motion.p initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:1,delay:.2}}
         className="text-white text-sm sm:text-base md:text-lg mt-4 max-w-xl">
         Turning technical skills, practical experience, and career aspirations into meaningful professional opportunities.
        </motion.p>
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* PLACEMENT OVERVIEW */}
   <section>
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
     <div className="max-w-7xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
      <motion.div initial={{scaleX:0}} whileInView={{scaleX:1}}  transition={{duration:1.5}} className="h-2 bg-[#ffb703]" />
      <div className="p-5 sm:p-8 md:p-12 lg:p-16">
       <div className="flex justify-center mb-5">
        <div className="bg-[#ffb703] p-3 sm:p-4 rounded-full shadow-lg">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-10 sm:w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
         </svg>
        </div>
       </div>

       <motion.h2 initial={{opacity:0,scaleX:0}} whileInView={{opacity:1,scaleX:1}}  transition={{duration:1.2}}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-[#0f4a85]">
        Placement Overview
       </motion.h2>

       <div className="mt-7 space-y-5 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
        <p className="font-medium text-[#0f4a85]">Turning Skills Into Successful Careers</p>
        <motion.p variants={fadeLeft} initial="hidden" whileInView="visible" 
         className="border-l-4 border-[#ffb703] pl-4 sm:pl-6 italic text-gray-600">
         At Maatangi Techwin, we transform technical skills and career aspirations into meaningful professional opportunities. Our focus is to prepare students with the knowledge, practical experience, and confidence required to begin their careers in the IT industry.
        </motion.p>
        <motion.p variants={fadeRight} initial="hidden" whileInView="visible" 
         className="bg-blue-50/50 p-4 sm:p-6 rounded-xl border border-blue-100">
         Our goal is not just to provide training, but to help students bridge the gap between learning and employment. With continuous guidance and career support, we help learners take confident steps toward opportunities in the growing IT industry.
        </motion.p>
       </div>

       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" 
        className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
         ['500+','Companies Visited'],
         ['95%','Placement Rate'],
         ['1000+','Students Placed']
        ].map(([number,title])=>(
         <div key={title} className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow border-2 border-[#ffb703]">
          <div className="text-2xl sm:text-3xl font-bold text-[#0f4a85]">{number}</div>
          <div className="text-sm text-gray-600 mt-1">{title}</div>
         </div>
        ))}
       </motion.div>

       <div className="mt-8 text-center">
        <Link to="/contact">
         <motion.button whileHover={{scale:1.05}} whileTap={{scale:.95}}
          className="bg-[#ffb703] text-white font-semibold px-6 sm:px-8 py-3 rounded-full shadow-lg text-base sm:text-lg">
          Join Our Placement Cell
         </motion.button>
        </Link>
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* GOALS */}
   <section className="bg-white py-10 sm:py-12 md:py-16">
    <div className="max-w-7xl px-4 sm:px-6 mx-auto">
     <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}}  className="text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f4a85]">Our <span className="text-[#ffb703]">Goals</span></h2>
      <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
       At Maatangi Techwin, our goal is to empower students with practical IT skills, real-world experience, and the confidence needed to build successful careers in the technology industry.
      </p>
     </motion.div>

     <Swiper
      slidesPerView={1}
      spaceBetween={16}
      loop={true}
      pagination={{clickable:true}}
      autoplay={{delay:3500,disableOnInteraction:false}}
      navigation={true}
      breakpoints={{640:{slidesPerView:2,spaceBetween:20},1024:{slidesPerView:3,spaceBetween:30}}}
      modules={[Pagination,Navigation,Autoplay]}
      className="mySwiper mt-8 pb-10"
     >
      {sliderData.map((item,idx)=>(
       <SwiperSlide key={idx} className="h-auto">
        <div className="h-full min-h-[250px] p-5 sm:p-7 rounded-2xl bg-white border border-[#f7b822] hover:shadow-xl transition-shadow">
         <h3 className="text-xl sm:text-2xl font-bold text-[#0f4a85] mb-3">{item.goal}</h3>
         <p className="text-sm sm:text-base font-bold text-[#212529] mb-3">{item.title}</p>
         <p className="text-sm sm:text-base text-[#212529] leading-7">{item.para}</p>
        </div>
       </SwiperSlide>
      ))}
     </Swiper>
    </div>
   </section>

   {/* VIDEO */}
   <section className="bg-white py-8 sm:py-10">
    <div className="max-w-7xl px-4 sm:px-6 mx-auto">
     <div className="relative rounded-2xl border border-amber-400 overflow-hidden w-full h-[55vh] min-h-[400px] sm:h-[60vh] md:h-[65vh] lg:h-[70vh]">
      <video className="absolute inset-0 w-full h-full object-cover" src={vdo} controls autoPlay muted loop playsInline />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10 pointer-events-none" />
      <div className="absolute inset-0 flex items-start">
       <div className="w-full max-w-2xl px-4 sm:px-7 md:px-10 pt-8 sm:pt-10 md:pt-14">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
         BUILD SKILLS.<br />GAIN EXPERIENCE.<br />START YOUR CAREER.
        </h2>
        <p className="mt-5 p-4 sm:p-5 text-sm sm:text-base md:text-lg text-white backdrop-blur-md bg-black/10 rounded-xl border-l-4 border-[#ffb703] leading-relaxed">
         From hands-on training and internships to career guidance, Maatangi Techwin helps students turn their skills into meaningful professional opportunities.
        </p>
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* RECRUITERS */}
   <section className="bg-[#DFE4F2] rounded-2xl sm:rounded-3xl py-8 sm:py-10 lg:py-14 px-4 sm:px-6">
    <div className="max-w-7xl mx-auto">
     <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      <motion.h2 variants={fadeLeft} initial="hidden" whileInView="visible" 
       className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#172F64]">
       Our Recruiters
      </motion.h2>
      <motion.p variants={fadeUp} initial="hidden" whileInView="visible" 
       className="w-full md:w-[60%] text-sm sm:text-base text-gray-700 leading-relaxed">
       Our recruitment partners include a wide range of industry leaders, across disciplines, fields, and professional landscapes.
      </motion.p>
     </div>

     <div className="text-center mt-10 sm:mt-14">
      <motion.h3 initial={{opacity:0,scaleX:0}} whileInView={{opacity:1,scaleX:1}} 
       className="text-xl sm:text-2xl md:text-3xl font-bold text-[#172F64]">
       Company Visited for Placement
      </motion.h3>
     </div>

     <div className="mt-8 sm:mt-12">
      <Swiper
       slidesPerView={2}
       spaceBetween={12}
       loop={true}
       autoplay={{delay:0,disableOnInteraction:false}}
       speed={4000}
       breakpoints={{
        480:{slidesPerView:2,spaceBetween:15},
        640:{slidesPerView:3,spaceBetween:18},
        768:{slidesPerView:4,spaceBetween:20},
        1024:{slidesPerView:5,spaceBetween:20},
        1280:{slidesPerView:7,spaceBetween:20}
       }}
       modules={[Pagination,Navigation,Autoplay]}
       className="mySwiper"
      >
       {companyData.map((item,idx)=>(
        <SwiperSlide key={idx}>
         <div className="bg-white p-3 sm:p-5 rounded-xl sm:rounded-2xl h-[90px] sm:h-[110px] flex items-center justify-center">
          <img src={item.logo} alt="Recruiting company" className="max-w-full max-h-full object-contain" />
         </div>
        </SwiperSlide>
       ))}
      </Swiper>
     </div>
    </div>
   </section>

   <Footer />
  </>
 )
}

export default PlacementPage