import Head from 'next/head';
import Image from 'next/image';
import React from 'react'
import AddNewCase from '@/components/modals/addNewCase';
import { useState } from 'react';
interface ICaseOverview{
  patientName: string;
  symptoms: string;
  disease: string;
  numberOfDoctors: string;
}
const cases: ICaseOverview[] = [
  {
    patientName: 'Hirwa Vanessa',
    symptoms: 'headache| dizzi| chest pain',
    disease: 'high blood pressure',
    numberOfDoctors: '5'
  }
]
const doctors = [
  {
    name: 'Lindsay Walton',
    department: 'Neuro Surgery',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]
const Case = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Head>
        <title>D Treat | Case overview</title>
      </Head>
      <main className='space-y-4'>
      {showModal && <AddNewCase/>}
      <div className='sm:flex sm:items-center pb-3 border-b'>
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold leading-6 text-gray-900">Case Planomia</h1>
          
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
             onClick={()=>setShowModal(true)}
              type="button"
              className="rounded-md bg-primary-100 px-3 py-2 flex items-center gap-2 text-center font-semibold text-white shadow-sm hover:bg-primary-100/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {/* <AiOutlinePlus /> */}
              <span>
                create new case
              </span>
            </button>
          </div>
          </div>
          <div className='flex justify-between'>
          <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-md transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-6">
          <h1 className="text-xl font-semibold leading-6 text-gray-900 text-center">Progress</h1>
          <div className='flex justify-between'>
          <button
              type="button"
              className="rounded-md bg-primary-100 px-7 py-2 flex items-center gap-2 text-center font-semibold text-white shadow-sm hover:bg-primary-100/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-50"
            >
              {/* <AiOutlinePlus /> */}
              <span>
                view Group chat
              </span>
            </button>
            <button
              type="button"
              className="rounded-md bg-primary-100 px-7 py-2 flex items-center gap-2 text-center font-semibold shadow-md hover:bg-primary-100/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-50 bg-white text-[#218D82]"
            >
              {/* <AiOutlinePlus /> */}
              <span>
                Mark completed
              </span>
            </button>  
          </div>    
          </div>
          <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-md transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-6">
          <h1 className="text-xl font-semibold leading-6 text-gray-900 text-center">Assigned doctors</h1>
          <table className='w-full'>
          <tbody className="divide-y divide-gray-200 bg-white">
            {new Array(5).fill(doctors[0]).map((person)=>(
              <tr key={person.department}>
              <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm sm:pl-0 ">
              <div className="flex items-center">
                          <div className="h-11 w-11 flex-shrink-0">
                            <Image className="rounded-full" src={person.image} alt="" width={50} height={50} />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">{person.name}</div>
                            <div className="mt-1 text-gray-500">{person.department}</div>
                          </div>
                        </div>
                </td>
                <td>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="rounded-md bg-primary-100 px-7 py-2 flex items-center gap-2 text-center font-semibold text-white shadow-sm hover:bg-primary-100/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-40"
            >
              {/* <AiOutlinePlus /> */}
              <span>
                view profile
              </span>
            </button>
          </div>
                </td>
                </tr>
            ))}

            </tbody>
          </table>
          </div>
          </div>
          <div className="mt-8 flow-root p-3 rounded-lg"
          style={{
            borderTop: "0.2px solid #D9D9D9",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
          }}
        >
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <h2>Patient Invloved</h2>
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Patient Name
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      symptoms
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Disease
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Number Of Doctors
                    </th>
                    
                    
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {new Array(3).fill(cases[0]).map((cs: ICaseOverview) => (
                    <tr key={cs.patientName} className="">
                      <td className="td  ">{cs.patientName}</td>
                      <td className="td px-0">{cs.symptoms}</td>

                      <td className="td">{cs.disease}</td>
                      <td className="td">{cs.numberOfDoctors}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            
            
          </div>
        </div>
      </main>
    </>
  )
}

export default Case