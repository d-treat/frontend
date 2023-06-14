import { services } from '@/data'
import Image from 'next/image'
import React from 'react'

const OurServices = () => {
  return (
    <div className='w-full flex flex-col items-center gap-10 pt-6 xl:px-24 lg:px-20 md:px-12 sm:px-8 px-4 '>
      <h3 className='text-secondary-100 text-3xl font-medium'>Our Medical Services</h3>
      <div className='w-full flex justify-between lg:gap-8 md:gap-6 gap-4'>
        {
          services.map((service, index) => (
            <div key={service.title} className='w-full'>
              <div className='w-full bg-gray-100 rounded rounded-tr-[2rem] p-6 '>
                <Image src={`/images/services/${index + 1}.png`} alt='service' width={200} height={120} />
              </div>
              <div>
                <h4 className='text-secondary-100 text-lg font-medium pt-4'>{service.title}</h4>
                <p className='text-secondary-100/80 pt-2 text-sm'>{service.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default OurServices