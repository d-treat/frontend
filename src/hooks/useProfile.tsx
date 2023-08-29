import axios from "@/axios.config";
import { useState } from "react";
import toast from "react-hot-toast";

interface Options {
    fullNames: string;
    organization: string;
    phoneNumber: string;
    email: string;
    gender: "male" | "female" | "other";
    password: string;
    cv: File | null;
    description: string;
    specialization: string;
}

export default function useProfile() {
    const [creatingProfile, setCreatingprofile] = useState(false);

    const createProfile = async ({ fullNames, organization, phoneNumber, password, email, gender, specialization, cv, description }: Options) => {
        setCreatingprofile(true);

        try {
            const formData = new FormData();
            formData.append('file', cv!);

            const { data } = await axios.post('/files/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (data.success) {
                const { file } = data;
                const { data: { success } } = await axios.post('/doctors', {
                    cv: file._id,
                    fullName: fullNames,
                    organization,
                    bio: description,
                    gender,
                    password,
                    specialization,
                    email,
                    phoneNumber,
                });

                if (success) {
                    toast.success('Profile updated successfully');
                    setCreatingprofile(true);
                } else {
                    toast.error('Error updating profile');
                }
            }
        } catch (error) {
            console.log(error);

        } finally {
            setCreatingprofile(false);
        }
    }

    return {
        creatingProfile,
        createProfile
    }
}