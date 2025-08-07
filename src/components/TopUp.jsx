import React from 'react';

export default function TopUp({ items }) {
  const featuredGame = items.find(game => game.isFeatured);
  const otherGames = items.filter(game => !game.isFeatured);

  return (
    <div className="p-6 max-w-8xl mx-auto bg-[#1a2d26]">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-green-300">Trending Items</h2>
        <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-500 transition">Discover All</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {featuredGame && (
          <div className="flex justify-center">
            <div className="relative h-[90%] rounded-xl overflow-hidden hover:scale-105 transition">
              <img className="w-full h-full object-cover" src={featuredGame.imageUrl} alt={featuredGame.name}/>
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <p className="text-black text-xl font-bold">{featuredGame.name}</p>
                <p className="text-black text-sm">{featuredGame.offers} Offers</p>
              </div>
            </div>
          </div>
        )}

        <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {otherGames.map((game, index) => (
            <div key={index} className="relative h-30 md:h-44 rounded-lg overflow-hidden hover:scale-105 transition border border-white/10" >
              <img className="w-full h-full object-cover" src={game.imageUrl} alt={game.name} />
              <div className="absolute inset-0 flex items-end p-3 text-black text-sm font-medium">{game.name}</div>
              <div className="absolute top-2 right-2 text-xs px-2 py-0.5 rounded bg-green-600 text-white font-semibold">{game.offers} Offers</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

































{/* <span
    className={`absolute top-2 right-2 text-xs px-2 py-0.5 rounded bg-white text-green-800 font-semibold ${game.offers === 0 ? 'opacity-50 line-through' : ''
        }`}
>
    {game.offers} Offers
</span> */}
//  flex items-center justify-between mb-6
// flex items-center justify-center relative mb-8
// absolute right-0
// p-6 w-full bg-[url('/g-bg.jpg')] bg-cover bg-center // for full screen




