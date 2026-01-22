'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from './components/navbar'; // Assuming this path is correct based on your snippet
import Footer from '@/app/Components/footer/footer';

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
    // State for Accordion
    const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first item (Year 1)

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Data for Course Outline
    const years = [
        {
            title: "Year 1",
            content: {
                core: [
                    "Introduction To Programming And Information Systems",
                    "Basics Of Digital Electronics, Networking, And Databases",
                    "Core Mathematics And English For IT",
                    "Industrial Exposure Component",
                    "Computer Architecture And Algorithms",
                    "Object-Oriented Programming And Web Development",
                    "Software Engineering Practices"
                ],
                optional: [
                    "Database Systems And Operating Systems",
                    "Python Programming And Software Architecture",
                    "Software Testing, Deployment, And Reliability",
                    "Professional And Psychological Skills For IT",
                    "Mobile Application Development",
                    "Cloud Computing And Full-Stack Development",
                    "Fundamentals Of AI And Business Intelligence",
                    "Entrepreneurship, Research Methods, And Workplace Well-Being"
                ],
                note: "** Student Must Choose 2 Optional Module."
            }
        },
        { title: "Year 2", content: null },
        { title: "Year 3", content: null },
        { title: "Year 4", content: null },
    ];

    const courses = [
        {
            award: "BTech (Hons)",
            title: "Software and Intelligent Systems",
            link: "#"
        },
        {
            award: "BTech (Hons)",
            title: "Software and Intelligent Systems",
            link: "#"
        },
        {
            award: "BTech (Hons)",
            title: "Software and Intelligent Systems",
            link: "#"
        }
    ];

    return (
        <div className="relative min-h-screen flex flex-col font-sans">

            {/* --- Navigation Bar (Your Logic) --- */}
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

            {/* --- Hero Section --- */}
            <section className="relative w-full h-[85vh] min-h-175 flex items-center">

                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full bg-black">
                    <Image
                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80" // Placeholder for the meeting/office image
                        alt="Software and Intelligent Systems Background"
                        fill
                        className="object-cover opacity-60" // Dimmed for text readability
                        priority
                    />
                    {/* Gradient Overlay for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
                </div>

                {/* Hero Content Container */}
                <div className="relative z-10 w-9/12 mx-auto pt-20 text-white">

                    {/* Title Area */}
                    <div className="mb-12">
                        <span className="text-xl md:text-2xl font-medium tracking-wide text-gray-200 block mb-2">
                            BTech (Hons)
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-4">
                            Software And Intelligent Systems
                        </h1>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-12 mb-10 max-w-5xl">

                        {/* Column 1 */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-[#FDC800] font-bold text-sm uppercase mb-1">Award</h3>
                                <p className="text-lg">BTech. (Hons)</p>
                            </div>

                            <div>
                                <h3 className="text-[#FDC800] font-bold text-sm uppercase mb-2">Choose A Study Option</h3>
                                <div className="relative">
                                    <select className="w-full bg-white text-black py-2 px-3 rounded-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FDC800]">
                                        <option>Full-Time</option>
                                        <option>Part-Time</option>
                                    </select>
                                    {/* Custom Arrow */}
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-[#FDC800] font-bold text-sm uppercase mb-1">Duration</h3>
                                <p className="text-lg">48 Month (4 Years)</p>
                            </div>

                            <div>
                                <h3 className="text-[#FDC800] font-bold text-sm uppercase mb-1">Campus</h3>
                                <p className="text-lg">Ratmalana , Sri Lanka</p>
                            </div>
                        </div>

                        {/* Column 3 */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-[#FDC800] font-bold text-sm uppercase mb-1">Provider</h3>
                                <p className="text-lg">Faculty Of Information Technology</p>
                            </div>
                        </div>

                        {/* Column 4 */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-[#FDC800] font-bold text-sm uppercase mb-1">Start Dates Available</h3>
                                <p className="text-lg">September 2026</p>
                            </div>
                        </div>

                    </div>

                    {/* CTA Button */}
                    <button className="bg-[#FDC800] hover:bg-yellow-400 text-black text-lg font-bold py-3 px-8 rounded-sm transition-colors shadow-lg">
                        Apply Now
                    </button>

                </div>
            </section>

            {/* --- Content Section (Black/White Split) --- */}
            <section className="w-full flex flex-col md:flex-row min-h-150">

                {/* Left: Black Background with Text */}
                <div className="w-full md:w-1/2 bg-black text-white py-20">
                    {/* Inner container to align with the left edge of the w-9/12 hero container */}
                    {/* Logic: The hero uses w-9/12 mx-auto.
                To align text here, we need padding-left that matches the whitespace of w-9/12.
                (100% - 75%) / 2 = 12.5% left margin approx.
                Using 'pl-[12.5vw]' is a dynamic trick, or we use a flex container.
          */}
                    <div className="w-9/12 mx-auto md:w-full md:mx-0 md:pl-[max(12.5vw,2rem)] pr-8 md:pr-16">
                        <div className="space-y-6 text-sm md:text-[15px] leading-relaxed text-gray-300 text-justify">
                            <p>
                                The Bachelor Of Technology In Software And Intelligent Systems Is Designed To Meet The Growing Demand For Skilled Professionals In The Modern Software And Digital Technology Industry. This Programme Focuses On The Design, Development, Implementation, And Management Of Intelligent Software Systems Using Cutting-Edge Technologies.
                            </p>
                            <p>
                                The Curriculum Integrates Theoretical Knowledge With Practical Applications, Ensuring That Graduates Are Well-Prepared To Work In Dynamic And Technology-Driven Environments. Students Will Gain Strong Foundations In Programming, Software Engineering, Databases, Networking, Artificial Intelligence, And Cloud Computing While Developing Critical Thinking, Problem-Solving, And Professional Skills.
                            </p>
                            <p>
                                The Programme Is Offered As Both A Weekday Programme And A Weekend Programme For NVQ Students.
                                <br />
                                G.C.E. (A/L) Students Will Be Enrolled Only In The Weekday Programme, Subject To Available Vacancies After NVQ Student Admissions.
                            </p>
                            <p>
                                Graduates Of This Programme Will Be Equipped To Pursue Careers In The Software Industry, IT Enterprises, And Digital Innovation Sectors.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right: White Background (Empty per design) */}
                <div className="w-full md:w-1/2 bg-white min-h-75 md:min-h-auto relative">
                    {/* Placeholder for future content or image */}
                    <Image
                        src="https://cloudfoundation.com/blog/wp-content/uploads/2024/01/WebMethods.jpg"
                        alt=""
                        fill
                        objectFit="cover"
                    />
                </div>

            </section>
            {/* --- Footer Strip --- */}
            <div className="w-full h-16 bg-[#3B4685]"></div>

            <section className="w-full bg-white pb-20 font-sans text-gray-900">
                <div className="w-9/12 mx-auto">

                    {/* =========================================
            1. TEACHING & LEARNING
           ========================================= */}
                    <div className="mb-16 pt-10">
                        <h2 className="text-3xl font-bold text-black mb-8">Teaching & Learning</h2>

                        <div className="space-y-6 text-sm md:text-[15px] leading-relaxed text-justify text-gray-800">
                            <p>
                                The Bachelor Of Technology In Software And Intelligent Systems Follows A Practical, Industry-Aligned, And Student-Centred Approach
                                To Learning. The Programme Blends Theoretical Knowledge With Hands-On Experience To Ensure Graduates Are Technically
                                Competent, Innovative, And Workplace-Ready. Teaching Is Delivered Through Lectures, Laboratory Sessions, Industry Exposure, Project-
                                Based Learning, And Real-World Problem-Solving Activities.
                            </p>
                            <p>
                                Students Are Encouraged To Think Critically, Work Collaboratively, And Develop Professional Skills Alongside Technical Expertise. The
                                Curriculum Reflects Current Trends In Software Engineering, Artificial Intelligence, Cloud Computing, And Enterprise Systems, Ensuring
                                Relevance To The Modern IT Industry.
                            </p>
                        </div>

                        <div className="mt-8">
                            <h3 className="font-bold text-black mb-4 text-sm md:text-[15px]">Key Learning Approaches Include:</h3>
                            <ul className="list-disc pl-5 space-y-2 text-sm md:text-[15px] text-gray-800">
                                <li><span className="font-bold">Interactive Lectures & Discussions</span> – Concept-Based Learning With Real-Life Case Studies.</li>
                                <li><span className="font-bold">Hands-On Lab Sessions</span> – Practical Programming, Networking, And Software Development Work</li>
                                <li><span className="font-bold">Industry Exposure & Training</span> – Work-Based Learning In Real IT Environments.</li>
                                <li><span className="font-bold">Project-Based Learning</span> – Individual And Group Software Projects Across Semesters.</li>
                                <li><span className="font-bold">Business Incubation Opportunities</span> – Support For Students Interested In Entrepreneurship.</li>
                                <li><span className="font-bold">Final Year Research Project</span> – Application Of Knowledge To Solve Real Technical Problems.</li>
                            </ul>
                        </div>

                        <div className="mt-8">
                            <h3 className="font-bold text-black mb-4 text-sm md:text-[15px]">Skills Development Focus:</h3>
                            <ul className="list-disc pl-5 space-y-2 text-sm md:text-[15px] text-gray-800">
                                <li>Problem-Solving And Analytical Thinking</li>
                                <li>Teamwork And Communication Skills</li>
                                <li>Software Design And Development Capabilities</li>
                                <li>Professional Workplace Ethics</li>
                                <li>Time And Project Management Skills</li>
                                <li>Adaptability To New And Emerging Technologies</li>
                            </ul>
                        </div>

                        <p className="mt-8 text-sm md:text-[15px] leading-relaxed text-justify text-gray-800">
                            Learning Is Supported Through Digital Platforms, Online Resources, And Access To Modern Software Tools. Students Are Also
                            Encouraged To Pursue Additional Certifications Through Online Learning Platforms To Enhance Their Career Readiness.
                        </p>
                    </div>

                    {/* =========================================
            2. COURSE OUTLINE (Accordion)
           ========================================= */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-black mb-8">Course Outline</h2>

                        <div className="space-y-6 text-sm md:text-[15px] leading-relaxed text-justify text-gray-800 mb-12">
                            <p>
                                The Bachelor Of Technology In Software And Intelligent Systems Is A Six-Semester Undergraduate Programme Designed To Build Strong
                                Foundations In Software Technology While Progressively Developing Advanced Skills In Intelligent Systems, Cloud Computing, And
                                Enterprise Applications. The Curriculum Combines Theoretical Learning With Practical Training, Industry Exposure, And Project-Based
                                Work To Ensure Graduates Are Fully Prepared For The IT Industry.
                            </p>
                            <p>
                                The Programme Is Structured To Move From Fundamental Computing Concepts In The Early Semesters To Specialized And Advanced
                                Areas In The Later Stages. Students Gain Experience In Programming, Databases, Networking, Software Engineering, Artificial
                                Intelligence, And Enterprise Systems, Alongside Professional And Soft Skills Development.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {years.map((year, index) => (
                                <div key={index} className="overflow-hidden">
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors duration-300 ${openIndex === index ? 'bg-[#3B4685] text-white rounded-t-lg' : 'bg-[#3B4685] text-white rounded-lg hover:bg-[#2c3566]'
                                            }`}
                                    >
                                        <span className="text-lg font-medium">{year.title}</span>
                                        {openIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                    </button>

                                    {openIndex === index && year.content && (
                                        <div className="border border-t-0 border-gray-200 p-8 bg-white rounded-b-lg shadow-sm">
                                            <div className="mb-8">
                                                <h4 className="font-bold text-black mb-6 text-base">Core Modules</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                                                    {year.content.core.map((module, i) => (
                                                        <div key={i} className="text-sm text-gray-800 py-1">{module}</div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="font-bold text-black mb-6 text-base">Optional Modules</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 mb-8">
                                                    {year.content.optional.map((module, i) => (
                                                        <div key={i} className="text-sm text-gray-800 py-1">{module}</div>
                                                    ))}
                                                </div>
                                                <p className="text-sm font-bold text-black">{year.content.note}</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Fallback for years without content in the screenshot */}
                                    {openIndex === index && !year.content && (
                                        <div className="border border-t-0 border-gray-200 p-8 bg-white rounded-b-lg shadow-sm">
                                            <p className="text-sm text-gray-500 italic">Content for this year is not displayed in the current view.</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* =========================================
            3. ADMISSION REQUIREMENTS
           ========================================= */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-black mb-8">Admission Requirements</h2>
                        <p className="text-sm md:text-[15px] mb-6">
                            The Minimum Qualifications Required For Admission To The Programme On The Standard Route Are:
                        </p>

                        <div className="space-y-8">
                            {/* A */}
                            <div>
                                <h4 className="font-bold text-black mb-3 text-sm md:text-[15px]">A. Accepted NVQ Level 5 Qualifications</h4>
                                <ul className="list-disc pl-5 space-y-1 text-sm md:text-[15px] text-gray-800">
                                    <li>Automation And Robotic Technology</li>
                                    <li>Computer Numerically Controlled Manufacturing Technology</li>
                                    <li>Mechatronics Technology</li>
                                    <li>Aircraft Maintenance Technology</li>
                                    <li>Digital Imaging And Printing Technology</li>
                                    <li>Digital Media Technology</li>
                                    <li>Electrical Technology</li>
                                    <li>Electronic Technology</li>
                                    <li>Electronic Media</li>
                                    <li>Computer System Design (One Year Exemption)</li>
                                    <li>Information And Communication Technology (One Year Exemption)</li>
                                    <li>Full Stack Software Development (One Year Exemption)</li>
                                    <li>Information And Cyber Security Technology (One Year Exemption)</li>
                                </ul>
                                <p className="mt-2 text-sm italic">Or</p>
                            </div>

                            {/* B */}
                            <div>
                                <h4 className="font-bold text-black mb-3 text-sm md:text-[15px]">B. Accepted NVQ Level 6 Qualifications</h4>
                                <ul className="list-disc pl-5 space-y-1 text-sm md:text-[15px] text-gray-800">
                                    <li>Aircraft Maintenance Technology</li>
                                    <li>Automation And Robotic Technology</li>
                                    <li>Biomedical Equipment Technology</li>
                                    <li>Electrical Technology</li>
                                    <li>Electronic Technology</li>
                                    <li>Mechatronics Technology</li>
                                    <li>Information And Communication Technology (Three Semesters Exempted)</li>
                                    <li>Information And Cyber Security Technology (One Year Exemption)</li>
                                </ul>
                                <p className="mt-2 text-sm italic">OR</p>
                            </div>

                            {/* C */}
                            <div>
                                <h4 className="font-bold text-black mb-3 text-sm md:text-[15px]">C. Accepted Equivalent Qualifications</h4>
                                <ul className="list-disc pl-5 space-y-1 text-sm md:text-[15px] text-gray-800">
                                    <li>Higher National Diploma In IT – SLIATE (One Year Exemption)</li>
                                    <li>National Diploma In Engineering Science (Electrical Power) – IET Katunayake</li>
                                    <li>National Diploma In Engineering Science (Electrical & Telecommunication) – IET Katunayake</li>
                                    <li>National Diploma In Engineering Science (Electrical-Electronics) – IET Katunayake</li>
                                    <li>National Diploma In Technology In Electrical – University Of Moratuwa</li>
                                    <li>National Diploma In Technology In Electronics & Telecommunication – University Of Moratuwa</li>
                                    <li>Higher National Diploma In Engineering (Electrical Engineering) – SLIATE</li>
                                    <li>Higher National Diploma In Engineering (Electrical Engineering – Electronics) – SLIATE</li>
                                </ul>
                                <p className="mt-2 text-sm italic">Or</p>
                            </div>

                            {/* D */}
                            <div>
                                <h4 className="font-bold text-black mb-3 text-sm md:text-[15px]">D. A/L Stream Eligibility</h4>
                                <ul className="list-disc pl-5 space-y-1 text-sm md:text-[15px] text-gray-800">
                                    <li>Engineering Technology (With ICT)</li>
                                    <li>Physical Science</li>
                                    <li>Biological Sciences</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* =========================================
            4. CAREER OPPORTUNITIES
           ========================================= */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-black mb-8">Career Opportunities</h2>
                        <p className="text-sm md:text-[15px] leading-relaxed text-justify text-gray-800 mb-6">
                            Graduates Of The Bachelor Of Technology In Software And Intelligent Systems Will Be Well-Prepared To Enter The Rapidly Growing
                            Software And Digital Technology Industry. The Programme Equips Students With Strong Technical, Analytical, And Professional Skills
                            Required To Design, Develop, Deploy, And Manage Modern Software Systems. With Exposure To Areas Such As Cloud Computing,
                            Artificial Intelligence, Enterprise Systems, Cybersecurity, And Mobile Technologies, Graduates Can Work Across A Wide Range Of IT And
                            Digital Sectors In Both Local And International Organizations. Many Graduates Also Progress To Postgraduate Studies Or Establish Their
                            Own Technology-Based Startups.
                        </p>

                        <p className="font-bold text-sm md:text-[15px] mb-3">Typical Career Paths Include:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm md:text-[15px] text-gray-800 mb-6">
                            <li>Software Developer</li>
                            <li>Web And Full-Stack Developer</li>
                            <li>Mobile Application Developer</li>
                            <li>Cloud Engineer</li>
                            <li>Database Administrator</li>
                            <li>Data Analyst / Business Intelligence Analyst</li>
                            <li>Software Quality Assurance Engineer</li>
                            <li>IT Systems Analyst</li>
                            <li>Cybersecurity Technician</li>
                            <li>Enterprise Application Developer</li>
                            <li>Digital Marketing Technologist</li>
                            <li>AI And Intelligent Systems Practitioner</li>
                            <li>Software Project Coordinator</li>
                            <li>IT Consultant</li>
                        </ul>

                        <p className="text-sm md:text-[15px] leading-relaxed text-justify text-gray-800">
                            Graduates Will Also Be Capable Of Working As Entrepreneurs, Creating Innovative Digital Products, Software Solutions, And Tech Startups.
                        </p>
                    </div>

                    {/* =========================================
            5. SPECIAL REMARKS
           ========================================= */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-black mb-8">Special Remarks</h2>
                        <p className="text-sm md:text-[15px] leading-relaxed text-justify text-gray-800 mb-6">
                            This Programme Is Designed To Align With Current Industry Trends And Technological Advancements In Software And Intelligent
                            Systems. The Curriculum Is Continuously Reviewed And Updated To Reflect Emerging Technologies, Industrial Practices, And The
                            Evolving Needs Of The Digital Economy. While The University Aims To Deliver All Modules As Scheduled, Adjustments May Occasionally
                            Be Made To Ensure Academic Quality And Relevance.
                        </p>

                        <p className="font-bold text-sm md:text-[15px] mb-3">Key Points To Note:</p>
                        <ul className="list-disc pl-5 space-y-2 text-sm md:text-[15px] text-gray-800 mb-6">
                            <li>The Programme Is Offered As A Weekday Mode For A/L Students And Both Weekday And Weekend Modes For NVQ Students, Subject To Availability.</li>
                            <li>Module Content And Structure May Change Periodically To Incorporate New Technologies And Industry Standards.</li>
                            <li>If A Particular Module Cannot Be Conducted As Planned, Students Will Be Informed In Advance And Guided Toward Suitable Alternatives.</li>
                            <li>Industrial Exposure, Work-Based Learning, And Final Year Projects Are Essential Components Of The Programme And Must Be Completed Successfully For Graduation.</li>
                            <li>Students Are Encouraged To Engage In Professional Development Activities, Industry Networking, And Digital Learning Platforms Throughout Their Studies.</li>
                        </ul>

                        <p className="text-sm md:text-[15px] leading-relaxed text-justify text-gray-800">
                            The University Is Committed To Providing A Supportive Learning Environment That Prepares Graduates For Successful Careers In The Software And Technology Sector.
                        </p>
                    </div>

                    {/* =========================================
            6. DURATION
           ========================================= */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-black mb-8">Duration</h2>
                        <p className="text-sm md:text-[15px] leading-relaxed text-justify text-gray-800 mb-6">
                            The Bachelor Of Technology In Software And Intelligent Systems Is A Full-Time Undergraduate Programme Structured To Provide
                            Comprehensive Academic Learning, Practical Training, And Industry Exposure Within A Clearly Defined Study Period. The Duration May
                            Vary Depending On The Students Prior Qualifications And Approved Exemptions Under NVQ Or Equivalent Pathways.
                        </p>

                        <div className="mb-6">
                            <h4 className="font-bold text-black mb-2 text-sm md:text-[15px]">Standard Duration:</h4>
                            <ul className="list-disc pl-5 text-sm md:text-[15px] text-gray-800">
                                <li><span className="font-bold">3 Years (6 Semesters)</span> – For Students Entering Through G.C.E. (A/L) Qualifications.</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h4 className="font-bold text-black mb-2 text-sm md:text-[15px]">Accelerated / Exempted Pathways:</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm md:text-[15px] text-gray-800">
                                <li><span className="font-bold">2 Years (4 Semesters)</span> – For Selected NVQ Level 6 Holders And Approved Equivalent Qualifications With One-Year Exemptions.</li>
                                <li><span className="font-bold">Varied Duration</span> – For Students Granted Partial Exemptions Based On Prior Learning, Subject To University Approval.</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-black mb-2 text-sm md:text-[15px]">Additional Study Features Include:</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm md:text-[15px] text-gray-800">
                                <li><span className="font-bold">Industrial Training / Work-Based Learning In Semester 5</span>, Integrated Within The Programme Timeline.</li>
                                <li>Final Year Project Conducted Across Semesters 5 And 6.</li>
                                <li><span className="font-bold">Weekday Programme</span> Available For All Eligible Students.</li>
                                <li><span className="font-bold">Weekend Programme</span> Available <span className="font-bold">Only For NVQ Students.</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* =========================================
            7. PROFESSIONAL ACCREDITATION
           ========================================= */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-black mb-8">Professional Accreditation</h2>
                        <p className="text-sm md:text-[15px] leading-relaxed text-justify text-gray-800 mb-6">
                            The Bachelor Of Technology In Software And Intelligent Systems Is Designed In Alignment With National And Industry-Recognized
                            Standards To Ensure Academic Quality, Professional Relevance, And Employability Of Graduates. The Programme Reflects Current
                            Technological Trends And Industrial Requirements, Enabling Students To Transition Smoothly Into The Professional IT Sector Or Further
                            Academic Studies. While The Degree Is Awarded By The University Of Vocational Technology (UoVT), It Is Structured To Be Compatible
                            With National Vocational Frameworks And Recognized Professional Pathways In Sri Lanka And Beyond.
                        </p>

                        <p className="font-bold text-sm md:text-[15px] mb-3">Key Features Related To Recognition And Professional Alignment Include:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm md:text-[15px] text-gray-800 mb-6">
                            <li><span className="font-bold">Aligned With The National Vocational Qualifications (NVQ)</span> Framework, Allowing Advanced Entry And Exemptions For Eligible NVQ Level 5 And Level 6 Holders.</li>
                            <li><span className="font-bold">Industry-Relevant Curriculum</span>, Developed To Meet Software And Intelligent Systems Workforce Needs.</li>
                            <li><span className="font-bold">Pathway Compatibility</span> With Professional IT Certifications And Postgraduate Studies.</li>
                            <li><span className="font-bold">Recognition Of Prior Learning (RPL)</span> For Selected Diploma And HND Qualifications.</li>
                            <li><span className="font-bold">Work-Based Learning And Industrial Training</span>, Ensuring Professional Readiness.</li>
                            <li><span className="font-bold">Alignment With Modern Software Engineering And AI Practices</span>, Supporting Global Employability.</li>
                        </ul>

                        <p className="text-sm md:text-[15px] leading-relaxed text-justify text-gray-800">
                            Graduates Of This Programme Are Well-Positioned To Pursue Professional Certifications In Areas Such As Software Development, Cloud Computing, Cybersecurity, Data Analytics, And Artificial Intelligence.
                        </p>
                    </div>

                    {/* =========================================
            8. PAYMENT STRUCTURE
           ========================================= */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-black mb-8">Payment Structure</h2>
                        <div className="space-y-4 text-sm md:text-[15px] text-gray-800 mb-8">
                            <p>
                                Payments Should Be Made Only After You Are Officially Informed Of Your Eligibility For Registration By The University Authorities Upon
                                Verification Of Your Certificates. Only Cash Payments Will Be Accepted.
                            </p>
                            <p>
                                According To The University Payment Policy, All Semester/Year Renewal Fees Must Be Paid Within The First Two Weeks From The
                                Commencement Of The Relevant Semester Or Academic Year.
                            </p>
                        </div>

                        <div className="">
                            {/* Table 1: Weekdays Programme - B1 Students */}
                            <div className="mb-10 overflow-x-auto w-2/3">
                                <h4 className="font-bold text-center mb-2 border border-black border-b-0 py-2 bg-gray-50 text-sm">Weekdays Programme – B1 Students</h4>
                                <table className="w-full text-sm border-collapse border border-black min-w-150">
                                    <thead>
                                        <tr className="bg-white">
                                            <th className="border border-black px-4 py-2 w-1/2 text-left">Description</th>
                                            <th className="border border-black px-4 py-2 text-right">Amount (Rs.)</th>
                                            <th className="border border-black px-4 py-2 text-center">Remarks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-black px-4 py-2">Registration Fee</td>
                                            <td className="border border-black px-4 py-2 text-right">2,000.00</td>
                                            <td rowSpan={2} className="border border-black px-4 py-2 text-center align-middle">To be paid at the Initial Registration</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black px-4 py-2">Refundable Deposit (Refundable after successful completion of course) (after deductions if any)</td>
                                            <td className="border border-black px-4 py-2 text-right">20,000.00</td>
                                        </tr>
                                        <tr className="font-bold bg-gray-50">
                                            <td className="border border-black px-4 py-2 text-center">Total</td>
                                            <td className="border border-black px-4 py-2 text-right">22,000.00</td>
                                            <td className="border border-black px-4 py-2"></td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black px-4 py-2">2nd Year Registration renewal Fee</td>
                                            <td className="border border-black px-4 py-2 text-right">2,000.00</td>
                                            <td rowSpan={2} className="border border-black px-4 py-2 text-center align-middle">Should be paid during the Course</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black px-4 py-2">3rd Year Registration Renewal Fee</td>
                                            <td className="border border-black px-4 py-2 text-right">2,000.00</td>
                                        </tr>
                                        <tr className="font-bold bg-gray-50">
                                            <td className="border border-black px-4 py-2 text-center">Total</td>
                                            <td className="border border-black px-4 py-2 text-right">4,000.00</td>
                                            <td className="border border-black px-4 py-2"></td>
                                        </tr>
                                        <tr className="font-bold">
                                            <td className="border border-black px-4 py-2 text-center">Grand Total</td>
                                            <td colSpan={2} className="border border-black px-4 py-2 text-center">26,000.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Table 2: Weekends Programme - B2 Students */}
                            <div className="overflow-x-auto w-2/3">
                                <h4 className="font-bold text-center mb-2 border border-black border-b-0 py-2 bg-gray-50 text-sm">Weekends Programme – B2 Students</h4>
                                <table className="w-full text-sm border-collapse border border-black min-w-[600px]">
                                    <thead>
                                        <tr className="bg-white">
                                            <th className="border border-black px-4 py-2 w-1/2 text-left">Description</th>
                                            <th className="border border-black px-4 py-2 text-right">Amount (Rs.)</th>
                                            <th className="border border-black px-4 py-2 text-center">Remarks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-black px-4 py-2">Registration Fee</td>
                                            <td className="border border-black px-4 py-2 text-right">2,000.00</td>
                                            <td rowSpan={2} className="border border-black px-4 py-2 text-center align-middle">To be paid at the Initial Registration</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black px-4 py-2">Refundable Deposit (Refundable after successful completion of course) (after deductions if any)</td>
                                            <td className="border border-black px-4 py-2 text-right">20,000.00</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black px-4 py-2">First Semester Course Fee</td>
                                            <td className="border border-black px-4 py-2 text-right">25,000.00</td>
                                            <td className="border border-black px-4 py-2"></td>
                                        </tr>
                                        <tr className="font-bold bg-gray-50">
                                            <td className="border border-black px-4 py-2 text-center">Total</td>
                                            <td className="border border-black px-4 py-2 text-right">47,000.00</td>
                                            <td className="border border-black px-4 py-2"></td>
                                        </tr>

                                        {/* Semester Fees */}
                                        <tr>
                                            <td className="border border-black px-4 py-2">Semester 2 Fee</td>
                                            <td className="border border-black px-4 py-2 text-right">25,000.00</td>
                                            <td rowSpan={6} className="border border-black px-4 py-2 text-center align-middle">Should be paid during the Course</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black px-4 py-2">2nd Year Registration renewal Fee</td>
                                            <td className="border border-black px-4 py-2 text-right">2,000.00</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black px-4 py-2">Semester 3 Fee</td>
                                            <td className="border border-black px-4 py-2 text-right">25,000.00</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black px-4 py-2">Semester 4 Fee</td>
                                            <td className="border border-black px-4 py-2 text-right">25,000.00</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black px-4 py-2">3rd Year Registration Renewal Fee</td>
                                            <td className="border border-black px-4 py-2 text-right">2,000.00</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black px-4 py-2">Semester 5 Fee</td>
                                            <td className="border border-black px-4 py-2 text-right">25,000.00</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black px-4 py-2">Semester 6 Fee</td>
                                            <td className="border border-black px-4 py-2 text-right">25,000.00</td>
                                            <td className="border border-black px-4 py-2"></td>
                                        </tr>

                                        <tr className="font-bold bg-gray-50">
                                            <td className="border border-black px-4 py-2 text-center">Total</td>
                                            <td className="border border-black px-4 py-2 text-right">129,000.00</td>
                                            <td className="border border-black px-4 py-2"></td>
                                        </tr>
                                        <tr className="font-bold">
                                            <td className="border border-black px-4 py-2 text-center">Grand Total</td>
                                            <td colSpan={2} className="border border-black px-4 py-2 text-center">176,000.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section className="w-full bg-white pb-16 font-sans">
                <div className="w-9/12 mx-auto">

                    {/* Header */}
                    <h2 className="text-3xl font-bold text-black mb-12">Related Courses</h2>

                    {/* Carousel Container */}
                    <div className="relative">

                        {/* Left Arrow */}
                        <button
                            className="absolute -left-20 top-1/2 -translate-y-1/2 hidden md:flex shrink-0 w-12 h-12 rounded-full border border-black items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
                            aria-label="Previous"
                        >
                            <ChevronLeftIcon className="w-6 h-6" />
                        </button>

                        {/* Cards Grid */}
                        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                            {courses.map((course, index) => (
                                <div
                                    key={index}
                                    className="bg-[#FDC800] aspect-auto p-8 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                                >
                                    {/* Card Content */}
                                    <div className="pt-4">
                                        <p className="text-sm font-medium text-black mb-1">
                                            {course.award}
                                        </p>
                                        <h3 className="text-xl md:text-2xl mb-6 font-semibold text-black leading-tight">
                                            {course.title}
                                        </h3>
                                    </div>

                                    {/* Read More Link */}
                                    <a href={course.link} className="text-sm font-medium text-black mt-auto">
                                        Read More....
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* Right Arrow */}
                        <button
                            className="absolute -right-20 top-1/2 -translate-y-1/2 hidden md:flex shrink-0 w-12 h-12 rounded-full border border-black items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
                            aria-label="Next"
                        >
                            <ChevronRightIcon className="w-6 h-6" />
                        </button>

                        {/* Mobile Navigation (Visible only on small screens) */}
                        <div className="absolute -bottom-16 left-0 right-0 flex md:hidden justify-center gap-4">
                            <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white">
                                <ChevronLeftIcon className="w-5 h-5" />
                            </button>
                            <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white">
                                <ChevronRightIcon className="w-5 h-5" />
                            </button>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}


const ChevronDown = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m6 9 6 6 6-6" />
    </svg>
);

const ChevronUp = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m18 15-6-6-6 6" />
    </svg>
);

const ChevronLeftIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m15 18-6-6 6-6" />
    </svg>
);

const ChevronRightIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m9 18 6-6-6-6" />
    </svg>
);