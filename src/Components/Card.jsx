import React from 'react'

const Card = ({name,img,Tags,Description}) => {

  
  return (
    <div className='Card w-[50vw] h-auto p-5 m-5 bg-slate-200 rounded-md shadow-2xl'>
        <img 
            src={img} 
            alt="Food Img" 
            className='rounded-md h-[300px] w-auto m-auto' 
        />
        <h4> <strong> Name of food :</strong> {name}</h4>
        <h4> <strong> Tags :</strong> {Tags}</h4>
        <p><strong> Description :</strong> {Description}</p>
    </div>
  );
}

export default Card