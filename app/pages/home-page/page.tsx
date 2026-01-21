/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Navbar from './navbar'
import { title } from 'process';

export default function Page() {
    const data = [
        {
            img: "https://res.cloudinary.com/dtddjfvcn/image/upload/v1768985745/hero_f6oslh.png",
            title: "IT ALL STARTS HERE 1",
            description: "Find your course and apply before the UCAS deadline",
            link: "#"
        },
        {
            img: "https://res.cloudinary.com/dtddjfvcn/image/upload/v1768985745/hero_f6oslh.png",
            title: "IT ALL STARTS HERE 2",
            description: "Find your course and apply before the UCAS deadline",
            link: "#"
        },
        {
            img: "https://res.cloudinary.com/dtddjfvcn/image/upload/v1768985745/hero_f6oslh.png",
            title: "IT ALL STARTS HERE 3",
            description: "Find your course and apply before the UCAS deadline",
            link: "#"
        }
    ];





    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Auto slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mb-8">
            <div className="sticky top-7 z-50 bg-amber-100 w-9/12 mx-auto">
                <Navbar />
            </div>
            <section className="relative h-[85vh] min-h-[550px] w-full">
                {/* Background image */}
                <Image
                    src={data[currentIndex].img}
                    alt="Students"
                    fill
                    loading="eager"
                    priority
                    className="object-cover transition-opacity duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />


                {/* Content */}
                <div className="relative z-10 p-32 flex  h-full max-w-7xl items-end">
                    <div className="max-w-4xl bg-black/50 p-8">
                        <h1 className="text-4xl md:text-7xl font-semibold text-white">
                            {data[currentIndex].title}
                        </h1>

                        <p className="text-md mt-4 text-lg uppercase text-white tracking-wide">
                            {data[currentIndex].description}
                        </p>

                        <a href={data[currentIndex].link} target='_BLANK'>
                            <button className="mt-6 bg-yellow-400 px-6 py-3 text-sm font-bold text-black hover:bg-yellow-300 sharp-shadow">
                                CHECK NOW!!
                            </button>
                        </a>
                    </div>
                </div>

                {/* Slider dots */}
                <div className="absolute bottom-6 right-6 flex gap-3">
                    {data.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-4 w-4 transition-colors ${index === currentIndex ? 'bg-yellow-400' : 'bg-white/60'
                                }`}
                        />
                    ))}
                </div>
            </section>

            {/* Section 02 */}
            <section className="relative w-full overflow-hidden bg-white my-8">
                <div className="relative max-w-full px-0 py-20">
                    {/* Red background rectangle and yellow sahpe */}
                    <div className="absolute left-0 top-0 h-112.5 w-[50%] bg-red-600 z-0" />
                    <div
                        className="absolute right-0 top-0 h-120 w-[75%] bg-yellow-400 z-0"
                        style={{
                            clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 50%)"
                        }}
                    />
                    {/* Content */}
                    <div className="relative z-10 flex justify-between items-center gap-12 max-w-9/12 mx-auto flex-col md:flex-row">

                        {/* Image */}
                        <div className="flex justify-center">
                            <img
                                src="https://uovt.ac.lk/wp-content/uploads/2016/06/1231.jpg"
                                alt="UOVT"
                                // height={300}
                                width={500}
                                className="max-w-full"
                            />
                        </div>

                        {/* Text */}
                        <div className="text-black">
                            <h1 className="text-5xl font-bold mb-4">
                                Welcome To The UOVT
                            </h1>

                            <p className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-normal">
                                The University of Vocational Technology (UOVT), Rathmalana,
                                is a leading state university in Sri Lanka dedicated to
                                vocational and technological education. We nurture humanity
                                alongside technical talent, developing skilled, ethical,
                                and socially responsible professionals.
                            </p>

                            <button className="mt-6 text-lg font-semibold hover:underline">
                                Read More →
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* Section 03 */}
            <section className="w-full py-16 bg-white">
                {/* Container: w-9/12 and centered */}
                <div className="w-9/12 mx-auto">

                    {/* Header Section */}
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold text-black mb-6">Academics</h2>
                        <p className="text-gray-600 max-w-4xl mx-auto text-sm md:text-base leading-relaxed font-medium">
                            We Offer A Multi-Range Degree Program Across Four Main Departments: Science, Arts, Mathematics, And Information Studies. Our Courses
                            Provide Wide-Ranging Knowledge And Practical Skills, Helping Students Grow Academically, Think Creatively, And Achieve Their Best Potential.
                        </p>
                    </div>

                    {/* Grid Layout 
            - 4 Columns on medium screens and up
            - Fixed height (e.g., h-[500px]) ensures the 'fill' images work correctly
        */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[500px]">

                        {/* Column 1: Engineering Technology */}
                        <div className="relative w-full h-80 md:h-full group overflow-hidden">
                            <Image
                                src="https://tse1.mm.bing.net/th/id/OIP.jg0378XfBD10jF4Uhw2_JwHaHs?rs=1&pid=ImgDetMain&o=7&rm=3"
                                alt="Engineering Technology"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-[#56B89D] py-3">
                                <p className="text-white text-center font-semibold text-lg">Engineering Technology</p>
                            </div>
                        </div>

                        {/* Column 2: Split Column (IT & Prof Dev) */}
                        <div className="flex flex-col gap-4 h-full">

                            {/* Top Half: Information Technology */}
                            <div className="relative w-full h-64 md:h-1/2 overflow-hidden">
                                <Image
                                    src="https://tse2.mm.bing.net/th/id/OIP.QecX8vYS9OyvIZrFLJi2MAHaEg?rs=1&pid=ImgDetMain&o=7&rm=3"
                                    alt="Information Technology"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-[#A30000] py-3">
                                    <p className="text-white text-center font-semibold text-lg">Information Technology</p>
                                </div>
                            </div>

                            {/* Bottom Half: Professional Development */}
                            <div className="relative w-full h-64 md:h-1/2 overflow-hidden">
                                <Image
                                    src="https://tse4.mm.bing.net/th/id/OIP.WsyrM-pKnryf-mj_exzv5wHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
                                    alt="Professional Development"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-[#962A86] py-3">
                                    <p className="text-white text-center font-semibold text-lg">Professional Development</p>
                                </div>
                            </div>
                        </div>

                        {/* Column 3: Education */}
                        <div className="relative w-full h-80 md:h-full overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
                                alt="Education"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-[#967935] py-3">
                                <p className="text-white text-center font-semibold text-lg">Education</p>
                            </div>
                        </div>

                        {/* Column 4: Industrial Technology */}
                        <div className="relative w-full h-80 md:h-full overflow-hidden">
                            <Image
                                src="https://www.globaltimes.cn/Portals/0/attachment/2024/2024-01-04/e21b951d-b0e8-4375-a504-392771d1e658.jpeg"
                                alt="Industrial Technology"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-[#3B55D9] py-3">
                                <p className="text-white text-center font-semibold text-lg">Industrial Technology</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Section 04 */}
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

            {/* Section 05 */}
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
                                className="object-cover object-center"
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

        </div>
    )
}


/* --- Simple SVG Icons (No external libraries needed) --- */

const TrophyIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
);

const UserCheckIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="16 11 18 13 22 9" />
    </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const BookIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        <path d="M6.5 2H20v20H6.5" />
        <path d="M6.5 7h11" />
        <path d="M6.5 11h11" />
    </svg>
);

const ChevronRightIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m9 18 6-6-6-6" />
    </svg>
);

const ChevronLeftIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m15 18-6-6 6-6" />
    </svg>
);