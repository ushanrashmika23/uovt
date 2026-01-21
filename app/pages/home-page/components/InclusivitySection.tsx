import React from 'react';
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
        title: "Bursary",
        description: "A Five-Year Work And Study Programme With Corporate Partners Where You Earn From Day One. Graduate With A Degree And Five Years Of Experience, Giving You A Valuable Head Start In Your Career.",
        img: "https://images.stockcake.com/public/d/6/d/d6dbe0f8-61e7-4a55-92a6-e096bfee237a_large/grand-award-ceremony-stockcake.jpg"
    }
];

export default function InclusivitySection() {
    return (
        <section className="w-full py-16 bg-white">
            {/* Container: w-9/12 */}
            <div className="w-9/12 mx-auto">

                {/* Header with Yellow Highlights */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight text-black max-w-4xl">
                        We are measured not by whom we exclude, but by{' '}
                        <span className="bg-[#EFFF00] px-1">whom we include</span>{' '}
                        and{' '}
                        <span className="bg-[#EFFF00] px-1">how they succeed</span>
                    </h2>
                </div>

                {/* 4-Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {cards.map((card, index) => (
                        <div key={index} className="flex flex-col">

                            {/* Image */}
                            <img src={card.img} alt={card.title} />

                            {/* Content */}
                            <h3 className="text-xl font-bold text-center text-black mb-4">
                                {card.title}
                            </h3>

                            <p className="text-xs md:text-[13px] text-gray-800 text-justify leading-relaxed mb-4">
                                {card.description}
                            </p>

                            {/* Read More Link */}
                            <a
                                href="#"
                                className="inline-flex items-center text-sm font-bold text-black hover:underline mt-auto"
                            >
                                Read More
                                <ChevronRightIcon className="w-4 h-4 ml-1" />
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
