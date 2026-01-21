import React from 'react';
import Image from 'next/image';
import { TrophyIcon, UserCheckIcon, UsersIcon, BookIcon } from './Icons';

export default function StatsSection() {
    return (
        <section className="w-full bg-[#F0F8FF] py-16">
            {/* Main Container: w-9/12 as requested */}
            <div className="w-9/12 mx-auto">

                {/* Top Section: Hero Image */}
                <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-sm shadow-md">
                    <Image
                        src="https://www.iit.ac.lk/wp-content/uploads/2025/11/IIT-UoW-Convocation-2025.png"
                        alt="Convocation Ceremony"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    {/* Optional Overlay to match the darkened photo style */}
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Bottom Section: Overlapping Content */}
                <div className="flex flex-col lg:flex-row relative ml-7">

                    {/* Left: Yellow Info Box (Overlapping) */}
                    {/* -mt-24 pulls the box up over the image. z-10 keeps it on top. */}
                    <div className="w-full lg:w-5/12 bg-[#FFEB3B] p-10 -mt-24 z-10 relative shadow-[0_-10px_0_#750A19dd]">
                        <h3 className="text-xl text-center md:text-2xl font-bold text-black mb-6 leading-tight">
                            UOVT Provides Globally Recognized Qualifications In The Field Of IT & Business
                        </h3>
                        <p className="text-gray-900 text-sm md:text-base leading-relaxed text-justify">
                            At UOVT, We Offer Vocational And Technological Degrees In Engineering, IT, And Business That Prepare Students For Todays Fast-Changing World. Combining Practical Skills, Academic Excellence, And Industry Relevance, We Have Shaped Higher Education In Sri Lanka And Helped Thousands Of Alumni Build Successful Careers Locally And Globally.
                        </p>
                    </div>

                    {/* Right: Stats Section */}
                    <div className="w-full lg:w-7/12 flex items-center justify-around py-10 px-4 lg:px-10 bg-white lg:bg-transparent">

                        {/* Stat 1: Awards */}
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-3 text-gray-500">
                                <TrophyIcon className="w-10 h-10" />
                            </div>
                            <p className="text-gray-600 text-sm font-medium">Awards</p>
                            <p className="text-2xl font-bold text-black">100+</p>
                        </div>

                        {/* Stat 2: Employability */}
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-3 text-gray-500">
                                <UserCheckIcon className="w-10 h-10" />
                            </div>
                            <p className="text-gray-600 text-sm font-medium">Employability</p>
                            <p className="text-2xl font-bold text-black">100%</p>
                        </div>

                        {/* Stat 3: Students */}
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-3 text-gray-500">
                                <UsersIcon className="w-10 h-10" />
                            </div>
                            <p className="text-gray-600 text-sm font-medium">Students in Campus</p>
                            <p className="text-2xl font-bold text-black">5,500+</p>
                        </div>

                        {/* Stat 4: Programmes */}
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-3 text-gray-500">
                                <BookIcon className="w-10 h-10" />
                            </div>
                            <p className="text-gray-600 text-sm font-medium">Programmes</p>
                            <p className="text-2xl font-bold text-black">25+</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
