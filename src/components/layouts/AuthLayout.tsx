import React from 'react'
import Logo from '../common/logo';

interface Props{
    children: React.ReactNode
    pageTitle:string;
}
const AuthLayout = ({children,pageTitle}:Props) => {
  return (
    <div className='w-full h-screen flex items-center bg-white '>
      <div className='w-[45%] h-full flex flex-col items-center justify-center space-y-4'
      style={{
        background:"linear-gradient(61.45deg, rgba(43, 67, 96, 0.5) -18.85%, rgba(33, 141, 130, 0.05) 96.92%)"
      }}
      >
       <Logo/>
       <h1 className='text-3xl font-medium uppercase text-[#2B4360]'>{pageTitle}</h1>
      </div>
      <div className='w-[55%] h-full flex items-center justify-center'>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout