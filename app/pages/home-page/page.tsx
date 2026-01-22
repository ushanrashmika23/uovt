'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import WelcomeSection from './components/WelcomeSection';
import AcademicsSection from './components/AcademicsSection';
import StatsSection from './components/StatsSection';
import AboutProfessorSection from './components/AboutProfessorSection';
import InclusivitySection from './components/InclusivitySection';
import ResearchSection from './components/ResearchSection';
import UniversityLifeSection from './components/UniversityLifeSection';
import NewsSection from './components/NewsSection';
import EventsAndNoticesSection from './components/EventsAndNoticesSection';
import ContactInfoBar from './components/ContactInfoBar';

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
        <div className="mb-0">
            <div className={`z-50 mx-auto transition-all duration-300 ${isScrolled ? 'fixed top-0 w-full shadow-md mt-[-20px] left-0' : 'fixed top-7 w-9/12 rounded-lg left-0 right-0'}`}>
                <Navbar isScrolled={isScrolled} />
            </div>

            <HeroSection />

            <WelcomeSection />

            <AcademicsSection />

            <StatsSection />

            <AboutProfessorSection />

            <InclusivitySection />

            <ResearchSection />

            <UniversityLifeSection />

            <div className="flex flex-col w-full">
                <NewsSection />
            </div>

            <div className="relative w-full">
                <EventsAndNoticesSection />
                <ContactInfoBar />
            </div>

        </div>
    );
}
