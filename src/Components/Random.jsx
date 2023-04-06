import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Random = () => {


  const [random,setRandom] = useState({});

  const fetchData = async() => {

    const {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
      
    const fetchDetails = data.meals;
    setRandom(fetchDetails);
  }
  
    
  useEffect(()=>{
    fetchData();
  },[random])


  return (
    <div></div>
  )
}

export default Random