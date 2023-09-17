import Head from 'next/head'
import React from 'react'

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
                    <div className='h-[10%] w-full  shadow-md border-t-2 border-gray-100'>

                    </div>
                </div>

            </div>
        </>
    )
}
