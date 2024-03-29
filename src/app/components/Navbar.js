'use client'

import '../styles/nav.scss';
import { useState } from "react";
import Link from "next/link"
import { usePathname} from 'next/navigation';
import { useRouter } from 'next/router';
 

export default function Navbar() {
    const path = usePathname();
 
    const pathnamed = ()=>{
        return path.split('/')[1]

    }
 
    const pathname = pathnamed()
    return (
        
        <nav className='navbar'>
            <div className='nav-links'>
                
                <div className={`navbar-menu ${pathname === '/projects' ? 'active' : ''}`}>
                    <Link href='/'>
                        <label className='link'>Home</label>
                    </Link>
                </div>
                <div className={`navbar-menu ${pathname === '/projects' ? 'active' : ''}`}>
                    <Link href='/projects'>
                        <label className='link'>Projects</label>
                    </Link>
                </div>
                <div className={`navbar-menu ${pathname === '/research' ? 'active' : ''}`}>
                    <Link href='/research'>
                        <label className='link'>Reseach</label>
                    </Link>
                </div>
                <div className={`navbar-menu ${pathname === '/blogs' ? 'active' : ''}`}>
                    <Link href='/blogs'>
                        <label className='link'>Blogs</label>
                    </Link>
                </div>
            </div>



        </nav>
    );
}