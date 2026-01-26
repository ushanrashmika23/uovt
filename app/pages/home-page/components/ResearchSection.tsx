import React from 'react';
import Image from 'next/image';
import { PaletteIcon, PinwheelIcon, DocumentIcon, TrophyIcon, StatItem, ChevronRightIcon } from './Icons';

export default function ResearchSection() {
    return (
        <section className="w-full py-20 bg-white">
            {/* Container: w-9/12 */}
            <div className="w-9/12 mx-auto">

                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-black">Research</h2>
                </div>

                {/* Main Content Layout */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">

                    {/* Left Side: Image with Red Accent Background */}
                    <div className="relative w-full lg:w-5/12">
                        {/* The Red Offset Box */}
                        <div className="absolute top-4 left-4 w-full h-full bg-[#FF4D30] z-0 translate-x-px translate-y-px"></div>

                        {/* The Image */}
                        <div className="relative z-10 w-full aspect-4/3 overflow-hidden">
                            <Image
                                src="https://www.tus.ac.jp/en/assets/img/fac/riko/bg_ele.jpg"
                                alt="Students in Research Lab"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Side: Content & Stats */}
                    <div className="w-full lg:w-7/12 flex flex-col justify-center">

                        {/* Description Text */}
                        <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-10 text-justify">
                            We offer a multi-range degree program across four main departments: Science, Arts,
                            Mathematics, and Information Studies. Our courses provide wide-ranging knowledge
                            and practical skills, helping students grow academically, think creatively, and achieve
                            their best potential.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 mb-8">

                            {/* Stat 1: Category */}
                            <StatItem
                                icon={<PaletteIcon className="w-10 h-10 md:w-12 md:h-12" />}
                                number="12"
                                label="Category"
                            />

                            {/* Stat 2: Projects */}
                            <StatItem
                                icon={<PinwheelIcon className="w-10 h-10 md:w-12 md:h-12" />}
                                number="500+"
                                label="Projects"
                            />

                            {/* Stat 3: Publications */}
                            <StatItem
                                icon={<DocumentIcon className="w-10 h-10 md:w-12 md:h-12" />}
                                number="65+"
                                label="Publications"
                            />

                            {/* Stat 4: Awards */}
                            <StatItem
                                icon={<TrophyIcon className="w-10 h-10 md:w-12 md:h-12" />}
                                number="12"
                                label="Awards"
                            />

                            {/* Stat 5: Projects (Duplicate in design) */}
                            <StatItem
                                icon={<PaletteIcon className="w-10 h-10 md:w-12 md:h-12" />}
                                number="500+"
                                label="Projects"
                            />

                            {/* Stat 6: Publications (Duplicate in design) */}
                            <StatItem
                                icon={<PaletteIcon className="w-10 h-10 md:w-12 md:h-12" />}
                                number="65+"
                                label="Publications"
                            />

                        </div>

                        {/* Read More Link */}
                        <div className="flex justify-end mt-4">
                            <a href="#" className="flex items-center text-black font-bold text-sm hover:underline group">
                                Read More
                                <ChevronRightIcon className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
