import axios from "@/axios.config";
import { useState } from "react";
import toast from "react-hot-toast";

interface Options {
    fullNames: string;
    organization: string;
    phoneNumber: string;
    email: string;
    address: string;
    // numberOfEmployees: string;
    message: string;
    proofOfOwnership: File | null;
}

export default function useRequests() {
    const [creatingRequest, setCreatingRequest] = useState(false);

    const createRequest = async ({ proofOfOwnership, message, phoneNumber, address, email, organization, fullNames, }: Options) => {
        setCreatingRequest(true);
        try {

            const formData = new FormData();
            formData.append('file', proofOfOwnership!);

            const { data } = await axios.post('/files/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (data.success) {
                const { file } = data;
                const { data: { success } } = await axios.post('/requests', {
                    fileId: file._id,
                    message,
                    phoneNumber,
                    address,
                    email,
                    organization,
                    fullNames,
                });

                if (success) {
                    toast.success('Request created successfully');
                } else {
                    toast.error('Error creating request');
                }
            } else {
                toast.error('Error uploading proof of ownership');
            }
        } catch (error) {


        } finally {
            setCreatingRequest(false);
        }
    }


    return { creatingRequest, createRequest }

}