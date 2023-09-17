import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { FiSend } from 'react-icons/fi'

export default function Chat() {
    return (
        <>
            <Head>
                <title>D-treat - Chat</title>
            </Head>
            <div className='w-full min-h-[92vh] flex '>
                {/* contacts  & channels*/}
                <div className='w-1/4 shadow-md border-r-2 border-gray-100  '>

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
