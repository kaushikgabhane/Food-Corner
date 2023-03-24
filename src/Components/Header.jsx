const Header = () => {
    return (
      <header className="header flex flex-row bg-slate-100 justify-between p-3 px-10 shadow-md">
          <h3 className="logo font-serif font-bold text-2xl text-fuchsia-600">Food Corner</h3>
          <div className="border-2 w-96 bg-white">
            <input 
                className='outline-none h-full w-[90%]'
                type="text" 
                name="" 
                id="search" 
            />
            <i className="fa-solid fa-magnifying-glass pl-3"></i>
          </div>
          <ul className='navList flex list-none gap-10'>
              <li className="font-bold text-lg text-blue-500">Home</li>
              <li className="font-bold text-lg text-blue-500">Search More</li>
              <li className="font-bold text-lg text-blue-500">Contact</li>
          </ul>
      </header>
  )};

  export default Header;