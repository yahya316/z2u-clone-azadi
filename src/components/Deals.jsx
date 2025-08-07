import React from "react";

export default function Deals({ deals }) {
    return (
        <div className="bg-gradient-to-b from-green-50 to-white p-6 max-w-8xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-green-800 uppercase tracking-wider mb-12">
                Azadi Special Deals
            </h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
                {deals.map((deal, index) => (
                    <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md transition hover:scale-101 border border-green-100">
                        <img className="w-full h-40 object-cover" src={deal.image} alt={deal.title} />
                        <div className="p-5">
                            <div className="inline-block text-xs uppercase bg-green-100 text-green-700 font-semibold px-2 py-1 rounded-full mb-3">
                                {deal.badge}
                            </div>
                            <h3 className="text-lg font-bold text-green-800 mb-2">{deal.title}</h3>
                            <p className="text-sm text-gray-600 mb-3">{deal.description}</p>
                            <ul className="list-disc list-inside text-sm text-gray-500 mb-4 space-y-1">
                                {deal.includes.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            <button className="bg-green-700 hover:bg-green-800 text-white text-sm font-medium py-2 px-4 rounded-full transition duration-200">
                                Shop Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}



























































/* <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-green-100"> */
// import React from "react";
// import { LuCalendarDays } from "react-icons/lu";

// const azadiDealsData = [
//   {
//     color: "bg-green-200",
//     items: [
//       "Pakistan Cricket Jersey",
//       "Independence Day Flags",
//       "14 August Stickers",
//       "Green Fairy Lights",
//       "Azadi Theme Wallpapers",
//       "Digital Pakistan Badges",
//       "Zindabad Posters",
//       "Minar-e-Pakistan Models",
//       "Crescent Moon Necklaces",
//       "Green Face Paint",
//     ],
//   },
//   {
//     color: "bg-emerald-200",
//     items: [
//       "14 August Caps",
//       "Pak Flag Mobile Covers",
//       "Green & White Balloons",
//       "Jashn-e-Azadi Wristbands",
//       "Digital Independence Cards",
//       "Azadi Sale Coupons",
//       "Pak Identity Accessories",
//       "Pakistan Zindabad Stickers",
//       "Cultural Pak T-Shirts",
//       "Pak Map Posters",
//     ],
//   },
//   {
//     color: "bg-lime-200",
//     items: [
//       "Green Glow Bands",
//       "Azadi Kids Costume",
//       "Pak Car Flags",
//       "Special Azadi Discounts",
//       "Unity Keychains",
//       "Historic Pak Posters",
//       "Azadi Day Playlist Access",
//       "Minar Wallpapers",
//       "Azadi Storybooks",
//       "Pak-Themed Tote Bags",
//     ],
//   },
//   {
//     color: "bg-green-300",
//     items: [
//       "Pakistan Emoji Packs",
//       "Exclusive Green Deals",
//       "National Anthem Downloads",
//       "Green Fireworks Filters",
//       "Azadi Insta Frames",
//       "Patriotic Song Subscriptions",
//       "Green Lens Effects",
//       "14 August Greeting Templates",
//       "Pak Fonts Collection",
//       "Pak Avatar Makers",
//     ],
//   },
// ];

// export default function AzadiDeals() {
//   return (
//     <section className="py-12 px-4 bg-gradient-to-r from-white via-green-50 to-white">
//       <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
//         Azadi Special Deals
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {azadiDealsData.map((column, colIndex) => (
//           <div
//             key={colIndex}
//             className={`rounded-xl shadow-md p-4 ${column.color} border border-green-600`}
//           >
//             <div className="flex items-center justify-center mb-4 text-green-800 text-3xl">
//               <LuCalendarDays />
//             </div>
//             <ul className="space-y-2 text-green-900 font-medium text-sm">
//               {column.items.map((item, itemIndex) => (
//                 <li
//                   key={itemIndex}
//                   className="hover:underline hover:text-green-700 transition-all duration-200"
//                 >
//                   <a href="#">{item}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }






