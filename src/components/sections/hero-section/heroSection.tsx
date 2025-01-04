import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import { TextGenerateEffect } from '../../textGenerateEffect/textGenerateEffect'

const HeroSection = () => {
    return (
        <section className='relative h-screen w-full z-10 px-5 sm:px-[60px]' id='home'>
            <div className='absolute h-full w-full flex flex-col justify-center'>
                <div className='flex justify-between items-center overflow-hidden'>
                    <div className='flex flex-col gap-4 my-10 sm:my-28'>
                        <TextGenerateEffect words='ISS Tracking Made Easy with OrbitStation' />
                        <p className='max-w-[350px] sm:max-w-[400px] text-[19px] tracking-[1px] opacity-55 font-medium'>Discover the latest information about the world&apos;s largest satellite.</p>
                        <div>
                            <Button onPress={() => window.location.replace("/trackiss")} className='bg-[#ededed] px-7 font-medium text-[15px] tracking-[1px]' radius='sm'>
                                Track ISS Now
                            </Button>
                        </div>
                    </div>
                </div>
                <Image src="/images/earth.svg" alt='earth' width={630} height={630} draggable={false} className='absolute t right-0 bottom-0 hidden sm:block sm:top-0 z-50' priority={true} />
            </div>
        </section>
    )
}

export default HeroSection