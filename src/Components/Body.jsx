
import axios from "axios";

import Card from "./Card";
import { useState , useEffect } from "react";

const Body = () => {

    const [details,setDetails] = useState({});

    const fetchData = async() => {

        const {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
        
        console.log(data);
        const fetchDetails = data.meals[0];
        setDetails(fetchDetails);

    }
    
    useEffect(()=>{
        fetchData();
    },[])

    return (
        <Card name={details.strMeal} img={details.strMealThumb} Tags={details.strTags} Description={details.strInstructions}/>
    );
}

export default Body