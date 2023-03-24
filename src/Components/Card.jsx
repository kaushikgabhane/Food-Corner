import React from 'react'

const Card = () => {
  return (
    <div className='Card w-[250px] h-auto p-5 bg-slate-200 rounded-md shadow-2xl'>
        <img 
            src="https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg" 
            alt="Food Img" 
            className='rounded-md h-[50%] w-[100%]' 
        />
        <h4>Name</h4>
        <h4>Origin</h4>
        <p>Description</p>
    </div>
  );
}

export default Card