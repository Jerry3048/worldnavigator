import React from 'react'

function Countrycards({ Flags, Country, Population, Region, Capital}) {
  return (
    <div className='w-[80%]  mx-auto md:w-full md:mx-0'>
       <div className="bg-white text-black dark:bg-blue-900 dark:text-white shadow-md rounded-lg  text-center hover:scale-105 transform transition-transform duration-300">
        <img
          src={Flags.png}
          alt="flags"
          className="w-[100%] h-32  dark:text-gray-50 text-black"
        />
        <h2 className="text-xl font-bold mt-4 dark:text-gray-50 text-black">{Country}</h2>
        <p className="dark:text-gray-50 text-black mt-2">{Population}</p>
        <p className="dark:text-gray-50 text-black mt-2">{Region}</p>
        <p className="dark:text-gray-50 text-black mt-2">{Capital}</p>
  
      </div>
    </div>
  )
}

export default Countrycards