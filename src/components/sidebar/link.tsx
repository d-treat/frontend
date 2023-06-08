import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { ILink } from '../layouts/AdminDashboardLayout';

const SidebarLink = ({ title, icon, href }: ILink) => {
    return (
        <Link href={href}>
            <div className='flex items-center gap-3 rounded-md text-secondary-100 transition-all duration-200 hover:text-primary-100 p-2 hover:bg-[#F5F5F7]'>
                <Image src={'/icons/' + icon} alt='' width={25} height={25} />
                <p>{title}</p>
            </div>
        </Link>
    )
}

export default SidebarLink