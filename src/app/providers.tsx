"use client"

import Footer from '@/components/footer/footer';
import NavigationBar from '@/components/navbar/navbar';
import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import { usePathname } from 'next/navigation';

function Providers({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const hiddenMenu = pathname.includes("/trackiss");

    return (
        <NextUIProvider>
            {!hiddenMenu && (
                <>
                    <div className='bg-lightsaber bg-no-repeat bg-inherit h-screen w-full absolute opacity-90 z-0'></div>
                    <NavigationBar />
                </>
            )}
            <main className='h-fit overflow-x-hidden'>
                {children}
            </main>
            {!hiddenMenu && <Footer />}
        </NextUIProvider>
    );
}

export default Providers