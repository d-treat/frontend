import RequestCreated from '@/components/RequestCreated'
import Button from '@/components/common/button'
import Spinner from '@/components/common/spinner'
import FormInput from '@/components/forms/FormInput'
import AuthLayout from '@/components/layouts/AuthLayout'
import useRequests from '@/hooks/useRequests'
import { requestCreatedAtom } from '@/store/atoms'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { FormEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { useRecoilValue } from 'recoil'

const RequestPartnership = () => {
  const router = useRouter();
  const { creatingRequest, createRequest } = useRequests();
  const requestCreated = useRecoilValue(requestCreatedAtom);

  const [formData, setFormData] = useState<{
    fullNames: string;
    organization: string;
    phoneNumber: string;
    email: string;
    address: string;
    // numberOfEmployees: string;
    message: string;
    proofOfOwnership: File | null;
  }>({
    fullNames: '',
    organization: '',
    phoneNumber: '',
    email: '',
    address: '',
    message: '',
    // numberOfEmployees: '',
    proofOfOwnership: null
  });

  const handleCancel = () => {
    setFormData({
      fullNames: '',
      organization: '',
      phoneNumber: '',
      email: '',
      address: '',
      message: '',
      // numberOfEmployees: '',
      proofOfOwnership: null
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.fullNames || !formData.organization || !formData.phoneNumber || !formData.email || !formData.address || !formData.message || !formData.proofOfOwnership) {
      toast.error('Please fill all fields');
      return;
    }
    createRequest(formData);
  }

  return (
    <>
      <Head>
        <title>D Treat | Request Partnership</title>
      </Head>
      <AuthLayout pageTitle='Welcome to d-treat'>
        {!requestCreated ? <form onSubmit={(e) => handleSubmit(e)} className='w-full px-12 space-y-6'>
          <div className='space-y-1'>
            <h1 className='text-secondary-100 text-3xl font-medium'>Request Partnership</h1>
            <p className='text-gray-400 text-lg'>Welcome to D-treat. Please enter your details</p>
          </div>
          <div className='w-full grid grid-cols-2 gap-4'>
            <FormInput placeholder='Full Names' value={formData.fullNames} type='text'
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
            <FormInput placeholder='Email' value={formData.email} type='email'
              onChange={(e) => setFormData((prev) => {
                return {
                  ...prev,
                  email: e.target.value
                }
              })}
            />

            <div className='col-span-2 grid grid-cols-2 gap-4'>
              <div className='w-full flex flex-col gap-4'>
                <FormInput placeholder='Address' value={formData.address} type='text'
                  onChange={(e) => setFormData((prev) => {
                    return {
                      ...prev,
                      address: e.target.value
                    }
                  })}
                />
                <FormInput
                  // only accept pdf
                  accept='application/pdf'
                  file placeholder='Proof of ownership' value={formData.proofOfOwnership?.name} type='file' onChange={(e) => setFormData((prev) => {
                    return {
                      ...prev,
                      proofOfOwnership: e.target.files ? e.target.files[0] : null
                    }
                  }
                  )} />

              </div>

              <FormInput placeholder='Message(Why should we have partnership with you)' value={formData.message} textarea
                onChange={(e) => setFormData((prev) => {
                  return {
                    ...prev,
                    message: e.target.value
                  }
                }
                )}
              />
            </div>
          </div>
          <div className='w-full gap-4  flex items-center justify-between'>
            <Button type='button' onClick={handleCancel}>
              Cancel
            </Button>
            <Button disabled={creatingRequest} dark type='submit'>
              {creatingRequest ? <Spinner /> : 'send request'}
            </Button>
          </div>
        </form> :
          <RequestCreated />}
      </AuthLayout>
    </>
  )
}

export default RequestPartnership