"use client"

import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrFormClose } from 'react-icons/gr';
import { RiShoppingCartFill } from 'react-icons/ri';
import Drop from './Drop'


const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {isOpen ? <GrFormClose size={30}/> : <GiHamburgerMenu size={30}/>} 
      </button>
      {isOpen && (
        <div className='flex flex-col absolute -ml-[120px] bg-white hover:bg-slate-100 shadow-xl items-center'>
          {/* Place your hamburger menu content here */}
          {/* Cart icon */}
          <a href={"/cart"}><RiShoppingCartFill size={30}/></a>
          <Drop/>
        </div>
      )}
    </div>
  );
};

export default Hamburger;


