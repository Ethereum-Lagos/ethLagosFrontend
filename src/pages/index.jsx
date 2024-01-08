import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Fragment } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';
import SpeakerCard from '@/components/SpeakerCard';
import Accordion from '@/components/Accordion';

const Countdown = dynamic(() => import('@/components/Countdown'), { ssr: false });


export default function Home() {
  const accordionData = [
    {
      title: 'Can I be a speaker at ETHLagos ?',
      content: `We receives significant volume of  request, you might have a chance if you applied early enough. `
    },
    {
      title: 'Need an invitation letter for your visa?',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam`
    },
    {
      title: 'What are the ticket price for ETHLagos?',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto`
    },
    {
      title: 'What if I have more questions?',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto`
    }
  ];
  return (
    <Fragment>
      <title>ETH Lagos</title>
      <Header />
      <Countdown />
      <div>
        <img src="./images/illustrations.png" alt="" />
        <div className='bg-[#0A0E00] justify-between lg:flex'>
          <div className='text-[#FFE20A] lg:p-20 p-4 my-auto'>
            <p className='font-bold text-lg'>About</p>
            <p className='font-bold text-3xl'>ETH Lagos</p>

            <p className='my-10 text-base'>ETH Lagos is an outstretch of the Ethereum Global Conference
              to the City of Lagos Nigeria, it brings together professionals and
              Enthusiast in the blockchain space from all over Lagos and the
              country at large. ETH Lagos provides opportunities for growth, networking and educates participants on the upgrades and updates
              on the Ethereum blockchain.</p>
            <button className='bg-[#FFE20A] p-3 rounded-md px-10 text-[#0A0E00]'>Register Now</button>
          </div>
          <img className='mt-16' src="/images/about.png" alt="" />
        </div>
      </div>
      <section className='lg:p-20 p-4'>
        <div>
          <p className='font-bold text-lg'>Meet our</p>
          <p className='font-bold text-3xl'>Speakers</p>
          <div className='flex flex-wrap lg:m-8 m-4 justify-between'>
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />
          </div>
        </div>
      </section>
      <section className='lg:p-20 p-4 sm:my-10'>
        <div>
          <p className='font-bold text-lg'>Get to know</p>
          <p className='font-bold text-3xl'>Our Partners</p>
          <div className='lg:flex lg:w-[60%] my-10 mx-auto justify-evenly'>
            <img className='my-auto mx-auto sm:my-2 h-14' src="/images/patners/img1.png" alt="" />
            <img className='my-auto h-10 mx-auto sm:my-2' src="/images/patners/img2.png" alt="" />
            <img className='my-auto h-10 mx-auto sm:my-2' src="/images/patners/img3.png" alt="" />
          </div>
          <div className='lg:flex lg:w-[70%] lg:my-10 mx-auto justify-evenly'>
            <img className='my-auto h-14 mx-auto sm:my-2' src="/images/patners/img4.png" alt="" />
            <img className='my-auto h-10 mx-auto sm:my-2' src="/images/patners/img5.png" alt="" />
            <img className='my-auto h-14 mx-auto sm:my-2' src="/images/patners/img6.png" alt="" />
          </div>
          <div className='text-center'>
            <button className='bg-[#0A0E00] px-10 p-2 rounded-sm text-[#FFE20A]'>Partner with us</button>
          </div>
        </div>
      </section>
      <section>
        <div className='bg-[#0A0E00] justify-between lg:flex'>
          <div className='text-[#FFE20A] lg:p-20 p-4 my-auto'>
            <p className='font-bold text-lg'>Join our</p>
            <p className='font-bold text-3xl'>Community</p>

            <p className='my-10 text-base'>The Ethereum Lagos community welcomes with opened hands Anyone who want to learn and grow in the blockchain space.
              As blockchain is become the order of the day, we are equipping, helping and encouraging the younger generation in our localities and beyond to pick up the pace and join the global market , our Community has place for everyone from all tech careers.</p>
            <button className='bg-[#FFE20A] p-3 rounded-md px-10 text-[#0A0E00]'>Join Community</button>
          </div>
          <img className='mt-16' src="/images/community.png" alt="" />
        </div>
      </section>
      <section className='lg:p-20 p-4'>
        <div>
          <p className='font-bold text-lg'>Learn  more</p>
          <p className='font-bold text-3xl'>FAQ</p>
          <div className='lg:p-8 p-4 mt-8 bg-[#0A0E00] text-[#FFE20A] border-8 border-[#FFE20A]'>
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} />
            ))}
          </div>
        </div>
      </section>
      <Footer />

    </Fragment>
  )
}
