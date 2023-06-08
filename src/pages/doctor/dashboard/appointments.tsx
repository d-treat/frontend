import Calendar from '@/components/calendar'
import ProfileSidebar from '@/components/profileSidebar'
import Head from 'next/head'
import React from 'react'

const DoctorsAppointments = () => {
    return (
        <>
            <Head>
                <title>D Treat | Your appointments</title>
            </Head>
            <main className='flex'>
                <Calendar/>
                {/* <ProfileSidebar/> */}
            </main>
        </>
    )
}

export default DoctorsAppointments