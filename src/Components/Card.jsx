import React from 'react'

const Card = () => {

  
  return (
    <div className='Card w-[300px] h-[400px] p-5 m-5 bg-slate-200 rounded-md shadow-2xl'>
        <img 
            src={img} 
            alt="Food Img" 
            className='rounded-md h-[300px] w-auto m-auto' 
        />
        <h4> <strong> Name of food :</strong> </h4>
        <h4> <strong> Tags :</strong> </h4>
        <p><strong> Description :</strong></p>
    </div>
  );
}

export default Card