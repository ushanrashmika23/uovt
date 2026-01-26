import React, { useRef, useState, useEffect } from 'react';
import { ChevronRightIcon } from './Icons';

interface CardData {
    title: string;
    description: string;
    img: string;
}

const cards: CardData[] = [
    {
        title: "Scholarship",
        description: "A Five-Year Work And Study Programme With Corporate Partners Where You Earn From Day One. Graduate With A Degree And Five Years Of Experience, Giving You A Valuable Head Start In Your Career.",
        img: "https://images.stockcake.com/public/d/6/d/d6dbe0f8-61e7-4a55-92a6-e096bfee237a_large/grand-award-ceremony-stockcake.jpg"
    },
    {
        title: "Dean List",
        description: "A Five-Year Work And Study Programme With Corporate Partners Where You Earn From Day One. Graduate With A Degree And Five Years Of Experience, Giving You A Valuable Head Start In Your Career.",
        img: "https://images.stockcake.com/public/d/6/d/d6dbe0f8-61e7-4a55-92a6-e096bfee237a_large/grand-award-ceremony-stockcake.jpg"
    },
    {
        title: "Bursary",
        description: "A Five-Year Work And Study Programme With Corporate Partners Where You Earn From Day One. Graduate With A Degree And Five Years Of Experience, Giving You A Valuable Head Start In Your Career.",
        img: "https://images.stockcake.com/public/d/6/d/d6dbe0f8-61e7-4a55-92a6-e096bfee237a_large/grand-award-ceremony-stockcake.jpg"
    },
    {
        title: "Grant",
        description: "A Five-Year Work And Study Programme With Corporate Partners Where You Earn From Day One. Graduate With A Degree And Five Years Of Experience, Giving You A Valuable Head Start In Your Career.",
        img: "https://images.stockcake.com/public/d/6/d/d6dbe0f8-61e7-4a55-92a6-e096bfee237a_large/grand-award-ceremony-stockcake.jpg"
    }
];

export default function InclusivitySection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [itemsPerScreen, setItemsPerScreen] = useState(1);

    // Calculate layout parameters
    const updateLayout = () => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const firstCard = container.firstElementChild as HTMLElement;
            
            if (firstCard) {
                let itemWidth = firstCard.offsetWidth;
                // Calculate item width including gap
                if (container.children.length > 1) {
                    const secondCard = container.children[1] as HTMLElement;
                    itemWidth = secondCard.offsetLeft - firstCard.offsetLeft;
                } else {
                    itemWidth += 32; // Fallback gap
                }

                const containerWidth = container.offsetWidth;
                // Avoid division by zero
                if (itemWidth > 0) {
                    const visibleItems = Math.max(1, Math.round(containerWidth / itemWidth));
                    setItemsPerScreen(visibleItems);
                    setPageCount(Math.ceil(cards.length / visibleItems));
                }
            }
        }
    };

    useEffect(() => {
        updateLayout();
        window.addEventListener('resize', updateLayout);
        return () => window.removeEventListener('resize', updateLayout);
    }, []);

    // Update active dot based on scroll position
    const handleScroll = () => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const firstCard = container.firstElementChild as HTMLElement;
            
            if (firstCard) {
                let itemWidth = firstCard.offsetWidth;
                if (container.children.length > 1) {
                    const secondCard = container.children[1] as HTMLElement;
                    itemWidth = secondCard.offsetLeft - firstCard.offsetLeft;
                } else {
                    itemWidth += 32;
                }

                if (itemWidth > 0) {
                    // Update to track page index instead of card index
                    const scrollIndex = Math.round(container.scrollLeft / itemWidth);
                    // Calculate which page this item belongs to
                    // If we have 2 items per screen: item 0 -> page 0, item 1 -> page 0, item 2 -> page 1
                    const pageIndex = Math.floor(scrollIndex / itemsPerScreen);
                    setActiveIndex(pageIndex);
                }
            }
        }
    };

    // Scroll to specific page
    const scrollToPage = (pageIndex: number) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const firstCard = container.firstElementChild as HTMLElement;

            if (firstCard) {
                let itemWidth = firstCard.offsetWidth;
                if (container.children.length > 1) {
                    const secondCard = container.children[1] as HTMLElement;
                    itemWidth = secondCard.offsetLeft - firstCard.offsetLeft;
                } else {
                    itemWidth += 32;
                }
                
                // Scroll to the first item of the target page
                const targetCardIndex = pageIndex * itemsPerScreen;
                
                container.scrollTo({
                    left: itemWidth * targetCardIndex,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <section className="w-full py-16 bg-white">
            <div className="w-11/12 md:w-9/12 mx-auto">
                
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight text-black max-w-4xl">
                        We are measured not by whom we exclude, but by{' '}
                        <span className="bg-[#EFFF00] px-1">whom we include</span>{' '}
                        and{' '}
                        <span className="bg-[#EFFF00] px-1">how they succeed</span>
                    </h2>
                </div>

                {/* Slider Container */}
                <div className="relative group">
                    <div 
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-8 pb-8"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {cards.map((card, index) => (
                            <div 
                                key={index} 
                                className="min-w-full sm:min-w-[calc(50%-16px)] md:min-w-[calc(33.333%-21.333px)] lg:min-w-[calc(25%-24px)] snap-start flex flex-col"
                            >
                                <img src={card.img} alt={card.title} className="w-full h-auto mb-4" />
                                <h3 className="text-xl font-bold text-center text-black mb-4">{card.title}</h3>
                                <p className="text-sm text-gray-800 text-justify leading-relaxed mb-4">{card.description}</p>
                                <a href="#" className="inline-flex items-center text-sm font-bold text-black hover:underline mt-auto">
                                    Read More <ChevronRightIcon className="w-4 h-4 ml-1" />
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Dots - Visible when scrolling is possible */}
                    <div className={`flex justify-center gap-2 mt-4 ${pageCount <= 1 ? 'hidden' : ''}`}>
                        {Array.from({ length: pageCount }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToPage(index)}
                                className={`h-2 transition-all duration-300 rounded-full ${
                                    activeIndex === index ? 'w-8 bg-black' : 'w-2 bg-gray-300'
                                }`}
                                aria-label={`Go to page ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

            </div>
            
            {/* Global style to hide scrollbar for Chromium browsers */}
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}