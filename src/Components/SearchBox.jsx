import React, { useState, useEffect } from 'react'
import axios from 'axios';




const SearchBox = () => {

  const [details,setDetails] = useState({});
  const [text, setText] = useState("");


    const fetchData = async() => {

      const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`);
      setDetails(data);
        
    }
    console.log(details);
    
    useEffect(()=>{
      fetchData();
    },[text])


  return (
    <div className="border-2 mt-24 mx-auto w-96 bg-white">
      <input 
        className='outline-none h-full w-[90%]'
        type="text" 
        placeholder="Enter a meal name"
        id="search" 
        value={text}
        onChange={(e)=> setText(e.target.value)} 
      />
      <i className="fa-solid fa-magnifying-glass pl-3"></i>
  </div>
  )
}

export default SearchBox