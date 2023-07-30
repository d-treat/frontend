import DoctorSidebar from '@/components/doctorSidebar';
import Head from 'next/head';
import { useState } from 'react';
function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}
interface IDoctor {
  doctorId: string;
  name: string;
  speciality: string;
  email: string;
  phoneNumber: string;
  address: string;
}

const doctor: IDoctor[] = [
  {
    doctorId: '00112',
    name: "Hyguette Murinda",
    speciality: 'neuro surgeon',
    email: 'hyguettemurinda@gmail.com',
    phoneNumber: "+250787313036",
    address: "211 E 43rd St Suite 639, New York, NY 10017, USA"
  }
]

const Doctors = () => {
  const [isProfileSidebarVisible, setProfileSidebarVisible] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<IDoctor | null>(null);
  const handleRowClick = (doctor: IDoctor) => {
    setProfileSidebarVisible(true);
    setSelectedDoctor(doctor);
  }
  return (
    <>
      <Head>
        <title>D Treat | Cases in your organization</title>
      </Head>


      <main className='space-y-4'>
        <div className='sm:flex sm:items-center pb-3 border-b'>
          <div className="">
            <h1 className="text-xl font-semibold leading-6 text-gray-900">Doctors</h1>
            <p className="mt-2  text-gray-700">
              information about  all the doctors available .
            </p>
          </div>
        </div>
        <div className='w-full flex justify-between gap-4'>
          <div className={`flow-root py-3 rounded-lg  ${(isProfileSidebarVisible && selectedDoctor) ? "w-3/4" : "w-full"}`}
            style={{
              borderTop: "0.2px solid #D9D9D9",
              boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)"
            }}
          >
            <div className="  overflow-x-auto ">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 ">
                <h2>Available Doctors</h2>
                <div className='flex flex-col md:flex-row md:justify-between'>

                  <table className="min-w-full divide-y divide-gray-300 md:w-2/3">
                    <thead>
                      <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                          Doctor ID
                        </th>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                          Name
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Speciality
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Email
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Phone Number
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {new Array(14).fill(doctor[0]).map((doc: IDoctor) => (
                        <tr key={doc.doctorId} className="cursor-pointer hover:bg-gray-100" onClick={() => handleRowClick(doc)} >
                          <td className="td  ">{doc.doctorId}</td>
                          <td className="td px-0">{doc.name}</td>

                          <td className="td">{doc.speciality}</td>
                          <td className="td">{doc.email}</td>
                          <td className="td">{doc.phoneNumber}</td>
                          <td className="td">
                            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                              Active
                            </span>
                          </td>

                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {isProfileSidebarVisible && selectedDoctor && <DoctorSidebar setIsProfileVisible={setProfileSidebarVisible} doctor={selectedDoctor} />}
        </div>
      </main>

    </>
  )
}

export default Doctors