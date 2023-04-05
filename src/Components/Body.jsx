
import axios from "axios";

import { useState , useEffect } from "react";

const Body = () => {

    const [details,setDetails] = useState({});
    const [search,setSearch] = useState("a");

    const fetchData = async() => {

        const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
        
        console.log(data);
        const fetchDetails = data.meals;
        setDetails(fetchDetails);

    }
    
    useEffect(()=>{
        fetchData();
    },[])

    const handleClick = (e) => {
        setSearch(e.target.innerText);
        console.log(details);
    }


    return (
        <>
            <button 
                className=" px-4 py-2 bg-cyan-200 text-slate-800 font-semibold rounded-full fixed bottom-16"
                onClick={(e) => handleClick(e)}
            >
                b
            </button>
        </>
    );
}

export default Body