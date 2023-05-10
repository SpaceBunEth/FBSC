import { Inter } from 'next/font/google'
import Hero from '../pages/hero'
import Layout from '../components/layout'
import Soon from './soon'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="">

      {/* <Hero></Hero> */}
      <Layout/>

    </main>
  )
}
