import React from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

export default function AboutProfessorSection() {
    return (
        <section className="w-full py-16 bg-white">
            {/* Container: w-9/12 as requested */}
            <div className="w-9/12 mx-auto flex flex-col lg:flex-row items-center gap-8">

                {/* Main Content Card (Image + Text) */}
                <div className="flex flex-col md:flex-row w-full bg-[#F3F4F6]">

                    {/* Left: Image Section */}
                    <div className="relative w-full md:w-5/12 min-h-[400px] md:min-h-full">
                        <Image
                            src="https://uovt.ac.lk/wp-content/uploads/2015/10/Professor-K.M.G.-Prasanna-Premadasa.jpg"
                            alt="Professor K.M.G. Prasanna Premadasa"
                            fill
                            className="object-contain object-center"
                        />
                    </div>

                    {/* Right: Text Content Section */}
                    <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
                        <div className="space-y-6 text-gray-800 text-sm md:text-[15px] leading-relaxed text-justify">
                            <p>
                                UOVT Is Driven By Curiosity And Ambition, Where Practical Skills Meet Technology And
                                Students Are Empowered To Reach Their Full Potential. Our Programs Combine Academic
                                Knowledge With Hands-On Experience, Preparing Graduates To Be Workplace-Ready,
                                Innovative, And Socially Responsible.
                            </p>
                            <p>
                                As A Socially Committed University, UOVT Focuses On Excellence In Vocational And
                                Technological Education, Applied Research, And Community Engagement. With A Supportive
                                Environment And Industry-Relevant Learning, We Help Students Turn Talent Into Achievement
                                And Make The Practical Extraordinary.
                            </p>
                        </div>

                        {/* Name & Title */}
                        <div className="mt-10">
                            <h4 className="text-black font-bold text-lg">Professor K.M.G. Prasanna Premadasa</h4>
                            <p className="text-gray-600 text-sm mt-1">Vice Chancellor Of The University</p>
                        </div>
                    </div>

                </div>

                {/* Navigation Arrows (Positioned to the right on desktop) */}
                <div className="hidden lg:flex flex-col gap-4 shrink-0">
                    <button className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300">
                        <ChevronRightIcon className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300">
                        <ChevronLeftIcon className="w-5 h-5" />
                    </button>
                </div>

                {/* Mobile Navigation (Visible only on small screens) */}
                <div className="flex lg:hidden gap-4 mt-4">
                    <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white">
                        <ChevronLeftIcon className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white">
                        <ChevronRightIcon className="w-5 h-5" />
                    </button>
                </div>

            </div>
        </section>
    );
}
