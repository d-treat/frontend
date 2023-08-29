import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";

export default function useAuth() {
    const [loggingIn, setLoggingIn] = useState(false);
    const router = useRouter();
    const [user, setUser] = useState(null);

    const login = async (email: string, password: string) => {
        setLoggingIn(true);
        try {
            const { data } = await axios.post('/auth/login', {
                email, password
            });
            if (data.success) {
                if (data.admin) {
                    router.push('/admin/dashboard');
                } else {
                    router.push('/doctor/dashboard')
                }
            }
        } catch (error) {
            console.log(error);
            toast.error("An error occured while logging in! try again later!");
        } finally {
            setLoggingIn(false);
        }
    }

    return {
        login, loggingIn
    }
}