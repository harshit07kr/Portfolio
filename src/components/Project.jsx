import React from 'react';
import tva from '../assets/Projects/TVA.png';
import currenzy from '../assets/Projects/Currenzy.png';
import Portfolio from '../assets/Projects/Portfolio.png';
import Joboard from '../assets/Projects/Joboard.png';
import exptr from '../assets/Projects/expensetracker.png';
import Wealth_AI from '../assets/Projects/Wealth_AI.png';

const Project = () => {
    const openlink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    const projects = [
        {
            id: 1,
            src: Wealth_AI,
          live: "http://wealth-finance-app.vercel.app/",
          code: "https://github.com/harshit07kr/Wealth-Finance-App",
        },
        {
            id: 2,
            src: exptr,
          live: "https://expense-tracker0-7.vercel.app/",
          code: "https://github.com/harshit07kr/Expense-Tracker-MERN",
        },
        {
            id: 3,
            src: Joboard,
          live: "https://joboard07.netlify.app/",
          code: "https://github.com/harshit07kr/Joboard",
        },
        {
            id: 4,
            src: currenzy,
            live: "https://harshit07kr.github.io/CURRENZY/",
            code: "https://github.com/harshit07kr/CURRENZY",
        },
        {
          id: 5,
          src: tva,
            live: "https://harshit07kr.github.io/TVA/",
            code: "https://github.com/harshit07kr/TVA",
        },
        {
            id: 6,
            src: Portfolio,
            live: "https://harshit07-portfolio.netlify.app/",
            code: "https://github.com/harshit07kr/Portfolio",
        },
    ];
    return (
        <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:min-h-screen md:pl-20">
            <div className="pb-8 pl-5 pt-20 md:pt-0">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    Projects
                </p>
                <p className="py-6">Check out my Projects right here</p>
            </div>
            <div className="w-full grid md:grid-cols-3 sm:grid-cols-1 gap-8 text-center py-8 px-12 sm:px-0 md:pr-12">
                {projects.map(({ id, src, live, code }) => (
                    <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
                        <img
                            src={src}
                            alt=""
                            className="rounded-md duration-200 hover:scale-105"
                        />
                        <div className="flex items-center justify-center">
                            <button onClick={() => openlink(live)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                Link
                            </button>
                            <button onClick={() => openlink(code)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                Code
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
