import React from 'react';
import Image from 'next/image';
import { TrophyIcon, BriefcaseIcon, UsersIcon, GraduationCapIcon } from './Icons';

export default function StatsSection() {
    return (
        <section className="w-full bg-[#F0F8FF] py-16">
            {/* Main Container: w-9/12 as requested */}
            <div className="w-11/12 md:w-9/12 mx-auto">

                {/* Top Section: Hero Image */}
                <div className="relative w-full h-100 md:h-125 overflow-hidden rounded-sm shadow-md">
                    <Image
                        src="https://www.iit.ac.lk/wp-content/uploads/2025/11/IIT-UoW-Convocation-2025.png"
                        alt="Convocation Ceremony"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    {/* Optional Overlay */}
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Bottom Section: Overlapping Content */}
                <div className="flex flex-col lg:flex-row relative lg:ml-7">

                    {/* Left: Yellow Info Box (Overlapping) */}
                    <div className="w-full lg:w-5/12 bg-[#FFEB3B] p-8 md:p-10 -mt-16 md:-mt-24 z-10 relative shadow-[0_-10px_0_#750A19dd]">
                        <h3 className="text-xl text-center md:text-2xl font-bold text-black mb-6 leading-tight">
                            UoVT provides globally recognized qualifications in the field of IT & Business.
                        </h3>
                        <p className="text-gray-900 text-sm md:text-base leading-relaxed text-justify">
                            At UoVT, we offer vocational and technological degrees in engineering, IT, and business that prepare students for today&apos;s fast-changing world. Combining practical skills, academic excellence, and industry relevance, we have shaped higher education in Sri Lanka and helped thousands of alumni build successful careers locally and globally.
                        </p>
                    </div>

                    {/* Right: Stats Section */}
                    {/* Changed to GRID to control the lines precisely */}
                    {/* grid-cols-2: Forces 2 lines (2 items per row) on mobile */}
                    {/* md:grid-cols-4: Forces 1 line (4 items per row) on tablet/desktop */}
                    <div className="w-full lg:w-7/12 grid grid-cols-2 md:grid-cols-4 gap-y-10 py-10 px-4 lg:px-10 bg-white lg:bg-transparent">

                        {/* Stat 1: Awards */}
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-3 text-gray-500">
                                <TrophyIcon className="w-8 h-8 md:w-10 md:h-10" />
                            </div>
                            <p className="text-gray-600 text-xs md:text-sm font-medium">Awards</p>
                            <p className="text-xl md:text-2xl font-bold text-black">100+</p>
                        </div>

                        {/* Stat 2: Employability */}
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-3 text-gray-500">
                                <BriefcaseIcon className="w-8 h-8 md:w-10 md:h-10" />
                            </div>
                            <p className="text-gray-600 text-xs md:text-sm font-medium">Employability</p>
                            <p className="text-xl md:text-2xl font-bold text-black">100%</p>
                        </div>

                        {/* Stat 3: Students */}
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-3 text-gray-500">
                                <UsersIcon className="w-8 h-8 md:w-10 md:h-10" />
                            </div>
                            <p className="text-gray-600 text-xs md:text-sm font-medium">Students</p>
                            <p className="text-xl md:text-2xl font-bold text-black">5,500+</p>
                        </div>

                        {/* Stat 4: Programmes */}
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-3 text-gray-500">
                                <GraduationCapIcon className="w-8 h-8 md:w-10 md:h-10" />
                            </div>
                            <p className="text-gray-600 text-xs md:text-sm font-medium">Programmes</p>
                            <p className="text-xl md:text-2xl font-bold text-black">25+</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}