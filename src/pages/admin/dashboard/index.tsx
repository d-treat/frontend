import 'chart.js/auto';
import Head from 'next/head';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Bar } from 'react-chartjs-2';
import styles from "./adminCalendar.module.css";
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
const stats =[
  {name: 'Total doctors', stat:60},
  {name: 'Total Cases', stat:30},
  {name: 'total patients', stat: 30},
  {name: 'total specialities', stat:10},
  {name:'active cases', stat:20},
  {name:'active doctors', stat:10}
]
const activeCases = [
  {name:"Doro case", doctorAssigned: "Hyguette"}
]
const Dashboard = () => {
  const [value, onChange] = useState<Value>(new Date());
  const data = {
    labels: ['Number of Doctors', 'Number of cases', 'number of specialities', 'number of patients'],
    datasets: [
      {
        label: 'Data',
        data: [60, 30, 20, 50],
        backgroundColor: '#218D82',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false, // Remove vertical grid lines
        },
        barPercentage: 0.6,
      },
      y: {
        grid: {
          display: false, // Remove horizontal grid lines
        },
      },
    },
  };
  const tileClassName = () => {
    return styles['all-days'];
  };
  return (
    <>
      <Head>
        <title>D Treat | Hospital&apos;s Overview</title>
      </Head>
      <main className='space-y-4 flex justify-between bg-gray-50 rounded-md  [w-100%] h-[100vh] p-4'>
        <div className='w-3/5 '>
        <div>
        <h1 className='text-2xl font-semibold leading-6 text-gray-600 pb-3'>Dashboard</h1>
        </div>
        <div>
          <dl className='grid grid-cols-3 divide-y divide-gray-200 '>
            {stats.map((item)=>(
              <div key={item.name} className='w-[90%] h-[12vh] bg-white m-2 rounded-xl items-center shadow p-4'>
                <dt>{item.name}</dt>
                <dd>{item.stat}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className='shadow bg-white my-3 rounded-md p-5'>
        <Bar data={data} options={options} />
        </div>
        </div>
        <div className='px-4 w-2/5 ml-4'>
        <h1 className='text-2xl font-semibold leading-6 text-gray-600 pb-3 flex justify-center'>calendar</h1>
        <div className=''>
        {/* <Card extra="flex w-full h-full flex-col px-3 py-3"> */}
        <div className="mx-4 py-4 px-6 bg-white rounded-lg shadow-md">
            <Calendar onChange={onChange} value={value} className={styles['react-calendar']} tileClassName={tileClassName}></Calendar>
          </div>
      {/* </Card> */}
      <div className='my-4 bg-white p-4 rounded-md shadow '>
        <h1 className='text-xl p-2'>Active cases</h1>
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope='col' className='py-2.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0'>No</th>
              <th scope='col' className='py-2.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0'>Case Name</th>
              <th scope='col' className='py-2.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0'>Doctor Assigned</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {new Array(4).fill(activeCases[0]).map((ac, index)=>(
              <tr key={ac.name}>
                <td className='td py-3'>{index + 1}</td>
                <td className='td py-3'>{ac.name}</td>
                <td className='td py-3'>{ac.doctorAssigned}</td>
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

export default Dashboard