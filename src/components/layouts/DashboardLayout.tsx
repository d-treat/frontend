import Image from 'next/image';
import React from 'react';
import { AiOutlineQuestionCircle,AiOutlineBell } from 'react-icons/ai';
import { FaBell, FaSearch } from 'react-icons/fa';
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
    { title: 'Overview', icon: 'menu.svg', href: '/admin/dashboard' },
    { title: 'Doctors', icon: 'user-octagon.svg', href: '/admin/dashboard/doctors' },
    { title: "Cases", icon: 'data.svg', href: '/admin/dashboard/cases' },
    { title: "settings", icon: 'setting-2.svg', href: '/admin/dashboard/settings' },
]

const DashboardLayout = ({ children }: Props) => {
    return (
        <div className='w-full h-screen flex '>
            {/* sidebar */}
            <div className='w-[20vw] h-full p-4 space-y-10 border-r-2 border-grayish-100'>
                <Logo showText />
                <div className='flex flex-col gap-5'>
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
                        <AiOutlineBell className='text-gray-400 text-2xl' />
                        <AiOutlineQuestionCircle className='text-gray-400 text-2xl' />
                        <Image src='https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80' alt='' width={40} height={40} className='rounded-full bg-gray-200' />
                    </div>
                </div>

                {/* page content */}
                <div className='w-full h-[90vh] bg-red-50'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout