import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import NavTab from "../compnents/NavTab";
import Footer from "../compnents/Footer";
import { IoStarSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import API from "../services/api";

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 60,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeOut",
        },
    },
};

const SuccessStories = () => {
    const [studentStories, setStudentStories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchSuccessStories = async () => {
            try {
                const response = await API.get("/success-stories");

                // Supports { success: true, data: [...] }
                // and a direct array response.
                const result = response.data;
                const stories = Array.isArray(result)
                    ? result
                    : result.data;

                const activeStories = (
                    Array.isArray(stories) ? stories : []
                ).filter((item) => item.isActive !== false);

                setStudentStories(activeStories);
            } catch (err) {
                console.error("Error fetching success stories:", err);
                setError("Unable to load success stories. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchSuccessStories();
    }, []);

    return (
        <>
            <NavTab />

            {/* Header section */}
            <section className="bg-gradient-to-b from-white to-[#E0F1FF] pt-8 pb-8">
                <div className="max-w-7xl px-4 mx-auto py-8">
                    <div className="text-center space-y-3 sm:space-y-4">
                        <motion.div
                            initial={{ opacity: 0, skewY: 18 }}
                            whileInView={{ opacity: 1, skewY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                            className="text-center mt-5 sm:mt-6"
                        >
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] leading-tight font-extrabold text-[#0f4a85] uppercase">
                                Student{" "}
                                <span className="text-[#ffb703]">
                                    Success
                                </span>{" "}
                                Stories
                            </h1>
                        </motion.div>

                        <p className="text-center text-gray-600 text-sm sm:text-base px-4">
                            Discover the experiences of students who developed
                            practical skills through our training programs.
                            <br className="hidden sm:block" />
                            Explore their learning journeys and achievements.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 p-8 sm:p-5 border border-[#0f4a85] rounded-full inline-flex bg-white/50 mx-auto">
                            <div className="text-center">
                                <div className="text-[#ffb703] font-bold text-2xl sm:text-3xl">
                                    {studentStories.length}
                                </div>
                                <p className="text-gray-600 font-semibold text-xs sm:text-sm">
                                    Success Stories
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="text-[#ffb703] font-bold text-2xl sm:text-3xl">
                                    {studentStories.length > 0
                                        ? `${Math.round(
                                              (studentStories.filter(
                                                  (item) =>
                                                      Number(item.rating) >= 4
                                              ).length /
                                                  studentStories.length) *
                                                  100
                                          )}%`
                                        : "—"}
                                </div>
                                <p className="text-gray-600 font-semibold text-xs sm:text-sm">
                                    Rated 4+ Stars
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="text-[#ffb703] font-bold text-2xl sm:text-3xl">
                                    {studentStories.length > 0
                                        ? (
                                              studentStories.reduce(
                                                  (total, item) =>
                                                      total +
                                                      (Number(item.rating) || 0),
                                                  0
                                              ) / studentStories.length
                                          ).toFixed(1) + "/5"
                                        : "—"}
                                </div>
                                <p className="text-gray-600 font-semibold text-xs sm:text-sm">
                                    Average Rating
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Student success stories */}
            <section className="bg-white pt-4 sm:pt-8 pb-8">
                <div className="max-w-7xl px-4 mx-auto py-4 sm:py-8">
                    {loading && (
                        <p className="text-center text-gray-500 py-10">
                            Loading success stories...
                        </p>
                    )}

                    {!loading && error && (
                        <p className="text-center text-red-600 py-10">
                            {error}
                        </p>
                    )}

                    {!loading && !error && studentStories.length === 0 && (
                        <p className="text-center text-gray-500 py-10">
                            No success stories available currently.
                        </p>
                    )}

                    {!loading && !error && studentStories.length > 0 && (
                        <div className="grid gap-5 sm:gap-7">
                            {studentStories.map((item) => {
                                const rating = Math.min(
                                    5,
                                    Math.max(0, Number(item.rating) || 5)
                                );

                                const achievements = Array.isArray(
                                    item.achievements
                                )
                                    ? item.achievements
                                    : [];

                                const initials =
                                    item.studentName
                                        ?.split(" ")
                                        .map((part) => part[0])
                                        .join("")
                                        .slice(0, 2)
                                        .toUpperCase() || "S";

                                return (
                                    <motion.div
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        key={item._id}
                                        className="flex flex-col md:flex-row gap-6 md:gap-10 items-center bg-gray-50 p-4 sm:p-6 rounded-3xl border border-gray-200 shadow"
                                    >
                                        {/* Student image or fallback avatar */}
                                        <div className="rounded-full w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] border-2 p-0.5 border-[#ffb703] flex-shrink-0 overflow-hidden flex items-center justify-center bg-[#E0F1FF]">
                                            {item.image ? (
                                                <img
                                                    className="rounded-full w-full h-full object-cover"
                                                    src={item.image}
                                                    alt={item.studentName}
                                                    onError={(event) => {
                                                        event.currentTarget.style.display =
                                                            "none";
                                                    }}
                                                />
                                            ) : (
                                                <span className="text-4xl sm:text-6xl font-bold text-[#0f4a85]">
                                                    {initials}
                                                </span>
                                            )}
                                        </div>

                                        {/* Story details */}
                                        <div className="space-y-2 sm:space-y-3 text-center md:text-left flex-1">
                                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0f4a85]">
                                                {item.studentName}
                                            </h2>

                                            <p className="bg-[#ffb703]/10 text-[#ffb703] font-semibold inline-flex py-1 px-2.5 rounded-2xl text-xs sm:text-sm mx-auto md:mx-0">
                                                {item.course}
                                            </p>

                                            <div className="flex items-center gap-1 sm:gap-2 text-yellow-400 justify-center md:justify-start">
                                                {[...Array(rating)].map(
                                                    (_, index) => (
                                                        <IoStarSharp
                                                            key={index}
                                                        />
                                                    )
                                                )}

                                                <span className="text-xs text-gray-500 ml-1">
                                                    {rating.toFixed(1)}/5
                                                </span>
                                            </div>

                                            <p className="border-l-4 px-2 sm:px-3 border-[#0f4a85] text-gray-600 text-sm sm:text-base">
                                                {item.story}
                                            </p>

                                            <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
                                                {achievements.map(
                                                    (achievement, index) => (
                                                        <span
                                                            key={`${achievement}-${index}`}
                                                            className="bg-[#ffb703]/10 text-[#ffb703] font-semibold inline-flex py-1 px-2.5 rounded-2xl text-xs sm:text-sm"
                                                        >
                                                            {achievement}
                                                        </span>
                                                    )
                                                )}

                                                {item.batch && (
                                                    <span className="bg-[#ffb703]/10 text-[#ffb703] font-semibold inline-flex py-1 px-2.5 rounded-2xl text-xs sm:text-sm">
                                                        Batch {item.batch}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* Call to action */}
            <section className="py-12 sm:py-16 bg-[#ffb703]">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f4a85] mb-3 sm:mb-4">
                        Ready to Write Your Own Success Story?
                    </h2>

                    <p className="text-[#0f4a85] text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                        Get industry-ready with our comprehensive training
                        programs. Enroll today and take the first step toward
                        a successful career in IT.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.08 }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut",
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#0f4a85] text-white px-6 sm:px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl cursor-pointer text-sm sm:text-base"
                            >
                                Enroll Now
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </>
    );
};

export default SuccessStories;