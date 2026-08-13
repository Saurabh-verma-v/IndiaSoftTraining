import React from 'react'
import Marquee from "react-fast-marquee";

import sofcon from '../assets/images/NavLogoImg/sofcon.png'
import contact from '../assets/images/NavLogoImg/contactImg.png'
import nsdc from '../assets/images/NavLogoImg/nsdc.png'
import skill from '../assets/images/NavLogoImg/skillIndia.png'
import scc from '../assets/images/NavLogoImg/scc.png'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation ,Autoplay} from 'swiper/modules';

const logo = [
    {
        imgs: sofcon
    },
    {
        imgs: contact
    },
    {
        imgs: nsdc
    },
    {
        imgs: skill
    },
    {
        imgs: scc
    },
]

const Nav_bottom = () => {
    return (
        <section className='bg-white'>
            <div className='max-w-7xl mx-auto px-4 flex gap-6 p-5'>
                <Swiper
                    slidesPerView={4}
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
                    className="mySwiper">
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