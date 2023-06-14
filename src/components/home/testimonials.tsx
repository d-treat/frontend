import Image from 'next/image'
import React from 'react'

const testimonial = {
  img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60',
  name: 'Logan Paul',
  content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis error optio dolor est doloremque, quas alias iste? Ut nam consequatur libero voluptate eum voluptatum ratione animi sint nesciunt, exercitationem aperiam."
}

export const Testimonials = () => {
  return (
    <div className='w-full pt-36 pb-24 bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center gap-12 primary-padding'
      style={{
        background: "url('/images/testimonials-bg.svg')"
      }}
    >
      <div className='flex flex-col items-center gap-2'>
        <h4 className='text-4xl font-medium text-secondary-100 capitalize '>What our users say about us</h4>
        <p className='text-secondary-100/75 max-w-md text-center'>Let our clients and patients give you their opinions and experience
          about using our platform</p>
      </div>
      <div className='flex gap-6 '>
        {
          new Array(2).fill(testimonial).map((tst, index) => (
            <div key={index} className='bg-white rounded-md rounded-tr-[1.8rem] flex items-center flex-col gap-3 p-6 max-w-md'>
              <Image src={tst.img} alt='person' width={80} height={100} className='rounded-full'/>
              <h3 className='text-secondary-100 text-2xl'>{tst.name}</h3>
              <p className='text-secondary-100/75 text-center'>&quot;{tst.content}&quot;</p>

            </div>
          ))
        }
      </div>
    </div>
  )
}
