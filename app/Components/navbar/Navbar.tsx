import React from 'react'

export default function Navbar() {
  return (

    // <div>
    //   <ul>
    //     <li><a href="">About  UOVT</a></li>
    //     <li><a href="">Academic</a></li>
    //     <li><a href="">Admissions</a></li>
    //     <li><a href="">University Life</a></li>
    //     <li><a href="">Research</a></li>
    //     <li><a href="">Events</a></li>
    //   </ul>
    // </div>

    <header className="w-full border-b bg-white">
      {/* Top utility bar */}
      <div className="bg-neutral-100">
        <div className="mx-auto max-w-7xl px-4 py-2 flex justify-end gap-6 text-sm font-medium text-neutral-700">
          <a href="#" className="hover:text-black">STAFF</a>
          <a href="#" className="hover:text-black">STUDENT HUB</a>
          <a href="#" className="hover:text-black">ALUMNI</a>
        </div>
      </div>

      {/* Main navbar */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="https://portal.uovt.ac.lk/front-assets/images/logo/UoVT-icon.png"
              alt="UOVT Logo"
              className="h-12 w-auto"
            />
            <span className="text-sm font-semibold leading-tight">
              UNIVERSITY OF<br />
              <span className="text-lg">VOCATIONAL TECHNOLOGY</span>
            </span>
          </div>

          {/* Navigation links */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-neutral-700">
            <a href="#" className="hover:text-black">About UOVT</a>
            <a href="#" className="hover:text-black">Academic</a>
            <a href="#" className="hover:text-black">Admissions</a>
            <a href="#" className="hover:text-black">University Life</a>
            <a href="#" className="hover:text-black">Research</a>
            <a href="#" className="hover:text-black">Events</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
