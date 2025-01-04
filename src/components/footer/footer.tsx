import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='text-white text-center py-5'>
            <p>&copy; 2025 <Link href={"#"} className='underline text-[#5A73FF]'>OrbitStation</Link>. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer