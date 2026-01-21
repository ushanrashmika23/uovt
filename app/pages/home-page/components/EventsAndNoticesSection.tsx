import React from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

export default function EventsAndNoticesSection() {
    return (
        <section className="w-full bg-[#FFE600] pt-16 pb-32 px-4">

            {/* Container: w-9/12 */}
            <div className="w-9/12 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

                    {/* --- Left Column: Events --- */}
                    <div className="lg:pr-10 lg:border-r border-yellow-500/30 relative">

                        {/* Header */}
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-bold text-black">Events</h2>
                            <a href="#" className="text-sm font-bold text-black flex items-center hover:underline">
                                All Events <ChevronRightIcon className="w-4 h-4 ml-1" />
                            </a>
                        </div>

                        {/* Event Card Container */}
                        <div className="flex items-center gap-4">

                            {/* Navigation Arrows (Left of card) */}
                            <div className="flex flex-col gap-3 shrink-0">
                                <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                                    <ChevronRightIcon className="w-5 h-5" />
                                </button>
                                <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                                    <ChevronLeftIcon className="w-5 h-5" />
                                </button>
                            </div>

                            {/* The Card */}
                            <div className="flex flex-col md:flex-row bg-transparent w-full gap-4">
                                {/* Event Image */}
                                <div className="relative w-full md:w-1/2 h-48 md:h-auto overflow-hidden shadow-sm">
                                    <Image
                                        src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80"
                                        alt="Convocation Live Stream"
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Overlay mimic */}
                                    <div className="absolute inset-0 bg-black/40 flex items-end p-2">
                                        <span className="text-white text-xs font-bold">Annual Convocation Live Stream</span>
                                    </div>
                                </div>

                                {/* Event Details */}
                                <div className="w-full md:w-1/2 flex flex-col">
                                    {/* Date Badge */}
                                    <div className="bg-[#8E24AA] text-white text-xs font-bold py-1 px-3 w-fit mb-3">
                                        Jan 3, 2026 | 09.00 AM
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-black font-bold text-sm leading-snug mb-4">
                                        Finished your O/Ls or A/Ls and thinking about what comes next?
                                    </h3>

                                    {/* Link */}
                                    <a href="#" className="text-sm font-bold text-black flex items-center hover:underline mt-auto">
                                        Read More <ChevronRightIcon className="w-4 h-4 ml-1" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* --- Right Column: Notice Board --- */}
                    <div className="lg:pl-10 mt-12 lg:mt-0 flex flex-col">

                        {/* Header */}
                        <h2 className="text-2xl font-bold text-black mb-8">Notice Board</h2>

                        {/* Notice Content */}
                        <div className="mb-8">
                            <h3 className="text-sm font-bold text-black mb-4">
                                New Course: Professional Certificate in Information Communication Technology
                            </h3>
                            <p className="text-xs md:text-sm text-gray-800 leading-relaxed text-justify">
                                This is an introductory course on Information and Communication Technologies.
                                The programme has developed in such a way that school leavers will gain hands-on
                                experience in performing day-to-day ICT exercises related to an office environment.
                            </p>
                        </div>

                        {/* Navigation Arrows (Bottom) */}
                        <div className="flex gap-4 mt-auto">
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
        </section>
    );
}
