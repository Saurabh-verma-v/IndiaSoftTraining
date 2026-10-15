import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Menu,
    X
} from 'lucide-react'
import {
    motion,
    useScroll,
    useMotionValueEvent
} from 'motion/react'
import { MdKeyboardArrowDown } from "react-icons/md";

const NavTab = () => {

    const { scrollY } = useScroll()

    const [hidden, setHidden] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(null)
    const dropdownTimer = useRef(null)

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious() ?? 0

        if (current > previous && current > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    // Close mobile menu after clicking a link
    const closeMenu = () => {
        setMenuOpen(false)
        setOpenDropdown(null)  // Fixed: properly set dropdown to null
    }

    // Handle desktop dropdown hover
    const handleMouseEnter = (dropdown) => {
        if (dropdownTimer.current) {
            clearTimeout(dropdownTimer.current)
        }

        setOpenDropdown(dropdown)
    }

    const handleMouseLeave = () => {
        if (dropdownTimer.current) {
            clearTimeout(dropdownTimer.current)
        }

        dropdownTimer.current = setTimeout(() => {
            setOpenDropdown(null)
        }, 200)
    }

    // Clear timer when component unmounts
    useEffect(() => {
        return () => {
            if (dropdownTimer.current) {
                clearTimeout(dropdownTimer.current)
            }
        }
    }, [])

    // Handle dropdown click for mobile
    const handleDropdownClick = (dropdown) => {
        setOpenDropdown((current) =>
            current === dropdown ? null : dropdown
        )
    }

    return (
        <motion.section
            animate={{
                y: hidden ? -140 : 0,
                opacity: hidden ? 0 : 1,
            }}
            transition={{
                duration: 0.9,
                ease: "easeInOut"
            }}
            className="
                shadow-4xl
                bg-[#0f4a85]
                text-white
                sticky
                top-0
                left-0
                right-0
                z-50
            "
        >

            <div className="
                max-w-8xl
                mx-auto
                px-4
                sm:px-6
                lg:px-8
            ">

                {/* ================= NAVBAR ================= */}

                <div className="
                    flex
                    items-center
                    justify-between
                    min-h-[70px]
                ">

                    {/* LOGO / BRAND */}

                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="shrink-0"
                    >
                        <h2 className="
                            text-xl
                            sm:text-2xl
                            font-bold
                            tracking-wide
                        ">
                            Maatangi
                            <span className="text-[#ffb703]">
                                Techwin
                            </span>
                        </h2>
                    </Link>


                    {/* ================= DESKTOP MENU ================= */}

                    <ul className="
                        hidden
                        lg:flex
                        items-center
                        gap-1
                    ">

                        <Link to="/">
                            <li className="
                                text-base
                                font-semibold
                                px-3
                                py-2
                                hover:bg-[#ffb703]
                                hover:text-white
                                rounded-xl
                                cursor-pointer
                                transition-all
                                duration-300
                            ">
                                Home
                            </li>
                        </Link>

                        <Link to="/about">
                            <li className="
                                text-base
                                font-semibold
                                px-3
                                py-2
                                hover:bg-[#ffb703]
                                hover:text-white
                                rounded-xl
                                cursor-pointer
                                transition-all
                                duration-300
                            ">
                                About
                            </li>
                        </Link>

                        <Link to="/program">
                            <li className="
                                text-base
                                font-semibold
                                px-3
                                py-2
                                hover:bg-[#ffb703]
                                hover:text-white
                                rounded-xl
                                cursor-pointer
                                transition-all
                                duration-300
                            ">
                                Programs
                            </li>
                        </Link>

                        <Link to="/placement">
                            <li className="
                                text-base
                                font-semibold
                                px-3
                                py-2
                                hover:bg-[#ffb703]
                                hover:text-white
                                rounded-xl
                                cursor-pointer
                                transition-all
                                duration-300
                            ">
                                Placement
                            </li>
                        </Link>

                        {/* ================= TRAINING DROPDOWN ================= */}
                        <li 
                            className="relative"
                            onMouseEnter={() => handleMouseEnter('training')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={`
                                text-base
                                font-semibold
                                px-3
                                py-2
                                hover:bg-[#ffb703]
                                hover:text-white
                                rounded-xl
                                cursor-pointer
                                transition-all
                                duration-300
                                flex items-center gap-1
                                ${openDropdown === 'training' ? 'bg-[#ffb703] text-white' : ''}
                            `}>
                                Training
                                <MdKeyboardArrowDown 
                                    size={20} 
                                    className={`transition-transform duration-300 ${openDropdown === 'training' ? 'rotate-180' : ''}`}
                                />
                            </div>

                            {openDropdown === 'training' && (
                                <div className="
                                    absolute
                                    top-full
                                    left-0
                                    mt-0
                                    w-[220px]
                                    bg-white
                                    rounded-xl
                                    shadow-xl
                                    border
                                    border-gray-100
                                    overflow-hidden
                                    z-50
                                    animate-fadeIn
                                "
                                    onMouseEnter={() => handleMouseEnter('training')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link 
                                        to="/corporate-training"
                                        onClick={closeMenu}
                                        className="
                                            block
                                            px-4
                                            py-3
                                            text-sm
                                            font-medium
                                            text-gray-700
                                            hover:bg-[#ffb703]
                                            hover:text-white
                                            transition-all
                                            duration-200
                                            border-l-2
                                            border-transparent
                                            hover:border-[#ffb703]
                                        "
                                    >
                                        Corporate Training
                                    </Link>
                                    <Link 
                                        to="/campus-training"
                                        onClick={closeMenu}
                                        className="
                                            block
                                            px-4
                                            py-3
                                            text-sm
                                            font-medium
                                            text-gray-700
                                            hover:bg-[#ffb703]
                                            hover:text-white
                                            transition-all
                                            duration-200
                                            border-l-2
                                            border-transparent
                                            hover:border-[#ffb703]
                                        "
                                    >
                                        Campus Training
                                    </Link>
                                </div>
                            )}
                        </li>

                        {/* ================= CAREER DROPDOWN ================= */}
                        <li 
                            className="relative"
                            onMouseEnter={() => handleMouseEnter('career')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={`
                                text-base
                                font-semibold
                                px-3
                                py-2
                                hover:bg-[#ffb703]
                                hover:text-white
                                rounded-xl
                                cursor-pointer
                                transition-all
                                duration-300
                                flex items-center gap-1
                                ${openDropdown === 'career' ? 'bg-[#ffb703] text-white' : ''}
                            `}>
                                Career
                                <MdKeyboardArrowDown 
                                    size={20} 
                                    className={`transition-transform duration-300 ${openDropdown === 'career' ? 'rotate-180' : ''}`}
                                />
                            </div>

                            {openDropdown === 'career' && (
                                <div className="
                                    absolute
                                    top-full
                                    left-0
                                    mt-0
                                    w-[220px]
                                    bg-white
                                    rounded-xl
                                    shadow-xl
                                    border
                                    border-gray-100
                                    overflow-hidden
                                    z-50
                                    animate-fadeIn
                                "
                                    onMouseEnter={() => handleMouseEnter('career')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link 
                                        to="/join-as-trainer"
                                        onClick={closeMenu}
                                        className="
                                            block
                                            px-4
                                            py-3
                                            text-sm
                                            font-medium
                                            text-gray-700
                                            hover:bg-[#ffb703]
                                            hover:text-white
                                            transition-all
                                            duration-200
                                            border-l-2
                                            border-transparent
                                            hover:border-[#ffb703]
                                        "
                                    >
                                        Join as Trainer
                                    </Link>
                                </div>
                            )}
                        </li>

                        {/* ================= INSIGHTS DROPDOWN ================= */}
                        <li 
                            className="relative"
                            onMouseEnter={() => handleMouseEnter('insights')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={`
                                text-base
                                font-semibold
                                px-3
                                py-2
                                hover:bg-[#ffb703]
                                hover:text-white
                                rounded-xl
                                cursor-pointer
                                transition-all
                                duration-300
                                flex items-center gap-1
                                ${openDropdown === 'insights' ? 'bg-[#ffb703] text-white' : ''}
                            `}>
                                Insights
                                <MdKeyboardArrowDown 
                                    size={20} 
                                    className={`transition-transform duration-300 ${openDropdown === 'insights' ? 'rotate-180' : ''}`}
                                />
                            </div>

                            {openDropdown === 'insights' && (
                                <div className="
                                    absolute
                                    top-full
                                    left-0
                                    mt-0
                                    w-[220px]
                                    bg-white
                                    rounded-xl
                                    shadow-xl
                                    border
                                    border-gray-100
                                    overflow-hidden
                                    z-50
                                    animate-fadeIn
                                "
                                    onMouseEnter={() => handleMouseEnter('insights')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link 
                                        to="/blogs"
                                        onClick={closeMenu}
                                        className="
                                            block
                                            px-4
                                            py-3
                                            text-sm
                                            font-medium
                                            text-gray-700
                                            hover:bg-[#ffb703]
                                            hover:text-white
                                            transition-all
                                            duration-200
                                            border-l-2
                                            border-transparent
                                            hover:border-[#ffb703]
                                        "
                                    >
                                        Blogs
                                    </Link>
                                    <Link 
                                        to="/success-stories"
                                        onClick={closeMenu}
                                        className="
                                            block
                                            px-4
                                            py-3
                                            text-sm
                                            font-medium
                                            text-gray-700
                                            hover:bg-[#ffb703]
                                            hover:text-white
                                            transition-all
                                            duration-200
                                            border-l-2
                                            border-transparent
                                            hover:border-[#ffb703]
                                        "
                                    >
                                        Success Stories
                                    </Link>
                                    <Link 
                                        to="/career-guidance"
                                        onClick={closeMenu}
                                        className="
                                            block
                                            px-4
                                            py-3
                                            text-sm
                                            font-medium
                                            text-gray-700
                                            hover:bg-[#ffb703]
                                            hover:text-white
                                            transition-all
                                            duration-200
                                            border-l-2
                                            border-transparent
                                            hover:border-[#ffb703]
                                        "
                                    >
                                        Career Guidance
                                    </Link>
                                </div>
                            )}
                        </li>

                        <Link to="/testimonials">
                            <li className="
                                text-base
                                font-semibold
                                px-3
                                py-2
                                hover:bg-[#ffb703]
                                hover:text-white
                                rounded-xl
                                cursor-pointer
                                transition-all
                                duration-300
                            ">
                                Testimonials
                            </li>
                        </Link>

                        <Link to="/contact">
                            <li className="
                                text-base
                                font-semibold
                                px-3
                                py-2
                                hover:bg-[#ffb703]
                                hover:text-white
                                rounded-xl
                                cursor-pointer
                                transition-all
                                duration-300
                            ">
                                Contact Us
                            </li>
                        </Link>

                    </ul>


                    {/* ================= DESKTOP ENROLL BUTTON ================= */}

                    <Link
                        to="/contact"
                        className="hidden lg:block"
                    >
                        <motion.button
                            whileHover={{ scale: 1.08 }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="
                                bg-[#ffb703]
                                px-5
                                py-2
                                rounded-xl
                                text-base
                                font-semibold
                                text-white
                                cursor-pointer
                                whitespace-nowrap
                            "
                        >
                            Enroll Now
                        </motion.button>
                    </Link>


                    {/* ================= MOBILE MENU BUTTON ================= */}

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="
                            lg:hidden
                            flex
                            items-center
                            justify-center
                            p-2
                            rounded-lg
                            hover:bg-white/10
                            transition
                            cursor-pointer
                        "
                        aria-label="Toggle menu"
                    >

                        {menuOpen ? (
                            <X size={30} />
                        ) : (
                            <Menu size={30} />
                        )}

                    </button>

                </div>


                {/* ================= MOBILE MENU ================= */}

                <motion.div
                    initial={false}
                    animate={{
                        height: menuOpen ? "auto" : 0,
                        opacity: menuOpen ? 1 : 0
                    }}
                    transition={{
                        duration: 0.3
                    }}
                    className="
                        lg:hidden
                        overflow-hidden
                    "
                >

                    <div className="
                        border-t
                        border-white/20
                        py-4
                    ">

                        <nav className="
                            flex
                            flex-col
                            gap-1
                        ">

                            <Link
                                to="/"
                                onClick={closeMenu}
                                className="
                                    px-4
                                    py-3
                                    rounded-lg
                                    font-semibold
                                    hover:bg-[#ffb703]
                                    transition-all
                                    duration-300
                                "
                            >
                                Home
                            </Link>

                            <Link
                                to="/about"
                                onClick={closeMenu}
                                className="
                                    px-4
                                    py-3
                                    rounded-lg
                                    font-semibold
                                    hover:bg-[#ffb703]
                                    transition-all
                                    duration-300
                                "
                            >
                                About
                            </Link>

                            <Link
                                to="/program"
                                onClick={closeMenu}
                                className="
                                    px-4
                                    py-3
                                    rounded-lg
                                    font-semibold
                                    hover:bg-[#ffb703]
                                    transition-all
                                    duration-300
                                "
                            >
                                Programs
                            </Link>

                            <Link
                                to="/placement"
                                onClick={closeMenu}
                                className="
                                    px-4
                                    py-3
                                    rounded-lg
                                    font-semibold
                                    hover:bg-[#ffb703]
                                    transition-all
                                    duration-300
                                "
                            >
                                Placement
                            </Link>

                            {/* ================= MOBILE TRAINING DROPDOWN ================= */}
                            <div className="px-4 py-2">
                                <div 
                                    className="
                                        font-semibold
                                        text-white
                                        mb-2
                                        flex items-center gap-1
                                        cursor-pointer
                                    "
                                    onClick={() => handleDropdownClick('mobile-training')}
                                >
                                    Training
                                    <MdKeyboardArrowDown 
                                        size={20} 
                                        className={`transition-transform duration-300 ${openDropdown === 'mobile-training' ? 'rotate-180' : ''}`}
                                    />
                                </div>
                                {openDropdown === 'mobile-training' && (
                                    <div className="ml-4 space-y-1 border-l-2 border-[#ffb703] pl-4">
                                        <Link
                                            to="/corporate-training"
                                            onClick={closeMenu}
                                            className="
                                                block
                                                py-2
                                                text-sm
                                                text-white/80
                                                hover:text-[#ffb703]
                                                transition-colors
                                                duration-200
                                            "
                                        >
                                            Corporate Training
                                        </Link>
                                        <Link
                                            to="/campus-training"
                                            onClick={closeMenu}
                                            className="
                                                block
                                                py-2
                                                text-sm
                                                text-white/80
                                                hover:text-[#ffb703]
                                                transition-colors
                                                duration-200
                                            "
                                        >
                                            Campus Training
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* ================= MOBILE CAREER DROPDOWN ================= */}
                            <div className="px-4 py-2">
                                <div 
                                    className="
                                        font-semibold
                                        text-white
                                        mb-2
                                        flex items-center gap-1
                                        cursor-pointer
                                    "
                                    onClick={() => handleDropdownClick('mobile-career')}
                                >
                                    Career
                                    <MdKeyboardArrowDown 
                                        size={20} 
                                        className={`transition-transform duration-300 ${openDropdown === 'mobile-career' ? 'rotate-180' : ''}`}
                                    />
                                </div>
                                {openDropdown === 'mobile-career' && (
                                    <div className="ml-4 space-y-1 border-l-2 border-[#ffb703] pl-4">
                                        <Link
                                            to="/join-as-trainer"
                                            onClick={closeMenu}
                                            className="
                                                block
                                                py-2
                                                text-sm
                                                text-white/80
                                                hover:text-[#ffb703]
                                                transition-colors
                                                duration-200
                                            "
                                        >
                                            Join as Trainer
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* ================= MOBILE INSIGHTS DROPDOWN ================= */}
                            <div className="px-4 py-2">
                                <div 
                                    className="
                                        font-semibold
                                        text-white
                                        mb-2
                                        flex items-center gap-1
                                        cursor-pointer
                                    "
                                    onClick={() => handleDropdownClick('mobile-insights')}
                                >
                                    Insights
                                    <MdKeyboardArrowDown 
                                        size={20} 
                                        className={`transition-transform duration-300 ${openDropdown === 'mobile-insights' ? 'rotate-180' : ''}`}
                                    />
                                </div>
                                {openDropdown === 'mobile-insights' && (
                                    <div className="ml-4 space-y-1 border-l-2 border-[#ffb703] pl-4">
                                        <Link
                                            to="/blogs"
                                            onClick={closeMenu}
                                            className="
                                                block
                                                py-2
                                                text-sm
                                                text-white/80
                                                hover:text-[#ffb703]
                                                transition-colors
                                                duration-200
                                            "
                                        >
                                            Blogs
                                        </Link>
                                        <Link
                                            to="/success-stories"
                                            onClick={closeMenu}
                                            className="
                                                block
                                                py-2
                                                text-sm
                                                text-white/80
                                                hover:text-[#ffb703]
                                                transition-colors
                                                duration-200
                                            "
                                        >
                                            Success Stories
                                        </Link>
                                        <Link
                                            to="/career-guidance"
                                            onClick={closeMenu}
                                            className="
                                                block
                                                py-2
                                                text-sm
                                                text-white/80
                                                hover:text-[#ffb703]
                                                transition-colors
                                                duration-200
                                            "
                                        >
                                            Career Guidance
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <Link
                                to="/testimonials"
                                onClick={closeMenu}
                                className="
                                    px-4
                                    py-3
                                    rounded-lg
                                    font-semibold
                                    hover:bg-[#ffb703]
                                    transition-all
                                    duration-300
                                "
                            >
                                Testimonials
                            </Link>

                            <Link
                                to="/contact"
                                onClick={closeMenu}
                                className="
                                    px-4
                                    py-3
                                    rounded-lg
                                    font-semibold
                                    hover:bg-[#ffb703]
                                    transition-all
                                    duration-300
                                "
                            >
                                Contact Us
                            </Link>


                            {/* MOBILE ENROLL BUTTON */}

                            <Link
                                to="/contact"
                                onClick={closeMenu}
                                className="mt-3"
                            >
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    className="
                                        w-full
                                        bg-[#ffb703]
                                        px-5
                                        py-3
                                        rounded-xl
                                        text-base
                                        font-semibold
                                        text-white
                                        cursor-pointer
                                    "
                                >
                                    Enroll Now
                                </motion.button>
                            </Link>

                        </nav>

                    </div>

                </motion.div>

            </div>

        </motion.section>
    )
}

export default NavTab