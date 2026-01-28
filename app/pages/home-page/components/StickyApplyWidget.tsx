'use client';

import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, ChevronUp, ChevronDown } from 'lucide-react';

const StickyApplyWidget = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(true);
    const [copySuccess, setCopySuccess] = useState('');

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopySuccess('Phone number copied!');
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            setCopySuccess('Phone number copied!');
        }
        setTimeout(() => setCopySuccess(''), 3000); // Clear message after 3 seconds
    };

    useEffect(() => {
        const handleScroll = () => {
            // "10 step scrolls" interpreted as roughly 1000px or 1.5 viewport heights
            const scrollThreshold = 800;

            if (window.scrollY > scrollThreshold) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <>
            {/* Toast Notification */}
            {copySuccess && (
                <div className="fixed cursor-pointer bg-gray-100 px-6 py-2 rounded-md bottom-4 right-1/2 shadow transform translate-x-1/2 z-500 text-green-600 font-medium transition-all duration-300 ease-in-out">
                    {copySuccess}
                </div>
            )}

            <div className="fixed bottom-0 right-4 md:right-8 z-50 flex flex-col items-end transition-all duration-500 ease-in-out">

            {/* Main Card Content */}
            <div
                className={`bg-white rounded-t-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 ease-in-out origin-bottom
                    ${isExpanded ? 'max-h-150 opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-10'}
                    `}
                style={{ width: '320px' }}
            >
                <div className="p-6 py-4 pb-6 flex flex-col items-center">
                    {/* Collapse Trigger Area (Inside card as per design) */}
                    <button
                        onClick={() => setIsExpanded(false)}
                        className="w-full pb-2 flex justify-center hover:bg-gray-50 transition-colors"
                        aria-label="Collapse"
                    >
                        <ChevronDown className="w-8 h-8 text-gray-400" />
                    </button>
                    <h3 className="text-2xl font-bold text-black mb-6 self-start">
                        Ready to apply ?
                    </h3>

                    {/* Undergraduate Button */}
                    <button className="w-full bg-[#FFE600] hover:bg-yellow-400 text-black font-bold py-3 px-4 rounded-lg mb-3 flex items-center justify-between transition-transform active:scale-95">
                        <span className="text-base">Undergraduate Program</span>
                        <ArrowRight className="w-5 h-5" />
                    </button>

                    {/* Short Courses Button */}
                    <button className="w-full bg-[#FFE600] hover:bg-yellow-400 text-black font-bold py-3 px-4 rounded-lg mb-6 flex items-center justify-between transition-transform active:scale-95">
                        <span className="text-base">Short courses</span>
                        <ArrowRight className="w-5 h-5" />
                    </button>

                    {/* Call Section */}
                    <div className="flex flex-col items-center w-full mb-2">
                        <span className="text-lg font-bold text-black self-start mb-1">Call now </span>
                        <button
                            onClick={() => copyToClipboard('0112123123')}
                            className="flex items-center gap-3 self-center hover:bg-gray-50 px-2 py-1 rounded transition-colors cursor-pointer"
                        >
                            <Phone className="w-6 h-6 fill-black text-black" />
                            <span className="text-3xl font-bold text-black tracking-wide">011 2 123 123</span>
                        </button>
                    </div>

                </div>


            </div>

            {/* Minimized Trigger (Visible when collapsed) */}
            <button
                onClick={() => setIsExpanded(true)}
                className={`absolute bottom-0 right-0 bg-[#FFE600] text-black font-bold py-3 px-6 rounded-t-xl shadow-lg flex items-center gap-2 transition-all duration-300
          ${isExpanded ? 'translate-y-20 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}
        `}
            >
                <span>Apply Now</span>
                <ChevronUp className="w-5 h-5" />
            </button>

        </div>
        </>
    );
};

export default StickyApplyWidget;