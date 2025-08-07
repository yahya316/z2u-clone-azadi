import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function Gift({ cards, sliderId, title }) {
    return (
        <div className="max-w-8xl mx-auto py-6 px-4 text-green-800 ">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold pl-6">{title}</h2>
                <button className="text-sm font-medium border px-3 py-1 rounded hover:bg-green-100 hover:text-green-900 transition">
                    Discover All
                </button>
            </div>
            <div className="relative px-7  ">
                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={20}
                    slidesPerView={2}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        // 1280: { slidesPerView: 5 },
                    }}
                    slidesPerGroup={4}
                    navigation={{
                        prevEl: `.swiper-button-prev-custom-${sliderId}`,
                        nextEl: `.swiper-button-next-custom-${sliderId}`,
                    }}
                    loop={true}
                    pagination={{
                        el: `.swiper-pagination-custom-${sliderId}`,
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {cards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative h-30 md:h-48 rounded-lg overflow-hidden shadow-md cursor-pointer hover:scale-105 ">
                                <img className="w-full h-full object-cover" src={card.imageUrl} alt={card.name} />
                                <div className="absolute bottom-2 left-2">
                                    <span className="block text-gray-700 text-sm font-bold">{card.name}</span>
                                    <span className="text-xs text-gray-700">{card.offers} Offers</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className={`swiper-button-prev-custom-${sliderId} absolute -left-3 top-1/3 text-white bg-gray-700 rounded-full p-1 text-2xl cursor-pointer hover:scale-105 transition z-10`}>
                    <IoIosArrowBack />
                </div>
                <div className={`swiper-button-next-custom-${sliderId} absolute -right-3 top-1/3 text-white bg-gray-700 rounded-full p-1 text-2xl cursor-pointer hover:scale-105 transition z-10`}>
                    <IoIosArrowForward />
                </div>
                <div className={`swiper-pagination-custom-${sliderId} mt-4 text-center`} />
            </div>
        </div>
    );
}






// bg-gradient-to-r from-green-600 to-emerald-700
// bg-[url('/fire3.jpg')] bg-cover bg-center