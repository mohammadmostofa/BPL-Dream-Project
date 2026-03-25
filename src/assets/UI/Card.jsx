import { Flag, UserRound } from 'lucide-react';
import React from 'react';

const Card = ({player}) => {
  return (
    <div>

<div className="card bg-base-100  shadow-sm justify-center">
  <figure >
    <img className='mx-auto'
      src= {player.image}
      alt="player-img" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">  <UserRound />  <h2 className='ml-2'> {player.playerName} </h2> </h2>


    <div className='flex justify-between'>        
        <div className='flex items-center'>
          <Flag />  
          <span className='ml-2'> {player.playerCountry} </span>
        </div>

           <div>
            <button className='btn'>  {player.playerType} </button>
            </div> 

    </div>


    <h4> {player.rating} </h4>

    <div className='flex justify-between '>

      <div>  <h3> {player.batStyle} </h3> </div>
      <div> <h3> {player.bowlingStyle} </h3> </div>
    
    </div>

        <div className='flex  justify-between items-center'>
             
             <div><h2> {player.price} </h2></div>
             <div> <button className='btn'>Choose player</button> </div>
           

        </div>
   

  </div>
                      </div>

    </div>
  );
};

export default Card;