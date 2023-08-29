import Button from '@/components/common/button'
import Spinner from '@/components/common/spinner'
import FormInput from '@/components/forms/FormInput'
import AuthLayout from '@/components/layouts/AuthLayout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'

const DoctorLogin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

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
        <title>D Tret | Login to your account</title>
      </Head>
      <AuthLayout pageTitle='Login to your account'>
        <form onSubmit={(e) => handleSubmit(e)} className='w-1/2 px-12 space-y-6 flex flex-col items-center'>
          <h1 className='text-secondary-100 text-3xl font-medium'>Welcome Back </h1>
          <Button dark>
            Login via google
          </Button>
          <div className='w-full flex items-center gap-4 px-4'>
            <div className='w-40 h-[2px] bg-gray-200' />
            <span>OR</span>
            <div className='w-40 h-[2px] bg-gray-200' />

          </div>
          <div className='w-full grid grid-cols-1 gap-4'>

            <FormInput placeholder='Email' value={formData.email} type='email'
              onChange={(e) => setFormData((prev) => {
                return {
                  ...prev,
                  email: e.target.value
                }
              })}
            />
            <FormInput placeholder='Password' value={formData.password} type='password'
              onChange={(e) => setFormData((prev) => {
                return {
                  ...prev,
                  password: e.target.value
                }
              })}
            />
          </div>
          <div className='w-full pt-5 flex flex-col items-center gap-4'>
            <Button type='submit'>
              {loading ? <Spinner /> : 'Login'}
            </Button>
          </div>
        </form>
      </AuthLayout >
    </>
  )
}

export default DoctorLogin