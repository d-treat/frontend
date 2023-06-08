import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
interface Doctor {
    name: string;
    speciality: string;
    profile: string;
  }
  
  interface CaseOverviewProps {
    mydoctors: Doctor[];
  }
  interface Patients {
    name: string;
    symptom: string;
    disease: string;
    numberofdoctors:number;
  }
  
  interface CaseOverviewProps {
    mypatients: Patients[];
  }
  const mydoctors = [
    {
      name: 'Dr Mugisha Dorcus',
      speciality: 'NeuroSurgeon',
      profile: 'profile.png',
    },
    {
      name: 'Dr Mireille Umutoni',
      speciality: 'Neuro Surgeon',
      profile: 'profile.png',
    },
    {
      name: 'Dr Mutesa Cedrick',
      speciality: 'Neuro Surgeon',
      profile: 'profile.png',
    },
    {
        name: 'Dr Mugisha Dorcus',
        speciality: 'Neuro Surgeon',
        profile: 'profile.png',
      },
      {
        name: 'Dr Mugisha Dorcus',
        speciality: 'Neuro Surgeon',
        profile: 'profile.png',
      },
  ];
  const mypatients = [
    {
      title: 'Patient name',
     first:"Hirwa Vanessa",
     second:"Hirwa Vanessa",
     third:"Hirwa Vanessa",
    },
    {
      title: 'Symptom',
      first: 'Severe headaches | Dizziness  | Chest pain | Vomiting',
      second: 'Severe headaches | Dizziness  | Chest pain | Vomiting',
      third: 'Severe headaches | Dizziness  | Chest pain | Vomiting',
     
    },
    {
      title: 'Disease',
      first: 'High blood pressure',
      second: 'High blood pressure',
      third: 'High blood pressure',
    },
    {
        title: 'Number of doctors',
        first: '5',
        second: '5',
        third: '5',
      },
  ];
  console.log();
  

export default function CaseOverview(props: CaseOverviewProps) {
    console.log('this is' ,props)
  return (
    
   <div className="h-screen w-screen flex flex-row ">
    <div className="w-[252px] h-full "></div>
    <div className="w-[90%] h-full  bg-[#F5F5F5] flex flex-col justify-evenly items-center ">
        <div className="w-full h-[77px] bg-[#FFFFFF]"></div>
        <div className="w-[90%] h-[5%]  flex flex-row justify-between items-center #2B4360 border-b border-[rgba(43, 67, 96, 0.15)] ">
            <p className='text-[#2B4360] text-xl '>Case Planompia</p>
            <button className='h-[40px] w-[215px] bg-[#2B4360] rounded-md text-white  '>Create New Case</button>
        </div>


        <div className="h-[55%] w-[100%]  flex fle-row justify-around  py-4">
            <div className="h-[100%] w-[40%]  flex flex-row ]  items-center">
                 <div className="h-[100%] w-[100%] flex flex-col justify-between">
                    <div className="h-[80%] w-full bg-white flex rounded-md flex-col justify-center items-center">
                        <div className="h-[15%] w-[95%] flex items-center border-b  border-[rgba(43, 67, 96, 0.15)] ">
                            <p className='text-xl text-[#2B4360]'>Progress</p>
                        </div>

                        {/* Graph*/}
                        <div className="h-[85%] w-full flex  border border-[rgba(0,0,0,0.9) rounded-md items-center justify-around">
                            <img src="Group 26.png" alt="" />
                            <div className=" ">
                            <p className='flex items-center justify-center pr-[15px]'><span className='p-[10px]'><img src="Ellipse 177.png" alt="" /></span>Completed</p>
                            <p className='flex items-center justify-around'><span className='p-[10px]'><img src="Ellipse 177.png" alt="" /></span>Uncompleted</p>
                            </div>

                            </div>    
                    </div>
                    <div className="h-[40px]  w-full flex justify-between">
                        <button className='h-full w-[200px] text-white rounded-md bg-[#218D82]'>View Group Chat</button>
                        <button className='h-full w-[200px] text-[#218D82] rounded-md bg-[#FFFFFF] shadow-md'>Mark Complete</button>
                    </div>
                 </div>
            </div>

            {/* //Assigned doctors */}
            <div className="h-[100%] w-[40%] rounded-md bg-white flex flex-col border border-[rgba(0,0,0,0.9)   items-center">
                <div className="h-[20%] w-[90%] border-b border-[rgba(43, 67, 96, 0.15)]   flex items-center ">
                    <p className='text-[#2B4360] text-lg font-medium'>Assigned Doctors</p>
                </div>
            {mydoctors.map((mydoctor) => (
              <div key={mydoctor.name} className='w-[90%] h-[30%]  border-b border-[rgba(43, 67, 96, 0.15)] flex justify-evenly items-center'>
                <div className="w-[45%] h-full  flex items-center justify-between">
                       <div className="h-[60px] w-[60px] rounded-full bg-green-200">
                 <img src={mydoctor.profile} alt="" className='object-cover h-full w-full rounded-full' />
                </div>
                <div className="">
                    <p className='text-[#2B4360]  font-medium'>{mydoctor.name}</p>
                <p className='text-black  font-medium'>{mydoctor.speciality}</p> 
                </div>
                </div>
             <div className="w-[50%] h-full"></div>
               <button className='h-[40px] w-[225px] text-white rounded-md bg-[#218D82]'>View profile</button>
              </div>
            ))}
            </div>
           
        </div>

        {/* Patients Involved  */}
        <div className="w-[90%] bg-white  rounded-md flex flex-col items-center justify-around text-black border border-[rgba(0,0,0,0.9)  ">
            <div className="py-4 w-[90%] border-b border-[rgba(43, 67, 96, 0.15)] flex items-center">
            <p className='text-[#2B4360] text-lg font-medium ml-[5rem]'>Patients Involved</p> 
            </div>

            <div className=" w-[90%] flex flex-col justify-evenly">
          <div className='h-[4rem] w-full flex items-center  gap-[25rem] border-b pr-6'>
            <div className='flex w-[45%] justify-around gap-[4rem]'>
            <span>Patient Name</span>
            <span>Symptoms</span>
            </div>
            <div className='w-[32%] flex justify-between  gap-[10rem]  '>
            <span>Disease</span>
            <span>Number of doctors</span>
            </div>
          

            </div>      
          <div className='h-[4rem] w-full flex justify-around items-center border-b'>
          <span>HIRWA Vanessa</span>
            <span>Severe headaches | Dizziness  | Chest pain | Vomiting'</span>
            <span>High blood pressure</span>
            <span>5</span></div>                 
          <div className='h-[4rem] w-full flex justify-around items-center border-b'>
          <span>HIRWA Vanessa</span>
            <span>Severe headaches | Dizziness  | Chest pain | Vomiting'</span>
            <span>High blood pressure</span>
            <span>5</span></div>                 
          <div className='h-[4rem] w-full flex justify-around items-center border-b'>
          <span>HIRWA Vanessa</span>
            <span>Severe headaches | Dizziness  | Chest pain | Vomiting'</span>
            <span>High blood pressure</span>
            <span>5</span></div>                 

            </div>
        </div>
    </div>
   </div>

  )
}
