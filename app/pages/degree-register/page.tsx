'use client';

import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import DetailsSection from './components/DetailsSection';
import RelatedCoursesSection from './components/RelatedCoursesSection';

export default function Page() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative min-h-screen flex flex-col font-sans">
            {/* --- Navigation Bar --- */}
            <div
                className={`z-50 mx-auto transition-all duration-300 ease-in-out fixed left-0 right-0 
            ${isScrolled
                        ? 'top-0 w-full shadow-md mt-0 bg-white'
                        : 'top-7 w-9/12 rounded-lg'
                    }`
                }
            >
                <Navbar isScrolled={isScrolled} />
            </div>

            <HeroSection />
            <DetailsSection />
            <RelatedCoursesSection />

        </div>
    );
}
