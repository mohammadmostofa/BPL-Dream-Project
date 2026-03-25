import React from 'react';
import Card from '../../UI/Card';
const AvailabePlayer = ({players}) => {

  return (

    <div className=' container mx-auto '>
      {/* card container */}
 <div className='grid grid-cols-4 justify-between items-center gap-6 container mx-auto w-full'>

           {

                players.map((player,index) => <Card key={index}  player={player}></Card>  )

           }
     


 </div>   
    </div>
  );
};

export default AvailabePlayer;