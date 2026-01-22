import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

const RelatedCoursesSection = () => {
    const courses = [
        {
            award: "BTech (Hons)",
            title: "Software and Intelligent Systems",
            link: "#"
        },
        {
            award: "BTech (Hons)",
            title: "Software and Intelligent Systems",
            link: "#"
        },
        {
            award: "BTech (Hons)",
            title: "Software and Intelligent Systems",
            link: "#"
        }
    ];

    return (
        <section className="w-full bg-white pb-16 font-sans">
            <div className="w-9/12 mx-auto">

                {/* Header */}
                <h2 className="text-3xl font-bold text-black mb-12">Related Courses</h2>

                {/* Carousel Container */}
                <div className="relative">

                    {/* Left Arrow */}
                    <button
                        className="absolute -left-20 top-1/2 -translate-y-1/2 hidden md:flex shrink-0 w-12 h-12 rounded-full border border-black items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
                        aria-label="Previous"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>

                    {/* Cards Grid */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                        {courses.map((course, index) => (
                            <div
                                key={index}
                                className="bg-[#FDC800] aspect-auto p-8 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                {/* Card Content */}
                                <div className="pt-4">
                                    <p className="text-sm font-medium text-black mb-1">
                                        {course.award}
                                    </p>
                                    <h3 className="text-xl md:text-2xl mb-6 font-semibold text-black leading-tight">
                                        {course.title}
                                    </h3>
                                </div>

                                {/* Read More Link */}
                                <a href={course.link} className="text-sm font-medium text-black mt-auto">
                                    Read More....
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        className="absolute -right-20 top-1/2 -translate-y-1/2 hidden md:flex shrink-0 w-12 h-12 rounded-full border border-black items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
                        aria-label="Next"
                    >
                        <ChevronRightIcon className="w-6 h-6" />
                    </button>

                    {/* Mobile Navigation (Visible only on small screens) */}
                    <div className="absolute -bottom-16 left-0 right-0 flex md:hidden justify-center gap-4">
                        <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white">
                            <ChevronLeftIcon className="w-5 h-5" />
                        </button>
                        <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white">
                            <ChevronRightIcon className="w-5 h-5" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RelatedCoursesSection;
