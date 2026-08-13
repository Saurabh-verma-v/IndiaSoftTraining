import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from "motion/react"


const NavTab = () => {

    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious() ?? 0
        if (current > previous && current > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })
    return (
        <>
            <motion.section animate={{
                y: hidden ? -140 : 0,
                opacity: hidden ? 0 : 1,
            }}
                transition={{ duration: 0.8, ease: "easeInOut" }} className=' shadow-4xl py-3 bg-[#0f4a85] text-black text-white sticky top-0 left-0 right-0 z-50'>
                <div className='max-w-7xl px-4 mx-auto flex justify-between py-2'>
                    <ul className='flex items-center gap-5 text-sm  mx-auto'>

                        <Link to="/">
                            <li className='text-lg font-semibold p-5 hover:bg-[#ffb703] hover:text-white rounded-2xl px-3 py-2 cursor-pointer'>Home</li>
                        </Link>

                        <Link to="/about">
                            <li className='text-lg font-semibold p-5 hover:bg-[#ffb703] hover:text-white rounded-2xl px-3 py-2 cursor-pointer'>About</li>
                        </Link>

                        <Link to="/program">
                            <li className='text-lg font-semibold p-5 hover:bg-[#ffb703] hover:text-white rounded-2xl px-3 py-2 cursor-pointer'>Programs</li>
                        </Link>

                        <Link to="/placement">
                            <li className='text-lg font-semibold p-5 hover:bg-[#ffb703] hover:text-white rounded-2xl px-3 py-2 cursor-pointer'>Placement</li>
                        </Link>
                        {/* <li className='text-lg font-semibold p-5 hover:bg-[#ffb703] hover:text-white rounded-2xl px-3 py-2 cursor-pointer'>Corporate Training</li> */}
                        <Link to="/testimonials">
                            <li className='text-lg font-semibold p-5 hover:bg-[#ffb703] hover:text-white rounded-2xl px-3 py-2 cursor-pointer'>Testimonials</li>
                        </Link>

                        <Link to="/contact">
                            <li className='text-lg font-semibold p-5 hover:bg-[#ffb703] hover:text-white rounded-2xl px-3 py-2 cursor-pointer'>Contact Us</li>
                        </Link>
                    </ul>
                </div>
            </motion.section>
        </>
    )
}

export default NavTab