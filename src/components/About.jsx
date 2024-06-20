import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pl-5 pr-5 pt-4 md:pl-20">
      <div className="pb-8">
        <div className="text-4xl font-bold inline border-b-4 underline decoration-gray-500 underline-offset-8 ">
          <p>About</p>
        </div>
        <p className="text-base md:text-xl mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat asperiores, voluptatum, deserunt explicabo reiciendis itaque quod culpa corporis dolorem laudantium illo consequuntur nesciunt saepe quasi sunt voluptatibus similique tempora beatae cupiditate maiores accusantium. Natus distinctio eaque nam commodi reprehenderit accusamus aspernatur reiciendis illo necessitatibus eum, error molestiae dicta atque.
        </p>
        <br />
        <p className="text-base md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusantium et non, iusto cumque quia nam tenetur illum exercitationem distinctio unde facere voluptates odio rem neque maxime ullam, asperiores fuga enim laborum beatae.
        </p>
      </div>
    </div>
  );
};

export default About;
