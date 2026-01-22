import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="relative w-full h-[85vh] min-h-175 flex items-center">

            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full bg-black">
                <Image
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80" // Placeholder for the meeting/office image
                    alt="Software and Intelligent Systems Background"
                    fill
                    className="object-cover opacity-60" // Dimmed for text readability
                    priority
                />
                {/* Gradient Overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
            </div>

            {/* Hero Content Container */}
            <div className="relative z-10 w-9/12 mx-auto pt-20 text-white">

                {/* Title Area */}
                <div className="mb-12">
                    <span className="text-xl md:text-2xl font-medium tracking-wide text-gray-200 block mb-2">
                        BTech (Hons)
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-4">
                        Software And Intelligent Systems
                    </h1>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-12 mb-10 max-w-5xl">

                    {/* Column 1 */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-[#FDC800] font-bold text-sm uppercase mb-1">Award</h3>
                            <p className="text-lg">BTech. (Hons)</p>
                        </div>

                        <div>
                            <h3 className="text-[#FDC800] font-bold text-sm uppercase mb-2">Choose A Study Option</h3>
                            <div className="relative">
                                <select className="w-full bg-white text-black py-2 px-3 rounded-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FDC800]">
                                    <option>Full-Time</option>
                                    <option>Part-Time</option>
                                </select>
                                {/* Custom Arrow */}
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-[#FDC800] font-bold text-sm uppercase mb-1">Duration</h3>
                            <p className="text-lg">48 Month (4 Years)</p>
                        </div>

                        <div>
                            <h3 className="text-[#FDC800] font-bold text-sm uppercase mb-1">Campus</h3>
                            <p className="text-lg">Ratmalana , Sri Lanka</p>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-[#FDC800] font-bold text-sm uppercase mb-1">Provider</h3>
                            <p className="text-lg">Faculty Of Information Technology</p>
                        </div>
                    </div>

                    {/* Column 4 */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-[#FDC800] font-bold text-sm uppercase mb-1">Start Dates Available</h3>
                            <p className="text-lg">September 2026</p>
                        </div>
                    </div>

                </div>

                {/* CTA Button */}
                <button className="bg-[#FDC800] hover:bg-yellow-400 text-black text-lg font-bold py-3 px-8 rounded-sm transition-colors shadow-lg">
                    Apply Now
                </button>

            </div>
        </section>
    );
};

export default HeroSection;
