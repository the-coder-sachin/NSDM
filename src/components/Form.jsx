import React from 'react'

const Form = () => {
  return (
    <section className="bg-sky-100">
      <div className="m-auto w-fit pt-7">
        <p className="text-sky-600 font-bold text-2xl capitalize">
          exam time table
        </p>
        <div className="flex items-center gap-2 text-lg font-semibold text-orange-500 uppercase">
          <p>oct 2024</p>
          <p>-</p>
          <p className="text-orange-700">apr 2025</p>
        </div>
      </div>
      <div className="flex gap-10 p-10 flex-col md:flex-row">
        <form action="#" className="w-full">
          <p className="text-orange-600 font-bold text-lg text-center">
            Online Affiliate Form
          </p>
          <hr />
          <p className="text-sky-600 font-semibold text-lg text-center">
            NAHEAD Online Affiliation Form
          </p>
          <div className="bg-cyan-100 shadow-2xl rounded-md flex flex-col p-5 capitalize gap-2">
            <label className="font-semibold">
              <span className="text-red-600">*</span>
              Name of the Institute
            </label>
            <input
              type="text"
              className="p-2 outline-none bg-cyan-200 rounded-md"
            />
            <label className="font-semibold">
              <span className="text-red-600">*</span>
              phone number
            </label>
            <input
              type="text"
              className="p-2 outline-none bg-cyan-200 rounded-md"
            />
            <label className="font-semibold">
              <span className="text-red-600">*</span>
              location
            </label>
            <input
              type="text"
              className="p-2 outline-none bg-cyan-200 rounded-md"
            />
            <label className="font-semibold">
              <span className="text-red-600">*</span>
              course/category
            </label>
            <input
              type="text"
              className="p-2 outline-none bg-cyan-200 rounded-md"
            />
            <label className="font-semibold">
              <span className="text-red-600">*</span>
              message
            </label>
            <textarea
              type="text"
              className="p-2 outline-none bg-cyan-200 rounded-md"
            />
            <label className="font-semibold">
              <span className="text-red-600">*</span>
              spam
            </label>
            <button className="bg-orange-500 font-semibold text-white rounded-md hover:bg-orange-600 cursor-pointer p-2">
              submit
            </button>
          </div>
        </form>

        <form action="#" className="w-full">
          <p className="text-orange-600 font-bold text-lg text-center">
            Online Contact Form
          </p>
          <hr />
          <p className="text-sky-600 font-semibold text-lg text-center">
            Student Inquiry Form
          </p>
          <div className="bg-cyan-100 shadow-2xl rounded-md flex flex-col p-5 capitalize gap-2">
            <label className="font-semibold">
              <span className="text-red-600">*</span>
              Name of the student
            </label>
            <input
              type="text"
              className="p-2 outline-none bg-cyan-200 rounded-md"
            />
            <label className="font-semibold">
              <span className="text-red-600">*</span>
              phone number
            </label>
            <input
              type="text"
              className="p-2 outline-none bg-cyan-200 rounded-md"
            />
            <label className="font-semibold">
              <span className="text-red-600">*</span>
              location
            </label>
            <input
              type="text"
              className="p-2 outline-none bg-cyan-200 rounded-md"
            />
            <label className="font-semibold">
              <span className="text-red-600">*</span>
              course
            </label>
            <input
              type="text"
              className="p-2 outline-none bg-cyan-200 rounded-md"
            />
            <label className="font-semibold">
              <span className="text-red-600">*</span>
              message
            </label>
            <textarea
              type="text"
              className="p-2 outline-none bg-cyan-200 rounded-md"
            />
            <label className="font-semibold">
              <span className="text-red-600">*</span>
              field label
            </label>
            <button className="bg-orange-500 font-semibold text-white rounded-md hover:bg-orange-600 cursor-pointer p-2">
              submit
            </button>
          </div>
        </form>
      </div>
      <div className='flex flex-col md:flex-row justify-evenly p-7'>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold text-center ">Supreme Court Order</p>
          <a href="#" className="flex items-center text-purple-600">
            click to view{" "}
            <img src="/click.png" alt="" className="size-5 mt-3 ml-1" />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold text-center">
            National Policy for Skill Development
          </p>
          <a href="#" className="flex items-center text-purple-600">
            click to view{" "}
            <img src="/click.png" alt="" className="size-5 mt-3 ml-1" />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold text-center">National Education Policy</p>
          <a href="#" className="flex items-center text-purple-600">
            click to view{" "}
            <img src="/click.png" alt="" className="size-5 mt-3 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Form