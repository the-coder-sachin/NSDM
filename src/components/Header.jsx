import React, { useRef, useState } from 'react'
import logo from '../../public/logo.jpg'

const Header = () => {
    const options = useRef();
    const [optionExpanded, setOptionExpanded] = useState(false)

    const displayMore = ()=>{
        if(options.current && !optionExpanded){
            options.current.style.height = '120px'
            setOptionExpanded(true)
        }else{
            options.current.style.height = "50px";
            setOptionExpanded(false)
        }
    }
  return (
    <header>
      <div className="search flex">
        <input
          type="text"
          placeholder="Search here..."
          className="p-2 outline-none w-full"
        />
        <button className="p-2 bg-red-600 text-white font-semibold hover:bg-red-700 cursor-pointer">
          search
        </button>
      </div>
      <hr />
      <marquee behavior="" direction="">
        <div className="flex gap-[150px]">
          <p className="">
            New Study Centers are Invited, Contact: 81108 97011,95853 43052
          </p>
          <p>New Study Centers are Invited, Contact: 81108 97011,95853 43052</p>
          <p>New Study Centers are Invited, Contact: 81108 97011,95853 43052</p>
        </div>
      </marquee>
      <hr />
      <nav className="flex justify-evenly items-center p-5">
        <div className="logo size-36 bg-teal-700 cursor-pointer">
          <img src={logo} alt="" />
        </div>
        <div className="content flex flex-col justify-center items-center font-semibold capitalize">
          <h1 className="text-3xl text-red-600 font-bold capitalize">
            national academy of higher education and development
          </h1>
          <p>an autonmous body, under govt.act</p>
          <p>
            established under act 1882, registered under government of tamilnadu
          </p>
          <p>national development organization, promoted by govt of india </p>
          <p className="text-green-600">
            {" "}
            a central board of vocational education
          </p>
        </div>
        <div className="qr size-32 bg-black"></div>
      </nav>
      <hr />
      <ul
        ref={options}
        className="flex gap-3 justify-evenly capitalize font-semibold bg-slate-300 p-3 flex-wrap h-[50px] overflow-hidden relative pr-20 transition-all duration-1000"
      >
        <div
          onClick={displayMore}
          className={`absolute right-1 bottom-3 cursor-pointer ${optionExpanded && 'text-red-500'} ${!optionExpanded && 'text-blue-400'}`}
        >
          {optionExpanded ? "less.." : "more.."}
        </div>
        <li className="text-neutral-700 hover:text-rose-600  cursor-pointer">
          about us
        </li>
        <li className="text-neutral-700 hover:text-rose-600  cursor-pointer">
          course list
        </li>
        <li className="text-neutral-700 hover:text-rose-600  cursor-pointer">
          NSDM syllabus
        </li>
        <li className="text-neutral-700 hover:text-rose-600  cursor-pointer">
          affilation
        </li>
        <li className="text-neutral-700 hover:text-rose-600  cursor-pointer">
          payment method
        </li>
        <li className="text-neutral-700 hover:text-rose-600  cursor-pointer">
          verify documents
        </li>
        <li className="text-neutral-700 hover:text-rose-600  cursor-pointer">
          universities courses
        </li>
        <li className="text-neutral-700 hover:text-rose-600  cursor-pointer">
          examination branch
        </li>
        <li className="text-neutral-700 hover:text-rose-600  cursor-pointer">
          NSDM question bank
        </li>
        <li className="text-neutral-700 hover:text-rose-600  cursor-pointer">
          job verification letters
        </li>

        <li className="text-neutral-700 hover:text-rose-600  cursor-pointer">
          sikkim alpine university(regular)
        </li>

        <li className="text-neutral-700 hover:text-rose-600  cursor-pointer">
          NSDM skill training certificate courses
        </li>
        <li className="text-neutral-700 hover:text-rose-600  cursor-pointer">
          D pharm
        </li>
        <li className="text-neutral-700 hover:text-rose-600  cursor-pointer">
          recognition's
        </li>
        <li className="text-neutral-700 hover:text-rose-600  cursor-pointer">
          certificate of commitment
        </li>
        <li className="text-neutral-700 hover:text-rose-600  cursor-pointer">
          student verification
        </li>
        <li className="text-neutral-700 hover:text-rose-600  cursor-pointer">
          CMS allopathy
        </li>
        <li className="text-neutral-700 hover:text-rose-600  cursor-pointer">
          approved educator
        </li>
      </ul>
    </header>
  );
}

export default Header