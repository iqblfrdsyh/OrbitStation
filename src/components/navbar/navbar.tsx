import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

interface ILink {
    label: string;
    href: string;
}


const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

    const navlinks: ILink[] = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Timeline', href: '#timeline' },
    ]
    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className='py-4 px-5 sm:px-[60px] z-20 absolute' position='static'>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <h1 className="font-bold text-[25px] tracking-[1px]">Orbit<span className='text-[#2948F6]'>Station</span></h1>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-8" justify="center">
                {navlinks.map((item, index) => (
                    <NavbarItem key={index}>
                        <Link color="foreground" href={item.href} className='tracking-[1px] hover:opacity-60 duration-200'>
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}

            </NavbarContent>
            <NavbarContent justify="end">
            </NavbarContent>
            <NavbarMenu>
                {navlinks.map((item, index) => (
                    <NavbarMenuItem key={index}>
                        <Link
                            className="w-full tracking-[1px]"
                            href={item.href}
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}

export default NavigationBar