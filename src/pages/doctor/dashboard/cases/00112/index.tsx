import CaseProgress from "@/components/cases/CaseProgress";
import Button from "@/components/common/button";
import AddNewCase from '@/components/modals/addNewCase';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
interface ICaseOverview {
    patientName: string;
    symptoms: string;
    disease: string;
    numberOfDoctors: string;
}

const patient = {
    name: "John Doe",
    age: 23,
    gender: "Male",
    symptoms: ["headache", "fever"],
    disease: "Not yet diagnosed",
    allergies: ["penicillin"],
    medications: ["ibuprofen"],
    bloodType: "A+",
    medicalHistory: [
        { date: "2023-09-17", description: "Routine check-up" },
        { date: "2023-08-25", description: "Flu symptoms" }
    ],
    insuranceProvider: "ABC Insurance",
    contactInfo: {
        phoneNumber: "555-555-5555",
        email: "johndoe@example.com",
        address: "123 Main Street"
    }
};


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
                {showModal && <AddNewCase />}
                <div className='sm:flex sm:items-center pb-3 border-b'>
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold leading-6 text-gray-900">Case Planomia</h1>

                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <button
                            onClick={() => setShowModal(true)}
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
                <div className='flex justify-between  min-h-[50vh] items-center gap-4'>

                    <div className="w-1/2 h-full space-y-8">
                        {/* @ts-ignore */}
                        <CaseProgress
                            title="Case Progress"
                            chart={{
                                series: [
                                    { label: 'Completed', value: 120 },
                                    { label: 'Ongoing', value: 66 },
                                ],
                            }}
                        />
                        <div className="flex items-center gap-4">

                            <Button href={'/doctor/dashboard/cases/00112/chat'}>
                                View Group Chat
                            </Button>
                            <Button dark >
                                Mark as Completed
                            </Button>
                        </div>
                    </div>
                    <div className="w-1/2 py-3 flex flex-col items-center min-h-[48vh] shadow-md ">
                        <h2 className='text-2xl font-medium'>Assigned Doctors</h2>
                        <div className="space-y-2 w-full">
                            {
                                new Array(5).fill(doctors[0]).map((doctor: any, idx) => (
                                    <div key={idx} className={`w-full flex items-center justify-between px-3 py-2 ${idx !== 4 && "border-b"}`}>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full overflow-hidden">
                                                <Image
                                                    className="w-full h-full"
                                                    src={doctor.image}
                                                    alt=""
                                                    width={60}
                                                    height={60}
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <h3 className=" font-semibold">{doctor.name}</h3>
                                                <p className="text-gray-500 text-sm">{doctor.department}</p>
                                            </div>
                                        </div>
                                        <Button className="w-fit px-5">
                                            View Profile
                                        </Button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>

                <div className="mt-8 flow-root rounded-lg shadow-lg"
                    style={{
                        borderTop: "0.2px solid #D9D9D9",
                    }}
                >
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">

                        <div className="inline-block min-w-full  align-middle sm:px-6 lg:px-8 space-y-3">
                            <div className="w-full py-3 rounded-t-lg bg-gray-100 text-center">
                                <h2 className="text-lg font-semibold">Patient Involved</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[25vh]">
                                <div className="flex flex-col px-5 py-2 h-4/5 border-r border-gray-300">
                                    <h3 className="font-semibold text-xl mb-2">Patient Information</h3>
                                    <p><span className="font-semibold">Name:</span> {patient.name}</p>
                                    <p><span className="font-semibold">Age:</span> {patient.age}</p>
                                    <p><span className="font-semibold">Gender:</span> {patient.gender}</p>
                                    <p><span className="font-semibold">Symptoms:</span> {patient.symptoms.join(', ')}</p>
                                </div>

                                <div className="flex flex-col px-5 py-2">
                                    <h3 className="font-semibold text-xl mb-2">Disease Information</h3>
                                    <p><span className="font-semibold">Disease:</span> {patient.disease}</p>
                                    <p><span className="font-semibold">Allergies:</span> {patient.allergies.join(', ')}</p>
                                    <p><span className="font-semibold">Medications:</span> {patient.medications.join(', ')}</p>
                                    <p><span className="font-semibold">Blood Type:</span> {patient.bloodType}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </main >
        </>
    )
}

export default Case