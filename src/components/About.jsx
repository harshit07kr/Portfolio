import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pl-5 pr-5 pt-4 md:pl-20">
      <div className="pb-8">
        <div className="text-4xl font-bold inline border-b-4 underline decoration-gray-500 underline-offset-8 ">
          <p>About</p>
        </div>
        <p className="text-base md:text-xl mt-10">
        I'm Harshit, a dedicated Computer Science and Engineering student at Birla Institute of Technology Mesra, with a passion for software engineering. I excel in Data Structures and Algorithms and specialize in MERN stack development, which includes MongoDB, Express.js, ReactJS, and Node.js. Additionally, I have explored Tailwind CSS to ensure responsive and aesthetically pleasing websites. My expertise extends to Firebase Cloud Firestore for efficient data management and Firebase Authentication for secure and seamless user access. I am driven by innovation and committed to building robust, scalable web applications that provide exceptional user experiences.
        </p>
        <br />
        <p className="text-base md:text-xl">
        
My passion for software development is fueled by a strong track record and a commitment to continuous improvement. I have tackled over 250 data structure and algorithm challenges on platforms like LeetCode, honing my problem-solving skills and technical proficiency. My competitive spirit is reflected in my 11th place finish in Code360 Weekly Contest 135, with a maximum rating of 1896.
<br/>
I have also excelled in national competitive exams, ranking in the top 1.7% nationwide in JEE MAINS 2022 and achieving outstanding results in both WBJEE 2022 and JEE ADVANCED 2022. These achievements underscore my dedication to excellence and my readiness to take on new and demanding challenges.
        </p>
      </div>
    </div>
  );
};

export default About;
