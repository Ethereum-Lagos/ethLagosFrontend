import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Fragment } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';
import AboutEthLagos from '@/components/AboutEthLagos';

const Countdown = dynamic(() => import('@/components/Countdown'), { ssr: false });

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Fragment>
       <title>ETH Lagos</title>
  <Header/>
 <Countdown/>
 <AboutEthLagos/>
 <Footer/>

    </Fragment>
  )
}
