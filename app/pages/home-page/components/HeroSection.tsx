'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroData {
    img: string;
    title: string;
    description: string;
    link: string;
}

const data: HeroData[] = [
    {
        img: "https://res.cloudinary.com/dtddjfvcn/image/upload/v1770018834/11111_sgvef1.jpg",
        title: "IT ALL STARTS HERE 3",
        description: "Find your course and apply before the UCAS deadline",
        link: "#"
    },
    {
        img: "https://res.cloudinary.com/dtddjfvcn/image/upload/v1770018762/Anuradapura_ypyr9u.jpg",
        title: "IT ALL STARTS HERE 1",
        description: "Find your course and apply before the UCAS deadline",
        link: "#"
    },
    {
        img: "https://res.cloudinary.com/dtddjfvcn/image/upload/v1770018863/3Y6A1475_vff7u0.jpg",
        title: "IT ALL STARTS HERE 2",
        description: "Find your course and apply before the UCAS deadline",
        link: "#"
    },
    {
        img: "https://res.cloudinary.com/dtddjfvcn/image/upload/v1770018817/3Y6A1562_jplmwf.jpg",
        title: "IT ALL STARTS HERE 4",
        description: "Find your course and apply before the UCAS deadline",
        link: "#"
    }
];

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % data.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        // <section className="relative h-[60vh] sm:h-[65vh] md:h-[75vh] lg:h-[85vh] min-h-[400px] w-full overflow-hidden">
        <section className="relative h-[100vh] w-full overflow-hidden">
            {/* Background image */}
            <Image
                src={data[currentIndex].img}
                alt="Hero Background"
                fill
                priority
                className="object-cover transition-opacity duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 md:bg-black/30" />

            {/* --- Content Wrapper --- */}
            <div className="relative z-10 w-full h-full flex items-center md:items-end px-6 sm:px-12 md:px-16 lg:px-24 pb-12 md:pb-20 lg:pb-24">
                <div className="max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-4xl animate-fadeIn bg-black/60 md:bg-black/50 p-6 md:p-8 lg:p-10">
                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                        {data[currentIndex].title}
                    </h1>

                    {/* Description */}
                    <p className="mt-3 md:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 uppercase tracking-wide font-medium drop-shadow-md">
                        {data[currentIndex].description}
                    </p>

                    {/* CTA Button */}
                    <a href={data[currentIndex].link} target="_blank" rel="noopener noreferrer" className="inline-block">
                        <button
                            className="mt-6 md:mt-8 bg-[#FFE600] px-6 py-2.5 md:px-8 md:py-3.5 text-xs sm:text-sm md:text-base font-extrabold text-black uppercase tracking-wider transition-transform active:scale-95"
                            style={{ boxShadow: '4px 4px 0 #ffe60066' }}
                        >
                            Check Now
                        </button>
                    </a>
                </div>
            </div>

            {/* Slider dots */}
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex gap-2 md:gap-4 z-20">
                {data.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`h-3 w-3 md:h-4 md:w-4 transition-all ${index === currentIndex ? 'bg-[#FFE600] scale-110' : 'bg-white/50 hover:bg-white/80'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}