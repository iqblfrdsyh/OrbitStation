import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <section id='about' className='mt-20 sm:mt-32 px-5 sm:px-[60px]'>
            <div className='flex justify-between items-center flex-col gap-14 sm:flex-row '>
                <Image src='/images/iss.svg' alt='iss' width={650} height={650} className='mt-5' />
                <div className='flex flex-col gap-5'>
                    <h3 className='text-[32px] font-semibold text-left'>What is ISS?</h3>
                    <p className='max-w-[600px] text-[20px] opacity-80 tracking-[1px]'>The International Space Station (ISS) is a large space station in low Earth orbit, built and maintained by NASA, Roscosmos, ESA, JAXA, and CSA. It serves as a platform for scientific experiments in microgravity and for studying the space environment. The ISS is the largest space station ever built and plays a key role in advancing space research.</p>
                </div>
            </div>
        </section>
    )
}

export default About