import React from 'react';
//images
import Logo from '../assets/logo.png'

const Header = () => {
  return <header className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        <a href="#">
          <img className='max-w-[200px]' src={Logo} alt="" />
        </a>
        <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
  </header>;
};

export default Header;
