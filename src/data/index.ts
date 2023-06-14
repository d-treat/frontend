import { ILink } from "@/types/components";

export const links: ILink[] = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: "Services",
        href: '#services'
    },
    {
        label: "Features",
        href: '#features'
    },
    {
        label: "Testimonials",
        href: '#testimonials'
    }
]

export const stats: { count: string, text: string }[] = [

    {
        count: '3.6K+',
        text: 'Online Appointments'
    },
    {
        count: "34",
        text: "Partner Hospitals"
    },
    {
        count: '1.2K+',
        text: "Patients Recovered"
    },
    {
        count: ' 96%',
        text: "Satisfaction Rate"
    }
]

export const services: { title: string, description: string }[] = [
    {
        title: 'Find a Doctor',
        description: 'Choose your doctor from thousands of specialist, general, and trusted hospitals'
    },
    {
        title: "Health Support",
        description: "Ask our health support team regarding your health and get a free consultation"
    },
    {
        title: "Online Pharmacy",
        description: "Buy your medicines with our mobile application with a simple delivery system"
    },
    {
        title: "Consultation",
        description: "Free consultation with our trusted doctors and get the best recomendations"
    }
]

export const testimonials: { name: string, image: string, description: string }[] = [
    {
        name: 'Edward Newgate',
        image: 'https://images.unsplash.com/photo-1581091019743-0b6e1b3b7d6e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yJTIwY29sb3JmdWwlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        description: 'Your dedicated patient engagement app and web portal allowed  us to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely. this is the solution we were looking for.”'
    },
    {
        name: "Gakwaya Edmond",
        image: "https://images.unsplash.com/photo-1581091019743-0b6e1b3b7d6e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yJTIwY29sb3JmdWwlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        description: "“Your dedicated patient engagement app and web portal allowed  us to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely. this is the solution we were looking for.”"
    },
]

export const features: { title: string, description: string, bg: string,textColor:string }[] = [
    {
        title: 'Audio Call',
        bg: "linear-gradient(131.63deg, rgba(226, 149, 120, 0.25) 26.47%, rgba(217, 217, 217, 0.1) 100%)",
        description: '',
        textColor:'#E29578'
    },
    {
        title: 'Chat',
        bg: "linear-gradient(66.04deg, rgba(217, 217, 217, 0.1) 0%, rgba(33, 141, 130, 0.25) 100%)",
        description: '',
        textColor:'#218D82'
    },
    {
        title: 'Video Call',
        bg: 'linear-gradient(228.37deg, rgba(33, 141, 130, 0.25) 26.47%, rgba(217, 217, 217, 0.1) 100%)',
        description: '',
        textColor:'#218D82'
    },
    {
        title: 'Messaging',
        bg: 'linear-gradient(112.35deg, rgba(226, 149, 120, 0.25) 2.19%, rgba(217, 217, 217, 0) 100%, rgba(217, 217, 217, 0.1) 100%)',
        description: '',
        textColor:'#E29578'
    }
]