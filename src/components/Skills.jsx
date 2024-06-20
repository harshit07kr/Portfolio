import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/javascript.png';
import tw from '../assets/tailwind.png';
import reactimage from '../assets/react.png';
import firebase from '../assets/Firebase_icon.png';
import gitimage from '../assets/git.png';

const Skills = () => {
    const skills = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-indigo-800',
        },
        {
            id: 3,
            src: js,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            src: tw,
            title: 'TailWind',
            style: 'shadow-blue-500',
        },
        {
            id: 5,
            src: reactimage,
            title: 'React',
            style: 'shadow-blue-500',
        },
        {
            id: 6,
            src: firebase,
            title: 'FireBase',
            style: 'shadow-yellow-500',
        },
        {
            id: 7,
            src: gitimage,
            title: 'Git',
            style: 'shadow-red-500',
        },
    ];
    return (
        <div
            name="skills"
            className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:min-h-screen md:pl-20 pt-20"
        >
            <div className="max-w-screen-lg p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Skills
                    </p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {skills.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
