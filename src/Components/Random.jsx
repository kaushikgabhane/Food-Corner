import React from 'react'
import { useState, useEffect } from 'react';

const Random = () => {

    const [random,setRandom] = useState({});

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
    <div></div>
  )
}

export default Random