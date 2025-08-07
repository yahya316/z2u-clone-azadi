import React from 'react';

// bg-[url('/flag.png')] bg-cover bg-center
// bg-gradient-to-r from-green-100 to-white
// border border-green-600
export default function Banner() {
  return (
    <div className="max-w-8xl mx-auto py-10 px-4 flex justify-center items-center bg-gradient-to-b from-white to-green-50 ">
      <div className="relative w-full p-8 flex flex-col md:flex-row items-center justify-between shadow-md bg-gradient-to-r from-green-100 to-white rounded-xl overflow-hidden">

        <div className="order-1 md:order-2 relative md:self-end md:mt-[-60px] md:mb-[-30px] mb-6 ">
          <img className="w-32 md:w-52 object-contain" src="/minar-e-pakistan.png" alt="Minar-e-Pakistan" />
        </div>
        <div className="order-2 md:order-1 z-10 max-w-xl text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 leading-snug mb-4">
            Celebrate <span className="text-green-600">Pakistan's Azadi</span><br />
            with Exclusive Offers!
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-6">
            Join the celebration this 14th August. Special discounts, rewards, and more—just for you!
          </p>
          <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
            Celebrate with Us
          </button>
        </div>

      </div>
    </div>
  );
}

