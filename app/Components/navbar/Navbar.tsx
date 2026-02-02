'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Phone, Mail, Search } from 'lucide-react';

interface NavLink {
    name: string;
    href: string;
    subLinks?: NavLink[];
}

const NavSubItem = ({ sub }: { sub: NavLink }) => {
    const [opensLeft, setOpensLeft] = useState(false);
    const itemRef = useRef<HTMLDivElement>(null);

    const checkPosition = () => {
        if (itemRef.current) {
            const rect = itemRef.current.getBoundingClientRect();
            // Check if there's enough space on the right for a 14rem (approx 224px) menu
            // Adding a buffer for safety
            const dropdownWidth = 250;
            if (rect.right + dropdownWidth > window.innerWidth) {
                setOpensLeft(true);
            } else {
                setOpensLeft(false);
            }
        }
    };

    return (
        <div ref={itemRef} className="relative group/sub" onMouseEnter={checkPosition}>
            <a href={sub.href} className="flex items-center justify-between px-4 py-3 text-gray-700 font-semibold hover:bg-gray-50 hover:text-[#BE1E2D] border-b border-gray-50 whitespace-nowrap">
                {sub.name}
                {sub.subLinks && <ChevronRight size={14} className="ml-2" />}
            </a>

            {/* Level 2 (Deep Nesting) */}
            {sub.subLinks && (
                <div className={`absolute top-0 w-max min-w-[14rem] bg-white shadow-xl border-gray-100 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200
                    ${opensLeft ? 'right-full border-r mr-[1px]' : 'left-full border-l ml-[1px]'}
                `}>
                    {sub.subLinks.map((deep) => (
                        <a key={deep.name} href={deep.href} className="block px-4 py-3 text-gray-600 font-semibold hover:bg-gray-50 hover:text-[#BE1E2D] whitespace-nowrap">
                            {deep.name}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

const NavItem = ({ link }: { link: NavLink }) => {
    const [alignRight, setAlignRight] = useState(false);
    const itemRef = useRef<HTMLDivElement>(null);

    const checkPosition = () => {
        if (itemRef.current) {
            const rect = itemRef.current.getBoundingClientRect();
            // If the item is in the right half of the screen, align dropdown to the right
            // or strictly check if rect.left + width > window.innerWidth
            const dropdownWidth = 250;
            if (rect.left + dropdownWidth > window.innerWidth) {
                setAlignRight(true);
            } else {
                setAlignRight(false);
            }
        }
    };

    return (
        <div ref={itemRef} className="relative group flex items-center h-full" onMouseEnter={checkPosition}>
            <a href={link.href} className="flex items-center gap-1 py-4 hover:text-[#BE1E2D] transition-colors">
                {link.name}
                {link.subLinks && <ChevronDown size={14} />}
            </a>

            {/* Level 1 Dropdown */}
            {link.subLinks && (
                <div className={`absolute top-full w-max min-w-[14rem] bg-white shadow-xl border-t-4 border-[#BE1E2D] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50
                     ${alignRight ? 'right-0' : 'left-0'}
                `}>
                    {link.subLinks.map((sub) => (
                        <NavSubItem key={sub.name} sub={sub} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default function Navbar({ isScrolled }: { isScrolled?: boolean }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);

    // Updated structure to support nested sub-links
    const navLinks = [
        {
            name: 'Academics & NVQ', href: '#',
            subLinks: [
                { name: 'All Programs', href: '#' },
                {
                    name: 'Faculties', href: '#',
                    subLinks: [
                        { name: 'Faculty of Engineering Technology', href: '#' },
                        { name: 'Faculty of Information Technology', href: '#' },
                        { name: 'Faculty of Industrial Technology', href: '#' },
                        { name: 'Faculty of Education', href: '#' },
                    ]
                },
                {
                    name: 'HRDC', href: '#',
                    subLinks: [
                        { name: 'Adult and Part-Time Programs', href: '#' },
                        { name: 'Programs for NVQ Sector', href: '#' },
                        { name: 'Training of Trainers Programme', href: '#' },
                        { name: 'Teacher Training', href: '#' },
                    ]
                },
                {
                    name: 'Centers & Institutes', href: '#',
                    subLinks: [
                        { name: 'Career Guidance Unit (CGU)', href: '#' },
                        { name: 'Industrial Training Unit', href: '#' },
                    ]
                }, {
                    name: 'Admission', href: '#',
                    subLinks: [
                        { name: 'Admission Process', href: '#' },
                        { name: 'Payment', href: '#' },
                        { name: 'Online Application Portal', href: '#' },
                    ]
                },
            ]
        },
        {
            name: 'Collaborate', href: '#',
            subLinks: [
                { name: 'Industry Partners', href: '#' },
                { name: 'International Universities', href: '#' },
            ]

        },
        {
            name: 'Research & Innovation', href: '#',
            subLinks: [
                { name: 'Publications', href: '#' },
                { name: 'Innovation and patents', href: '#' },
                { name: 'Awards and competitions', href: '#' },
                { name: 'IRS', href: '#' },
                { name: 'SRS', href: '#' },
            ]
        },
        {
            name: 'University Life', href: '#',
            subLinks: [
                { name: 'Annual Events', href: '#' },
                { name: 'Sports', href: '#' },
                { name: 'Summer with UoVT', href: '#' },
                {
                    name: 'Clubs and Societies', href: '#',
                    subLinks: [
                        { name: 'Media Society', href: '#' },
                        { name: 'IEEE Student Branch', href: '#' },
                        { name: 'Sport Council', href: '#' },
                        { name: 'Gavel Club', href: '#' },
                        { name: 'Environment Society', href: '#' },
                        { name: 'Food Tech Forum', href: '#' },
                        { name: 'Civil Engineering Forum', href: '#' },
                        { name: 'IET Society', href: '#' },
                        { name: 'Literature Society', href: '#' },
                        { name: 'Siyathra Sub-committee', href: '#' },
                    ]
                },
                { name: 'Student Assembly', href: '#' },
                { name: 'Success Stories', href: '#' }, {
                    name: 'Community', href: '#',
                    subLinks: [
                        { name: 'Events', href: '#' },
                        { name: 'News', href: '#' },
                        { name: 'Notices', href: '#' },
                        { name: 'Social', href: '#' },
                    ]
                },
            ]
        },
        {
            name: 'About UoVT', href: '#',
            subLinks: [
                { name: 'History of UoVT', href: '#' },
                { name: 'Leadership', href: '#' },
                { name: 'Vision & Mission', href: '#' },
                { name: 'Objectives', href: '#' },
                { name: 'Quality & recognition', href: '#' },
                { name: 'Sustainable development goals', href: '#' },
                { name: 'Awards', href: '#' },
                {
                    name: 'University collages', href: '#',
                    subLinks: [
                        { name: 'University Colleges Ratmalana', href: '#' },
                        { name: 'University Colleges Kuliyapitiya', href: '#' },
                        { name: 'University Colleges Matara', href: '#' },
                        { name: 'University Colleges Jaffna', href: '#' },
                        { name: 'University Colleges Anuradhapura', href: '#' },
                        { name: 'University Colleges Batangaka', href: '#' },
                    ]
                },
            ]
        },
    ];

    return (
        // <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg md:mt-[-20px]' : 'lg:px-20 pt-5 lg:px-5 sm:-mt-[20px]'}`}>
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg md:mt-[-20px]' : 'lg:px-20 pt-5 lg:px-5 mt-[-20px] md:mt-[20px]'}`}>

            {/* Top utility bar */}
            <div className="hidden md:flex justify-end">
                <div className={`bg-gray-300 w-fit px-6 py-2 flex gap-6 text-[10px] lg:text-xs font-medium transition-all duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden py-0' : 'opacity-100'}`}>
                    <a href="#" className="hover:text-[#BE1E2D]">STAFF</a>
                    <a href="#" className="hover:text-[#BE1E2D]">STUDENT HUB</a>
                    <a href="#" className="hover:text-[#BE1E2D]">ALUMNI</a>
                    <a href="#" className="hover:text-[#BE1E2D]">CONTACT</a>
                </div>
            </div>

            {/* Main navbar */}
            <div className={`transition-all duration-300 ${isScrolled ? 'bg-white py-2' : 'bg-white py-3'} flex justify-center border-b border-gray-100`}>
                <div className={`px-4 md:px-6 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'w-full md:w-11/12' : 'w-full'}`}>

                    {/* Logo Section */}
                    <div className="flex items-center gap-2 md:gap-3">
                        <img
                            src="https://portal.uovt.ac.lk/front-assets/images/logo/UoVT-icon.png"
                            alt="UOVT Logo"
                            className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-14 md:h-16'}`}
                        />
                        <span className={`font-semibold leading-none transition-all duration-300 ${isScrolled ? 'text-[9px]' : 'text-xs'}`}>
                            UNIVERSITY OF<br />
                            <span className={`leading-none font-bold text-black-800 ${isScrolled ? 'text-xs md:text-base' : 'text-lg md:text-xl'}`}>
                                VOCATIONAL<br />TECHNOLOGY
                            </span>
                        </span>
                    </div>

                    {/* Desktop Navigation with Recursive Dropdowns */}
                    <nav className="hidden md:flex gap-4 lg:gap-6 text-xs lg:text-sm font-semibold capitalize tracking-wide">
                        {navLinks.map((link) => (
                            <NavItem key={link.name} link={link} />
                        ))}
                    </nav>

                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div className={`md:hidden bg-white border-t overflow-y-auto transition-all duration-300 ${isMenuOpen ? 'h-screen pb-32 opacity-100' : 'h-0 opacity-0'}`}>
                <nav className="flex flex-col p-6 gap-2 font-semibold capitalize text-base">
                    {navLinks.map((link) => (
                        <div key={link.name} className="flex flex-col">
                            <div
                                className="flex justify-between items-center py-2"
                                onClick={() => link.subLinks && setOpenMobileSub(openMobileSub === link.name ? null : link.name)}
                            >
                                <a href={link.href} className="hover:text-[#BE1E2D]">{link.name}</a>
                                {link.subLinks && <ChevronDown size={18} className={`transition-transform ${openMobileSub === link.name ? 'rotate-180' : ''}`} />}
                            </div>

                            {/* Mobile Submenu */}
                            {link.subLinks && openMobileSub === link.name && (
                                <div className="pl-4 flex flex-col border-l-2 border-gray-100 mb-2">
                                    {link.subLinks.map(sub => (
                                        <div key={sub.name}>
                                            <a href={sub.href} className="block py-2 text-sm text-gray-600 hover:text-[#BE1E2D]">{sub.name}</a>
                                            {sub.subLinks && sub.subLinks.map(deep => (
                                                <a key={deep.name} href={deep.href} className="block pl-4 py-2 text-xs text-gray-400">— {deep.name}</a>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </header>
    );
}


// 'use client';

// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react'; // Suggested: npm install lucide-react

// export default function Navbar({ isScrolled }: { isScrolled?: boolean }) {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const navLinks = [
//         { name: 'About UOVT', href: '#' },
//         { name: 'Academic', href: '#' },
//         { name: 'Admissions', href: '#' },
//         { name: 'University Life', href: '#' },
//         { name: 'Research', href: '#' },
//         { name: 'Events', href: '#' },
//     ];


//     return (
//         <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'md:mt-[-20px]' : 'lg:px-20 pt-5 md:px-5 mt-[-20px]'}`}>
//             {/* Top utility bar - Hidden on Mobile, Visible on Tablet/Desktop */}
//             <div className="hidden md:flex justify-end">
//                 <div className={`bg-gray-300 w-fit px-6 py-2 flex gap-6 text-[10px] lg:text-xs font-medium transition-all duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden py-0' : 'opacity-100'}`}>
//                     <a href="#">STAFF</a>
//                     <a href="#">STUDENT HUB</a>
//                     <a href="#">ALUMNI</a>
//                 </div>
//             </div>

//             {/* Main navbar */}
//             <div className={`${isScrolled ? 'bg-white shadow-md' : 'bg-white'} transition flex justify-center`}>
//                 <div className={`px-4 md:px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'w-full md:w-10/12' : 'w-full'}`}>

//                     {/* Logo Section */}
//                     <div className="flex items-center gap-2 md:gap-3">
//                         <img
//                             src="https://portal.uovt.ac.lk/front-assets/images/logo/UoVT-icon.png"
//                             alt="UOVT Logo"
//                             className={`transition-all duration-300 ${isScrolled ? 'h-12 md:h-14' : 'h-14 md:h-20'}`}
//                         />
//                         <span className={`font-semibold leading-none transition-all duration-300 ${isScrolled ? 'text-[10px] md:text-xs' : 'text-xs md:text-sm'}`}>
//                             UNIVERSITY OF<br />
//                             <span className={`leading-none font-bold ${isScrolled ? 'text-sm md:text-lg' : 'text-lg md:text-2xl'}`}>
//                                 VOCATIONAL <br /> TECHNOLOGY
//                             </span>
//                         </span>
//                     </div>

//                     {/* Desktop/Tablet Links - Visible from md (768px) upwards */}
//                     <nav className="hidden md:flex gap-4 lg:gap-8 text-sm lg:text-lg font-medium">
//                         {navLinks.map((link) => (
//                             <a key={link.name} href={link.href} className="hover:text-blue-700 whitespace-nowrap">
//                                 {link.name}
//                             </a>
//                         ))}
//                     </nav>

//                     {/* Mobile Hamburger Icon - Only visible below md */}
//                     <div className="md:hidden">
//                         <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
//                             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Sidebar/Menu - Slides down */}
//             <div className={`md:hidden bg-white border-t overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
//                 <nav className="flex flex-col p-6 gap-4 font-medium text-lg">
//                     {navLinks.map((link) => (
//                         <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)}>
//                             {link.name}
//                         </a>
//                     ))}
//                     <hr className="my-2" />
//                     <div className="flex flex-col gap-3 text-sm text-gray-500">
//                         <a href="#">STAFF</a>
//                         <a href="#">STUDENT HUB</a>
//                         <a href="#">ALUMNI</a>
//                     </div>
//                 </nav>
//             </div>
//         </header>
//     );
// }