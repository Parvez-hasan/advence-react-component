import React from 'react'

export const Link = ({link}) => {
   console.log(link);
    
  return (
    <div>

         <ul>
            <li><a href={link.path}>{link.label}</a></li>
         </ul>

    </div>
  )
}
