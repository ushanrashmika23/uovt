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

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Auto slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-[85vh] min-h-137.5 w-full">
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

            {/* --- Content Wrapper --- */}
            <div className="relative z-10 w-full mx-auto h-full flex items-end pb-16 md:pb-24">
                <div className="max-w-4xl ml-18 animate-fadeIn bg-black/50 p-6 md:p-10">
                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                        {data[currentIndex].title}
                    </h1>

                    {/* Description */}
                    <p className="mt-4 text-sm md:text-lg text-gray-200 uppercase tracking-wide font-medium drop-shadow-md max-w-2xl">
                        {data[currentIndex].description}
                    </p>

                    {/* CTA Button */}
                    <a href={data[currentIndex].link} target="_blank" rel="noopener noreferrer">
                        <button 
                            className="mt-8 bg-[#FFE600] px-8 py-3.5 text-sm md:text-base font-extrabold text-black uppercase tracking-wider shadow-[6px_6px_0_#ffe60066]" 
                            style={{ boxShadow: '6px 6px 0 #ffe60066' }}
                        >
                            Check Now
                        </button>
                    </a>
                </div>
            </div>

            {/* Slider dots */}
            <div className="absolute bottom-6 right-6 flex gap-4">
                {data.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-5 w-5 transition-colors ${index === currentIndex ? 'bg-yellow-400' : 'bg-white/60'}`}
                    />
                ))}
            </div>
        </section>
    );
}
