import { Dropdown, DropdownItem } from "flowbite-react";
import { FaSearch } from 'react-icons/fa';


function Searching({ onSearchChange ,onsearchregion, regions}) {
  return (
    <div className="md:flex justify-between space-y-5 md:space-y-0 items-center w-[70%] mx-auto">
        <div className="flex items-center pl-3 rounded w-full bg-white text-black dark:bg-blue-900 dark:text-white md:w-[60%]  h-[50px] ">
           <FaSearch className="text-gray-500 dark:text-white " />
           <input
           type='text'
           placeholder='Search for a country...'
           onChange={(e) => onSearchChange(e.target.value)}
           className="w-[100%] h-[50px] focus:outline-0"    
           /> 
        </div>
        <div>
            <Dropdown label="Filter by Regions" dismissOnClick ={false} className="bg-white text-black dark:bg-blue-900 dark:text-white focus:ring-0  hover:bg-white hover:dark:bg-blue-900">
             <DropdownItem onClick={() => onsearchregion("")}>All Regions</DropdownItem>   
               {regions.map((region) => (
                    <DropdownItem
                    key={region}
                    onClick={() => onsearchregion(region)}
                    >
                    {region}
                    </DropdownItem>
            ))}
            </Dropdown>

        </div>

    </div>
  )
}

export default Searching