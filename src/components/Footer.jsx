import React from "react";
import { FaXTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

export default function Footer() {
  return (
    <div className="bg-[#1a2d26] text-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-lg font-semibold mb-4">Z2U.COM</h3>
          <ul className="space-y-2">
            <li><a href="#" className="flex items-center text-sm hover:text-green-400 transition"><IoIosArrowForward className="mr-1 text-base" /> About Us</a></li>
            <li><a href="#" className="flex items-center text-sm hover:text-green-400 transition"><IoIosArrowForward className="mr-1 text-base" /> Game Index</a></li>
            <li><a href="#" className="flex items-center text-sm hover:text-green-400 transition"><IoIosArrowForward className="mr-1 text-base" /> News</a></li>
            <li><a href="#" className="flex items-center text-sm hover:text-green-400 transition"><IoIosArrowForward className="mr-1 text-base" /> Affiliate Program</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">SUPPORT</h3>
          <ul className="space-y-2">
            <li><a href="#" className="flex items-center text-sm hover:text-green-400 transition"><IoIosArrowForward className="mr-1 text-base" /> Help Center</a></li>
            <li><a href="#" className="flex items-center text-sm hover:text-green-400 transition"><IoIosArrowForward className="mr-1 text-base" /> Contact us</a></li>
            <li><a href="#" className="flex items-center text-sm hover:text-green-400 transition"><IoIosArrowForward className="mr-1 text-base" /> How to buy</a></li>
            <li><a href="#" className="flex items-center text-sm hover:text-green-400 transition"><IoIosArrowForward className="mr-1 text-base" /> How to Sell</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">LEGAL</h3>
          <ul className="space-y-2">
            <li><a href="#" className="flex items-center text-sm hover:text-green-400 transition"><IoIosArrowForward className="mr-1 text-base" /> Terms of use</a></li>
            <li><a href="#" className="flex items-center text-sm hover:text-green-400 transition"><IoIosArrowForward className="mr-1 text-base" /> Privacy Policy</a></li>
            <li><a href="#" className="flex items-center text-sm hover:text-green-400 transition"><IoIosArrowForward className="mr-1 text-base" /> Cookie policy</a></li>
            <li><a href="#" className="flex items-center text-sm hover:text-green-400 transition"><IoIosArrowForward className="mr-1 text-base" /> DMCA</a></li>
            <li><a href="#" className="flex items-center text-sm hover:text-green-400 transition"><IoIosArrowForward className="mr-1 text-base" /> GDPR</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-start space-y-4">
          <div className="flex space-x-3">
            <a href="#" className="text-gray-300 hover:text-white text-xl"><FaXTwitter /></a>
            <a href="#" className="text-gray-300 hover:text-blue-500 text-xl"><FaFacebookF /></a>
            <a href="#" className="text-gray-300 hover:text-pink-500 text-xl"><FaInstagram /></a>
            <a href="#" className="text-gray-300 hover:text-red-600 text-xl"><FaYoutube /></a>
          </div>
          <button className="flex items-center gap-2 text-sm bg-white text-black border border-gray-300 rounded px-3 py-1 hover:shadow">
            <img className="h-4 w-6 object-cover rounded" src="/pk.svg" alt="Pakistan Flag" />
            Pakistan, English, USD
          </button>
          <div>
            <img className="h-8 object-contain" src="/google-safe.png" alt="Google Safe Browsing" />
          </div>
        </div>
      </div>
      <div className="bg-[#16261f] text-gray-300 py-4 px-4 text-xs text-center">
        <p>
          Copyright © 2025 Z2U.com All rights reserved | E-mail:
          Support@z2u.com <br />
          Company: Macro Excellence Technology Limited | Address: FLAT A516, 5/F,
          EFFICIENCY HOUSE, 35 TAI YAU STREET, SAN PO KONG, KOWLOON, HONG KONG
        </p>
      </div>
    </div>
  );
}



























































// const Links = [
//   {
//     title: "Z2U.COM",
//     links: ["About Us", "Game Index", "News", "Affiliate Program"],
//   },
//   {
//     title: "SUPPORT",
//     links: ["Help Center", "Contact us", "How to buy", "How to Sell"],
//   },
//   {
//     title: "LEGAL",
//     links: ["Terms of use", "Privacy Policy", "Cookie policy", "DMCA", "GDPR"],
//   },
// ];

// export default function Footer() {
//   return (
//     <div className="bg-[#1a2d26] text-white">
//       <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
//         {Links.map((item, index) => (
//           <div key={index}>
//             <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
//             <ul className="space-y-2">
//               {item.links.map((link, linkIndex) => (
//                 <li key={linkIndex}>
//                   <a href="#" className="flex items-center text-sm hover:text-green-400 transition">
//                     <IoIosArrowForward className="mr-1 text-base" /> {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}

//         <div className="flex flex-col items-start space-y-4">
//           <div className="flex space-x-3">
//             <a href="#" className="text-gray-300 hover:text-white text-xl"><FaXTwitter /></a>
//             <a href="#" className="text-gray-300 hover:text-blue-500 text-xl"><FaFacebookF /></a>
//             <a href="#" className="text-gray-300 hover:text-pink-500 text-xl"><FaInstagram /></a>
//             <a href="#" className="text-gray-300 hover:text-red-600 text-xl"><FaYoutube /></a>
//           </div>

//           <button className="flex items-center gap-2 text-sm bg-white text-black border border-gray-300 rounded px-3 py-1 hover:shadow">
//             <img className="h-4 w-6 object-cover rounded" src="/pk.svg" alt="Pakistan Flag" />
//             Pakistan, English, USD
//           </button>

//           <div>
//             <img className="h-8 object-contain" src="/google-safe.png" alt="Google Safe Browsing" />
//           </div>
//         </div>
//       </div>

//       <div className="bg-[#16261f] text-gray-300 py-4 px-4 text-xs text-center">
//         <p>
//           Copyright © 2025 Z2U.com All rights reserved | E-mail:
//           Support@z2u.com <br />
//           Company: Macro Excellence Technology Limited | Address: FLAT A516, 5/F,
//           EFFICIENCY HOUSE, 35 TAI YAU STREET, SAN PO KONG, KOWLOON, HONG KONG
//         </p>
//       </div>
//     </div>
//   );
// }
