import React, { useRef, useState } from 'react'
import logo from '/public/logo.jpg'

const Header = () => {
    const options = useRef();
    const burger = useRef();
    const mobileMenu = useRef();
    const [optionExpanded, setOptionExpanded] = useState(false)
    const [expandMenu, setExpandMenu] = useState(false)

    const displayMore = ()=>{
        if(options.current && !optionExpanded){
            options.current.style.height = '120px'
            setOptionExpanded(true)
        }else{
            options.current.style.height = "50px";
            setOptionExpanded(false)
        }
    }

    const handleExpandMenu = ()=>{
       if(mobileMenu.current && !expandMenu){
        setExpandMenu(true);
        mobileMenu.current.classList.add('h-auto')
       }else{
        setExpandMenu(false)
        mobileMenu.current.classList.remove('h-auto')
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
      {/* <nav className="lg:flex-row lg:justify-evenly flex justify-center items-center p-5 flex-col">
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
      </nav> */}
      <img src="/banner.png" alt="banner" className="w-full" />
      <hr />
      <ul className="xl:hidden  gap-3 justify-evenly capitalize font-semibold bg-slate-300 py-1 flex-wrap  overflow-hidden relative transition-all duration-1000">
        <div className="flex justify-between px-5 items-center">
          <p className='text-xs sm:text-sm md:text-base'>menu</p>
          <button
            onClick={handleExpandMenu}
            ref={burger}
            className="text-2xl cursor-pointer"
          >
            {expandMenu ? (
              <img src="/close.png" className="sm:h-3 h-2" />
            ) : (
              <img src="/menu.png" className="sm:h-5 h-3" />
            )}
          </button>
        </div>
        <div
          ref={mobileMenu}
          className="flex flex-col h-0 overflow-hidden transition-all duration-500 items-center"
        >
          <li className="text-neutral-700 hover:text-sky-600 hover:bg-slate-200 w-full text-center py-1 cursor-pointer">
            about us
          </li>
          <li className="text-neutral-700 hover:text-sky-600 hover:bg-slate-200 w-full text-center py-1 cursor-pointer">
            course list
          </li>
          <li className="text-neutral-700 hover:text-sky-600 hover:bg-slate-200 w-full text-center py-1 cursor-pointer">
            NSDM syllabus
          </li>
          <li className="text-neutral-700 hover:text-sky-600 hover:bg-slate-200 w-full text-center py-1 cursor-pointer">
            affiliation
          </li>
          <li className="text-neutral-700 hover:text-sky-600 hover:bg-slate-200 w-full text-center py-1 cursor-pointer">
            payment method
          </li>
          <li className="text-neutral-700 hover:text-sky-600 hover:bg-slate-200 w-full text-center py-1 cursor-pointer">
            verify documents
          </li>
          <li className="text-neutral-700 hover:text-sky-600 hover:bg-slate-200 w-full text-center py-1 cursor-pointer">
            universities courses
          </li>
          <li className="text-neutral-700 hover:text-sky-600 hover:bg-slate-200 w-full text-center py-1 cursor-pointer">
            examination branch
          </li>
          <li className="text-neutral-700 hover:text-sky-600 hover:bg-slate-200 w-full text-center py-1 cursor-pointer">
            NSDM question bank
          </li>
          <li className="text-neutral-700 hover:text-sky-600 hover:bg-slate-200 w-full text-center py-1 cursor-pointer">
            job verification letters
          </li>
          <li className="text-neutral-700 hover:text-sky-600 hover:bg-slate-200 w-full text-center py-1 cursor-pointer">
            sikkim alpine university(regular)
          </li>
          <li className="text-neutral-700 hover:text-sky-600 hover:bg-slate-200 w-full text-center py-1 cursor-pointer">
            NSDM skill training certificate courses
          </li>
          <li className="text-neutral-700 hover:text-sky-600 hover:bg-slate-200 w-full text-center py-1 cursor-pointer">
            D pharm
          </li>
          <li className="text-neutral-700 hover:text-sky-600 hover:bg-slate-200 w-full text-center py-1 cursor-pointer">
            recognitions
          </li>
          <li className="text-neutral-700 hover:text-sky-600 hover:bg-slate-200 w-full text-center py-1 cursor-pointer">
            certificate of commitment
          </li>
          <li className="text-neutral-700 hover:text-sky-600 hover:bg-slate-200 w-full text-center py-1 cursor-pointer">
            student verification
          </li>
          <li className="text-neutral-700 hover:text-sky-600 hover:bg-slate-200 w-full text-center py-1 cursor-pointer">
            CMS allopathy
          </li>
          <li className="text-neutral-700 hover:text-sky-600 hover:bg-slate-200 w-full text-center py-1 cursor-pointer">
            approved educator
          </li>
        </div>
      </ul>

      <ul
        ref={options}
        className="xl:flex hidden gap-3 justify-evenly capitalize font-semibold bg-slate-300 p-3 flex-wrap h-[50px] overflow-hidden relative pr-20 transition-all duration-1000"
      >
        <div
          onClick={displayMore}
          className={`absolute right-1 bottom-3 cursor-pointer ${
            optionExpanded && "text-red-500"
          } ${!optionExpanded && "text-blue-400"}`}
        >
          {optionExpanded ? "less.." : "more.."}
        </div>
        <li className="text-neutral-700 hover:text-sky-600 cursor-pointer">
          about us
        </li>
        <li className="text-neutral-700 hover:text-sky-600 cursor-pointer">
          course list
        </li>
        <li className="text-neutral-700 hover:text-sky-600 cursor-pointer">
          NSDM syllabus
        </li>
        <li className="text-neutral-700 hover:text-sky-600 cursor-pointer">
          affilation
        </li>
        <li className="text-neutral-700 hover:text-sky-600 cursor-pointer">
          payment method
        </li>
        <li className="text-neutral-700 hover:text-sky-600 cursor-pointer">
          verify documents
        </li>
        <li className="text-neutral-700 hover:text-sky-600 cursor-pointer">
          universities courses
        </li>
        <li className="text-neutral-700 hover:text-sky-600 cursor-pointer">
          examination branch
        </li>
        <li className="text-neutral-700 hover:text-sky-600 cursor-pointer">
          NSDM question bank
        </li>
        <li className="text-neutral-700 hover:text-sky-600 cursor-pointer">
          job verification letters
        </li>
        <li className="text-neutral-700 hover:text-sky-600 cursor-pointer">
          sikkim alpine university(regular)
        </li>
        <li className="text-neutral-700 hover:text-sky-600 cursor-pointer">
          NSDM skill training certificate courses
        </li>
        <li className="text-neutral-700 hover:text-sky-600 cursor-pointer">
          D pharm
        </li>
        <li className="text-neutral-700 hover:text-sky-600 cursor-pointer">
          recognition's
        </li>
        <li className="text-neutral-700 hover:text-sky-600 cursor-pointer">
          certificate of commitment
        </li>
        <li className="text-neutral-700 hover:text-sky-600 cursor-pointer">
          student verification
        </li>
        <li className="text-neutral-700 hover:text-sky-600 cursor-pointer">
          CMS allopathy
        </li>
        <li className="text-neutral-700 hover:text-sky-600 cursor-pointer">
          approved educator
        </li>
      </ul>
    </header>
  );
}

export default Header