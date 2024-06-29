import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pl-5 pr-5 pt-4 md:pl-20">
      <div className="pb-8">
        <div className="text-4xl font-bold inline border-b-4 underline decoration-gray-500 underline-offset-8 ">
          <p>About</p>
        </div>
        <p className="text-base md:text-xl mt-10">
        My passion for software development is fueled by a strong track record and continuous improvement. I've tackled 150+ data structure and algorithm challenges on platforms like LeetCode, honing my skills. Proficient in Firebase, I use Cloud Firestore for efficient data management and Firebase Authentication for secure access. I've excelled in competitive exams, ranking in the top 1.7% nationwide in JEE MAINS 2022 and achieving outstanding results in WBJEE 2022 and JEE ADVANCED 2022. These achievements highlight my commitment to excellence and readiness for new challenges.
        </p>
        <br />
        <p className="text-base md:text-xl">
        My enthusiasm for software development is fueled by a track record of accomplishments and a relentless drive for continuous improvement. I've solved over 150 data structure and algorithm challenges across platforms like LeetCode and GeeksforGeeks, honing my problem-solving skills. I have also extensively explored Firebase, utilizing Cloud Firestore for efficient data management and implementing Firebase Authentication for secure user access control. Beyond technical proficiency, I've achieved remarkable results in competitive exams, such as ranking in the top 1.7% nationwide in JEE MAINS 2022 and earning outstanding ranks in WBJEE 2022 and JEE ADVANCED 2022. These achievements underscore my commitment to excellence and my readiness to tackle new challenges in my journey.
        </p>
      </div>
    </div>
  );
};

export default About;
