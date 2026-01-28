import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

// --- Data Configuration ---
const eventsData = [
    {
        id: 1,
        title: "Finished your O/Ls or A/Ls and thinking about what comes next?",
        date: "Jan 3, 2026",
        time: "09.00 AM",
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80",
        tag: "Annual Convocation"
    },
    {
        id: 2,
        title: "Inter-University Hackathon: Code the Future 2026",
        date: "Feb 14, 2026",
        time: "10.00 AM",
        image: "https://images.unsplash.com/photo-1504384308090-c54be3852f95?auto=format&fit=crop&q=80",
        tag: "Tech Competition"
    },
    {
        id: 3,
        title: "Grand Opening of the New Science Research Facility",
        date: "Mar 10, 2026",
        time: "08.30 AM",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80",
        tag: "Campus News"
    }
];

const noticesData = [
    {
        id: 1,
        title: "New Course: Professional Certificate in Information Communication Technology",
        description: "This is an introductory course on Information and Communication Technologies. The programme has developed in such a way that school leavers will gain hands-on experience in performing day-to-day ICT exercises related to an office environment."
    },
    {
        id: 2,
        title: "Library Maintenance Schedule Update",
        description: "Please be advised that the main library will be closed for scheduled maintenance on the upcoming weekend (Jan 10-11). Digital resources and the study hall in the West Wing will remain open for students during this period."
    },
    {
        id: 3,
        title: "Submission Deadline Extended: Semester 1 Assignments",
        description: "Due to the recent technical upgrades to the LMS, the submission deadline for all Semester 1 coursework has been extended by 48 hours. The new deadline is Friday, January 15th at 11:59 PM."
    }
];

export default function EventsAndNoticesSection() {
    // --- State Management ---
    const [currentEventIndex, setCurrentEventIndex] = useState(0);
    const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);

    // --- Navigation Logic for Events ---
    const nextEvent = () => {
        setCurrentEventIndex((prev) => (prev === eventsData.length - 1 ? 0 : prev + 1));
    };

    const prevEvent = () => {
        setCurrentEventIndex((prev) => (prev === 0 ? eventsData.length - 1 : prev - 1));
    };

    // --- Navigation Logic for Notices ---
    const nextNotice = () => {
        setCurrentNoticeIndex((prev) => (prev === noticesData.length - 1 ? 0 : prev + 1));
    };

    const prevNotice = () => {
        setCurrentNoticeIndex((prev) => (prev === 0 ? noticesData.length - 1 : prev - 1));
    };

    // Auto-rotate Events and Notices every 5 seconds
    React.useEffect(() => {
        const interval = setInterval(() => {
            nextEvent();
            nextNotice();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Helper variables for cleaner JSX
    const event = eventsData[currentEventIndex];
    const notice = noticesData[currentNoticeIndex];

    return (
        <section className="w-full bg-[#FFE600] pt-16 pb-32 px-4">

            {/* Container: w-9/12 */}
            <div className="w-11/12 md:w-9/12 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

                    {/* --- Left Column: Events --- */}
                    <div className="lg:pr-10 lg:border-r border-yellow-500/30 relative">

                        {/* Header */}
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-black">Events</h2>
                            <a href="#" className="text-sm font-bold text-black flex items-center hover:underline">
                                All Events <ChevronRightIcon className="w-4 h-4 ml-1" />
                            </a>
                        </div>

                        {/* Event Card Container */}
                        <div className="flex items-center gap-4">

                            {/* Navigation Arrows (Left of card) */}
                            <div className="flex flex-col gap-3 shrink-0">
                                <button 
                                    onClick={nextEvent}
                                    className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors active:scale-95"
                                >
                                    <ChevronRightIcon className="w-5 h-5" />
                                </button>
                                <button 
                                    onClick={prevEvent}
                                    className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors active:scale-95"
                                >
                                    <ChevronLeftIcon className="w-5 h-5" />
                                </button>
                            </div>

                            {/* The Card */}
                            {/* Added min-h to prevent layout jump when content changes */}
                            <div className="flex flex-col md:flex-row bg-transparent w-full gap-4 min-h-[200px]">
                                {/* Event Image */}
                                <div className="relative w-full md:w-1/2 h-48 md:h-auto overflow-hidden shadow-sm">
                                    <Image
                                        key={event.id} // Key forces re-render for image change
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover transition-opacity duration-300"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/40 flex items-end p-2">
                                        <span className="text-white text-xs font-bold">{event.tag}</span>
                                    </div>
                                </div>

                                {/* Event Details */}
                                <div className="w-full md:w-1/2 flex flex-col transition-all duration-300">
                                    {/* Date Badge */}
                                    <div className="bg-[#8E24AA] text-white text-xs font-bold py-1 px-3 w-fit mb-3">
                                        {event.date} | {event.time}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-black font-bold text-sm leading-snug mb-4">
                                        {event.title}
                                    </h3>

                                    {/* Link */}
                                    <a href="#" className="text-sm font-bold text-black flex items-center hover:underline mt-auto">
                                        Read More <ChevronRightIcon className="w-4 h-4 ml-1" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* --- Right Column: Notice Board --- */}
                    <div className="lg:pl-10 pb-12 mt-12 lg:mt-0 flex flex-col h-full justify-between">

                        <div>
                            {/* Header */}
                            <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-black mb-8">Notice Board</h2>

                            {/* Notice Content */}
                            {/* Added min-h to keep buttons aligned at bottom even if text is short */}
                            <div className="mb-8 h-[120px] transition-all duration-300">
                                <h3 className="text-sm font-bold text-black mb-4 animate-fadeIn">
                                    {notice.title}
                                </h3>
                                <p className="text-xs md:text-sm text-gray-800 leading-relaxed text-justify line-clamp-4">
                                    {notice.description}
                                </p>
                            </div>
                        </div>

                        {/* Navigation Arrows (Bottom) */}
                        <div className="flex gap-4 mt-auto">
                            <button 
                                onClick={prevNotice}
                                className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors active:scale-95"
                            >
                                <ChevronLeftIcon className="w-5 h-5" />
                            </button>
                            <button 
                                onClick={nextNotice}
                                className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors active:scale-95"
                            >
                                <ChevronRightIcon className="w-5 h-5" />
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}