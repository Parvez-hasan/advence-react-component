import React from 'react'

export const Link = ({link}) => {
  
    
  return (
   

        
            <li className='lg:mr-2 px-4 hover:bg-amber-400 space-y-2 hover:text-black '>
                <a href={link.path}>{link.label}</a>
            </li>

       

   
  )
}
