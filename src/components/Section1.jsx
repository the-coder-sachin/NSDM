import React from 'react'
import hero from '/public/hero.png'

const Section1 = () => {
  return (
    <section className='xl:h-screen p-10'>
      <h2 className="lg:text-4xl text-2xl font-bold text-center py-5 lg:py-10 text-cyan-700 capitalize">
        national academy of higher education and development - NAHEAD
      </h2>
      <div className="flex flex-col xl:flex-row justify-center items-center px-5 lg:px-20 py-10">
        <p className="leading-loose tracking-wider">
          Skills training is designed to provide employees with the targeted
          training they need to gain the knowledge and abilities necessary to
          fulfill the specific requirements of their job positions. Skills
          training can also be used to re-educate and retrain employees whenever
          new technology, processes, or systems debut. Skills development is the
          process of (1) identifying your skill gaps, and (2) developing and
          honing these skills. It is important because your skills determine
          your ability to execute your plans with success. Imagine a carpenter
          trying to build a house. In goal achievement, your skills are your
          tools.
        </p>
        <img src={hero} alt="img" className='w-[280px] md:w-[420px] cursor-pointer hover:scale-105 transition-all duration-500 xl:mt-[-90px]' />
      </div>
    </section>
  );
}

export default Section1