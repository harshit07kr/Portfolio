import React from 'react'
import {FaCode, FaGithub,FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";
const Sociallinks = () => {
    const links = [
        {
          id: 1,
          child: (
            <>
              LinkedIn <FaLinkedin size={30} />
            </>
          ),
          href: "https://www.linkedin.com/in/harshit-kumar-thakur/",
          style: "rounded-tr-md",
        },
        {
          id: 2,
          child: (
            <>
              GitHub <FaGithub size={30} />
            </>
          ),
          href: "https://github.com/harshit07kr",
        },
        {
          id: 3,
          child: (
            <>
              Codolio <FaCode size={30} />
            </>
          ),
          href: "https://codolio.com/profile/harshit_7904",
        },
        {
          id: 4,
          child: (
            <>
              Mail <HiOutlineMail size={30} />
            </>
          ),
          href: "mailto:harshitkr9435@gmail.com",
        },
        {
          id: 5,
          child: (
            <>
              Resume <BsFillPersonLinesFill size={30} />
            </>
          ),
          href: "/Harshit_Resume.pdf",
          style: "rounded-br-md",
          download: true,
        },
      ];   
    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
          <ul>
            {links.map(({ id, child, href, style, download }) => (
              <li
                key={id}
                className={
                  "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
                  " " +
                  style
                }
              >
                <a
                  href={href}
                  className="flex justify-between items-center w-full text-white"
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    };

export default Sociallinks