import React from 'react'
import Counter from "./Counter";
import {
    FaProjectDiagram,
    FaUsers,
    FaAward,
} from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { motion } from 'motion/react';

const stats = [
    {
        icon: <FaProjectDiagram size={34} />,
        number: <Counter end={10} suffix="+" />,
        title: "Training Domain",
    },
    {
        icon: <FaUsers size={34} />,
        number: <Counter end={50} suffix="+" />,
        title: "Industry Project",
    },
    {
        icon: <PiStudentBold size={34} />,
        number: <Counter end={1000} suffix="+" />,
        title: "Student Trained",
    },
    {
        icon: <FaAward size={34} />,
        number: <Counter end={100} suffix="%" />,
        title: "Placement",
    },
];

const StatSection = () => {

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 60,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.9,
                ease: 'easeOut',
            },
        },
    }

    const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

   const cardAnimation = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

    return (
        <section className='bg-[#0f4a85]'>
            <motion.div variants="staggerContainer" initial="hidden" whileInView="visible" className='max-w-7xl px-4 mx-auto py-15'>

                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {stats.map((item, idx) => {
                        return (
                            <motion.div variants="cardAnimation" whileHover={{y:-8, scale:1.03}} className="text-center bg-white shadow rounded-2xl p-3 border border-[#ffb703] cursor-pointer" key={idx}>
                                {/* icon */}
                                <div className="flex justify-center mb-6 text-[#0f4a85]">
                                    {item.icon}
                                </div>
                                {/* number */}
                                <h2 className="text-5xl font-black text-[#ffb703]">
                                    {item.number}
                                </h2>
                                {/* title */}
                                <p className="mt-3 text-lg text-[#0f4a85] font-bold">
                                    {item.title}
                                </p>
                            </motion.div>
                        )
                    })}

                </motion.div>
            </motion.div>
        </section>
    )
}

export default StatSection