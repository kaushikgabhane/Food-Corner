
import { useState , useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";

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
    },[search])

    const handleClick = (e) => {
        setSearch(e.target.innerText);
    }


    return (
        <>
            <Pagination handleClick={handleClick}/>
            
        </>
    );
}

export default Body