import Image from "next/image"
import { AiOutlinePlus } from "react-icons/ai"
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import Head from "next/head"
import AddNewDoctor from "@/components/modals/addNewDoctor"
import { useState } from "react"

const stats = [
  { name: 'Total Doctors', stat: '71', previousStat: '62', change: '12%', changeType: 'increase' },
  { name: 'Specialities', stat: '7', previousStat: '4', change: '42%', changeType: 'increase' },
  { name: 'Active Doctors', stat: '58.16%', previousStat: '56.14%', change: '2.02%', changeType: 'increase' },
  { name: 'Inactive Doctors', stat: '24.57%', previousStat: '28.62%', change: '4.05%', changeType: 'decrease' },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}


const doctors = [
  {
    name: 'Lindsay Walton',
    title: 'Doctor',
    department: 'Neuro Surgery',
    email: 'lindsay.walton@example.com',
    role: 'Member',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]


export default function Doctors() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Head>
        <title>D Treat | Doctors in your organization</title>
      </Head>
      <div
      >
        {showModal && <AddNewDoctor />}
        <div className="sm:flex sm:items-center pb-3 border-b">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold leading-6 text-gray-900">Doctors</h1>
            <p className="mt-2  text-gray-700">
              A list of all the users in your account including their name, title, email and role.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
            onClick={()=>setShowModal(true)}
              type="button"
              className="rounded-md bg-primary-100 px-3 py-2 flex items-center gap-2 text-center font-semibold text-white shadow-sm hover:bg-primary-100/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <AiOutlinePlus />
              <span>
                Invite New Doctor
              </span>
            </button>
          </div>
        </div>
        <div className="pt-2">
          <h3 className="text-base font-semibold leading-6 text-gray-900 pb-2">Stats in Last 30 days</h3>
          <dl className="grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-4 md:divide-x md:divide-y-0"
            style={{
              boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.25)"
            }}
          >
            {stats.map((item) => (
              <div key={item.name} className="px-4 py-5 sm:p-6">
                <dt className="text-base font-normal text-gray-900">{item.name}</dt>
                <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                  <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                    {item.stat}
                    <span className="ml-2 text-sm font-medium text-gray-500">from {item.previousStat}</span>
                  </div>

                  <div
                    className={classNames(
                      item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                      'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0'
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
          </dl>
        </div>
        <div className="mt-8 flow-root p-3 rounded-lg"
          style={{
            borderTop: "0.2px solid #D9D9D9",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
          }}
        >
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Title
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Role
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {new Array(8).fill(doctors[0]).map((person) => (
                    <tr key={person.email} className="">
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm sm:pl-0 ">
                        <div className="flex items-center">
                          <div className="h-11 w-11 flex-shrink-0">
                            <Image className="rounded-full" src={person.image} alt="" width={50} height={50} />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">{person.name}</div>
                            <div className="mt-1 text-gray-500">{person.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="td">
                        <div className="text-gray-900">{person.title}</div>
                        <div className="mt-1 text-gray-500">{person.department}</div>
                      </td>
                      <td className="td">
                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                          Active
                        </span>
                      </td>
                      <td className="td">{person.role}</td>
                      <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Manage<span className="sr-only">, {person.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
