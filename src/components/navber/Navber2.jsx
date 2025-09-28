import React from 'react'
import { Link } from './Link';


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

    <nav>
        <ul className='flex gap-5 '>
            {
                // navbarData.map( route => <li><a href={route.path}>{route.label}</a></li> )
                navbarData.map(link => <Link key={link.id} link={link}></Link>)
    
                
            }
          
            
        </ul>
    </nav>

    </div>
  )
}
