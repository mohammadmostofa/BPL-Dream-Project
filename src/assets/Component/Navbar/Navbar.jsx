import React from 'react';

const Navbar = () => {
  return (

    <div>

           <div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="flex  space-x-10">

  <div className='flex justify-center items-center space-x-5'>
    <li className='list-none'><a href="">Home</a></li>
    <li className='list-none'><a href="">Picture</a></li>
    <li className='list-none'><a href="">teams</a></li>
    <li className='list-none'><a href="">Schedules</a></li>
  </div>

    <button class="btn">
       0 coin  



    </button>
  </div>
</div>
      
    </div>

  );
};

export default Navbar;