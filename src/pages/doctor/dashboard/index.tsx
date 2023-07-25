import DoctorDashboardLayout from '@/components/layouts/DoctorDashboardLayout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import {AiOutlineVideoCamera, AiFillSchedule} from 'react-icons/ai'
import {RxSwitch} from 'react-icons/rx'
import Switch from 'react-switch'
import { useState } from 'react'
import ProfileSidebar from '@/components/profileSidebar'

// interface IAppointment{
//   name: string;
//   time: string;
// }
const appointment =[
  {
    name:"Dr Patricia More",
    time:"Today - 12:00 pm",
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
];
interface IToDo{
  task: string;
  time: string;
}
const todo: IToDo[] = [
  {
    task:" call dr Danbury",
    time:"january 2023"
  }
]
const DoctorDashboard = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const handleChange = (checked:boolean) => {
    setChecked(checked);
  };
  return (
    <>
      <Head>
        <title>D Treat | Your Dashbaord</title>
      </Head>
      <main className='space-y-4'>
        <div className='flex flex-col md:flex-row'>
          <div className='flex w-3/4 gap-4'>
            <div className='w-1/2'>
              <h1 className='text-2xl font-semibold leading-6 text-gray-600 pb-3'>Dashboard</h1>
              <div className='bg-[#fbeeea] w-[100%] h-[80vh]'>
                
              </div>
            </div>
            <div className='w-1/2 px-3'>
            <div className=''>
            <h1 className='text-2xl font-semibold leading-6 text-gray-600'>Upcoming appointments</h1>
            <div className='flex-grow w-full'>
              {new Array(2).fill(appointment[0]).map((app)=>(
                <div key={app.name} className='border border-[#218D82]  my-3 rounded-sm w-5/5 px-3 pt-2 flex bg-gray-100'>
                  <div className="h-11 w-11 flex-shrink-0">
                    <Image className="rounded-full" src={app.image} alt="" width={50} height={50} />
                  </div>
                  <div className='px-1'>
                  <p>{app.name}</p>
                  <p>{app.time}</p>
                  </div>
                  <div className='bg-white my-4 h-7 w-7 rounded-md ml-6 ml-auto'>
                    <AiOutlineVideoCamera className='text-[#218D82] my-1.5 mx-1.5  ' />
                  </div>
                </div>
                
              ))}
            </div>
            </div>
            <div>
            <h1 className='text-2xl font-semibold leading-6 text-gray-600'>My To-Do</h1>
            <div className=''>
              {new Array(4).fill(todo[0]).map((to: IToDo)=>(
                <div key={to.task} className=' my-3 rounded-sm w-5/5 px-3 pt-2 flex bg-gray-100'>
                  <div className='px-1'>
                  <p>{to.task}</p>
                  <p>{to.time}</p>
                  </div>
                  <div className='mt-3 ml-auto '>
                  <Switch onChange={handleChange} checked={checked} height={20} width={40} />
                  </div>
                </div>
                
              ))}
            </div>
            </div>
            <button type='button' className=" rounded-md border border-black border-dashed px-4 py-2 flex items-center gap-2 text-center  text-gray-400 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-5/5 mt-4 py-3 "> <AiFillSchedule /> Schedule an Appointment</button>
            </div>
          </div>
          <div className='w-1/4'>
          <ProfileSidebar />
          </div>
        </div>
        

      </main>
    </>
  )
}

export default DoctorDashboard