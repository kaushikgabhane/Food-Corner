import React, { useState, useEffect } from 'react'
import axios from 'axios';


import Card from './Card';



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
    <div className='SearchPage min-h-screen mt-14 py-5 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200'>
      <div className="h-10 border-2 px-2 mt-5 mx-auto w-96 bg-red-100 rounded-tr-lg rounded-bl-lg border-rose-400">
        <input 
          className='outline-none h-full w-full bg-red-100 placeholder:text-red-600'
          type="text" 
          placeholder="Enter a meal name"
          id="search" 
          value={text}
          onChange={(e)=> setText(e.target.value)} 
        />
      </div>

      <div className="flex flex-wrap gap-6 justify-center mt-14 mb-10 ">
        {
          details.meals?.map((ele)=>{
            return <Card details={ele} key={ele.idMeal}/>
          })
        }
      </div>
  </div>
  )
}

export default SearchBox