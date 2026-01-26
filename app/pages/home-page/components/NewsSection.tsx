import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

// 1. Defined Data Structures
const featuredNews = {
    date: "Dec 6, 2025",
    title: "Shri Ram College of Commerce and the University of Vocational tecnology Forge Stronger Academic Collaboration",
    image: "https://images.stockcake.com/public/6/f/7/6f7a6350-4c31-419b-9875-1030d373801f_large/academic-collaboration-meeting-stockcake.jpg"
};

const newsList = [
    {
        id: 1,
        date: "Dec 8, 2025",
        title: "New Research Grant Approved for AI Development",
        institution: "Faculty of IT",
        image: "https://images.stockcake.com/public/5/5/2/55297316-2428-4444-8848-d34e9177a296_large/futuristic-ai-interface-stockcake.jpg"
    },
    {
        id: 2,
        date: "Dec 10, 2025",
        title: "Inter-University Sports Championship 2025 Begins",
        institution: "Sports Council",
        image: "https://images.stockcake.com/public/6/3/6/6360436d-9781-4560-84c9-c196412b9d03_large/intense-sports-match-stockcake.jpg"
    },
    {
        id: 3,
        date: "Dec 12, 2025",
        title: "Annual Arts Exhibition 'Creative Horizon' Opens",
        institution: "Dept. of Aesthetics",
        image: "https://images.stockcake.com/public/9/7/2/97210665-27a9-467f-94a0-760372074f0a_large/art-gallery-exhibit-stockcake.jpg"
    },
    {
        id: 4,
        date: "Dec 15, 2025",
        title: "Convocation Ceremony Scheduled for January",
        institution: "Registrar Office",
        image: "https://images.stockcake.com/public/3/6/f/36fa17c6-7f8e-4f51-a20c-c69818840e69_large/graduate-holding-diploma-stockcake.jpg"
    }
];

export default function NewsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Navigation Logic (Circular)
    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? newsList.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === newsList.length - 1 ? 0 : prev + 1));
    };

    // Helper to get the second item based on current index (for desktop view)
    const getNextIndex = (idx: number) => (idx + 1) % newsList.length;

    return (
        <section className="w-full py-16 bg-[#EFF6FF]">
            <div className="w-11/12 md:w-9/12 mx-auto">

                {/* Header */}
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-bold text-black">News</h2>
                    <a href="#" className="flex items-center text-sm font-bold text-black hover:underline">
                        All News <ChevronRightIcon className="w-4 h-4 ml-1" />
                    </a>
                </div>

                {/* Main Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 h-full">

                    {/* Left Column: Featured News */}
                    {/* HIDDEN on Mobile (block -> hidden), FLEX on Tablet+ (md:flex) */}
                    <div className="hidden md:flex md:col-span-5 flex-col h-full bg-white shadow-sm rounded-sm overflow-hidden">
                        <img 
                            src={featuredNews.image} 
                            alt="Featured" 
                            className="w-full h-64 object-cover" 
                        />
                        <div className="p-8 flex flex-col flex-grow">
                            <span className="text-gray-400 text-sm mb-4">{featuredNews.date}</span>
                            <h3 className="text-lg md:text-xl font-bold text-black leading-tight mb-6 line-clamp-4">
                                {featuredNews.title}
                            </h3>
                            <div className="mt-auto">
                                <button className="bg-[#8B2323] text-white px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#701c1c] transition-colors">
                                    Read More <ChevronRightIcon className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Navigable List */}
                    {/* Takes full width on mobile, 7 cols on tablet+ */}
                    <div className="col-span-1 md:col-span-7 flex flex-col justify-between min-h-[400px]">

                        {/* Grid for Secondary Items */}
                        {/* Mobile/Tablet: 1 Column. Desktop: 2 Columns */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 h-full">

                            {/* Item 1: Always Visible (Current Index) */}
                            <div className="flex flex-col bg-white md:bg-transparent p-4 md:p-0 rounded-sm md:rounded-none shadow-sm md:shadow-none transition-all duration-500 ease-in-out">
                                <img 
                                    src={newsList[currentIndex].image} 
                                    alt="News" 
                                    className="w-full h-48 object-cover mb-4 rounded-sm"
                                />
                                <span className="text-gray-400 text-xs mb-2">{newsList[currentIndex].date}</span>
                                <h4 className="text-sm font-bold text-black mb-4 min-h-[3rem]">
                                    {newsList[currentIndex].title}
                                </h4>
                                <span className="text-xs text-[#8B2323] font-semibold mb-2 block md:hidden">
                                    {newsList[currentIndex].institution}
                                </span>
                                <a href="#" className="text-sm font-bold text-black flex items-center hover:underline mt-auto">
                                    Read More <ChevronRightIcon className="w-4 h-4 ml-1" />
                                </a>
                            </div>

                            {/* Item 2: Visible ONLY on Desktop (Next Index) */}
                            {/* Hidden on Mobile/Tablet */}
                            <div className="hidden lg:flex flex-col transition-all duration-500 ease-in-out">
                                <img 
                                    src={newsList[getNextIndex(currentIndex)].image} 
                                    alt="News" 
                                    className="w-full h-48 object-cover mb-4 rounded-sm"
                                />
                                <span className="text-gray-400 text-xs mb-2">{newsList[getNextIndex(currentIndex)].date}</span>
                                <h4 className="text-sm font-bold text-black mb-4 min-h-[3rem]">
                                    {newsList[getNextIndex(currentIndex)].title}
                                </h4>
                                <a href="#" className="text-sm font-bold text-black flex items-center hover:underline mt-auto">
                                    Read More <ChevronRightIcon className="w-4 h-4 ml-1" />
                                </a>
                            </div>

                        </div>

                        {/* Navigation Section */}
                        <div className="mt-auto">
                            <div className="w-full h-[1px] bg-slate-300 mb-6"></div>
                            <div className="flex justify-center gap-4">
                                <button 
                                    onClick={handlePrev}
                                    className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors active:scale-95"
                                >
                                    <ChevronLeftIcon className="w-5 h-5" />
                                </button>
                                <button 
                                    onClick={handleNext}
                                    className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors active:scale-95"
                                >
                                    <ChevronRightIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}