import Image from 'next/image'
import { Inter } from 'next/font/google'
import CaseOverview from './cases/caseOverview'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <CaseOverview></CaseOverview>
    </main>
  )
}
