import React from 'react'

export default function Navbar() {
    return (
        <header className="absolute top-0 z-50 w-full">
            {/* Top utility bar */}
            <div className="">
                <div className="bg-gray-300 w-fit p-6 py-2 flex justify-self-end gap-6 text-xs font-medium">
                    <a href="#">STAFF</a>
                    <a href="#">STUDENT HUB</a>
                    <a href="#">ALUMNI</a>
                </div>
            </div>

            {/* Main navbar */}
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <img src="https://portal.uovt.ac.lk/front-assets/images/logo/UoVT-icon.png" alt="UOVT Logo" className="h-20" />
                        <span className="text-md font-semibold leading-none">
                            UNIVERSITY OF<br />
                            <span className="text-2xl leading-none">VOCATIONAL <br/> TECHNOLOGY</span>
                        </span>
                    </div>

                    {/* Nav links */}
                    <nav className="hidden md:flex gap-8 text-lg font-medium">
                        <a href="#">About UOVT</a>
                        <a href="#">Academic</a>
                        <a href="#">Admissions</a>
                        <a href="#">University Life</a>
                        <a href="#">Research</a>
                        <a href="#">Events</a>
                    </nav>
                    <div className=""></div>
                </div>
            </div>
        </header>
    )
}
