import React from 'react'

const Section2 = () => {
  return (
    <section className="px-20 xl:h-screen">
      <h3 className="text-teal-600 text-2xl xl:text-4xl capitalize text-center font-bold pt-10">
        Advantages of Skill India
      </h3>
      <p className="leading-loose tracking-wider pt-9 pb-5">
        The idea is to raise confidence, improve productivity and give direction
        through proper skill development. Skill development will enable the
        youths to get blue-collar jobs. In everyday life, the development of
        life skills helps students to:
      </p>
      <ol className="pl-10 flex flex-col gap-5 text-xl">
        <li className="italic text-rose-600 font-semibold list-disc">
          Find new ways of thinking and problem solving.
        </li>
        <li className="italic text-green-600 font-semibold list-disc">
          Recognize the impact of their actions and teaches them to take
          responsibility for what they do rather than blame others.
        </li>
        <li className="italic text-violet-600 font-semibold list-disc">
          Build confidence both in spoken skills and for group collaboration and
          cooperation.
        </li>
      </ol>
      <p className='leading-loose tracking-wider py-10'>
        A skill is the ability to do something well, a certain competence or
        proficiency. Skills are typically acquired or developed through direct
        experiences and training, and they can require sustained effort.
        Therefore, personal skills are simply those skills that you possess and
        consider your strengths.
      </p>
    </section>
  );
}

export default Section2