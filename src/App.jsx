import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import HotGame from './components/HotCard'
import TopUp from './components/TopUp'
import Gift from './components/Gift'
import Ratings from './components/Ratings'
import AfflGirl from './components/Banner'
import Deals from './components/Deals'
import News from './components/News'
import Payment from './components/Payment'
import Footer from './components/Footer'


const menuItemsData = [
    {
        title: "Game Service",
        subItems: [
            {
                title: "Coaching",
                subItems: [
                    { title: "One-on-One", subItems: [] },
                    { title: "Team Training", subItems: [] },
                ],
            },
            {
                title: "Level Boost",
                subItems: [
                    { title: "One-on-One", subItems: [] },
                    { title: "Team Training", subItems: [] },
                ],
            },
            {
                title: "Rank Boost",
                subItems: [
                    { title: "One-on-One", subItems: [] },
                    { title: "Team Training", subItems: [] },
                ],
            },
        ],
    },
    {
        title: "Gaming",
        subItems: [
            { title: "Steam Games", subItems: [] },
            { title: "PC Games", subItems: [] },
            { title: "Console Games", subItems: [] },
        ],
    },
    {
        title: "Top Up",
        subItems: [
            { title: "Mobile Legends", subItems: [] },
            { title: "PUBG UC", subItems: [] },
            { title: "Free Fire", subItems: [] },
        ],
    },
    {
        title: "Gift Cards",
        subItems: [
            { title: "Amazon", subItems: [] },
            { title: "Google Play", subItems: [] },
            { title: "iTunes", subItems: [] },
        ],
    },
    {
        title: "Software & Apps",
        subItems: [
            { title: "Windows Keys", subItems: [] },
            { title: "Office Keys", subItems: [] },
        ],
    },
    {
        title: "Accounts",
        subItems: [
            { title: "Netflix", subItems: [] },
            { title: "Spotify", subItems: [] },
            { title: "Crunchyroll", subItems: [] },
        ],
    },
    {
        title: "Mobile Recharges",
        subItems: [
            { title: "Jazz", subItems: [] },
            { title: "Zong", subItems: [] },
            { title: "Telenor", subItems: [] },
        ],
    },
    {
        title: "View All",
        subItems: [],
    },
];

const trendyItems = [
  {
    name: 'Azadi Gift Cards',
    offers: 1947,
    imageUrl: '/azadi1.jpg',
    isFeatured: true,
  },
  {
    name: 'Pakistan Day Bundles',
    offers: 786,
    imageUrl: '/pk-flag1.jpg',
  },
  {
    name: 'Minar-e-Pakistan Collectibles',
    offers: 14,
    imageUrl: '/pk-flag1.jpg',
  },
  {
    name: 'Independence Wallpapers',
    offers: 75,
    imageUrl: '/pk-flag1.jpg',
  },
  {
    name: 'Flag Accessories',
    offers: 888,
    imageUrl: '/pk-flag1.jpg',
  },
  {
    name: 'Crescent & Star NFTs',
    offers: 92,
    imageUrl: '/pk-flag1.jpg',
  },
  {
    name: 'National Anthem Ringtones',
    offers: 14,
    imageUrl: '/pk-flag1.jpg',
  },
  {
    name: 'Pakistani Heroes Skins',
    offers: 23,
    imageUrl: '/pk-flag1.jpg',
  },
  {
    name: 'Azadi Fireworks Pack',
    offers: 0,
    imageUrl: '/pk-flag1.jpg',
  },
];

const giftCardData = [
    {
        name: "Azadi Gift Cards",
        offers: 1947,
        imageUrl: "/items.jpg",
    },
    {
        name: "Pakistan Day Bundles",
        offers: 786,
        imageUrl: "/items.jpg",
    },
    {
        name: "Minar-e-Pakistan Collectibles",
        offers: 14,
        imageUrl: "/items.jpg",
    },
    {
        name: "Independence Wallpapers",
        offers: 75,
        imageUrl: "/items.jpg",
    },
    {
        name: "Flag Accessories",
        offers: 888,
        imageUrl: "/items.jpg",
    },
    {
        name: "Crescent & Star NFTs",
        offers: 92,
        imageUrl: "/items.jpg",
    },
    {
        name: "National Anthem Ringtones",
        offers: 14,
        imageUrl: "/items.jpg",
    },
    {
        name: "Pakistani Heroes Skins",
        offers: 23,
        imageUrl: "/items.jpg",
    },
    {
        name: "Azadi Fireworks Pack",
        offers: 0,
        imageUrl: "/items.jpg",
    },
];

const vedioCardData = [
    {
        name: "Azadi Gift Cards",
        offers: 1947,
        imageUrl: "/items3.jpg",
    },
    {
        name: "Pakistan Day Bundles",
        offers: 786,
        imageUrl: "/items3.jpg",
    },
    {
        name: "Minar-e-Pakistan Collectibles",
        offers: 14,
        imageUrl: "/items3.jpg",
    },
    {
        name: "Independence Wallpapers",
        offers: 75,
        imageUrl: "/items3.jpg",
    },
];

const azadiDeals = [
  {
    title: "Pak Flag T-Shirts",
    description: "Celebrate Azadi in style with limited-edition green & white tees.",
    badge: "Best Seller",
    image: "/pf.jpg",
    includes: ["Premium cotton", "Multiple sizes", "Azadi '25 design"],
  },
  {
    title: "Minar-e-Pakistan Lamp",
    description: "Add a patriotic glow to your room with this iconic lamp.",
    badge: "Limited Stock",
    image: "/pf.jpg",
    includes: ["LED powered", "USB charging", "Custom Minar design"],
  },
  {
    title: "Azadi Stickers Pack",
    description: "Over 50 custom stickers to brighten up your devices and walls.",
    badge: "Hot Deal",
    image: "/pf.jpg",
    includes: ["Waterproof", "Easy peel", "Patriotic symbols"],
  },
  {
    title: "Green LED Bracelets",
    description: "Light up the night during the parade with LED bracelets.",
    badge: "Trending",
    image: "/pf.jpg",
    includes: ["Flashing modes", "One size fits all", "Battery included"],
  },
];

const azadiHighlights = [
  {
    title: "Azadi Parade 2025 Set to Break Records",
    date: "2025-08-10",
    description:
      "Over 50,000 participants and a drone light show will mark this year's Independence Day like never before.",
  },
  {
    title: "Green Tech: Students Powering the Future",
    date: "2025-08-08",
    description:
      "A group of students launch a solar-powered project inspired by Pakistan’s green revolution goals.",
  },
  {
    title: "Special Azadi Train Unites the Nation",
    date: "2025-08-07",
    description:
      "A fully decorated train travels across provinces, showcasing culture, freedom stories, and unity.",
  },
  {
    title: "Flag Painting Campaign Across Cities",
    date: "2025-08-06",
    description:
      "Public buildings across Pakistan are being painted in vibrant green & white to honor Independence.",
  },
];

const cardData = [
    {
        category: 'NATIONAL SYMBOLS',
        color: 'bg-green-600',
        icon: 'pk-flag.png',
        items: [
            { name: 'Pakistan Flag', count: '1947' },
            { name: 'Minar-e-Pakistan', count: '786' },
            { name: 'Quaid-e-Azam Portrait', count: '1000' },
            { name: 'National Anthem Poster', count: '550' }
        ]
    },
    {
        category: 'AZADI DECOR',
        color: 'bg-green-800',
        icon: 'pk-flag.png',
        items: [
            { name: 'Green Bunting', count: '1408' },
            { name: 'Azadi Caps & Shirts', count: '900' },
            { name: 'Flag Stickers', count: '786' },
            { name: 'LED Flag Lights', count: '194' }
        ]
    },
    {
        category: 'CELEBRATION KITS',
        color: 'bg-lime-600',
        icon: 'pk-flag.png',
        items: [
            { name: 'Kids Azadi Kits', count: '718' },
            { name: 'Patriotic Badges', count: '1100' },
            { name: 'Face Paint Set', count: '888' },
            { name: 'Mini Flags Pack', count: '550' }
        ]
    },
    {
        category: 'SPECIAL OFFERS',
        color: 'bg-emerald-700',
        icon: 'pk-flag.png',
        items: [
            { name: 'Azadi Day Discounts', count: '60%' },
            { name: 'Bundle Deals on Flags', count: '500' },
            { name: 'T-Shirts & Accessories', count: '350' },
            { name: 'Limited Edition Gifts', count: '147' }
        ]
    }
];


function App() {

  return (
    <div>
      <Navbar menuItems={menuItemsData} />
      <Header />
      <HotGame cardData={cardData}/>
      <TopUp items={trendyItems} />
      <Gift cards={giftCardData} sliderId="gift" title="Gift Cards"/>
      <Gift cards={vedioCardData} sliderId="vedio" title="Vedio Cards"/>
      <Ratings />
      <AfflGirl />
      <Deals deals={azadiDeals} />
      <News highlights={azadiHighlights} />
      <Payment />
      <Footer />
    </div>
  )
}

export default App
