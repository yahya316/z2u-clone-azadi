import React from "react";

export default function News({ highlights }) {
    return (
        <div className="bg-[#1a2d26] py-20 px-4 max-w-8xl mx-auto">
            <div>
                <h2 className="text-4xl font-bold text-center text-white uppercase mb-14 tracking-wider"> Azadi Highlights </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {highlights.map((item, index) => (
                        <div key={index} className="text-white">
                            <div className="h-0.5 w-20 bg-green-500 mb-4" />
                            <h3 className="text-lg font-semibold leading-snug mb-2">{item.title}</h3>
                            <p className="text-sm text-green-400 mb-3">Date : {item.date}</p>
                            <p className="text-sm text-gray-300 mb-5">{item.description}</p>
                            <button className="text-sm text-green-400 border border-green-400 px-4 py-1 rounded hover:bg-green-500 hover:text-white transition-all duration-300">
                                View More →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
