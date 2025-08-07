import React from 'react';
import {
  FaCoins, FaGem, FaBox, FaRocket,
  FaUserShield, FaGamepad, FaGift, FaPercent
} from 'react-icons/fa';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const items = [
  { icon: <FaCoins />, label: 'Currency' },
  { icon: <FaGem />, label: 'Top up' },
  { icon: <FaBox />, label: 'Items' },
  { icon: <FaRocket />, label: 'Boosting' },
  { icon: <FaUserShield />, label: 'Accounts' },
  { icon: <FaGamepad />, label: 'Video Games' },
  { icon: <FaGift />, label: 'Gift Cards' },
  { icon: <FaPercent />, label: 'Coupons' },
  { icon: <FaCoins />, label: 'Silver' },
  { icon: <FaGem />, label: 'Power' },
  { icon: <FaBox />, label: 'Supply' },
  { icon: <FaRocket />, label: 'Launch' },
  { icon: <FaUserShield />, label: 'Security' },
  { icon: <FaGamepad />, label: 'Games' },
  { icon: <FaGift />, label: 'Offers' },
];
// bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600
// bg-[url('/er_1.jpg')] bg-cover bg-center brightness-110
function Header() {
  return (
    <div className="relative h-[420px]  text-white overflow-hidden max-w-8xl mx-auto">
      <div className="absolute inset-0 -z-10  bg-[url('/flag.png')] bg-cover bg-center brightness-50 "></div>
      <div className="flex flex-col items-center justify-center h-2/3 text-center px-4 relative z-10 ">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-2 max-w-3xl">
          Discover the favorite marketplace for game services & products with worldwide gamers
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-2">Azadi Sale!</h1>
        <button className="bg-green-800 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-md text-sm rotate-355">
          Enjoy 50% Discount!
        </button>
      </div>
      <div className="relative px-10">
        <Swiper
          modules={[Navigation]}
          slidesPerView={8}
          spaceBetween={16}
          slidesPerGroup={7}
          navigation={{
            prevEl: '.header-swiper-prev',
            nextEl: '.header-swiper-next',
          }}
          className="relative z-10"
          breakpoints={{
            320: { slidesPerView: 3 },
            480: { slidesPerView: 4 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 8 }
          }}>
          {items.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center text-center px-1 py-4 bg-white/10 hover:bg-white/20 transition rounded-xl cursor-pointer">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-sm sm:text-base font-medium">{item.label}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-x-0 top-1/3 flex justify-between px-1 z-20">
          <button className="header-swiper-prev bg-white text-black p-2 rounded-full hover:scale-105 transition">
            <IoIosArrowBack />
          </button>
          <button className="header-swiper-next bg-white text-black p-2 rounded-full hover:scale-105 transition">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};


export default Header;




































