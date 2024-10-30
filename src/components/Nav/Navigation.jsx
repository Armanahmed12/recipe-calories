// import React from 'react';
import './Navigation.css';
import { handleNavBar } from '../../js/nav';

const Navigation = () => {
    return (
        <nav
        className="flex items-center justify-between bg-white py-2 px-2 sm:px-10 md:mb-4"
      >
        <div className="flex items-center gap-2">
          <h2 id='webName' className="text-3xl font-bold">
          Recipe Calories
          </h2>
        </div>
  
        <ul
          id="nav-lists-container"
         
          className="flex flex-col sm:flex-row gap-0 sm:gap-5 items-center absolute sm:static top-[-600px] left-0 py-0 sm:py-4 bg-[#f6f2f2] sm:bg-inherit w-full sm:w-auto transition-['top'] sm:transition-none duration-[1s] -z-10 sm:z-10"
        >
          <li className="text-red-500 font-bold"><a href="#">Home</a></li>
          <li><a href="#">Recipes</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Search</a></li>
          <li className='sm:hidden hover:bg-gray-300'>  
            <div className='flex items-center gap-2'>
          <div className="flex items-center justify-center gap-2 bg-gray-100  rounded-3xl px-4 py-2 w-full border-2 border-solid border-blue-500">
        <i className="fa-solid fa-magnifying-glass text-2xl text-blue-500"></i>
      <input 
        type="text" 
        placeholder="search" 
        className="bg-transparent outline-none w-[140px] text-green-600 font-semibold text-xl"
      />
          </div>
          <div className='bg-green-500 rounded-full px-4 py-3 text-white'>
             <i className="fa-regular fa-user font-bold"></i>
          </div>
            </div>
         </li>
        </ul>
        <div className='hidden md:flex items-center gap-2'>
          <div className=" hidden md:flex items-center justify-center gap-2 bg-gray-100  rounded-3xl px-4 py-2 w-full border border-gray">
        <i className="fa-solid fa-magnifying-glass text-2xl"></i>
      <input 
        type="text" 
        placeholder="search" 
        className="bg-transparent outline-none w-[140px] text-green-600 font-semibold text-xl"
      />
          </div>
          <div className='bg-green-500 rounded-full px-4 py-3 text-white'>
             <i className="fa-regular fa-user font-bold"></i>
          </div>
        </div>
        <i id="menuBar" onClick={handleNavBar} className="fa-solid fa-bars text-2xl block sm:hidden"></i>
      </nav>
    );
};

export default Navigation;