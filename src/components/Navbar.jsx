import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaStore, FaUser, FaAngleRight } from "react-icons/fa";
import { TfiSearch } from "react-icons/tfi";

function Navbar({ menuItems }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const MenuItem = ({ item }) => {
        const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
        const hasSubItems = item.subItems && item.subItems.length > 0;

        return (
            <li className="relative group px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap" onMouseEnter={() => setIsSubMenuOpen(true)} onMouseLeave={() => setIsSubMenuOpen(false)}>
                <div className="flex justify-between items-center w-full">
                    <span>{item.title}</span>
                    {hasSubItems && <FaAngleRight className="ml-2" />}
                </div>

                {hasSubItems && isSubMenuOpen && (
                    <ul className="absolute top-0 left-full ml-1 w-48 bg-white shadow-lg rounded-md z-30">
                        {item.subItems.map((subItem, idx) => (
                            <MenuItem key={idx} item={subItem} />
                        ))}
                    </ul>
                )}
            </li>
        );
    };

    const renderMenuItems = (items) => (
        <ul className="w-full">
            {items.map((item, index) => (
                <MenuItem key={index} item={item} />
            ))}
        </ul>
    );

    return (
        <div className="flex w-full items-center p-4 shadow-md relative bg-white z-50">
            <div className="flex items-center gap-8 cursor-pointer">
                <img src="/yahya.png" alt="logo" className="h-13" />
                <div className="relative">
                    <div onClick={toggleMenu} className="flex items-center gap-2 cursor-pointer font-medium text-xl">
                        <span className="text-3xl"><RxHamburgerMenu /></span>
                        <span>Categories</span>
                    </div>
                    {isMenuOpen && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md z-20">
                            {renderMenuItems(menuItems)}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex items-center flex-grow mx-10 border border-gray-400 rounded-sm">
                <input className="px-4 py-2 flex-grow w-full" type="text" placeholder="Search for games, top-ups, items, game service and more"/>
                <select className="bg-white px-4 py-2 border-x border-gray-400">
                    <option className="text-lg">All Categories</option>
                    <option className="text-sm">Games</option>
                    <option className="text-sm">Items</option>
                    <option className="text-sm">Top Up</option>
                </select>
                <button className="bg-green-800 hover:bg-green-700 text-white text-2xl p-2"><TfiSearch /></button>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 hover:bg-gray-200 px-4 py-2 rounded-full cursor-default">
                    <img src="/pk-flag.png" alt="Pakistan Flag" className="h-4" />EN | USD
                </div>
                <div className="bg-white hover:bg-green-200 text-green-800 rounded-full px-4 py-2 flex items-center gap-2 border border-green-800">
                    <FaStore />
                    <button>Become Seller</button>
                </div>
                <div className="bg-green-800 hover:bg-green-700 text-white rounded-full px-4 py-2 flex items-center gap-2">
                    <FaUser />
                    <button>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

























































// import React, { useState } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { FaStore, FaUser, FaAngleRight } from "react-icons/fa";
// import { TfiSearch } from "react-icons/tfi";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     if (!isMenuOpen) {
//       setIsSubMenuOpen(false); // Reset submenu when opening menu
//     }
//   };

//   const toggleSubMenu = (e) => {
//     e.stopPropagation(); // prevent closing parent
//     setIsSubMenuOpen((prev) => !prev);
//   };

//   return (
//     <div className='flex w-full items-center p-4 shadow-md'>
//       <div className='flex items-center gap-8 cursor-pointer'>
//         <img src="/yahya.png" alt="Z2U" className="h-12" />
//         <div className='relative'>
//           <div
//             onClick={toggleMenu}
//             className='flex items-center gap-2 cursor-pointer font-medium text-xl'
//           >
//             <span className='text-3xl'><RxHamburgerMenu /></span>
//             <span>Categories</span>
//           </div>

//           {isMenuOpen && (
//             <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md z-10">
//               <ul className="flex flex-col p-4 gap-3">
                
//                 <li
//                   className="relative flex items-center justify-between cursor-pointer"
//                   onClick={toggleSubMenu}
//                 >
//                   Game Service
//                   <FaAngleRight />
//                   {isSubMenuOpen && (
//                     <div className="absolute left-full top-0 ml-2 w-48 bg-white shadow-lg rounded-md z-20">
//                       <ul className="flex flex-col p-4 gap-3">
//                         <li className="cursor-pointer">Boosting</li>
//                         <li className="cursor-pointer">Coaching</li>
//                         <li className="cursor-pointer">Account Leveling</li>
//                       </ul>
//                     </div>
//                   )}
//                 </li>

//                 <li className="flex items-center justify-between cursor-pointer">
//                   Gaming
//                 </li>
//                 <li className="flex items-center justify-between cursor-pointer">
//                   Top Up
//                 </li>
//                 <li className="flex items-center justify-between cursor-pointer">
//                   Gift Cards
//                 </li>
//                 <li className="flex items-center justify-between cursor-pointer">
//                   Software & Apps
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className='flex items-center flex-grow mx-10 border border-gray-400 rounded-sm'>
//         <input
//           className='px-4 py-2 flex-grow w-full'
//           type="text"
//           placeholder="Search for games, top-ups, items, game service and more"
//         />
//         <select className='bg-white px-4 py-2 border-x border-gray-400'>
//           <option className='text-lg'>All Categories</option>
//           <option className='text-sm'>Games</option>
//           <option className='text-sm'>Items</option>
//           <option className='text-sm'>Top Up</option>
//         </select>
//         <button className='bg-green-800 hover:bg-green-700 text-white text-2xl p-2'>
//           <TfiSearch />
//         </button>
//       </div>

//       <div className='flex items-center gap-4'>
//         <div className='flex items-center gap-2 bg-gray-100 border border-gray-200 hover:bg-gray-200 px-4 py-2 rounded-full cursor-default'>
//           <img src="/pk-flag.png" alt="Pakistan Flag" className="h-4" />
//           EN | USD
//         </div>
//         <div className='bg-white hover:bg-green-200 text-green-800 rounded-full px-4 py-2 flex items-center gap-2 border border-green-600'>
//           <FaStore />
//           <button>Become Seller</button>
//         </div>
//         <div className='bg-green-800 hover:bg-green-700 text-white rounded-full px-4 py-2 flex items-center gap-2'>
//           <FaUser />
//           <button>Login</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
