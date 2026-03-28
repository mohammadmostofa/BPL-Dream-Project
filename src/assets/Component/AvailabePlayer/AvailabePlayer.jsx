import React from 'react';
import Card from '../../UI/Card';
const AvailabePlayer = ({players, setCoin ,coin , selectedPlayer, setSelectedPlayer}) => {

  return (

    <div className=' container mx-auto '>
      {/* card container */}
 <div className='grid grid-cols-4 justify-between items-center gap-6 container mx-auto w-full'>

           {
                                                                                  // setCoin transfer card to update
                players.map((player,index) =>
                   <Card
                 key={index} 
                  player={player} 
                   setCoin = {setCoin} 
                   coin = {coin} 


                   selectedPlayer = {selectedPlayer}
                   setSelectedPlayer = {setSelectedPlayer}

                   ></Card>  )

           }
     


 </div>   
    </div>
  );
};

export default AvailabePlayer;