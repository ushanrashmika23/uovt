import React from 'react';

export default function UniversityLifeSection() {
    return (
        <section className="flex justify-center bg-white py-20">
            <div className="w-11/12 lg:w-9/12">

                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">University Life</h2>
                    <p className="mx-auto max-w-3xl text-sm md:text-base text-gray-600">
                        A multi-range degree program across Science, Arts, Mathematics, and Information Studies.
                    </p>
                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-100">

                    {/* 1. Social Works: HERO Image on Mobile (Full Width), Square on Desktop */}
                    <div className="col-span-2 lg:col-span-1 relative aspect-[2/1] lg:aspect-square overflow-hidden group cursor-pointer">
                        <img
                            src="https://www.ucd.ie/law/t4media/JMK%202024%207.jpg"
                            alt="Social Works"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-yellow-600/60 transition-colors duration-300 group-hover:bg-yellow-600/40 flex items-center justify-center">
                            <h3 className="text-3xl lg:text-4xl font-bold text-white text-center">Social Works</h3>
                        </div>
                    </div>

                    {/* 2. Text 1: Full Width Bar on Mobile, Square on Desktop */}
                    <div className="col-span-2 lg:col-span-1 flex flex-col justify-center bg-lime-200 p-8 lg:aspect-square transition-all duration-300 hover:bg-lime-300 cursor-default">
                        <p className="text-md leading-relaxed">
                            Life at the University of Vocational Technology Rathmalana is vibrant
                            and engaging, offering students more than academic learning with
                            modern classrooms and well-equipped labs.
                        </p>
                    </div>

                    {/* 3. Sport: Standard Square */}
                    <div className="col-span-1 relative aspect-square overflow-hidden group cursor-pointer">
                        <img
                            src="https://tse1.mm.bing.net/th/id/OIP.0mVTHfgBJuGo3KDT-2SUFwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
                            alt="Sport"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-red-600/70 transition-colors duration-300 group-hover:bg-red-600/50 flex items-center justify-center">
                            <h3 className="text-xl md:text-3xl font-bold text-white">Sport</h3>
                        </div>
                    </div>

                    {/* 4. Hashtag: Standard Square */}
                    <div className="col-span-1 flex items-center justify-center bg-gray-200 font-bold text-3xl md:text-4xl aspect-square transition-all duration-300 hover:bg-gray-300 cursor-default">
                        #UoVT
                    </div>

                    {/* 5. Club: Wide Feature Image on Mobile (to break rhythm) */}
                    <div className="col-span-2 lg:col-span-1 relative aspect-[2/1] lg:aspect-square overflow-hidden group cursor-pointer">
                        <img
                            src="https://tse2.mm.bing.net/th/id/OIP.2AHsXZumx0Cx9ZSbju-2rgHaD4?rs=1&pid=ImgDetMain&o=7&rm=3"
                            alt="Club"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-pink-600/70 transition-colors duration-300 group-hover:bg-pink-600/50 flex items-center justify-center">
                            <h3 className="text-3xl font-bold text-white">Club</h3>
                        </div>
                    </div>

                    {/* 6. Music: Standard Square */}
                    <div className="col-span-1 relative aspect-square overflow-hidden group cursor-pointer">
                        <img
                            src="https://ac3filter.b-cdn.net/wp-content/uploads/772700.jpg"
                            alt="Music"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-teal-600/70 transition-colors duration-300 group-hover:bg-teal-600/50 flex items-center justify-center">
                            <h3 className="text-xl md:text-3xl font-bold text-white">Music</h3>
                        </div>
                    </div>

                    {/* 7. Traveling: Standard Square */}
                    <div className="col-span-1 relative aspect-square overflow-hidden group cursor-pointer">
                        <img
                            src="https://media.cntraveler.com/photos/59cd14cb9465da68882fb4f4/master/pass/Debate_GettyImages-585587819.jpg"
                            alt="Traveling"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-green-600/70 transition-colors duration-300 group-hover:bg-green-600/50 flex items-center justify-center">
                            <h3 className="text-xl md:text-3xl font-bold text-white">Traveling</h3>
                        </div>
                    </div>

                    {/* 8. Art: Wide Feature Image on Mobile */}
                    <div className="col-span-2 lg:col-span-1 relative aspect-[2/1] lg:aspect-square overflow-hidden group cursor-pointer">
                        <img
                            src="https://mymodernmet.com/wp/wp-content/uploads/2019/03/elements-of-art-thumbnail-1.jpg"
                            alt="Art"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-cyan-700/70 transition-colors duration-300 group-hover:bg-cyan-700/50 flex items-center justify-center">
                            <h3 className="text-3xl font-bold text-white">Art</h3>
                        </div>
                    </div>

                    {/* 9. Text 2: Full Width Footer on Mobile */}
                    <div className="col-span-2 lg:col-span-1 flex flex-col justify-center bg-cyan-100 p-8 lg:aspect-square transition-all duration-300 hover:bg-cyan-200 cursor-default">
                        <p className="text-md leading-relaxed">
                            Beyond academics, students enjoy activities that promote teamwork and leadership,
                            fostering a strong sense of community and lasting friendships.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}