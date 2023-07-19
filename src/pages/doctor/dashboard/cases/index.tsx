import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import AddNewCase from '@/components/modals/addNewCase';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const stats = [
  { name: 'Your Cases', stat: '17', previousStat: '12', change: '12%', changeType: 'increase' },
  { name: 'Partner doctors', stat: '7', previousStat: '4', change: '42%', changeType: 'increase' },
  { name: 'Patients', stat: '17', previousStat: '12', change: '12%', changeType: 'increase' },
  { name: 'Active Cases', stat: '24.57%', previousStat: '28.62%', change: '4.05%', changeType: 'decrease' },
]


interface ICase {
  caseId: string;
  name: string;
  registeredAt: string;
  endDate: string;
  status: string;
}

const cases: ICase[] = [
  {
    caseId: '00112',
    name: "Edmond's Cancer case",
    registeredAt: '14/10/2022',
    endDate: 'Unknown',
    status: "active"
  }
]

const Cases = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Head>
        <title>D Treat | Cases in your organization</title>
      </Head>
        
      
      <main className='space-y-4'>
      {showModal && <AddNewCase/>}
        <div className='sm:flex sm:items-center pb-3 border-b'>
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold leading-6 text-gray-900">Cases</h1>
          <p className="mt-2  text-gray-700">
            information about  all the cases in you are assigned to.
          </p>
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
        {/* <div className="pt-2">
          <h3 className="text-base font-semibold leading-6 text-gray-900 pb-2">Stats in Last 30 days</h3> */}
        {/* <dl className="grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-4 md:divide-x md:divide-y-0"
            style={{
              boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.25)"
            }}
          >
            {stats.map((item) => (
              <div key={item.name} className="px-4 py-5 sm:p-6 ">
                <dt className="text-base font-normal text-gray-900">{item.name}</dt>
                <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                  <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                    {item.stat}
                    <span className="ml-2 text-sm font-medium text-gray-500">from {item.previousStat}</span>
                  </div>

                  <div
                    className={classNames(
                      item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                      'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0 bgp-r'
                    )}
                  >
                    {item.changeType === 'increase' ? (
                      <ArrowUpIcon
                        className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArrowDownIcon
                        className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                        aria-hidden="true"
                      />
                    )}

                    <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                    {item.change}
                  </div>
                </dd>
              </div>
            ))}
          </dl> */}
        {/* </div> */}
        <div className="mt-8 flow-root p-3 rounded-lg"
          style={{
            borderTop: "0.2px solid #D9D9D9",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
          }}
        >
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <h2>Recent cases</h2>
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Case ID
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Case  Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Registered At
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      End Date
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {new Array(14).fill(cases[0]).map((cs: ICase) => (
                    <tr key={cs.caseId} className="">
                      <td className="td  ">{cs.caseId}</td>
                      <td className="td px-0">{cs.name}</td>

                      <td className="td">{cs.registeredAt}</td>
                      <td className="td">{cs.endDate}</td>
                      <td className="td">
                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                          Active
                        </span>
                      </td>
                      <Link href={'/doctor/dashboard/cases/00112'}>
                        <td className="td">
                          <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
                            View
                            <AiFillEye/>
                          </span>
                        </td>
                      </Link>
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

export default Cases