import React from 'react';

export default function WelcomeSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white my-8 h-200 md:h-175 lg:h-150">
            <div className="relative max-w-full px-0 py-20">
                {/* Red background rectangle and yellow shape */}
                <div className="absolute left-0 top-0 h-[95%] w-[50%] bg-[#D93337] z-0" />
                <div
                    className="absolute right-0 top-0 h-full w-[75%] bg-[#FFDD00] z-0"
                    style={{
                        clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 50%)"
                    }}
                />
                {/* Content */}
                <div className="relative z-10 flex justify-between items-center gap-12 max-w-9/12 mx-auto flex-col md:flex-row">

                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src="https://uovt.ac.lk/wp-content/uploads/2016/06/1231.jpg"
                            alt="UOVT"
                            width={600}
                            className="max-w-full"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-1/2 text-black">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            Welcome To The UOVT
                        </h1>

                        <p className="text-base lg:text-xl leading-relaxed font-normal text-justify text-gray-900 mb-8">
                            The University of Vocational Technology (UOVT), Rathmalana,
                            is a leading state university in Sri Lanka dedicated to
                            vocational and technological education. We nurture humanity
                            alongside technical talent, developing skilled, ethical,
                            and socially responsible professionals.
                        </p>

                        <button className="group inline-flex items-center text-lg font-bold">
                            Read More
                            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
