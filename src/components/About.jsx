import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pl-5 pr-5 pt-4 md:pl-20">
      <div className="pb-8">
        <div className="text-4xl font-bold inline border-b-4 underline decoration-gray-500 underline-offset-8 ">
          <p>About</p>
        </div>
        <p className="text-base md:text-xl mt-10">
        I'm Harshit, a dedicated Computer Science and Engineering student at Birla Institute of Technology Mesra, passionate about software engineering. I excel in Data Structures, Algorithms, and frontend technologies like HTML, CSS, JavaScript, ReactJS, and Tailwind CSS, specializing in crafting intuitive user interfaces. I have a solid grasp of Firebase for backend development, building robust and scalable web applications driven by innovation and quality.I use Cloud Firestore for efficient data management and Firebase Authentication for secure access.
        </p>
        <br />
        <p className="text-base md:text-xl">
        My passion for software development is fueled by a strong track record and continuous improvement. I've tackled 150+ data structure and algorithm challenges on platforms like LeetCode, honing my skills.I've excelled in competitive exams, ranking in the top 1.7% nationwide in JEE MAINS 2022 and achieving outstanding results in WBJEE 2022 and JEE ADVANCED 2022. These achievements highlight my commitment to excellence and readiness for new challenges.
        </p>
      </div>
    </div>
  );
};

export default About;
