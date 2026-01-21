import React from 'react';

export default function UniversityLifeSection() {
    return (
        <section className="flex justify-center bg-white py-20">
            <div className="w-9/12">

                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold mb-4">University Life</h2>
                    <p className="mx-auto max-w-3xl text-sm text-gray-600">
                        We offer a multi-range degree program across four main departments:
                        Science, Arts, Mathematics, and Information Studies. Our courses
                        provide wide-ranging knowledge and practical skills, helping students
                        grow academically, think creatively, and achieve their best potential.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-3 grid-rows-3 gap-0">

                    {/* Social Works */}
                    <div className="relative col-span-1 row-span-1 overflow-hidden">
                        <img
                            src="https://www.ucd.ie/law/t4media/JMK%202024%207.jpg"
                            alt="Social Works"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-yellow-600/60 flex items-center justify-center">
                            <h3 className="text-4xl font-bold text-white">Social Works</h3>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="col-span-1 row-span-1 bg-lime-200 p-6 text-xs leading-relaxed">
                        Life at the University of Vocational Technology Rathmalana is vibrant
                        and engaging, offering students more than academic learning. With
                        modern classrooms, well-equipped labs, and dedicated faculty, the
                        campus provides an environment where students develop both practical
                        skills and theoretical knowledge.
                    </div>

                    {/* Sports */}
                    <div className="relative col-span-1 row-span-1 overflow-hidden">
                        <img
                            src="https://tse1.mm.bing.net/th/id/OIP.0mVTHfgBJuGo3KDT-2SUFwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
                            alt="Sport"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-red-600/70 flex items-center justify-center">
                            <h3 className="text-3xl font-bold text-white">Sport</h3>
                        </div>
                    </div>

                    {/* Hashtag */}
                    <div className="flex items-center justify-center bg-gray-200 font-bold text-3xl">
                        #UOVT
                    </div>

                    {/* Club */}
                    <div className="relative overflow-hidden">
                        <img
                            src="https://tse2.mm.bing.net/th/id/OIP.2AHsXZumx0Cx9ZSbju-2rgHaD4?rs=1&pid=ImgDetMain&o=7&rm=3"
                            alt="Club"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-pink-600/70 flex items-center justify-center">
                            <h3 className="text-3xl font-bold text-white">Club</h3>
                        </div>
                    </div>

                    {/* Music */}
                    <div className="relative overflow-hidden">
                        <img
                            src="https://ac3filter.b-cdn.net/wp-content/uploads/772700.jpg"
                            alt="Music"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-teal-600/70 flex items-center justify-center">
                            <h3 className="text-3xl font-bold text-white">Music</h3>
                        </div>
                    </div>

                    {/* Traveling */}
                    <div className="relative overflow-hidden">
                        <img
                            src="https://media.cntraveler.com/photos/59cd14cb9465da68882fb4f4/master/pass/Debate_GettyImages-585587819.jpg"
                            alt="Traveling"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-green-600/70 flex items-center justify-center">
                            <h3 className="text-3xl font-bold text-white">Traveling</h3>
                        </div>
                    </div>

                    {/* Art */}
                    <div className="relative overflow-hidden">
                        <img
                            src="https://mymodernmet.com/wp/wp-content/uploads/2019/03/elements-of-art-thumbnail-1.jpg"
                            alt="Art"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-cyan-700/70 flex items-center justify-center">
                            <h3 className="text-3xl font-bold text-white">Art</h3>
                        </div>
                    </div>

                    {/* Bottom Text */}
                    <div className="bg-cyan-100 p-6 text-xs leading-relaxed">
                        Beyond academics, students enjoy a range of extracurricular
                        activities, clubs, and events that promote teamwork, leadership,
                        and personal growth. The campus fosters a strong sense of community,
                        encouraging students to build lasting friendships while becoming
                        skilled, ethical, and socially responsible professionals.
                    </div>

                </div>
            </div>
        </section>
    );
}
