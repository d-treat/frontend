import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { ILink } from '../layouts/DashboardLayout';
import { useRouter } from 'next/router';

const SidebarLink = ({ title, Icon, href }: ILink) => {

    const router = useRouter();

    return (
        <Link href={href}>
            <div className={`flex items-center gap-3 rounded-md  transition-all duration-200  p-2  ${router.pathname === href ? "text-white bg-primary-100 hover:text-primary-100" : "text-secondary-100 hover:bg-[#F5F5F7]"}`}>
                {typeof Icon === "string" ? <Image src={'/icons/' + Icon} alt='' width={25} height={25} /> : <Icon />}
                <p>{title}</p>
            </div>
        </Link>
    )
}

export default SidebarLink