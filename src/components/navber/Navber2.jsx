import React, { useState } from 'react'
import { Link } from './Link';
import { Menu, X } from 'lucide-react';


const navbarData = [
    {
        id: 1,
        label: "Home",
        path: "/"
    },
    {
        id: 2,
        label: "About",
        path: "/about"
    },
    {
        id: 3,
        label: "Services",
        path: "/services"
    },
    {
        id: 4,
        label: "Portfolio",
        path: "/portfolio"
    },
    {
        id: 5,
        label: "Blog",
        path: "/blog"
    },
    {
        id: 6,
        label: "Contact",
        path: "/contact"
    }
];

export const Navber2 = () => {
    const [open, setOpen] = useState(false);
    const Links =  navbarData.map(link => <Link key={link.id} link={link}></Link>)
    return (
        <div>
            {/* <nav>
        <ul className='flex gap-5'>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>about</li>
        </ul>
    </nav> */}
          <nav className='container mx-auto flex justify-between px-5 mt-3'>
             <span className='flex' onClick={() => setOpen(!open)}>
                {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}

                 <ul className={`md:hidden ${open ? "top-10" : "-top-40" } absolute duration-1000 bg-blue-600 text-white`}>
                    {Links}
                 </ul>

                <h2 className='ml-3'> Navber Logo</h2>
             </span>

                <ul className="md:flex hidden">

                    {
                       // navbarData.map( route => <li><a href={route.path}>{route.label}</a></li> )
                       Links

                    }

                </ul>
                <p>Sing Up</p>
            </nav>

        </div>
    )
}
