import React from 'react'
import Logo from '../common/logo'
import { links } from '@/data'
import Link from 'next/link'
import Button from '../common/button'

const HomeNav = () => {
    return (
        <div className='w-full flex justify-between items-center py-4 xl:px-24 lg:px-20 md:px-12 sm:px-8 px-4'>
            <Logo showText />
            <div className='flex lg:gap-20 md:gap-16 sm:gap-12 items-center'>
                <div className='flex items-center gap-5 '>
                    {
                        links.map((link) => (
                            <Link href={link.href} key={link.label}>
                                <p className='text-secondary-100 hover:text-primary-100'>{link.label}</p>
                            </Link>
                        ))
                    }
                </div>

                <div className='flex gap-3 items-center '>
                    <Link href='/login'>
                        <p>Login</p>
                    </Link>
                    <Link href='/request-partnership'>
                        <Button className='px-4'>
                            Request Partnership
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default HomeNav