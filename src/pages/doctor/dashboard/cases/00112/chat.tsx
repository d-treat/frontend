import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { FiSearch, FiSend } from 'react-icons/fi'

export default function Chat() {
    return (
        <>
            <Head>
                <title>D-treat - Chat</title>
            </Head>
            <div className='w-full min-h-[92vh] flex '>
                {/* sidebar*/}
                <div className='w-1/4  pt-4 px-2 shadow-md border-r-2 border-gray-100  space-y-4 '>
                    {/* search  */}
                    <div className='relative w-full'>
                        <input className='absolute w-full outline-none pr-4 p-2 border-2 border-gray-100 hover:border-gray-400 rounded-md' placeholder='Search someone...' />
                        <FiSearch className='absolute w-5 h-5 right-2 top-3 text-gray-500' />
                    </div>
                    {/* contacts */}
                    <div className='space-y-2'>

                    </div>
                </div>
                {/* chat */}
                <div className='w-3/4  flex flex-col justify-between'>
                    {/* messages */}
                    <div className='h-[90%] w-full bg-gray-50'>

                    </div>

                    {/* message input */}
                    <div className='h-[10%] w-full  shadow-md border-t-2 border-gray-100 flex items-center justify-between px-3'>
                        <input className='bg-white w-3/4 border-2 border-gray-100 py-3 px-2 outline-none focus:border-gray-400 rounded-md ' placeholder='Type your message here ...' />
                        <div className='flex items-center gap-1'>
                            <button className='p-2 rounded hover:bg-gray-100'>
                                <Image src={"/icons/radioactive.svg"} alt='dicom' width={30} height={30} />
                            </button>
                            <button className='p-2 rounded hover:bg-gray-100'>
                                <Image src={"/icons/attachment.svg"} alt='dicom' width={30} height={30} />
                            </button>
                            <button className='p-2 bg-orangish-100 ml-2 rounded'>
                                <FiSend className='w-6 h-6 text-white ' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
