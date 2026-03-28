import React from 'react';
import './Banner.css'
const Banner = () => {
  return (

    <div className='overflow-hidden'>

        <div className=' min-h-[110vh] bg_img mb-5 '>   

        </div>


<div    className='mx-auto flex  overflow-hidden py-4 bg-[#d2cdd6] ' >

        <div className='  m-3 flex gap-5 overflow-hidden justify-center items-center left_to_right '>
          <img className='rounded-3xl' src="/src/assets/banner_img_2.jpg" alt="" />
        </div>

        <div className=' m-3 flex gap-5 overflow-hidden justify-center items-center left_to_right '>
          <img className='rounded-3xl' src="/src/assets/banner_img_2.jpg" alt="" />
        </div>

        <div className=' m-3 flex gap-5 overflow-hidden justify-center items-center left_to_right '>
          <img className='rounded-3xl' src="/src/assets/banner_img_3.jpg" alt="" />
        </div>

        <div className=' m-3 flex gap-5 overflow-hidden justify-center items-center left_to_right '>
          <img className='rounded-3xl' src="/src/assets/banner_img_4.jpg" alt="" />
        </div>

        





</div>
    </div>

  );
};

export default Banner;