import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/javascript.png';
import tw from '../assets/tailwind.png';
import reactimage from '../assets/react.png';
import firebase from '../assets/Firebase_icon.png';
import gitimage from '../assets/git.png';
import nodeimage from '../assets/nodejs.png';
import expressimage from '../assets/express.png';
import mongoDBimage from '../assets/mongoDB.png';
import arcjet from '../assets/arcjet.png';
import clerk from '../assets/clerk.png';
import gemini from '../assets/gemini.png';
import inngest from '../assets/inngest.png';
import nextjs from '../assets/nextjs.png';
import oracle from '../assets/oracle.png';
import prisma from '../assets/prisma.png';
import postman from '../assets/postman.png';
import schadcn from '../assets/schadcn.png';
import supabase from '../assets/supabase.png';

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
            src: schadcn,
            title: 'Schadcn/ui',
            style: 'shadow-gray-300',
        },
        {
            id: 6,
            src: reactimage,
            title: 'ReactJS',
            style: 'shadow-blue-500',
        },
        {
            id: 7,
            src: nextjs,
            title: 'NextJs',
            style: 'shadow-gray-600',
        },
        {
            id: 8,
            src: firebase,
            title: 'FireBase',
            style: 'shadow-yellow-500',
        },
        {
            id: 9,
            src: supabase,
            title: 'Supabase',
            style: 'shadow-green-500',
        },
        
        {
            id: 10,
            src: nodeimage,
            title: 'NodeJS',
            style: 'shadow-green-500',
        },
        {
            id: 11,
            src: expressimage,
            title: 'ExpressJS',
            style: 'shadow-gray-600',
        },
        {
            id: 12,
            src: clerk,
            title: 'Clerk',
            style: 'shadow-gray-300',
        },
        {
            id: 13,
            src: mongoDBimage,
            title: 'MongoDB',
            style: 'shadow-green-500',
        },
        {
            id: 14,
            src: prisma,
            title: 'Prisma',
            style: 'shadow-gray-300',
        },
        {
            id: 15,
            src: gemini,
            title: 'Gemini 1.5 Flash',
            style: 'shadow-blue-500',
        },
        {
            id: 16,
            src: oracle,
            title: 'Oracle Analytics Publisher',
            style: 'shadow-orange-700',
        },
        {
            id: 17,
            src: arcjet,
            title: 'Arcjet',
            style: 'shadow-gray-300',
        },
        {
            id: 18,
            src: inngest,
            title: 'Inngest',
            style: 'shadow-gray-300',
        },
        {
            id: 19,
            src: gitimage,
            title: 'Git',
            style: 'shadow-red-500',
        },
        {
            id: 20,
            src: postman,
            title: 'Postman',
            style: 'shadow-orange-800',
        },
    ];
    return (
        <div
            name="skills"
            className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:min-h-screen pt-20"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
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
