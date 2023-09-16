import axios from "@/axios.config";
import { IAdmin, IDoctor } from "@/types";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";

export default function useAuth() {
    const [loggingIn, setLoggingIn] = useState(false);
    const router = useRouter();
    const [user, setUser] = useState<IDoctor | IAdmin | null>(null);

    const login = async (email: string, password: string) => {
        setLoggingIn(true);
        try {
            const { data } = await axios.post('/auth/login', {
                email, password
            });
            if (data.success) {
                if (data.admin) {
                    setUser(data.admin as IAdmin);
                    router.push('/admin/dashboard');
                } else {
                    setUser(data.doctor as IDoctor);
                    router.push('/doctor/dashboard')
                }
            }
        } catch ({ response }: any) {
            console.log(response)
            if (response?.status === 400) {
                toast.error("Invalid Credentials");
            } else {
                toast.error("Something went wrong");
            }
        } finally {
            setLoggingIn(false);
        }
    }

    return {
        login, loggingIn, user
    }
}