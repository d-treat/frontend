import AdminDashboardLayout from '@/components/layouts/AdminDashboardLayout';
import DoctorDashboardLayout from '@/components/layouts/DoctorDashboardLayout';
import '@/styles/globals.css';
import "@/styles/nprogress.css";
import type { AppProps } from 'next/app';
import { League_Spartan } from "next/font/google";
import { LocalizationProvider } from 'src/locales';
import ThemeProvider from '@/theme';
import Router, { useRouter } from 'next/router';
// @ts-ignore
import NProgress from 'nprogress';
import { Toaster } from 'react-hot-toast';
import { RecoilRoot } from 'recoil';
import { MotionLazy } from '@/components/animate/motion-lazy';
import SnackbarProvider from '@/components/snackbar/snackbar-provider';
import { SettingsProvider, SettingsDrawer } from '../../src/components/settings';
// sections

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  preload: true
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
    <LocalizationProvider>
      <SettingsProvider
        defaultSettings={{
          themeMode: 'light', // 'light' | 'dark'
          themeDirection: 'ltr', //  'rtl' | 'ltr'
          themeContrast: 'default', // 'default' | 'bold'
          themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
          themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
          themeStretch: false,
        }}
      >
        <ThemeProvider>
          <MotionLazy>
            <SnackbarProvider>
              <RecoilRoot>
                <div className={`${leagueSpartan.className}`}>
                  <Toaster />
                  {
                    (router.pathname.includes('/admin') && !router.pathname.includes("/login")) ?
                      <AdminDashboardLayout>
                        <Component {...pageProps} />
                      </AdminDashboardLayout> :
                      (router.pathname.includes('/doctor') && !router.pathname.includes("/login") && !router.pathname.includes('/register')) ?
                        <DoctorDashboardLayout>
                          <Component {...pageProps} />
                        </DoctorDashboardLayout> :
                        <Component {...pageProps} />
                  }
                </div>
              </RecoilRoot>
            </SnackbarProvider>
          </MotionLazy>
        </ThemeProvider>
      </SettingsProvider>
    </LocalizationProvider>
  )
}
