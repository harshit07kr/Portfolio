import React from 'react'
import tva from '../assets/Projects/TVA.png'
import currenzy from '../assets/Projects/Currenzy.png'
import Portfolio from '../assets/Projects/Portfolio.png'
const Project = () => {
    const openlink=(url)=>{
        window.open(url,'_blank','noopener,noreferrer');
    };
    const projects=[
        {
            id: 1,
            src: tva,
            live: "https://harshit07kr.github.io/TVA/",
            code: "https://github.com/harshit07kr/TVA",
        },
        {
            id: 2,
            src: currenzy,
            live: "https://harshit07kr.github.io/CURRENZY/",
            code: "https://github.com/harshit07kr/CURRENZY",
        },
        {
            id: 3,
            src: Portfolio,
            live: "#",
            code: "##",
        },
    ];
  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen md:pl-20">
    <div className="pb-8 pl-5">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
        </p>
        <p className="py-6">Check out my Projects right here</p>
    </div>
    <div className="w-full grid md:grid-cols-3 sm:grid-cols-1 gap-8 text-center py-8 px-12 sm:px-0 md:pr-12">
    {projects.map(({ id,src,live,code}) => (
            <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button onClick={()=>openlink(live)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Link
                </button>
                <button onClick={()=>openlink(code)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Project