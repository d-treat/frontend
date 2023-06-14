import { Features } from '@/components/home/features'
import Hero from '@/components/home/banner'
import HomeFooter from '@/components/home/homeFooter'
import HomeNav from '@/components/home/homeNav'
import OurServices from '@/components/home/ourServices'
import { Testimonials } from '@/components/home/testimonials'
import Head from 'next/head'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>
          D Treat | Welcome
        </title>
      </Head>
      <div className='w-full h-auto space-y-12'>
        <HomeNav />
        <Hero />
        <OurServices />
        <Features />
        <Testimonials />
        <HomeFooter />
      </div>
    </>
  )
}

export default HomePage