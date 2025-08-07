import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import { TbThumbUp } from "react-icons/tb";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const reviewsData = [
    { rating: 5, percentage: '99.8%', text: 'The delivery speed is fast and the account quality is high.', avatar: '/img1.jpg', user: 'devilseller', date: 'Jul 30, 2025' },
    { rating: 5, percentage: '99.6%', text: 'very nice seller! smooth transaction and pleasant experience. ty!!', avatar: '/img1.jpg', user: 'UGameShop', date: 'Jul 30, 2025' },
    { rating: 4, percentage: '95.6%', text: 'Rapide, efficace, je recommande.', avatar: '/img1.jpg', user: 'UGameShop', date: 'Jul 30, 2025' },
    { rating: 5, percentage: '100.0%', text: 'Awesome. You just can\'t beat the price, and it came quick. The guy responds fast also!', avatar: '/img1.jpg', user: 'GamingHub', date: 'Jul 30, 2025' },
    { rating: 5, percentage: '99.8%', text: 'Another great transaction. Fast and reliable as always!', avatar: '/img1.jpg', user: 'GamerX', date: 'Jul 29, 2025' },
    { rating: 5, percentage: '99.6%', text: 'Super service, a pleasure to deal with.', avatar: '/img1.jpg', user: 'DigitalGoods', date: 'Jul 29, 2025' },
    { rating: 5, percentage: '100.0%', text: 'Perfect! Exactly as described.', avatar: '/img1.jpg', user: 'ProSeller', date: 'Jul 28, 2025' },
    { rating: 5, percentage: '90.9%', text: 'Couldn\'t be happier with the purchase.', avatar: '/img1.jpg', user: 'EpicFinds', date: 'Jul 28, 2025' },
    { rating: 5, percentage: '99.8%', text: 'Flawless experience from start to finish.', avatar: '/img1.jpg', user: 'VaultHunter', date: 'Jul 27, 2025' },
    { rating: 5, percentage: '99.6%', text: 'Top quality and instant delivery.', avatar: '/img1.jpg', user: 'GameTrade', date: 'Jul 27, 2025' },
    { rating: 3, percentage: '60.6%', text: 'Will definitely buy from again. Highly recommended.', avatar: '/img1.jpg', user: 'TheMarket', date: 'Jul 26, 2025' },
    { rating: 5, percentage: '100.0%', text: 'A+ seller, communication was excellent.', avatar: '/img1.jpg', user: 'PlayerOne', date: 'Jul 26, 2025' },
];

const Stargen = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <FaStar key={i} className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
        );
    }
    return <div className="flex space-x-1">{stars}</div>;
};

export default function Ratings() {
    return (
        
        <div className="max-w-8xl mx-auto py-10 px-4 md:px-10 bg-[#1a2d26]">
            <h2 className="text-2xl font-bold mb-6 text-green-300">Community Ratings</h2>
            <div className="relative">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={4}
                    slidesPerGroup={4}
                    navigation={{
                        prevEl: '.ratings-swiper-prev',
                        nextEl: '.ratings-swiper-next',
                    }}
                    loop={true}
                    pagination={{
                        el: '.ratings-swiper-pagination',
                        clickable: true,
                    }}
                    className="ratings-swiper"
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {reviewsData.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-[#223d34] rounded-lg p-4 h-[200px] flex flex-col justify-between">
                                <div className="flex justify-between items-center mb-3">
                                    <Stargen rating={review.rating} />
                                    <span className="text-sm text-green-400 flex items-center gap-1">
                                        <TbThumbUp className="text-lg" /> {review.percentage}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-300 mb-4 line-clamp-4">{review.text}</p>
                                <div className="flex items-center mt-auto pt-4 border-t border-[#38564b]">
                                    <img className="w-10 h-10 rounded-full mr-3 object-cover" src={review.avatar} alt={review.user}/>
                                    <div className="text-sm text-gray-300">
                                        <div className="font-medium text-white">{review.user}</div>
                                        <div className="text-xs text-gray-400">{review.date}</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="ratings-swiper-prev absolute top-1/2 -left-4 transform cursor-pointer z-10 text-2xl text-white bg-[#2f4f44] rounded-full hover:scale-105 transition p-1">
                    <IoIosArrowBack />
                </div>
                <div className="ratings-swiper-next absolute top-1/2 -right-4 transform cursor-pointer z-10 text-2xl text-white bg-[#2f4f44] rounded-full hover:scale-105 transition p-1">
                    <IoIosArrowForward />
                </div>
            </div>

            <div className="ratings-swiper-pagination mt-6 flex justify-center"></div>
        </div>
    );
}





















// <section className="max-w-8xl mx-auto py-10 px-4 md:px-10 bg-white">
        //     <h2 className="text-2xl font-bold mb-6 text-green-900">Community Ratings</h2>
        //     <div className="relative">
        //         <Swiper
        //             modules={[Navigation, Pagination]}
        //             spaceBetween={30}
        //             slidesPerView={4}
        //             slidesPerGroup={4}
        //             navigation={{
        //                 prevEl: '.ratings-swiper-prev',
        //                 nextEl: '.ratings-swiper-next',
        //             }}
        //             loop={true}
        //             pagination={{
        //                 el: '.ratings-swiper-pagination',
        //                 clickable: true,
        //             }}
        //             className="ratings-swiper"
        //             breakpoints={{
        //                 320: { slidesPerView: 1 },
        //                 640: { slidesPerView: 2 },
        //                 1024: { slidesPerView: 4 }
        //             }}
        //         >
        //             {reviewsData.map((review, index) => (
        //                 <SwiperSlide key={index}>
        //                     <div className="bg-gray-100 rounded-lg p-4 h-[200px] flex flex-col justify-between ">
        //                         <div className="flex justify-between items-center mb-3">
        //                             <Stargen rating={review.rating} />
        //                             <span className="text-sm text-green-600 flex items-center gap-1">
        //                                 <TbThumbUp className="text-lg" /> {review.percentage}
        //                             </span>
        //                         </div>
        //                         <p className="text-sm text-gray-700 mb-4 line-clamp-4">{review.text}</p>
        //                         <div className="flex items-center mt-auto pt-4 border-t border-gray-300">
        //                             <img
        //                                 src={review.avatar}
        //                                 alt={review.user}
        //                                 className="w-10 h-10 rounded-full mr-3 object-cover"
        //                             />
        //                             <div className="text-sm text-gray-600">
        //                                 <div className="font-medium">{review.user}</div>
        //                                 <div className="text-xs text-gray-400">{review.date}</div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </SwiperSlide>
        //             ))}
        //         </Swiper>

        //         <div className="ratings-swiper-prev absolute top-1/2 -left-4 transform cursor-pointer z-10 text-2xl text-white bg-gray-700 rounded-full hover:scale-105 transition p-1">
        //             <IoIosArrowBack />
        //         </div>
        //         <div className="ratings-swiper-next absolute top-1/2 -right-4 transform cursor-pointer z-10 text-2xl text-white bg-gray-700 rounded-full hover:scale-105 transition p-1">
        //             <IoIosArrowForward />
        //         </div>
        //     </div>

        //     <div className="ratings-swiper-pagination mt-6 flex justify-center"></div>
        // </section>