import { CircleDollarSign } from 'lucide-react';
import React from 'react';

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm container mx-auto">
        
        <div className="flex-1">
          <a className="btn text-xl">daisyUI</a>
        </div>

        <div className="flex space-x-10">
          
          <div className='flex justify-center items-center space-x-5'>
            <li className='list-none'><a href="">Home</a></li>
            <li className='list-none'><a href="">Picture</a></li>
            <li className='list-none'><a href="">Teams</a></li>
            <li className='list-none'><a href="">Schedules</a></li>
          </div>

          <button className="btn">
            0 coin     <CircleDollarSign className='text-yellow-300'></CircleDollarSign>

          </button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;