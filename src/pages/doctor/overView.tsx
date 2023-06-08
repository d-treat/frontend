import React from "react";
import { useEffect } from "react"
import { Chart } from "chart.js";
import { DocAppointmentCard } from "@/components/appointment/docAppointment";
import { TodoComment } from "typescript";
import { TodoCommponent } from "@/components/appointment/todoComponent";
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import {FcVideoCall} from 'react-icons/fc'
const dummyPhotoData = [
    {
      photoUrl: 'https://example.com/photo1.jpg',
      name: 'John Doe',
      time: 'Today- 12:00 pm',
    },
    // {
    //   photoUrl: 'https://example.com/photo2.jpg',
    //   name: 'Jane Smith',
    //   time: '12:30 PM',
    // },
    // Add more dummy data as needed
  ];
  const todoDummy =[
    {
    dummyname: 'Call Doctor Danbury',
    time: '12: 00 PM',
    }
  ]
export const OverView =() =>{
    useEffect(() => {
      const chartContainer = document.getElementById('chartContainer');
      const canvas = document.getElementById('myChart') as HTMLCanvasElement;
      
      canvas.height = 350; // Set the height of the canvas element
        const ctx = canvas?.getContext('2d') as CanvasRenderingContext2D ;
        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ["Apr", "May", "June", "July", "Aug", "Sept"],
            datasets: [{
              data: [8, 114, 30, 106, 65, 111],
              label: "Applied",
              borderColor: "#E29578",
              backgroundColor:"transparent",
              
              fill: false,
              
            }]
        },
        options: {
          scales: {
              x: {
                  grid: {
                      display: false // Remove x-axis grid lines
                  }
              },
              y: {
                  
                      display: false // Remove y-axis grid lines
                  
              }
          },
          
      } as any
    });
},[])
Chart.defaults.scale.gridLines.display = false;
    return(
      <div className="w-[100%] h-[100vh]">
        <div className="w-[100%] h-[10vh] bg-black">

        </div>
        <div className="flex justify between">
          <div className="w-[20%] h-[100vh] bg-green">
          <p>sidebar</p>
          </div>
            
            <div className='bg-[#FAFAFA] flex justify-between w-[62%] h-[100vh]  '>
            <div className="ml-7 ]">
                <h1 className="text-[#2B4360] mt-3 mb-3">Dashboard</h1>
                <div className="bg-[#fff2e6] w-[105%] h-[85vh] rounded-lg  mt-[2%] ">
                <div className="flex justify-center mt-5">
                <div className="text-center mt-5">
                  <p>Moderate Availability Progress</p>
                  <p className="text-[#2B4360] text-bold">MODERATE</p>
                </div>
              </div>
                    
                    <div className="h-[60%]">
                        <div className=' '>
                        <canvas id='myChart'></canvas>
                        </div>
                    </div>
                    <div className="bg-[#E29578] w-[70%] center m-5 p-3 rounded-xl flex justify-between">
                    <div className="items-center">
                        <p>Plan for 2023</p>
                        <p>Completed</p>
                    </div>
                    {/* <div className="pt-3 ">
                    <AiOutlineLoading3Quarters  />
                    </div> */}
                    <div>
                    <i className="fa fa-spinner" aria-hidden="true"></i>
                    </div>
                </div>
                </div>
                
            </div>
            <div className="w-[40%] mr-5">
            <div>
                <h1 className="text-[#2B4360] items-center font-500 m-3 text-lg">Upcoming Appointments</h1>
                <div className="border border-1 border-solid border-teal-600 bg-[#F5F5F7] rounded-lg pl-5 pt-1 pb-1 ">
      {dummyPhotoData.map((data, index) => (
        <DocAppointmentCard 
          key={index}
          name={data.name}
          time={data.time}
        />
      ))}
    </div>
    <div className="border border-1 border-solid border-teal-600 mt-5 bg-[#F5F5F7] rounded-lg pl-5 pt-1 pb-1">
      {dummyPhotoData.map((data, index) => (
        <DocAppointmentCard 
          key={index}
          name={data.name}
          time={data.time}
        />
      ))}
    </div>
    </div>
    <div>
        <h1 className="my-3 text-[#2B4360] items-center font-500 m-3 text-lg">My to -do</h1>
        <div className="border border-1 border-solid border-teal-600 bg-[#D9D9D9] rounded-lg pl-5 ">
      {todoDummy.map((data, index) => (
        <TodoCommponent 
          key={index}
          name={data.dummyname}
          time={data.time}
        />
      ))}
    </div>
    <div className="border border-1 border-solid border-teal-600 mt-5 bg-[#D9D9D9] rounded-lg pl-5">
      {todoDummy.map((data, index) => (
        <TodoCommponent 
          key={index}
          name={data.dummyname}
          time={data.time}
        />
      ))}
    </div>
    </div>
        <button className="mt-8 w-[100%] border border-1 border-dashed border-blue-900 p-3 rounded-lg">Schedule an Appointment</button>
            </div>
            </div>
        </div>
        </div>
    )
}