import React from 'react'

const Courses = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center gap-3 p-5 sm:flex-row flex-wrap xl:w-[80%] m-auto">
        <div className="card w-[200px] h-[260px] bg-sky-100 rounded-2xl shadow-2xl p-5 cursor-pointer flex flex-col gap-2 items-center justify-center transition duration-300 transform hover:scale-105 hover:bg-sky-200">
          <img src="/course.png" alt="" className="w-full" />
          <p className="font-bold capitalize">course list</p>
        </div>
        <div className="card w-[200px] h-[260px] bg-sky-100 rounded-2xl shadow-2xl p-5 cursor-pointer flex flex-col gap-2 items-center justify-center transition duration-300 transform hover:scale-105 hover:bg-sky-200">
          <img src="/pharmacy.png" alt="" className="w-full" />
          <p className="font-bold capitalize">D pharm</p>
        </div>
        <div className="card w-[200px] h-[260px] bg-sky-100 rounded-2xl shadow-2xl p-5 cursor-pointer flex flex-col gap-2 items-center justify-center transition duration-300 transform hover:scale-105 hover:bg-sky-200">
          <img src="/university.png" alt="" className="w-full" />
          <p className="font-bold capitalize">asian international university</p>
        </div>
        <div className="card w-[200px] h-[260px] bg-sky-100 rounded-2xl shadow-2xl p-5 cursor-pointer flex flex-col gap-2 items-center justify-center transition duration-300 transform hover:scale-105 hover:bg-sky-200">
          <img src="/university.png" alt="" className="w-full" />
          <p className="font-bold capitalize">
            sikkim global technical university
          </p>
        </div>
        <div className="card w-[200px] h-[260px] bg-sky-100 rounded-2xl shadow-2xl p-5 cursor-pointer flex flex-col gap-2 items-center justify-center transition duration-300 transform hover:scale-105 hover:bg-sky-200">
          <img src="/university.png" alt="" className="w-full" />
          <p className="font-bold capitalize">
            swami vivekanand subharti university
          </p>
        </div>
        <div className="card w-[200px] h-[260px] bg-sky-100 rounded-2xl shadow-2xl p-5 cursor-pointer flex flex-col gap-2 items-center justify-center transition duration-300 transform hover:scale-105 hover:bg-sky-200">
          <img src="/syllabus.png" alt="" className="w-full" />
          <p className="font-bold capitalize">NAHEAD syllabus</p>
        </div>
        <div className="card w-[200px] h-[260px] bg-sky-100 rounded-2xl shadow-2xl p-5 cursor-pointer flex flex-col gap-2 items-center justify-center transition duration-300 transform hover:scale-105 hover:bg-sky-200">
          <img src="/contact.png" alt="" className="w-full" />
          <p className="font-bold capitalize">contact us</p>
        </div>
      </div>
    </section>
  );
}

export default Courses