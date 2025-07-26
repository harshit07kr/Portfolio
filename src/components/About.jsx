import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pl-5 pr-5 pt-4 md:pl-20">
      <div className="pb-8">
        <div className="text-4xl font-bold inline border-b-4 underline decoration-gray-500 underline-offset-8 ">
          <p>About</p>
        </div>
        <p className="text-base md:text-xl mt-10">
        I'm Harshit, a passionate Computer Science and Engineering student at Birla Institute of Technology, Mesra, with a strong inclination toward software engineering and building impactful digital solutions. I specialize in MERN and Next.js development, working extensively with technologies like MongoDB, Express.js, ReactJS, Node.js, Tailwind CSS, and shadcn/ui to create scalable and visually engaging web applications. I also leverage platforms like Firebase, Supabase, Clerk, and Prisma for robust backend and authentication solutions.
        </p>
        <br />
        <p className="text-base md:text-xl">
        
My experience includes integrating Gemini 1.5 Flash for GenAI-powered applications, reflecting my eagerness to explore cutting-edge tools in modern development. I've also gained hands-on exposure to enterprise-level software through my internship at Accenture, where I contributed to HR reporting using Oracle Fusion HCM Cloud and BI Publisher.
<br/>
My passion for software development is fueled by a strong track record and a commitment to continuous improvement. I have tackled over 450 data structure and algorithm challenges on platforms like LeetCode, honing my problem-solving skills and technical proficiency. My competitive spirit is reflected in my 11th place finish in Code360 Weekly Contest 135, with a maximum rating of 1896.
<br/>
I have also excelled in national competitive exams, ranking in the top 1.7% nationwide in JEE MAINS 2022 and achieving outstanding results in both WBJEE 2022 and JEE ADVANCED 2022. These achievements underscore my dedication to excellence and my readiness to take on new and demanding challenges.
        </p>
      </div>
    </div>
  );
};

export default About;
