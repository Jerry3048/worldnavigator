import React from 'react'

function Detailedcard({ Flags, Country, Population, Region, Capital, id, SubRegion, NativeName, TopLevelDomain, Currencies, Languages,BorderCountries}) {
  return (
    <div key={id} className='w-[80%] mx-auto space-y-10 lg:flex space-x-10'>
        <img
          src={Flags.svg}
          alt="flags"
          className="w-[400px] h-[300px]  dark:text-gray-50 text-black flex justify-center items-center mx-auto"
        />
    
      <div className='space-y-10 '>
           <div className='lg:flex space-x-10 justify-center mx-auto items-center space-y-10 '>
                <div className=" text-black dark:text-white text-left">
                    <h2 className="font-bold mt-2 dark:text-gray-50 text-black text-3xl">{Country}</h2>
                    <p className="dark:text-gray-50 text-black mt-2"><span className ="font-bold">Native Name: </span> {NativeName}</p>
                    <p className="dark:text-gray-50 text-black mt-2"><span className ="font-bold">Poulation: </span> {Population}</p>
                    <p className="dark:text-gray-50 text-black mt-2"><span className ="font-bold">Sub Region: </span> {SubRegion}</p>
                    <p className="dark:text-gray-50 text-black mt-2"><span className ="font-bold">Region: </span> {Region}</p>
                    <p className="dark:text-gray-50 text-black mt-2 "><span className ="font-bold">Capital: </span>{Capital}</p>
                </div>
                <div className=" text-black dark:text-white text-left">
                    <p className="dark:text-gray-50 text-black mt-2"><span className ="font-bold">Top Level Domain: </span> {TopLevelDomain}</p>
                    <p className="dark:text-gray-50 text-black mt-2"><span className ="font-bold">Language: </span> {Languages}</p>
                    <p className="dark:text-gray-50 text-black mt-2"><span className ="font-bold">Currency: </span> {Currencies}</p>
                        
                </div>
           </div>
           <div className=' space-x-3 space-y-4'>
            <p className='dark:text-gray-50 text-black font-bold'>Boarder Countries:</p>
                <div className='grid grid-cols-3 gap-4'>
                    {BorderCountries}
                </div>
           </div>
      </div>
      
    </div>
  )

}

export default Detailedcard