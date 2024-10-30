// import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <section id="bannerSection" className="mb-6 relative sm:mt-4 sm:mx-10 sm:rounded-2xl rounded-0 px-2">
          <div
            className="text-white bg-no-repeat flex sm:rounded-2xl h-full"
            id="bannerMainPartContainer"
          >
            <div
              className="flex flex-col items-center justify-center sm:w-3/4 mx-auto text-center"
            >
              <h2 className="font-semibold sm:text-5xl text-4xl">
              Discover an exceptional cooking class tailored for you!
              </h2>
              <p className="my-6">
              Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
              </p>
             <div className='flex items-center justify-between gap-3'>
             <button id="sss" className="btnStyle btn-primary px-6 py-2 rounded-2xl bg-green-500 text-black font-semibold">
                Buy Tickets
              </button>
              <button className="px-4 py-2 border-2 border-solid border-white rounded-2xl text-white font-semibold">
                Our Feedback
              </button>
             </div>
            </div>
          </div>
        </section>
    );
};

export default Banner;