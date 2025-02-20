import React from 'react'
import ethic from '/public/ethic.jpg'
import positive from '/public/positive.jpg'
import communication from "/public/communication.jpg";
import time from '/public/time.jpg'
import problem from '/public/problem.jpg'
import team from '/public/team.jpg'
import confidence from '/public/confidence.jpg'
import learner from '/public/learner.jpg'
const Section5 = () => {
  return (
    <section className="py-10 px-20">
      <h3 className="text-3xl font-bold text-teal-600 capitalize text-center">
        Examples of Hard Skills
      </h3>
      <p className="mt-5">
        Examples of hard skills include computer programming, web design,
        typing, accounting, finance, writing, mathematics, legal and other
        quantifiable skills that are included in the requirements for a job. As
        you’re building your list of soft skills for your resume, consider these
        examples to guide you:
      </p>
      <div className="flex p-10 flex-wrap justify-center items-center w-full gap-5">
        {/* Card 1 */}
        <div className="card w-48 h-60 shadow p-3 rounded-lg cursor-pointer hover:translate-y-[-1rem] transition-all duration-500 bg-slate-100">
          <img src={positive} alt="Creativity" className="w-full rounded-lg" />
          <p className="text-green-700 text-center font-semibold break-words w-full">
            Creativity
          </p>
        </div>

        {/* Card 2 */}
        <div className="card w-48 h-60 shadow p-3 rounded-lg cursor-pointer hover:translate-y-[-1rem] transition-all duration-500 bg-slate-100">
          <img src={time} alt="Time Management" className="w-full rounded-lg" />
          <p className="text-orange-700 text-center font-semibold break-words w-full">
            Time Management
          </p>
        </div>

        {/* Card 3 */}
        <div className="card w-48 h-60 shadow p-3 rounded-lg cursor-pointer hover:translate-y-[-1rem] transition-all duration-500 bg-slate-100">
          <img src={learner} alt="Teamwork" className="w-full rounded-lg" />
          <p className="text-cyan-700 text-center font-semibold break-words w-full">
            Teamwork
          </p>
        </div>

        {/* Card 4 */}
        <div className="card w-48 h-60 shadow p-3 rounded-lg cursor-pointer hover:translate-y-[-1rem] transition-all duration-500 bg-slate-100">
          <img src={team} alt="Adaptability" className="w-full rounded-lg" />
          <p className="text-yellow-700 text-center font-semibold break-words w-full">
            Adaptability
          </p>
        </div>

        {/* Card 5 */}
        <div className="card w-48 h-60 shadow p-3 rounded-lg cursor-pointer hover:translate-y-[-1rem] transition-all duration-500 bg-slate-100">
          <img
            src={problem}
            alt="Problem-Solving"
            className="w-full rounded-lg"
          />
          <p className="text-gray-700 text-center font-semibold break-words w-full">
            Problem-Solving
          </p>
        </div>

        {/* Card 6 */}
        <div className="card w-48 h-60 shadow p-3 rounded-lg cursor-pointer hover:translate-y-[-1rem] transition-all duration-500 bg-slate-100">
          <img src={ethic} alt="Work Ethic" className="w-full rounded-lg" />
          <p className="text-amber-700 text-center font-semibold break-words w-full">
            Work Ethic
          </p>
        </div>

        {/* Card 7 */}
        <div className="card w-48 h-60 shadow p-3 rounded-lg cursor-pointer hover:translate-y-[-1rem] transition-all duration-500 bg-slate-100">
          <img
            src={communication}
            alt="Communication"
            className="w-full rounded-lg"
          />
          <p className="text-sky-700 text-center font-semibold break-words w-full">
            Communication
          </p>
        </div>

        {/* Card 8 */}
        <div className="card w-48 h-60 shadow p-3 rounded-lg cursor-pointer hover:translate-y-[-1rem] transition-all duration-500 bg-slate-100">
          <img
            src={confidence}
            alt="Interpersonal Skills"
            className="w-full rounded-lg"
          />
          <p className="text-blue-700 text-center font-semibold break-words w-full">
            Interpersonal Skills
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section5