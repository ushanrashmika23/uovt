import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-[#1b0f3a] text-white">
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
                                {["facebook", "linkedin", "instagram", "youtube", "tiktok"].map(
                                    (item) => (
                                        <a
                                            key={item}
                                            href="#"
                                            className="flex h-8 w-8 items-center justify-center rounded bg-red-700 hover:bg-red-600"
                                        >
                                            <span className="sr-only">{item}</span>
                                        </a>
                                    )
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Study */}
                    <div>
                        <h4 className="mb-4 text-lg font-semibold">Study</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>Undergraduate</li>
                            <li>Postgraduate</li>
                            <li>Short Courses and CPD</li>
                            <li>Partnerships</li>
                        </ul>
                    </div>

                    {/* Information for */}
                    <div>
                        <h4 className="mb-4 text-lg font-semibold">Information for</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>Current Students</li>
                            <li>Current staff</li>
                            <li>Alumni</li>
                            <li>Solve self-service portal</li>
                        </ul>
                    </div>

                    {/* Also see */}
                    <div>
                        <h4 className="mb-4 text-lg font-semibold">Also see</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>News</li>
                            <li>Events</li>
                            <li>Job vacancies</li>
                            <li>Legal</li>
                            <li>Accessibility</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 border-t border-white/20 pt-6 text-right text-sm text-gray-300">
                    Copyright © 2026 All Rights Reserved
                </div>
            </div>
        </footer>
    )
}
