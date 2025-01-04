import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const Banner = () => {
    return (
        <div className="relative h-[550px]">
            <div className='mt-48 absolute w-full py-10 sm:py-0 sm:h-80 bg-[#1F1F1F] left-0'>
                <div className='flex flex-col justify-center items-center gap-2 h-full'>
                    <h1 className='text-[30px] text-center sm:text-[45px] text-white font-bold tracking-[1px]'>Choose OrbitStation to Track ISS Satellites</h1>
                    <p className='text-[15px] sm:text-[18px] max-w-[350px] sm:max-w-[800px] text-center tracking-[1px]'>Choose OrbitStation for seamless tracking of ISS satellites. Experience precision, reliability, and the difference we bring to satellite observation.</p>
                    <div className='mt-5'>
                        <Link href='/trackiss'>
                            <Button href='/trackiss' radius='sm' className='px-8 font-semibold text-[15px] bg-white'>Track ISS Now</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner