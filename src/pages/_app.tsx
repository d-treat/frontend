import '@/styles/globals.css';
import "@/styles/nprogress.css";
import ThemeProvider from '@/theme';
import type { AppProps } from 'next/app';
import { League_Spartan,Raleway } from "next/font/google";
import Router, { useRouter } from 'next/router';
import { LocalizationProvider } from 'src/locales';
// @ts-ignore
import { MotionLazy } from '@/components/animate/motion-lazy';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import SnackbarProvider from '@/components/snackbar/snackbar-provider';
// @ts-ignore
import NProgress from 'nprogress';
import { Toaster } from 'react-hot-toast';
import { RecoilRoot } from 'recoil';
import { SettingsProvider } from '../../src/components/settings';
// sections

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  preload: true
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
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
                <div className={`${raleway.className}`}>
                  <Toaster />
                  {
                    router.pathname.includes("/dashboard") ?
                      <DashboardLayout>
                        {/* @ts-ignore */}
                        <Component {...pageProps} />
                      </DashboardLayout> :
                      // @ts-ignore
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
