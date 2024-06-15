import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faTimes} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-scroll";
const navbar = () => {
  const[nav,setnav] = useState(false);
    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "projects",
        },
        {
          id: 4,
          link: "skills",
      },
        {
            id: 5,
            link: "contact",
        },
    ];
  return (
    <div className="flex justify-between items-center w-full h20 px-4 text-white bg-black fixed">
        <div className="text-4xl font-sign ml-2 my-2">Harshit</div>
        <ul className='hidden md:flex'>
          {links.map(({id,link})=>(
            <li key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"><Link to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
        <div onClick={()=>setnav(!nav)}className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
          {nav ? <FontAwesomeIcon icon={faTimes} fontSize={30}/> : <FontAwesomeIcon icon={faBars} fontSize={30}/>}
        </div>

        {nav && (
          <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-50'>
          {links.map(({id,link})=>(
            <li key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 text-4xl py-6">
              <Link onClick={()=>setnav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
        )}
    </div>
    
  )
}

export default navbar