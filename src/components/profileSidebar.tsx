import Image from 'next/legacy/image';
import React, { useState } from 'react';
import { AiFillEdit, AiFillMail, AiFillCamera } from 'react-icons/ai';
import { ImLocation2 } from 'react-icons/im';
import { SiPicardsurgeles } from 'react-icons/si';
import { MdPayment } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import { BsFillCalendarDateFill } from 'react-icons/bs';

function ProfileSidebar() {
  const [personalInfo, setPersonalInfo] = useState('nessabeattles@gmail.com');
  const [address, setAddress] = useState(
    '211 E 43rd St Suite 639, New York, NY 10017, USA'
  );
  const [speciality, setSpeciality] = useState('Web Development');
  const [paymentMethod, setPaymentMethod] = useState('.... .... ..... 4243');

  const [personalInfoEditing, setPersonalInfoEditing] = useState(false);
  const [addressEditing, setAddressEditing] = useState(false);
  const [specialityEditing, setSpecialityEditing] = useState(false);
  const [paymentMethodEditing, setPaymentMethodEditing] = useState(false);

  const handlePersonalInfoEdit = () => {
    setPersonalInfoEditing(true);
  };

  const handlePersonalInfoSave = () => {
    setPersonalInfoEditing(false);
  };

  const handleAddressEdit = () => {
    setAddressEditing(true);
  };

  const handleAddressSave = () => {
    setAddressEditing(false);
  };

  const handleSpecialityEdit = () => {
    setSpecialityEditing(true);
  };

  const handleSpecialitySave = () => {
    setSpecialityEditing(false);
  };

  const handlePaymentMethodEdit = () => {
    setPaymentMethodEditing(true);
  };

  const handlePaymentMethodSave = () => {
    setPaymentMethodEditing(false);
  };

  return (
    <div className="w-[20vw]">
      <div className="">
        <div className="border-b border-green-300 ml-3"></div>
      </div>
      <div className="rounded-full w-8 h-8 border border-[#218D82] mt-4 ml-4 relative">
        <Image alt="img" src={'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60'} layout='fill'/>
        <AiFillCamera className="ml-4 text-[#218D82] mt-[-4px]" />
      </div>
      <div className="ml-4 text-[#2B4360] mt-4">
        <div className="flex justify-between">
          <p className="text-[#2B4360] text-xl">Personal Information</p>
          {!personalInfoEditing ? (
            <AiFillEdit
              className="text-gray-400 mr-3 cursor-pointer"
              onClick={handlePersonalInfoEdit}
            />
          ) : (
            <button
              className="text-gray-400 mr-3"
              onClick={handlePersonalInfoSave}
            >
              Save
            </button>
          )}
        </div>
        {!personalInfoEditing ? (
          <div className="flex gap-2 mt-6">
            <div className="border border-[#D9d9D9] w-10 h-8 rounded-sm flex justify-center items-center text-center">
              <AiFillMail className="text-[#218D82]" />
            </div>
            <p className="underline">{personalInfo}</p>
          </div>
        ) : (
          <div className="flex gap-2 mt-6">
            <div className="border border-[#D9d9D9] w-10 h-8 rounded-sm flex justify-center items-center text-center">
              <AiFillMail className="text-[#218D82]" />
            </div>
            <input
              type="text"
              className="outline-none"
              value={personalInfo}
              onChange={(e) => setPersonalInfo(e.target.value)}
            />
          </div>
        )}

        <div className="flex gap-2 mt-6">
          <div className="border border-[#D9d9D9] w-10 h-8 rounded-sm flex justify-center items-center text-center">
            <IoCall className="text-[#218D82]" />
          </div>
          <p>+250 788 4345</p>
        </div>

        <div className="flex gap-2 mt-6">
          <div className="border border-[#D9d9D9] w-10 h-8 rounded-sm flex justify-center items-center text-center">
            <BsFillCalendarDateFill className="text-[#218D82]" />
          </div>
          <p>20.03.2002</p>
        </div>
      </div>

      <div className="flex flex-col ml-4 mt-2 text-[#2B4360]">
        <div className="flex justify-between">
          <p className="text-[#2B4360] text-xl">Address</p>
          {!addressEditing ? (
            <AiFillEdit
              className="text-gray-400 mr-3 cursor-pointer"
              onClick={handleAddressEdit}
            />
          ) : (
            <button
              className="text-gray-400 mr-3"
              onClick={handleAddressSave}
            >
              Save
            </button>
          )}
        </div>
        {!addressEditing ? (
          <div className="border border-[#D9d9D9] w-60 sm:w-70 h-16 rounded-lg flex gap-2 mt-4">
            <ImLocation2 className="text-[#218D82] ml-2 mt-2" />
            <p>{address}</p>
          </div>
        ) : (
          <div className="border border-[#D9d9D9] w-60 sm:w-70 h-16 rounded-lg flex gap-2 mt-4">
            <ImLocation2 className="text-[#218D82] ml-2 mt-2" />
            <input
              type="text"
              className="outline-none"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        )}
      </div>

      <div className="flex flex-col ml-4 mt-2 text-[#2B4360]">
        <div className="flex justify-between">
          <p className="text-[#2B4360] text-xl">Speciality</p>
          {!specialityEditing ? (
            <AiFillEdit
              className="text-gray-400 mr-3 cursor-pointer"
              onClick={handleSpecialityEdit}
            />
          ) : (
            <button
              className="text-gray-400 mr-3"
              onClick={handleSpecialitySave}
            >
              Save
            </button>
          )}
        </div>
        {!specialityEditing ? (
          <div className="border border-[#D9d9D9] w-60 sm:w-70 h-16 rounded-lg flex gap-2 mt-4 justify-center items-center">
            <SiPicardsurgeles className="ml-2 mt-2 text-[#218D82]" />
            <p>{speciality}</p>
          </div>
        ) : (
          <div className="border border-[#D9d9D9] w-60 sm:w-70 h-16 rounded-lg flex gap-2 mt-4">
            <SiPicardsurgeles className="ml-2 mt-2 text-[#218D82]" />
            <input
              type="text"
              className="outline-none"
              value={speciality}
              onChange={(e) => setSpeciality(e.target.value)}
            />
          </div>
        )}
      </div>

      <div className="flex flex-col ml-4 mt-4 text-[#2B4360]">
        <div className="flex justify-between">
          <p className="text-[#2B4360] text-xl">Payment Method</p>
          {!paymentMethodEditing ? (
            <AiFillEdit
              className="text-gray-400 mr-3 cursor-pointer"
              onClick={handlePaymentMethodEdit}
            />
          ) : (
            <button
              className="text-gray-400 mr-3"
              onClick={handlePaymentMethodSave}
            >
              Save
            </button>
          )}
        </div>
        {!paymentMethodEditing ? (
          <div className="border border-[#D9d9D9] w-60 sm:w-70 h-10 rounded-lg flex gap-2 mt-4 justify-center items-center">
            <MdPayment className="text-[#218D82] ml-2 mt-2" />
            <p>{paymentMethod}</p>
          </div>
        ) : (
          <div className="border border-[#D9d9D9] w-60 sm:w-70 h-10 rounded-lg flex gap-2 mt-4">
            <MdPayment className="text-[#218D82] ml-2 mt-2" />
            <input
              type="text"
              className="outline-none"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
        )}
        <button className="w-60 sm:w-70 h-10 rounded-lg bg-[#218D82] mt-6 text-wh">
          Update CV
        </button>
      </div>
    </div>
  );
}

export default ProfileSidebar;