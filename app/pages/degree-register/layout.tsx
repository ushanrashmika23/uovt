import React from 'react'
import Navbar from '../Components/navbar/Navbar'

export default function layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <div className=""><Navbar /></div>
            <div className="">{children}</div>
        </div>
    )
}
