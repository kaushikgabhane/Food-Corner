import React from 'react'

const Card = ({details}) => {

  
  return (
    <div className=' w-[300px] h-auto p-5 m-5 flex flex-col gap-2 bg-slate-200 rounded-md shadow-xl shadow-slate-400	 border-gray-500 border-2'>
      <img 
          src={details.strMealThumb} 
          alt="Food Img" 
          className='rounded-md  m-auto' 
      />
      <h4 className='w-[250px] '> <strong> Name of food : </strong>{details.strMeal} </h4>
      <p  className='w-[250px] '> <strong>Category : </strong>{details.strCategory}</p>
      <h4 className='max-w-fit '> <strong>Meal Area : </strong>{details.strArea} </h4>
      <p  className='w-[250px] '> <strong>Watch receipe : </strong> <a href={details.strYoutube} target="_blank" rel="noopener noreferrer">Here</a></p>
    </div>
  );
}

export default Card