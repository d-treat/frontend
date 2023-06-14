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
        title:'Find a Doctor',
        description:'Choose your doctor from thousands of specialist, general, and trusted hospitals'
    },
    {
        title:"Health Support",
        description:"Ask our health support team regarding your health and get a free consultation"
    },
    {
        title:"Online Pharmacy",
        description:"Buy your medicines with our mobile application with a simple delivery system"
    },
    {
        title:"Consultation",
        description:"Free consultation with our trusted doctors and get the best recomendations"
    }
]