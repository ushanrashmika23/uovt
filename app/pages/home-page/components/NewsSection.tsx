import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

export default function NewsSection() {
    return (
        <section className="w-full py-16 bg-[#EFF6FF]">
            {/* Container: w-9/12 */}
            <div className="w-9/12 mx-auto">

                {/* Header */}
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-bold text-black">News</h2>
                    <a href="#" className="flex items-center text-sm font-bold text-black hover:underline">
                        All News <ChevronRightIcon className="w-4 h-4 ml-1" />
                    </a>
                </div>

                {/* Main Layout: Split into Featured (Left) and List (Right) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* Left Column: Featured News Card (White Background) */}
                    <div className="lg:col-span-5 flex flex-col h-full bg-white shadow-sm rounded-sm overflow-hidden">
                        {/* Image Placeholder */}
                        <div className="w-full h-64 bg-[#8B2323]"></div>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-grow">
                            <span className="text-gray-400 text-sm mb-4">Dec 6, 2025</span>
                            <h3 className="text-lg md:text-xl font-bold text-black leading-tight mb-6">
                                Shri Ram College of Commerce and the University of Vocational tecnology Forge Stronger Academic Collaboration
                            </h3>

                            <div className="mt-auto">
                                <button className="bg-[#8B2323] text-white px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#701c1c] transition-colors">
                                    Read More <ChevronRightIcon className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Secondary News & Navigation */}
                    <div className="lg:col-span-7 flex flex-col justify-between">

                        {/* Grid for 2 Secondary Items */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

                            {/* News Item 2 */}
                            <div className="flex flex-col">
                                <div className="w-full h-48 bg-[#8B2323] mb-4 rounded-sm"></div>
                                <span className="text-gray-400 text-xs mb-2">Dec 6, 2025</span>
                                <h4 className="text-sm font-bold text-black mb-4">Shri Ram College of Commerce</h4>
                                <a href="#" className="text-sm font-bold text-black flex items-center hover:underline mt-auto">
                                    Read More <ChevronRightIcon className="w-4 h-4 ml-1" />
                                </a>
                            </div>

                            {/* News Item 3 */}
                            <div className="flex flex-col">
                                <div className="w-full h-48 bg-[#8B2323] mb-4 rounded-sm"></div>
                                <span className="text-gray-400 text-xs mb-2">Dec 6, 2025</span>
                                <h4 className="text-sm font-bold text-black mb-4">Shri Ram College of Commerce</h4>
                                <a href="#" className="text-sm font-bold text-black flex items-center hover:underline mt-auto">
                                    Read More <ChevronRightIcon className="w-4 h-4 ml-1" />
                                </a>
                            </div>

                        </div>

                        {/* Navigation Section (Divider + Arrows) */}
                        <div className="mt-auto">
                            <div className="w-full h-[1px] bg-slate-300 mb-6"></div>
                            <div className="flex justify-center gap-4">
                                <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                                    <ChevronLeftIcon className="w-5 h-5" />
                                </button>
                                <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
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
