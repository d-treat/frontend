import useAuth from '@/hooks/useAuth';
import Button from '../common/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { AiOutlineBell, AiOutlineQuestionCircle } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
import Logo from '../common/logo';
import SidebarLink from '../sidebar/link';
import { useRouter } from 'next/router';


export interface ILink {
    icon: string | IconType;
    title: string;
    href: string;
}

interface IProps {
    children: React.ReactNode
}
const adminLinks: ILink[] = [
    { title: 'Overview', icon: 'menu.svg', href: '/admin/dashboard' },
    { title: 'Doctors', icon: 'user-octagon.svg', href: '/admin/dashboard/doctors' },
    { title: "Cases", icon: 'data.svg', href: '/admin/dashboard/cases' },
    { title: "Files", icon: "data.svg", href: "/admin/dashboard/files" },
    { title: "settings", icon: 'setting-2.svg', href: '/admin/dashboard/settings' },
]

const 

export default function DashboardLayout({ children }: IProps) {
    const { user } = useAuth();
    const router = useRouter();

    return (
        <div className='w-full h-screen flex '>
            {/* sidebar */}
            <div className='w-[20vw] lg:w-[15vw]  h-screen fixed top-0 left-0 p-4 space-y-10 border-r-2 border-grayish-100'>
                <Logo showText />
                <div className='flex flex-col gap-5 px-4'>
                    {
                        links.map((link, index) => (
                            <SidebarLink {...link} key={link.title} />
                        ))
                    }
                </div>
            </div>
            <div className='w-[80vw] lg:w-[85%] ml-[20vw] lg:ml-[15%] z-10 h-screen px-6 lg:px-10'>
                {/* navbar */}


                {/* page content */}
                <div className='w-full mt-[10vh]'>
                    {children}
                </div>
            </div>
        </div >
    )
}


const DoctorNavbar = () => {
    return (
        <div className='  ml-[20vw] lg:ml-[15%]  w-[80vw] lg:w-[85%] h-[8vh] p-8 shadow-md z-50 bg-white fixed top-0 left-0 flex items-center justify-between'>
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
    )
}

const AdminNavbar = () => {
    return (
        <div className='  ml-[20vw] lg:ml-[15%]  w-[80vw] lg:w-[85%] h-[8vh] p-8 shadow-md z-50 bg-white fixed top-0 left-0 flex items-center justify-between'>
            <div className='min-w-[25vw] border border-grayish-100 rounded-lg  flex items-center group group-focus:border-primary-100  shadow'>
                <input type="text" placeholder='Search' className='w-full h-full px-4 py-3 outline-none ' />
                <div className='p-2'>
                    <FaSearch className='text-gray-500 text-base' />
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <AiOutlineBell className='text-gray-400 text-2xl' />
                <AiOutlineQuestionCircle className='text-gray-400 text-2xl' />
                <Image src='https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80' alt='' width={40} height={40} className='rounded-full bg-gray-200' />
                <Link href={'/login'}>
                    <Button dark className='flex items-center gap-2 px-4'>
                        <span>logout</span>
                    </Button>
                </Link>
            </div>
        </div>
    )
}