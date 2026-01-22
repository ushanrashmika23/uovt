import Footer from '@/app/Components/footer/footer'
import React from 'react'
// import Navbar from '../Components/navbar/Navbar'

export default function layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            {/* <div className=""><Navbar /></div> */}
            <div className="">{children}</div>
            <div className=""><Footer /></div>
        </div>
    )
}
