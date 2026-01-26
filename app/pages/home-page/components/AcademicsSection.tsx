import React from 'react';
import Image from 'next/image';

export default function AcademicsSection() {
    return (
        <section className="w-full py-16 bg-white">
            {/* Container: w-9/12 and centered */}
            <div className="w-9/12 mx-auto">

                {/* Header Section */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">Academics</h2>
                    <p className="text-gray-600 max-w-4xl mx-auto text-sm md:text-base leading-relaxed font-medium">
                        We offer a multi-range degree program across four main departments: Science, Arts, Mathematics, and Information Studies. Our courses
                        provide wide-ranging knowledge and practical skills, helping students grow academically, think creatively, and achieve their best potential.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[500px]">

                    {/* Column 1: Engineering Technology */}
                    <div className="relative w-full h-80 md:h-full group overflow-hidden">
                        <Image
                            src="https://tse1.mm.bing.net/th/id/OIP.jg0378XfBD10jF4Uhw2_JwHaHs?rs=1&pid=ImgDetMain&o=7&rm=3"
                            alt="Engineering Technology"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-[#56B89D] py-3">
                            <p className="text-white text-center font-semibold text-lg">Engineering Technology</p>
                        </div>
                    </div>

                    {/* Column 2: Split Column (IT & Prof Dev) */}
                    <div className="flex flex-col gap-4 h-full">

                        {/* Top Half: Information Technology */}
                        <div className="relative w-full h-64 md:h-1/2 overflow-hidden">
                            <Image
                                src="https://tse2.mm.bing.net/th/id/OIP.QecX8vYS9OyvIZrFLJi2MAHaEg?rs=1&pid=ImgDetMain&o=7&rm=3"
                                alt="Information Technology"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-[#A30000] py-3">
                                <p className="text-white text-center font-semibold text-lg">Information Technology</p>
                            </div>
                        </div>

                        {/* Bottom Half: Professional Development */}
                        <div className="relative w-full h-64 md:h-1/2 overflow-hidden">
                            <Image
                                src="https://tse4.mm.bing.net/th/id/OIP.WsyrM-pKnryf-mj_exzv5wHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
                                alt="Professional Development"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-[#962A86] py-3">
                                <p className="text-white text-center font-semibold text-lg">Professional Development</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Education */}
                    <div className="relative w-full h-80 md:h-full overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
                            alt="Education"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-[#967935] py-3">
                            <p className="text-white text-center font-semibold text-lg">Education</p>
                        </div>
                    </div>

                    {/* Column 4: Industrial Technology */}
                    <div className="relative w-full h-80 md:h-full overflow-hidden">
                        <Image
                            src="https://www.globaltimes.cn/Portals/0/attachment/2024/2024-01-04/e21b951d-b0e8-4375-a504-392771d1e658.jpeg"
                            alt="Industrial Technology"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-[#3B55D9] py-3">
                            <p className="text-white text-center font-semibold text-lg">Industrial Technology</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
