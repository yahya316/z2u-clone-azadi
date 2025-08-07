import React from 'react';

export default function HotGame({cardData}) {
    return (
        <div className="py-8 px-4 max-w-8xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Azadi Day Specials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cardData.map((card, index) => (
                    <div key={index} className={`rounded-sm shadow-md p-4 text-white ${card.color} flex flex-col justify-between`}>
                        <div>
                            <div className="flex items-center gap-3 mb-2 pb-2 border-b border-white/30 relative">
                                <div className="absolute -top-8 -left-2">
                                    <img className="w-13 h-13 rounded-full object-cover border border-white shadow-md" src={card.icon} alt={`${card.category} icon`}/>
                                </div>
                                <span className="text-xl font-semibold pl-15">{card.category}</span>
                            </div>
                            <ul className="space-y-2 ">
                                {card.items.map((item, i) => (
                                    <li key={i} className="flex justify-between text-sm border-b border-white/30 py-2">
                                        <span>{item.name}</span>
                                        <span className="font-medium">{item.count}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-4 flex justify-center">
                            <button className="w-auto bg-white text-green-800 font-semibold py-1 px-3 rounded hover:bg-gray-200 transition">
                                View More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}



























// import React from 'react';

// export default function HotGame() {
//     return (
//         <div className="py-8 px-4 max-w-8xl mx-auto">
//             <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Azadi Day Specials</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 <div className="rounded-sm shadow-md p-4 text-white bg-green-600 flex flex-col justify-between">
//                     <div>
//                         <div className="flex items-center gap-3 mb-2 pb-2 border-b border-white/30 relative">
//                             <div className="absolute -top-8 -left-2">
//                                 <img className="w-13 h-13 rounded-full object-cover border border-white shadow-md" src="pk-flag.png" alt="NATIONAL SYMBOLS icon" />
//                             </div>
//                             <span className="text-xl font-semibold pl-15">NATIONAL SYMBOLS</span>
//                         </div>
//                         <ul className="space-y-2">
//                             <li className="flex justify-between text-sm border-b border-white/30 py-2">
//                                 <span>Pakistan Flag</span>
//                                 <span className="font-medium">1947</span>
//                             </li>
//                             <li className="flex justify-between text-sm border-b border-white/30 py-2">
//                                 <span>Minar-e-Pakistan</span>
//                                 <span className="font-medium">786</span>
//                             </li>
//                             <li className="flex justify-between text-sm border-b border-white/30 py-2">
//                                 <span>Quaid-e-Azam Portrait</span>
//                                 <span className="font-medium">1000</span>
//                             </li>
//                             <li className="flex justify-between text-sm border-b border-white/30 py-2">
//                                 <span>National Anthem Poster</span>
//                                 <span className="font-medium">550</span>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="mt-4 flex justify-center">
//                         <button className="w-auto bg-white text-green-800 font-semibold py-1 px-3 rounded hover:bg-gray-200 transition">
//                             View More
//                         </button>
//                     </div>
//                 </div>

//                 <div className="rounded-sm shadow-md p-4 text-white bg-green-800 flex flex-col justify-between">
//                     <div>
//                         <div className="flex items-center gap-3 mb-2 pb-2 border-b border-white/30 relative">
//                             <div className="absolute -top-8 -left-2">
//                                 <img className="w-13 h-13 rounded-full object-cover border border-white shadow-md" src="pk-flag.png" alt="AZADI DECOR icon" />
//                             </div>
//                             <span className="text-xl font-semibold pl-15">AZADI DECOR</span>
//                         </div>
//                         <ul className="space-y-2">
//                             <li className="flex justify-between text-sm border-b border-white/30 py-2">
//                                 <span>Green Bunting</span>
//                                 <span className="font-medium">1408</span>
//                             </li>
//                             <li className="flex justify-between text-sm border-b border-white/30 py-2">
//                                 <span>Azadi Caps & Shirts</span>
//                                 <span className="font-medium">900</span>
//                             </li>
//                             <li className="flex justify-between text-sm border-b border-white/30 py-2">
//                                 <span>Flag Stickers</span>
//                                 <span className="font-medium">786</span>
//                             </li>
//                             <li className="flex justify-between text-sm border-b border-white/30 py-2">
//                                 <span>LED Flag Lights</span>
//                                 <span className="font-medium">194</span>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="mt-4 flex justify-center">
//                         <button className="w-auto bg-white text-green-800 font-semibold py-1 px-3 rounded hover:bg-gray-200 transition">
//                             View More
//                         </button>
//                     </div>
//                 </div>

//                 <div className="rounded-sm shadow-md p-4 text-white bg-lime-600 flex flex-col justify-between">
//                     <div>
//                         <div className="flex items-center gap-3 mb-2 pb-2 border-b border-white/30 relative">
//                             <div className="absolute -top-8 -left-2">
//                                 <img className="w-13 h-13 rounded-full object-cover border border-white shadow-md" src="pk-flag.png" alt="CELEBRATION KITS icon" />
//                             </div>
//                             <span className="text-xl font-semibold pl-15">CELEBRATION KITS</span>
//                         </div>
//                         <ul className="space-y-2">
//                             <li className="flex justify-between text-sm border-b border-white/30 py-2">
//                                 <span>Kids Azadi Kits</span>
//                                 <span className="font-medium">718</span>
//                             </li>
//                             <li className="flex justify-between text-sm border-b border-white/30 py-2">
//                                 <span>Patriotic Badges</span>
//                                 <span className="font-medium">1100</span>
//                             </li>
//                             <li className="flex justify-between text-sm border-b border-white/30 py-2">
//                                 <span>Face Paint Set</span>
//                                 <span className="font-medium">888</span>
//                             </li>
//                             <li className="flex justify-between text-sm border-b border-white/30 py-2">
//                                 <span>Mini Flags Pack</span>
//                                 <span className="font-medium">550</span>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="mt-4 flex justify-center">
//                         <button className="w-auto bg-white text-green-800 font-semibold py-1 px-3 rounded hover:bg-gray-200 transition">
//                             View More
//                         </button>
//                     </div>
//                 </div>

//                 <div className="rounded-sm shadow-md p-4 text-white bg-emerald-700 flex flex-col justify-between">
//                     <div>
//                         <div className="flex items-center gap-3 mb-2 pb-2 border-b border-white/30 relative">
//                             <div className="absolute -top-8 -left-2">
//                                 <img className="w-13 h-13 rounded-full object-cover border border-white shadow-md" src="pk-flag.png" alt="SPECIAL OFFERS icon" />
//                             </div>
//                             <span className="text-xl font-semibold pl-15">SPECIAL OFFERS</span>
//                         </div>
//                         <ul className="space-y-2">
//                             <li className="flex justify-between text-sm border-b border-white/30 py-2">
//                                 <span>Azadi Day Discounts</span>
//                                 <span className="font-medium">60%</span>
//                             </li>
//                             <li className="flex justify-between text-sm border-b border-white/30 py-2">
//                                 <span>Bundle Deals on Flags</span>
//                                 <span className="font-medium">500</span>
//                             </li>
//                             <li className="flex justify-between text-sm border-b border-white/30 py-2">
//                                 <span>T-Shirts & Accessories</span>
//                                 <span className="font-medium">350</span>
//                             </li>
//                             <li className="flex justify-between text-sm border-b border-white/30 py-2">
//                                 <span>Limited Edition Gifts</span>
//                                 <span className="font-medium">147</span>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="mt-4 flex justify-center">
//                         <button className="w-auto bg-white text-green-800 font-semibold py-1 px-3 rounded hover:bg-gray-200 transition">
//                             View More
//                         </button>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// }
