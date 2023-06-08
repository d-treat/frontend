import React from 'react';
import { AiOutlineBell, AiOutlineQuestionCircle } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { FiLogOut } from "react-icons/fi";
import Logo from '../common/logo';
import SidebarLink from '../sidebar/link';

export interface ILink {
    icon: string;
    title: string;
    href: string;
}

interface Props {
    children: React.ReactNode
}

const links: ILink[] = [
    { title: 'Overview', icon: 'menu.svg', href: '/doctor/dashboard' },
    { title: 'Doctors', icon: 'user-octagon.svg', href: '/doctor/dashboard/doctors' },
    { title: "Cases", icon: 'data.svg', href: '/doctor/dashboard/cases' },
    { title: 'Appointments', icon: 'book.svg', href: '/doctor/dashboard/appointments' },
    { title: "settings", icon: 'setting-2.svg', href: '/doctor/dashboard/settings' },
]

const DoctorDashboardLayout = ({ children }: Props) => {
    return (
        <div className='w-full h-screen flex '>
            {/* sidebar */}
            <div className='w-[20vw] h-full p-4 space-y-10 border-r-2 border-grayish-100'>
                <Logo showText />
                <div className='flex flex-col gap-5 px-4'>
                    {
                        links.map((link, index) => (
                            <SidebarLink {...link} key={link.title} />
                        ))
                    }
                </div>
            </div>
            <div className='w-[80vw] z-10 h-screen px-6'>
                {/* navbar */}
                <div className='w-full h-[10vh] flex items-center justify-between'>
                    <div className='min-w-[25vw] border border-grayish-100 rounded-lg  flex items-center group group-focus:border-primary-100 '>
                        <input type="text" placeholder='Search' className='w-full h-full px-4 py-3 outline-none ' />
                        <div className='p-2'>
                            <FaSearch className='text-gray-500 text-base' />
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div role='button' className='py-1 px-2 rounded-md border hover:border-primary-100 text-gray-500 hover:text-primary-100 '>
                            <AiOutlineBell className=' text-2xl' />
                        </div>
                        <div role='button' className='py-1 px-2 rounded-md border hover:border-primary-100 text-gray-500 hover:text-primary-100 '>
                            <AiOutlineQuestionCircle className=' text-2xl' />
                        </div>
                        <div role='button' className='py-1 px-2 rounded-md border text-gray-500 hover:text-red-400 hover:border-red-400 '>
                            <FiLogOut className=' text-2xl' />
                        </div>

                    </div>
                </div>

                {/* page content */}
                <div className='w-full h-[90vh]'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DoctorDashboardLayout