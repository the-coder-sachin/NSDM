import React from 'react'
import ethic from '/public/ethic.jpg'
import positive from '/public/positive.jpg'
import communication from "/public/communication.jpg";
import time from '/public/time.jpg'
import problem from '/public/problem.jpg'
import team from '/public/team.jpg'
import confidence from '/public/confidence.jpg'
import learner from '/public/learner.jpg'
const Section4 = () => {
  return (
    <section className="py-10 px-20">
      <h3 className="text-3xl font-bold text-amber-600 capitalize text-center">
        Common Soft Skills Employers Look For
      </h3>
      <div className="flex p-10 flex-wrap justify-center items-center w-full gap-5">
        <div className="card w-48 h-60 shadow p-3 rounded-lg cursor-pointer hover:translate-y-[-1rem] transition-all duration-500 bg-slate-100">
          <img src={ethic} alt="ethic" className="w-full rounded-lg" />
          <p className="text-amber-700 text-center font-semibold break-words w-full">
            Strong Work Ethic
          </p>
        </div>
        <div className="card w-48 h-60 shadow p-3 rounded-lg cursor-pointer hover:translate-y-[-1rem] transition-all duration-500 bg-slate-100">
          <img src={positive} alt="ethic" className="w-full rounded-lg" />
          <p className="text-green-700 text-center font-semibold break-words w-full">
            Positive Attitude
          </p>
        </div>
        <div className="card w-48 h-60 shadow p-3 rounded-lg cursor-pointer hover:translate-y-[-1rem] transition-all duration-500 bg-slate-100">
          <img src={communication} alt="ethic" className="w-full rounded-lg" />
          <p className="text-sky-700 text-center font-semibold break-words w-full">
            Good Communication Skills
          </p>
        </div>
        <div className="card w-48 h-60 shadow p-3 rounded-lg cursor-pointer hover:translate-y-[-1rem] transition-all duration-500 bg-slate-100">
          <img src={time} alt="ethic" className="w-full rounded-lg" />
          <p className="text-orange-700 text-center font-semibold break-words w-full">
            Time Management Abilities
          </p>
        </div>
        <div className="card w-48 h-60 shadow p-3 rounded-lg cursor-pointer hover:translate-y-[-1rem] transition-all duration-500 bg-slate-100">
          <img src={problem} alt="ethic" className="w-full rounded-lg" />
          <p className="text-gray-700 text-center font-semibold break-words w-full">
            Problem-Solving Skills
          </p>
        </div>
        <div className="card w-48 h-60 shadow p-3 rounded-lg cursor-pointer hover:translate-y-[-1rem] transition-all duration-500 bg-slate-100">
          <img src={team} alt="ethic" className="w-full rounded-lg" />
          <p className="text-yellow-700 text-center font-semibold break-words w-full">
            Acting as a Team Player
          </p>
        </div>
        <div className="card w-48 h-60 shadow p-3 rounded-lg cursor-pointer hover:translate-y-[-1rem] transition-all duration-500 bg-slate-100">
          <img src={confidence} alt="ethic" className="w-full rounded-lg" />
          <p className="text-blue-700 text-center font-semibold break-words w-full">
            Self-Confidence
          </p>
        </div>
        <div className="card w-48 h-60 shadow p-3 rounded-lg cursor-pointer hover:translate-y-[-1rem] transition-all duration-500 bg-slate-100">
          <img src={learner} alt="ethic" className="w-full rounded-lg" />
          <p className="text-cyan-700 text-center font-semibold break-words w-full">
            Ability to Accept and Learn From Criticism
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section4