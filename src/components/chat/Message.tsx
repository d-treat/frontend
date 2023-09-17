import { IMessage } from '@/types'
import Image from 'next/image'
import React from 'react'

export default function Message({ yours, text, sentAt, image, dm, sentBy }: IMessage) {
    return (
        <div className={`flex flex-col gap-y-1 ${yours && "self-end"}`}>
            <div className={`${yours ? "bg-secondary-100   text-white " : "bg-white text-gray-600 "} rounded-xl rounded-tr-none p-2 space-y-1`}>
                {(!dm && !yours) && <p className='text-xs text-primary-100'>{sentBy}</p>}
                {image && <Image src={image} alt='image' width={300} height={300} />}
                <p>{text} </p>
            </div>
            <p className={`text-sm text-gray-400 ${yours && "self-end"}`}>{sentAt}</p>
        </div>
    )
}
