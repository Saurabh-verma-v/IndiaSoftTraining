import React, { useState } from 'react'
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

const NavTab = () => {

    const { scrollY } = useScroll()

    const [hidden, setHidden] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

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
                max-w-7xl
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