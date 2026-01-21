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

    const cards = [
        {
            title: "Scholarship",
            description: "A Five-Year Work And Study Programme With Corporate Partners Where You Earn From Day One. Graduate With A Degree And Five Years Of Experience, Giving You A Valuable Head Start In Your Career.",
            img: "https://images.stockcake.com/public/d/6/d/d6dbe0f8-61e7-4a55-92a6-e096bfee237a_large/grand-award-ceremony-stockcake.jpg"
        },
        {
            title: "Dean List",
            description: "A Five-Year Work And Study Programme With Corporate Partners Where You Earn From Day One. Graduate With A Degree And Five Years Of Experience, Giving You A Valuable Head Start In Your Career.",
            img: "https://images.stockcake.com/public/d/6/d/d6dbe0f8-61e7-4a55-92a6-e096bfee237a_large/grand-award-ceremony-stockcake.jpg"
        },
        {
            title: "Bursary",
            description: "A Five-Year Work And Study Programme With Corporate Partners Where You Earn From Day One. Graduate With A Degree And Five Years Of Experience, Giving You A Valuable Head Start In Your Career.",
            img: "https://images.stockcake.com/public/d/6/d/d6dbe0f8-61e7-4a55-92a6-e096bfee237a_large/grand-award-ceremony-stockcake.jpg"
        },
        {
            title: "Bursary",
            description: "A Five-Year Work And Study Programme With Corporate Partners Where You Earn From Day One. Graduate With A Degree And Five Years Of Experience, Giving You A Valuable Head Start In Your Career.",
            img: "https://images.stockcake.com/public/d/6/d/d6dbe0f8-61e7-4a55-92a6-e096bfee237a_large/grand-award-ceremony-stockcake.jpg"
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
                        <h2 className="text-5xl font-bold text-black mb-6">Academics</h2>
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

            {/* Section 06 */}

            <section className="w-full py-16 bg-white">
                {/* Container: w-9/12 */}
                <div className="w-9/12 mx-auto">

                    {/* Header with Yellow Highlights */}
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-black max-w-4xl">
                            {/* text-4xl font-bold text-black mb-6 */}
                            We are measured not by whom we exclude, but by{' '}
                            <span className="bg-[#EFFF00] px-1">whom we include</span>{' '}
                            and{' '}
                            <span className="bg-[#EFFF00] px-1">how they succeed</span>
                        </h2>
                    </div>

                    {/* 4-Column Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                        {cards.map((card, index) => (
                            <div key={index} className="flex flex-col">

                                {/* Image Placeholder (Gray Box) */}
                                {/* <div className="w-full aspect-square bg-gray-300 mb-6" /> */}
                                <img src={card.img} alt={card.title} />

                                {/* Content */}
                                <h3 className="text-xl font-bold text-center text-black mb-4">
                                    {card.title}
                                </h3>

                                <p className="text-xs md:text-[13px] text-gray-800 text-justify leading-relaxed mb-4">
                                    {card.description}
                                </p>

                                {/* Read More Link */}
                                <a
                                    href="#"
                                    className="inline-flex items-center text-sm font-bold text-black hover:underline mt-auto"
                                >
                                    Read More
                                    <ChevronRightIcon className="w-4 h-4 ml-1" />
                                </a>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Section 07 */}
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
                                We Offer A Multi-Range Degree Program Across Four Main Departments: Science, Arts,
                                Mathematics, And Information Studies. Our Courses Provide Wide-Ranging Knowledge
                                And Practical Skills, Helping Students Grow Academically, Think Creatively, And Achieve
                                Their Best Potential.
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


            {/* Section 08 */}
            <section className="flex justify-center bg-white py-20">
                <div className="w-9/12">

                    {/* Header */}
                    <div className="mb-12 text-center">
                        <h2 className="text-4xl font-bold mb-4">University Life</h2>
                        <p className="mx-auto max-w-3xl text-sm text-gray-600">
                            We offer a multi-range degree program across four main departments:
                            Science, Arts, Mathematics, and Information Studies. Our courses
                            provide wide-ranging knowledge and practical skills, helping students
                            grow academically, think creatively, and achieve their best potential.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-3 grid-rows-3 gap-0">

                        {/* Social Works */}
                        <div className="relative col-span-1 row-span-1 overflow-hidden">
                            <img
                                src="https://www.ucd.ie/law/t4media/JMK%202024%207.jpg"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-yellow-600/60 flex items-center justify-center">
                                <h3 className="text-4xl font-bold text-white">Social Works</h3>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="col-span-1 row-span-1 bg-lime-200 p-6 text-xs leading-relaxed">
                            Life at the University of Vocational Technology Rathmalana is vibrant
                            and engaging, offering students more than academic learning. With
                            modern classrooms, well-equipped labs, and dedicated faculty, the
                            campus provides an environment where students develop both practical
                            skills and theoretical knowledge.
                        </div>

                        {/* Sports */}
                        <div className="relative col-span-1 row-span-1 overflow-hidden">
                            <img
                                src="https://tse1.mm.bing.net/th/id/OIP.0mVTHfgBJuGo3KDT-2SUFwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-red-600/70 flex items-center justify-center">
                                <h3 className="text-3xl font-bold text-white">Sport</h3>
                            </div>
                        </div>

                        {/* Hashtag */}
                        <div className="flex items-center justify-center bg-gray-200 font-bold text-3xl">
                            #UOVT
                        </div>

                        {/* Club */}
                        <div className="relative overflow-hidden">
                            <img
                                src="https://tse2.mm.bing.net/th/id/OIP.2AHsXZumx0Cx9ZSbju-2rgHaD4?rs=1&pid=ImgDetMain&o=7&rm=3"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-pink-600/70 flex items-center justify-center">
                                <h3 className="text-3xl font-bold text-white">Club</h3>
                            </div>
                        </div>

                        {/* Music */}
                        <div className="relative overflow-hidden">
                            <img
                                src="https://ac3filter.b-cdn.net/wp-content/uploads/772700.jpg"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-teal-600/70 flex items-center justify-center">
                                <h3 className="text-3xl font-bold text-white">Music</h3>
                            </div>
                        </div>

                        {/* Traveling */}
                        <div className="relative overflow-hidden">
                            <img
                                src="https://media.cntraveler.com/photos/59cd14cb9465da68882fb4f4/master/pass/Debate_GettyImages-585587819.jpg"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-green-600/70 flex items-center justify-center">
                                <h3 className="text-3xl font-bold text-white">Traveling</h3>
                            </div>
                        </div>

                        {/* Art */}
                        <div className="relative overflow-hidden">
                            <img
                                src="https://mymodernmet.com/wp/wp-content/uploads/2019/03/elements-of-art-thumbnail-1.jpg"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-cyan-700/70 flex items-center justify-center">
                                <h3 className="text-3xl font-bold text-white">Art</h3>
                            </div>
                        </div>

                        {/* Bottom Text */}
                        <div className="bg-cyan-100 p-6 text-xs leading-relaxed">
                            Beyond academics, students enjoy a range of extracurricular
                            activities, clubs, and events that promote teamwork, leadership,
                            and personal growth. The campus fosters a strong sense of community,
                            encouraging students to build lasting friendships while becoming
                            skilled, ethical, and socially responsible professionals.
                        </div>

                    </div>
                </div>
            </section>

            {/* Section 08 */}
            <div className="flex flex-col w-full">
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
            </div>

            {/* Section 09 */}
            <div className="relative w-full">
                {/* Main Background: Yellow 
        pb-32 adds padding at the bottom to make room for the overlapping contact bar 
      */}
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

                {/* --- Contact Info Bar --- 
        Positioned with negative margin (-mt-16) to pull it up and overlap 
        the bottom of the yellow section.
      */}
                <div className="w-9/12 mx-auto -mt-20 -mb-24 relative z-20">
                    <div className="bg-[#3B4685] rounded-xl text-white py-8 px-4 shadow-lg flex flex-col md:flex-row justify-around items-center gap-8 md:gap-0">

                        {/* Phone */}
                        <div className="flex flex-col items-center gap-2 md:border-r border-white/20 w-full">
                            <PhoneIcon className="w-6 h-6" />
                            <span className="font-bold text-lg tracking-wide">+94 11 2 630 700</span>
                        </div>

                        {/* Address */}
                        <div className="flex flex-col items-center text-center gap-2 md:border-r border-white/20 w-full px-4">
                            <MapPinIcon className="w-6 h-6" />
                            <span className="font-bold text-sm md:text-base">
                                100, Kandawala Road,<br /> Rathmalana, Sri Lanka.
                            </span>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col items-center gap-2 w-full">
                            <MailIcon className="w-6 h-6" />
                            <span className="font-bold text-lg tracking-wide">uovt@uovt.ac.lk</span>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}




const PhoneIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const MapPinIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const StatItem = ({ icon, number, label }: { icon: React.ReactNode, number: string, label: string }) => (
    <div className="flex items-center gap-3">
        <div className="text-black shrink-0">
            {icon}
        </div>
        <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-bold text-black leading-none">{number}</span>
            <span className="text-xs md:text-sm font-semibold text-black mt-1">{label}</span>
        </div>
    </div>
);

const PaletteIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c.41 0 .78-.14 1.08-.38.35-.28.56-.71.56-1.17v-1.6c0-.47.34-.87.81-.97 1.83-.4 3.25-1.9 3.53-3.79.05-.33.32-.59.66-.59h1.35c1.1 0 2-.9 2-2v-1.5c0-4.42-3.58-8-8-8zm-5.5 8c-.83 0-1.5-.67-1.5-1.5S5.67 7 6.5 7 8 7.67 8 8.5 7.33 10 6.5 10zm3.5-3c-.83 0-1.5-.67-1.5-1.5S9.17 4 10 4s1.5.67 1.5 1.5S10.83 7 10 7zm5 3c-.83 0-1.5-.67-1.5-1.5S14.17 7 15 7s1.5.67 1.5 1.5S15.83 10 15 10z" stroke="currentColor" fill="currentColor" />
    </svg>
);

const PinwheelIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path d="M21 12c0-5-4-9-9-9V3c0 .55-.45 1-1 1s-1-.45-1-1v-.32C9.5 2.24 9.02 2 8.5 2 5.46 2 3 4.46 3 7.5c0 1.28.43 2.46 1.15 3.41L12 21l7.85-10.09c.72-.95 1.15-2.13 1.15-3.41z" stroke="none" />
        {/* Using a generic star/pinwheel shape approximation for simplicity as exact pinwheel is complex */}
        <path d="M12 2L15 12L22 9L15 15L18 22L12 16L6 22L9 15L2 9L9 12L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
);

const DocumentIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <line x1="10" y1="9" x2="8" y2="9"></line>
    </svg>
);


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
