import { Flag, UserRound } from 'lucide-react';
import React, { useState } from 'react';

const Card = ({player , setCoin,coin , selectedPlayer, setSelectedPlayer}) => {

  // useState function for choose and selected btn 

  const [isSelected, setIsSelected] = useState(false)

  const handleChoosePlayer = () => {
    
    
    let newCoin = coin - player.price;
    if(newCoin >= 0){
      setCoin(coin - player.price);
    }  
    else{
      alert('Not enough amount to buy player!')
      return 
    }

    
    alert (` ${player.playerName} is selected `)

    setIsSelected(true);
    setSelectedPlayer([...selectedPlayer, player])

        
  }

  return (
    <div>

<div className="card bg-base-100  shadow-sm justify-center">
  <figure >
    <img className='mx-auto'
      src= {player.image}
      alt="player-img" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">  <UserRound />  {player.playerName} </h2> 


    <div className='flex justify-between'>    

        <div className='flex items-center'>
          <Flag className='text-black' />  
          <h3 className='ml-2 text-black font-bold capitalize'> {player.playerCountry} </h3>
        </div>

        

           <div>
            <button className='btn text-black'>  {player.playerType} </button>
            </div> 

    </div>


  <div className="divider"></div>

    <h4 className='font-bold '>Rating ({player.rating}) </h4>

    <div className='flex justify-between '>
      <div>  <h3 className='font-semibold'> {player.batStyle} </h3> </div>
      <div> <h3 className='font-semibold'> {player.bowlingStyle} </h3> </div>
    </div>

        <div className='flex  justify-between items-center'>
             <div><h2> {player.price} </h2></div>
             <div>
               <button  onClick= {handleChoosePlayer}  
               disabled = { isSelected ? true : false }  className='btn font-extrabold'>

                 { isSelected ? 'Selected' : 'Choose Player'}
                 
                  </button>
               </div>
        </div>
   

  </div>
       </div>

    </div>

  );
};

export default Card;