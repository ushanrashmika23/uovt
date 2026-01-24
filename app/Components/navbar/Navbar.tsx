'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Suggested: npm install lucide-react

export default function Navbar({ isScrolled }: { isScrolled?: boolean }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'About UOVT', href: '#' },
        { name: 'Academic', href: '#' },
        { name: 'Admissions', href: '#' },
        { name: 'University Life', href: '#' },
        { name: 'Research', href: '#' },
        { name: 'Events', href: '#' },
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'mt-[-20px]' : 'lg:px-20 pt-5 md:px-5 mt-[-20px]'}`}>
            {/* Top utility bar - Hidden on Mobile, Visible on Tablet/Desktop */}
            <div className="hidden md:flex justify-end">
                <div className={`bg-gray-300 w-fit px-6 py-2 flex gap-6 text-[10px] lg:text-xs font-medium transition-all duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden py-0' : 'opacity-100'}`}>
                    <a href="#">STAFF</a>
                    <a href="#">STUDENT HUB</a>
                    <a href="#">ALUMNI</a>
                </div>
            </div>

            {/* Main navbar */}
            <div className={`${isScrolled ? 'bg-white shadow-md' : 'bg-white'} transition flex justify-center`}>
                <div className={`px-4 md:px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'w-full md:w-10/12' : 'w-full'}`}>
                    
                    {/* Logo Section */}
                    <div className="flex items-center gap-2 md:gap-3">
                        <img 
                            src="https://portal.uovt.ac.lk/front-assets/images/logo/UoVT-icon.png" 
                            alt="UOVT Logo" 
                            className={`transition-all duration-300 ${isScrolled ? 'h-12 md:h-14' : 'h-14 md:h-20'}`} 
                        />
                        <span className={`font-semibold leading-none transition-all duration-300 ${isScrolled ? 'text-[10px] md:text-xs' : 'text-xs md:text-sm'}`}>
                            UNIVERSITY OF<br />
                            <span className={`leading-none font-bold ${isScrolled ? 'text-sm md:text-lg' : 'text-lg md:text-2xl'}`}>
                                VOCATIONAL <br/> TECHNOLOGY
                            </span>
                        </span>
                    </div>

                    {/* Desktop/Tablet Links - Visible from md (768px) upwards */}
                    <nav className="hidden md:flex gap-4 lg:gap-8 text-sm lg:text-lg font-medium">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="hover:text-blue-700 whitespace-nowrap">
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Hamburger Icon - Only visible below md */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar/Menu - Slides down */}
            <div className={`md:hidden bg-white border-t overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <nav className="flex flex-col p-6 gap-4 font-medium text-lg">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}
                    <hr className="my-2" />
                    <div className="flex flex-col gap-3 text-sm text-gray-500">
                        <a href="#">STAFF</a>
                        <a href="#">STUDENT HUB</a>
                        <a href="#">ALUMNI</a>
                    </div>
                </nav>
            </div>
        </header>
    );
}