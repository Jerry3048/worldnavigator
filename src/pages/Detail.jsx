import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { FaArrowLeft } from "react-icons/fa"
import axios from "axios";
import Detailedcard from "../components/Detailedcard";
import { useParams } from "react-router";
import { useNavigate } from "react-router";


function Detail() {

  const {id}= useParams()
    const [CountryData, setCountryData] = useState(null);
    const [allCountries, setAllCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();


     useEffect(() => {
        axios.get(`/data.json`)
          .then((res) => {
            const decodeName = decodeURIComponent(id)
            console.log("name"+decodeName)
             const all = res.data;
             const SelectedCard = all.find((item) => item.name === decodeName);


              setCountryData(SelectedCard);
              setAllCountries(all);
          })

           .catch((err) => {
            setError(err);
          })
          .finally(() => {
            setLoading(false);
          });

          }, [id]);


      const BorderCountries = CountryData.borders
 ? CountryData.borders.map((code, index) => {
      const neighbor = allCountries.find(c => c.alpha3Code === code);
      return (
        <button
          className="bg-white dark:bg-blue-900 text-gray-950 dark:text-white w-[100px]"
          key={index}
        >
          {neighbor?.name || code}
        </button>
      );
    })
  : <span>Null</span>;




  return (
    <div className="text-gray-950 dark:text-white bg-gray-100 bg: dark:bg-blue-950 transition-all duration-100 ease-in min-h-screen text-Nunito space-y-10">
        <Nav/>

        <div className="w-[90%] m-auto space-y-10">
            <button onClick={() => navigate(-1)} className="outline-gray-300 dark:outline-blue-800 outline-3 drop-shadow-lg w-[100px] h-[30px] bg-white dark:bg-blue-900 flex items-center justify-center gap-2">
                <FaArrowLeft />
                Back
            </button>
          {loading ? (
            <div className="flex justify-center items-center h-40 mt-100">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-300 dark:border-blue-800"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 mt-[200px]">{error}</div>  
          ) : (
         <div> 
          <Detailedcard
              Flags={CountryData.flags}
              Country={CountryData.name}
              Population={CountryData.population}
              Region={CountryData.region}
              Capital={CountryData.capital}
              id={CountryData.name}
              SubRegion= {CountryData.subregion}
              NativeName= {CountryData.nativeName}
              TopLevelDomain={CountryData.topLevelDomain}
              Currencies={CountryData.currencies ? CountryData.currencies.map(c => c.name).join(', '):"Null"}
              Languages={ CountryData.languages ? CountryData.languages.map(c => c.name).join(', '):'Null'}
              BorderCountries={BorderCountries}
            />
        </div>
        )}
        </div>
  </div>
  )
}

export default Detail