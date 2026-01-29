"use client";
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Facebook, Linkedin, Instagram, Youtube, Settings, MessageCircle, ArrowUp } from 'lucide-react';

export default function Footer() {
    const [showFloating, setShowFloating] = useState(false);
    const [atFooter, setAtFooter] = useState(false);
    const footerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowFloating(true);
            } else {
                setShowFloating(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setAtFooter(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) observer.unobserve(footerRef.current);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer ref={footerRef} className="bg-[#1b0f3a] text-white relative">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-12 md:grid-cols-4">

                    {/* Logo and description */}
                    <div>
                        <div className="flex items-start gap-3">
                            <img
                                src="https://portal.uovt.ac.lk/front-assets/images/logo/UoVT-icon.png"
                                alt="UOVT Logo"
                                className="h-14 w-auto"
                            />
                            <h3 className="text-lg font-semibold leading-tight">
                                UNIVERSITY OF<br />
                                VOCATIONAL TECHNOLOGY
                            </h3>
                        </div>

                        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                            University of Vocational Technology, Rathmalana is a state
                            university in Sri Lanka that provides practical, skill-based
                            higher education in technology and vocational fields, preparing
                            students for industry-focused careers.
                        </p>

                        {/* Social icons */}
                        <div className="mt-6">
                            <p className="mb-3 font-semibold">Follow Us On</p>
                            <div className="flex gap-3">
                                <a
                                    href="#"
                                    className="flex h-7 w-7 items-center justify-center bg-[#BE1E2D] rounded transition-colors hover:bg-red-600"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="h-5 w-5 text-white" />
                                </a>
                                <a
                                    href="#"
                                    className="flex h-7 w-7 items-center justify-center bg-[#BE1E2D] rounded transition-colors hover:bg-red-600"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="h-5 w-5 text-white" />
                                </a>
                                <a
                                    href="#"
                                    className="flex h-7 w-7 items-center justify-center bg-[#BE1E2D] rounded transition-colors hover:bg-red-600"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="h-5 w-5 text-white" />
                                </a>
                                <a
                                    href="#"
                                    className="flex h-7 w-7 items-center justify-center bg-[#BE1E2D] rounded transition-colors hover:bg-red-600"
                                    aria-label="YouTube"
                                >
                                    <Youtube className="h-5 w-5 text-white" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Study */}
                    <div>
                        <h4 className="mb-4 text-lg font-semibold">Study</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/pages/acadamic-page" className="hover:text-white transition-colors">Undergraduate</Link></li>
                            <li><Link href="/pages/postgraduate-page" className="hover:text-white transition-colors">Postgraduate</Link></li>
                            <li><Link href="/pages/short-courses-page" className="hover:text-white transition-colors">Short Courses and CPD</Link></li>
                            <li><Link href="/pages/partnerships-page" className="hover:text-white transition-colors">Partnerships</Link></li>
                        </ul>
                    </div>

                    {/* Information for */}
                    <div>
                        <h4 className="mb-4 text-lg font-semibold">Information for</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/pages/current-students-page" className="hover:text-white transition-colors">Current Students</Link></li>
                            <li><Link href="/pages/current-staff-page" className="hover:text-white transition-colors">Current staff</Link></li>
                            <li><Link href="/pages/alumni-page" className="hover:text-white transition-colors">Alumni</Link></li>
                            <li><Link href="/pages/solve-portal-page" className="hover:text-white transition-colors">Solve self-service portal</Link></li>
                        </ul>
                    </div>

                    {/* Also see */}
                    <div>
                        <h4 className="mb-4 text-lg font-semibold">Also see</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/pages/news-page" className="hover:text-white transition-colors">News</Link></li>
                            <li><Link href="/pages/events-page" className="hover:text-white transition-colors">Events</Link></li>
                            <li><Link href="/pages/vacancies-page" className="hover:text-white transition-colors">Job vacancies</Link></li>
                            <li><Link href="/pages/legal-page" className="hover:text-white transition-colors">Legal</Link></li>
                            <li><Link href="/pages/accessibility-page" className="hover:text-white transition-colors">Accessibility</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 border-t border-white/20 pt-6 md:text-centerz text-sm text-gray-300 text-left">
                    Copyright © 2026 All Rights Reserved
                </div>
            </div>

            {/* Floating Action Buttons */}
            <div className="fixed bottom-18 right-10 flex flex-col gap-3 z-10">
                {/* Show Accessibility & Msg when scrolled > 100px and NOT at footer */}
                {showFloating && !atFooter && (
                    <>
                        <button className="bg-[#4169E1] p-3 rounded-full shadow-lg hover:opacity-90 transition-all text-white" aria-label="Accessibility">
                            <Settings className="w-6 h-6" />
                        </button>
                        <button className="bg-[#4169E1] p-3 rounded-full shadow-lg hover:opacity-90 transition-all text-white" aria-label="Messages">
                            <MessageCircle className="w-6 h-6" />
                        </button>
                    </>
                )}

                {/* Show Scroll to Top ONLY when at footer */}
                {atFooter && (
                    <button 
                        onClick={scrollToTop}
                        className="bg-[#BE1E2D] p-3 rounded-full shadow-lg hover:opacity-90 transition-all text-white animate-bounce" 
                        aria-label="Scroll to Top"
                    >
                        <ArrowUp className="w-6 h-6" />
                    </button>
                )}
            </div>
        </footer>
    )
}
