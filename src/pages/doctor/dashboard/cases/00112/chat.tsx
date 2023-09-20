import Head from 'next/head'
import Image from 'next/legacy/image'
import React from 'react'
import { FiSearch, FiSend } from 'react-icons/fi'

export default function Chat() {
    return (
        <>
            <Head>
                <title>D-treat - Chat</title>
            </Head>
            <div className='w-full h-screen flex relative '> 
                <Image src={'/chat.png'} layout='fill' alt=''/>
            </div>
        </>
    )
}
