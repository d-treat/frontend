import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/24/outline'
import FormInput from '../forms/FormInput';
import { toast } from 'react-hot-toast';
import Spinner from '../common/spinner';



export default function AddNewCase() {
    const [open, setOpen] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleClose = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            toast.success('case created successfully');
            setOpen(false);
        }, 2000)
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                <div>
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                                        <PlusIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900 pb-2">
                                            create a new case
                                        </Dialog.Title>
                                        <div className="mt-2 flex flex-col gap-3">
                                            <FormInput
                                                placeholder='patient name'
                                                type='text'
                                            />
                                            <FormInput
                                                placeholder="gender"
                                                type="dropdown"
                                                options={[
                                                { value: 'male', label: 'Male'  },
                                                { value: 'female', label: 'Female' },
                                                ]}
                                            />
                                            <FormInput placeholder='Diseases' type='text' />
                                            <FormInput placeholder='Doctors assigned' type='text' />
                                            <FormInput placeholder='Symptoms' type='textarea' />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-secondary-100 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={handleClose}
                                    >
                                        {loading ? <Spinner /> : 'create case'}
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
