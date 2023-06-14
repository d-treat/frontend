import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
import Button from '../common/button'
import { stats } from '@/data'

const Hero = () => {
    return (
        <div className='xl:px-24 lg:px-20 md:px-12 sm:px-8 px-4 flex justify-between'>
            <div className='flex flex-col gap-3'>
                <h2 className='text-4xl font-medium text-secondary-100 max-w-2xl'>A Digital and Modern Approach to Healthcare</h2>
                <p className='opacity-70 max-w-md  pb-10'>Medical services made easy and accessible
                    anywhere! Learn more about the best solution
                    for modern and digital healthcare.</p>

                <Button dark className='w-fit px-6 space-x-3 group'>
                    <span>Get Started</span>
                    <FaArrowRight className='group-hover:scale-125 duration-300' />
                </Button>
            </div>
            <div className='relative'>
                <div className='w-[40vw] rounded-xl h-[65vh] relative object-contain'>
                    <Image src={'/images/doctor.png'} fill alt='doctor' />
                    <div className='absolute top-0 left-0 width-full h-full opacity-50' style={{
                        background: 'linear-gradient(55.8deg, #D9D9D9 0%, #D9D9D9 0.01%, rgba(217, 217, 217, 0) 101.29%)'
                    }} />
                </div>
                <div className='absolute bottom-12 right-[30%] bg-white z-10 rounded-xl flex items-center gap-6 p-5 w-max'
                    style={{
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}>
                    {
                        stats.map(stat => (
                            <div key={stat.text} className='flex flex-col items-center gap-1'>
                                <h3 className='text-2xl font-medium text-secondary-100'>{stat.count}</h3>
                                <p className='text-sm text-secondary-100/80'>{stat.text}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Hero