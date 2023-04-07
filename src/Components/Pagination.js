import React from 'react';
import { v4 } from 'uuid';


const Pagination = ({handleClick}) => {
    const arrayOfBtnText = ["a","b","c","d","e","f","g","h","i","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  return (
    <aside 
        className='flex flex-col gap-4 w-24 h-auto py-2 fixed top-14 bottom-10 bg-gradient-to-tr bg-slate-300 overflow-y-scroll scrollbar-hide'
    >
        {
            arrayOfBtnText.map((ele)=>{
                return(
                    <button 
                        className=" px-4 py-2 mx-2  bg-slate-100 text-slate-800 font-semibold rounded-full transition-all hover:scale-110 hover:bg-white hover:delay-300 hover:duration-200 border-blue-300 border-2"
                        onClick={(e) => handleClick(e)}
                        key={v4()}
                    >
                        {ele}
                    </button>
                )
            })
        }
        
            
    </aside>
  )
}

export default Pagination