'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/footer/footer';

export default function UnderDevPage() {

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
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navbar Wrapper */}
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

      {/* Main Content */}
      <main className="grow flex flex-col items-center justify-center px-4 pt-16 pb-16">
        <div className="max-w-2xl w-full text-center space-y-8 animate-fadeIn">

          {/* Icon Container */}
          <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 flex items-center justify-center rounded-full bg-blue-50 border-4 border-[#39428D]/20">
            {/* Construction Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16 md:w-20 md:h-20 text-[#39428D]"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l5.65 6.865" />
            </svg>
          </div>

          {/* Text Content */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A0D38] tracking-tight">
              Under Construction
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto leading-relaxed">
              We&apos;re currently working on this page to bring you a better experience. Please check back soon!
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <Link href="/">
              <button
                className="inline-block bg-[#FFE600] px-8 py-3.5 text-sm md:text-base font-extrabold text-black uppercase tracking-wider transition-all hover:-translate-y-1 active:translate-y-0"
                style={{ boxShadow: '6px 6px 0 #ffe60066' }}
              >
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </main>

    </div>
  );
}
