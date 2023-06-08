import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {OverView} from '../pages/doctor/overView'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <OverView />
    </div>
  )
}
