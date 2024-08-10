import React from 'react';
import heroimage from "../assets/heroimage.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-scroll";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Home = () => {
  const [text] = useTypewriter({
    words: ["I'm a MERN Stack Developer"],
    loop: false,         // Stop after typing once
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pb-10 md:pb-20">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            {text}
            <Cursor cursorStyle="|" />
          </h2>
          
          <p className="text-gray-500 py-4 max-w-md">
            Hello, I'm Harshit Kumar Thakur, and welcome to my portfolio website where I showcase my technical skills and professional background.
          </p>
          
          <div>
            <Link 
              to="projects" 
              smooth 
              duration={500} 
              className="group text-white w-fit px-6 py-3 my-4 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <IoIosArrowForward size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>
        
        <div>
          <img src={heroimage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
