import Image from 'next/legacy/image';
import React, { useState } from 'react';
import { AiFillEdit, AiFillMail, AiFillCamera } from 'react-icons/ai';
import { ImLocation2 } from 'react-icons/im';
import { SiPicardsurgeles } from 'react-icons/si';
import { MdPayment } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import { BsFillCalendarDateFill, BsFillPersonFill } from 'react-icons/bs';
// Define the Doctor interface to represent the data structure of a doctor
interface doctor {
    doctorId: string;
    name: string;
    speciality: string;
    email: string;
    phoneNumber: string;
    address: string;
}

interface doctorSidebarProps {
  doctor: doctor;
}

const DoctorSidebar: React.FC<doctorSidebarProps> = ({ doctor }) => {
  // Add your sidebar content here using the 'doctor' prop
  return (
    <div className="w-[20vw] bg-white md:absolute top-10 right-0 mr-4 ">
      <div className="pt-12">
        <div className="border-b border-green-300 ml-3"></div>
      </div>
      <div className=" h-11 w-11  border border-[#218D82] mt-4 ml-4 relative">
        <Image alt="img" src={'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60'} layout='fill'/>
      </div>
      <div className="ml-4 text-[#2B4360] mt-4">
        <div className="flex justify-between">
          <p className="text-[#2B4360] text-xl">Personal Information</p>
        </div>
        <div className="flex gap-2 mt-6">
          <div className="border border-[#D9d9D9] w-10 h-8 rounded-sm flex justify-center items-center text-center">
            <BsFillPersonFill className="text-[#218D82]" />
          </div>
          <p>{doctor.name}</p>
        </div>
        <div className="flex gap-2 mt-6">
          <div className="border border-[#D9d9D9] w-10 h-8 rounded-sm flex justify-center items-center text-center">
            <AiFillMail className="text-[#218D82]" />
          </div>
          <p>{doctor.email}</p>
        </div>
        <div className="flex gap-2 mt-6">
          <div className="border border-[#D9d9D9] w-10 h-8 rounded-sm flex justify-center items-center text-center">
            <IoCall className="text-[#218D82]" />
          </div>
          <p>{doctor.phoneNumber}</p>
        </div>

        
      </div>

      <div className="flex flex-col ml-4 mt-2 text-[#2B4360]">
        <div className="flex justify-between">
          <p className="text-[#2B4360] text-xl">Address</p>
        </div>
          <div className="border border-[#D9d9D9] w-60 sm:w-70 h-16 rounded-lg flex gap-2 mt-4">
            <ImLocation2 className="text-[#218D82] ml-2 mt-5" />
            <p className='mt-2'>{doctor.address}</p>
          </div>
      </div>

      <div className="flex flex-col ml-4 mt-2 text-[#2B4360]">
        <div className="flex justify-between">
          <p className="text-[#2B4360] text-xl">Speciality</p>
          
        </div>
          <div className="border border-[#D9d9D9] w-60 sm:w-70 h-16 rounded-lg flex gap-2 mt-4 justify-center items-center">
            <SiPicardsurgeles className=" text-[#218D82]" />
            <p>{doctor.speciality}</p>
          </div>
      </div>
      <div className="flex flex-col ml-4 mt-5 text-[#2B4360]">
      <button type="button" className="rounded-md bg-[#e0e0eb] px-7 py-2 flex items-center gap-2 text-center font-semibold shadow-md hover:bg-primary-100/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-60 bg-white text-[#218D82]">
            Book an appointment
        </button>
      </div>
      <div className="flex flex-col ml-4 mt-4 text-[#2B4360]">
        <button className="w-60 sm:w-70 h-10 rounded-lg bg-[#218D82] mt-6 text-wh">
          Checkout CV
        </button>
      </div>

    </div>
  );
};

export default DoctorSidebar;