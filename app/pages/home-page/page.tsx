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
            img: "https://tse1.mm.bing.net/th/id/OIP.due5RgwZpaqMN-wOURfYwAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
            title: "IT ALL STARTS HERE 2",
            description: "Find your course and apply before the UCAS deadline",
            link: "#"
        },
        {
            img: "https://tse2.mm.bing.net/th/id/OIP.uhshd6l2DCrPM4PxWoS5-wHaE7?w=626&h=417&rs=1&pid=ImgDetMain&o=7&rm=3",
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
        <div className="">
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

            {/* Second Section */}
            <section className="relative w-full overflow-hidden bg-white mt-12">
                <div className="relative max-w-full px-6 py-20">
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

                            <p className="text-md leading-relaxed max-w-md">
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

        </div>
    )
}
