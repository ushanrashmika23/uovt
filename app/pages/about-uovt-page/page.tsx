import React from 'react'
import { redirect } from 'next/navigation';

export default function page() {
    redirect('/pages/under-dev');
    return (
        <div>Degree Register</div>
    )
}
