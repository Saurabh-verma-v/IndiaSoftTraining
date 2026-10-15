import React, { useEffect, useState } from "react";

// Swiper components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Swiper modules
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "motion/react";

// Existing Axios API instance
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
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const Events = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await API.get("/training-services");

                // Backend response: { success: true, data: [...] }
                const result = response.data;
                const serviceData = Array.isArray(result)
                    ? result
                    : result.data;

                setServices(
                    (Array.isArray(serviceData) ? serviceData : []).filter(
                        (service) => service.isActive !== false
                    )
                );
            } catch (err) {
                console.error("Error fetching training services:", err);
                setError("Unable to load training services.");
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    return (
        <section className="bg-white pt-8 sm:pt-12 lg:pt-18 pb-8 sm:pb-12 lg:pb-18 overflow-hidden">
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                className="max-w-7xl px-3 sm:px-4 mx-auto py-6 sm:py-8"
            >
                {loading ? (
                    <p className="text-center text-gray-500 py-8">
                        Loading training services...
                    </p>
                ) : error ? (
                    <p className="text-center text-red-600 py-8">
                        {error}
                    </p>
                ) : services.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">
                        No training services available currently.
                    </p>
                ) : (
                    <Swiper
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 18,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        loop={services.length > 3}
                        speed={2000}
                        spaceBetween={14}
                        navigation={true}
                        modules={[Navigation, Autoplay]}
                        className="mySwiper !pb-2"
                    >
                        {services.map((item) => (
                            <SwiperSlide
                                className="shadow-xl rounded-xl h-auto"
                                key={item._id}
                            >
                                <div className="overflow-hidden rounded-xl h-full flex flex-col">
                                    {/* Title */}
                                    <div className="bg-[#0f4a85] text-white text-base sm:text-lg font-bold text-center py-2 px-3 min-h-10 flex items-center justify-center">
                                        {item.title}
                                    </div>

                                    {/* Description */}
                                    <div className="bg-[#E0F1FF]/15 p-4 sm:p-5 text-gray-600 flex-1">
                                        <p className="text-sm sm:text-base leading-6 sm:leading-7">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </motion.div>
        </section>
    );
};

export default Events;