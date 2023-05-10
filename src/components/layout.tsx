import Navbar from './navbar';
import Footer from './footer';
import Hero from '../pages/hero'
import Link from "next/link" 

export default function Layout() {
  return (
    <>
        {/* <Navbar /> */}
        <main>
            <Hero/>
        </main>
        {/* <Footer /> */}
    </>
  );
}