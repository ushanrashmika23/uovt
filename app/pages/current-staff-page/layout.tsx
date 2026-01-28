import React from 'react'
import Footer from '../../Components/footer/footer'

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <div className="">{children}</div>
            <div className=""><Footer/></div>
        </div>
    )
}
