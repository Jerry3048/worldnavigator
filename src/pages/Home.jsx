import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Searching from "../components/Searching";
import Countrycards from "../components/Countrycards";
import axios from "axios";
import {Link } from "react-router";

function Index() {
  const [Country, setCountry] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [region, setRegion] = useState("");
  // const navigate = useNavigate();
  


 useEffect(() => {
    axios.get("../public/data.json")
      .then((res) => {
        console.log(res);
        setCountry(res.data);
        console.log(res.data.region)

      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleRegionChange = (region) => {
  setRegion(region);
  };


     const filteredCountry = Country.filter((info) => {
    const nameMatch = info.name.toLowerCase().includes(searchField.toLowerCase());
    const regionMatch = region === "" || info.region.toLowerCase() === region.toLowerCase();
    return nameMatch && regionMatch;
   });

const uniqueRegions = [...new Set(Country.map((info) => info.region))].filter(Boolean);

  return (
    <div className="text-gray-950 dark:text-white bg-gray-100 bg: dark:bg-blue-950 transition-all duration-100 ease-in min-h-screen text-Nunito space-y-10">
      <Nav />
      <Searching 
        onSearchChange={setSearchField}
         onsearchregion={handleRegionChange}
         regions ={uniqueRegions}
      />
    
     
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-10 w-[90%] sm:grid-cols-2 mx-auto">
          { filteredCountry.map((Country) => (
            <Link key={Country.name} to={`/${Country.name}`}>
              <Countrycards
                  Flags={Country.flags}
                  Country={Country.name}
                  Population={Country.population}
                  Region={Country.region}
                  Capital={Country.capital}
                  idx={Country.name}
                />
            </Link>
             ))
           }
        </div>

    </div>
  );
}

export default Index;

