import React from 'react';
import { PhoneIcon, MapPinIcon, MailIcon } from './Icons';

export default function ContactInfoBar() {
    return (
        <div className="w-9/12 mx-auto -mt-28 -mb-8 relative z-20">
            <div className="bg-[#3B4685] rounded-xl text-white py-8 px-4 shadow-lg flex flex-col md:flex-row justify-around items-center gap-8 md:gap-0">

                {/* Phone */}
                <div className="flex flex-col items-center gap-2 md:border-r border-white/20 w-full">
                    <PhoneIcon className="w-6 h-6" />
                    <span className="font-bold text-lg tracking-wide">+94 11 2 630 700</span>
                </div>

                {/* Address */}
                <div className="flex flex-col items-center text-center gap-2 md:border-r border-white/20 w-full px-4">
                    <MapPinIcon className="w-6 h-6" />
                    <span className="font-bold text-sm md:text-base">
                        100, Kandawala Road,<br /> Rathmalana, Sri Lanka.
                    </span>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center gap-2 w-full">
                    <MailIcon className="w-6 h-6" />
                    <span className="font-bold text-lg tracking-wide">uovt@uovt.ac.lk</span>
                </div>

            </div>
        </div>
    );
}
