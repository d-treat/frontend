import Image from 'next/legacy/image';
import React from 'react';
import { AiFillMail } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { ImLocation2 } from 'react-icons/im';
import { IoCall } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { SiPicardsurgeles } from 'react-icons/si';

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
  setIsProfileVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const DoctorSidebar: React.FC<doctorSidebarProps> = ({ doctor, setIsProfileVisible }) => {
  return (
    <div className="w-1/4 rounded-lg  ease-out duration-300"
      style={{
        borderTop: "0.2px solid #D9D9D9",
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)"
      }}
    >
      <div className='w-full flex items-center justify-between'>
        <div className=" h-11 w-11 rounded-full  border border-primary-100 mt-4 ml-4 relative">
          <Image alt="img" src={'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60'} layout='fill' className='rounded-full' />
        </div>
        <div role='button' onClick={() => setIsProfileVisible(false)} className='rounded-full p-2 bg-gray-100 transition-colors duration-200 mr-2 cursor-pointer hover:bg-primary-100'>
          <RxCross2 className='hover:text-white' />
        </div>
      </div>
      <div className="ml-4 text-[#2B4360] mt-4">
        <div className="flex justify-between">
          <p className="text-[#2B4360] text-xl">Personal Information</p>
        </div>
        <div className="flex gap-2 mt-6">
          <div className="border border-[#D9d9D9] w-10 h-8 rounded-sm flex justify-center items-center text-center">
            <BsFillPersonFill className="text-primary-100" />
          </div>
          <p>{doctor.name}</p>
        </div>
        <div className="flex gap-2 mt-6">
          <div className="border border-[#D9d9D9] w-10 h-8 rounded-sm flex justify-center items-center text-center">
            <AiFillMail className="text-primary-100" />
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