import AuthLayout from '@/components/layouts/AuthLayout'
import React from 'react'

const RequestPartnership = () => {

  return (
    <AuthLayout pageTitle='Welcome to d-treat'>
        <form>
            <div className='space-y-3'>
               <h1 className='text-secondary-100 text-2xl font-medium'>Request Partnership</h1>
               <p className='text-gray-400'>Welcome to D-treat. Please enter your details</p>
            </div>
        </form>
    </AuthLayout>
  )
}

export default RequestPartnership