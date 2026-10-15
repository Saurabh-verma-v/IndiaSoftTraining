import React from 'react'
import Marquee from "react-fast-marquee";

// import sofcon from '../assets/images/NavLogoImg/sofcon.png'
// import contact from '../assets/images/NavLogoImg/contactImg.png'
// import nsdc from '../assets/images/NavLogoImg/nsdc.png'
// import skill from '../assets/images/NavLogoImg/skillIndia.png'
// import scc from '../assets/images/NavLogoImg/scc.png'

import adani from '../assets/images/CompanyLogo/Adani.png'
import berger from '../assets/images/CompanyLogo/Berger.png'
import coforge from '../assets/images/CompanyLogo/coforge.png'
import deltoid from '../assets/images/CompanyLogo/Deltoid.png'
import infosys from '../assets/images/CompanyLogo/Infosys.png'
import Mankind from '../assets/images/CompanyLogo/Manking.png'
import TCS from '../assets/images/CompanyLogo/TCS.png'
import toorent from '../assets/images/CompanyLogo/Toorent.png'
import ultratech from '../assets/images/CompanyLogo/Ultratech.png'
import zydus from '../assets/images/CompanyLogo/Zydus.png'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation ,Autoplay} from 'swiper/modules';

const logo = [
    {
        imgs: adani
    },
    {
        imgs: berger
    },
    {
        imgs: coforge
    },
    {
        imgs: deltoid
    },
    {
        imgs: infosys
    },
    {
        imgs: Mankind
    },
    {
        imgs: TCS
    },
    {
        imgs: toorent
    },
    {
        imgs: ultratech
    },
    {
        imgs: zydus
    },
    {
        imgs: berger
    },
    {
        imgs: coforge
    },
    {
        imgs: deltoid
    },
    {
        imgs: infosys
    },
    {
        imgs: Mankind
    },
    {
        imgs: TCS
    },
    {
        imgs: toorent
    },
    {
        imgs: ultratech
    },
    {
        imgs: zydus
    },
]

const Nav_bottom = () => {
    return (
        <section className='bg-white'>
            <div className='max-w-7xl mx-auto px-4 flex gap-6 p-5 bg-gray-100 rounded-2xl '>
                <Swiper
                    slidesPerView={8}
                    spaceBetween={30}
                    loop={true}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    autoplay={{
                        delay:0
                    }}
                    speed={4000}
                    // navigation={true}
                    modules={[Pagination, Navigation , Autoplay]}
                    className="mySwiper mt-10 mb-10 ">
                    {logo.map((item,idx)=>(
                        <SwiperSlide>
                            <img src={item.imgs}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Nav_bottom

// {logo.map((item, idx) => (
//                             <div className='w-[19%] h-full' key={idx}>
//                                 <img src={item.imgs} alt={`logo-${idx}`} />
//                             </div>
//                         ))}