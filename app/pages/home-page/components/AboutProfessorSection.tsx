import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

const professors = [
    {
        name: "Professor K.M.G. Prasanna Premadasa",
        title: "Vice Chancellor of the University",
        image: "https://uovt.ac.lk/wp-content/uploads/2015/10/Professor-K.M.G.-Prasanna-Premadasa.jpg",
        bio: [
            "UOVT is driven by curiosity and ambition, where practical skills meet technology and students are empowered to reach their full potential. Our programs combine academic knowledge with hands-on experience.",
            "As a socially committed university, UOVT focuses on excellence in vocational and technological education, applied research, and community engagement."
        ]
    },
    {
        name: "Professor J.A. Siriwardena",
        title: "Deputy Vice Chancellor",
        image: "https://via.placeholder.com/600x800?text=Professor+Siriwardena", // Replace with actual URL
        bio: [
            "With over two decades of experience in engineering education, Professor Siriwardena leads our curriculum innovation and industry partnership programs.",
            "His research focuses on sustainable energy solutions and integrating AI into vocational training frameworks."
        ]
    }
];

export default function AboutProfessorSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % professors.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + professors.length) % professors.length);
    };

    const professor = professors[currentIndex];

    return (
        <section className="w-full py-16 bg-white">
            <div className="w-9/12 mx-auto flex flex-col lg:flex-row items-center gap-8">

                {/* Main Content Card */}
                <div className="flex flex-col md:flex-row w-full bg-[#F3F4F6] transition-all duration-500 ease-in-out">
                    
                    {/* Left: Image Section */}
                    <div className="relative w-full md:w-5/12 min-h-[400px] md:min-h-[500px]">
                        <Image
                            src={professor.image}
                            alt={professor.name}
                            fill
                            className="object-cover object-center"
                        />
                    </div>

                    {/* Right: Text Content Section */}
                    <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
                        <div className="space-y-6 text-gray-800 text-sm md:text-[15px] leading-relaxed text-justify">
                            {professor.bio.map((para, idx) => (
                                <p key={idx}>{para}</p>
                            ))}
                        </div>

                        {/* Name & Title */}
                        <div className="mt-10">
                            <h4 className="text-black font-bold text-lg">{professor.name}</h4>
                            <p className="text-gray-600 text-sm mt-1">{professor.title}</p>
                        </div>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex flex-col gap-4 shrink-0">
                    <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300">
                        <ChevronRightIcon className="w-5 h-5" />
                    </button>
                    <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300">
                        <ChevronLeftIcon className="w-5 h-5" />
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className="flex lg:hidden gap-4 mt-4">
                    <button onClick={prevSlide} className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white">
                        <ChevronLeftIcon className="w-5 h-5" />
                    </button>
                    <button onClick={nextSlide} className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white">
                        <ChevronRightIcon className="w-5 h-5" />
                    </button>
                </div>

            </div>
        </section>
    );
}