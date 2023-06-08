import Button from '@/components/common/button';
import Spinner from '@/components/common/spinner';
import FormInput from '@/components/forms/FormInput';
import AuthLayout from '@/components/layouts/AuthLayout'
import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react'

const NewDoctor = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<{
    fullNames: string;
    organization: string;
    phoneNumber: string;
    email: string;
    gender: string;
    country: string;
    cv: File | null;
    description: string;
    specialization: string;
  }>({
    fullNames: '',
    organization: '',
    phoneNumber: '',
    email: '',
    gender: '',
    description: '',
    country: '',
    cv: null,
    specialization: ''
  });

  const handleCancel = () => {
    setFormData({
      fullNames: '',
      organization: '',
      phoneNumber: '',
      email: '',
      gender: '',
      description: '',
      specialization: '',
      cv: null,
      country: ''
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/doctor/dashboard');
    }, 2000)
  }

  return (
    <>
      <Head>
        <title>D Treat | complete your profile</title>
      </Head>
      <AuthLayout pageTitle='complete your profile'>
        <form onSubmit={(e) => handleSubmit(e)} className='w-full px-12 space-y-6 flex flex-col'>
          <div className='space-y-1 self-start'>
            <h1 className='text-secondary-100 text-3xl font-medium'>Signup </h1>
            <p className='text-gray-400 text-lg'>Welcome to D-treat. Please enter your details</p>
          </div>
          <div className='w-full grid grid-cols-2 gap-4'>

            <FormInput placeholder='Full Names' value={formData.fullNames} type='email'
              onChange={(e) => setFormData((prev) => {
                return {
                  ...prev,
                  fullNames: e.target.value
                }
              })}
            />
            <FormInput placeholder='Organization' value={formData.organization} type='text'
              onChange={(e) => setFormData((prev) => {
                return {
                  ...prev,
                  organization: e.target.value
                }
              })}
            />
            <FormInput placeholder='Phone Number' value={formData.phoneNumber} type='tel'
              onChange={(e) => setFormData((prev) => {
                return {
                  ...prev,
                  phoneNumber: e.target.value
                }
              })}
            />
            <FormInput placeholder='Email' value={formData.phoneNumber} type='email'
              onChange={(e) => setFormData((prev) => {
                return {
                  ...prev,
                  email: e.target.value
                }
              })}
            />
            <div className='col-span-2 grid grid-cols-2 gap-4'>
              <div className='w-full flex flex-col gap-4'>
                <FormInput placeholder='CV' value={formData.cv?.name} type='file'
                  onChange={(e) => setFormData((prev) => {
                    return {
                      ...prev,
                      cv: e.target.files ? e.target.files[0] : null
                    }
                  })}
                />
                <FormInput placeholder='Specialization' value={formData.specialization} type='text'
                  onChange={(e) => setFormData((prev) => {
                    return {
                      ...prev,
                      specialization: e.target.value
                    }
                  })}
                />

              </div>
              <FormInput placeholder='Description(bio)' textarea value={formData.phoneNumber}
                onChange={(e) => setFormData((prev) => {
                  return {
                    ...prev,
                    description: e.target.value
                  }
                })}
              />
            </div>
            <div className='w-full pt-5 flex flex-col items-center gap-4'>
              <Button type='submit'>
                {loading ? <Spinner /> : 'Sign Up'}
              </Button>
                <div className='w-full flex items-center gap-4 px-4'>
                  <div className='w-40 h-[2px] bg-gray-200'/>
                  <span>OR</span>
                  <div className='w-40 h-[2px] bg-gray-200'/>

                </div>
              <Button dark>
                Sign up with Google
              </Button>
              <div className='flex gap-2'>
                <span>Already a member?</span>
                <Link href={'/doctor/login'} className='text-primary-100'>
                  Login
                </Link>
              </div>
            </div>
          </div>

        </form>
      </AuthLayout>
    </>
  )
}

export default NewDoctor