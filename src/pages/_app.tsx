import AdminDashboardLayout from '@/components/layouts/AdminDashboardLayout';
import DoctorDashboardLayout from '@/components/layouts/DoctorDashboardLayout';
import '@/styles/globals.css'
import "@/styles/nprogress.css";
import type { AppProps } from 'next/app'
import { League_Spartan } from "next/font/google"
import { useRouter } from 'next/router';
import Router from 'next/router';
// @ts-ignore
import NProgress from 'nprogress';
import { Toaster } from 'react-hot-toast';
const leagueSpartan = League_Spartan({
  subsets: ["latin"],
});

NProgress.configure({
  showSpinner: false,
});

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div className={`${leagueSpartan.className}`}>
      <Toaster />
      {
        router.pathname.includes('/admin') ?
          <AdminDashboardLayout>
            <Component {...pageProps} />
          </AdminDashboardLayout> :
          router.pathname.includes('/doctor') ?
            <DoctorDashboardLayout>
              <Component {...pageProps} />
            </DoctorDashboardLayout> :
            <Component {...pageProps} />
      }
    </div>
  )
}
