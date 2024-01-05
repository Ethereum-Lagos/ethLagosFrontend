import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Fragment } from "react";
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Fragment>
       <title>ETH Lagos</title>
  <Header/>
 

    </Fragment>
  )
}
