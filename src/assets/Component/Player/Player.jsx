import React, { use } from 'react';
import AvailabePlayer from '../AvailabePlayer/AvailabePlayer';

const Player = ({playerPromise}) => {
  const players = use(playerPromise)


  return (
    <div className='container mx-auto  '>

      <h2> player: {players.length} </h2>

          <AvailabePlayer players = {players} ></AvailabePlayer>
           
    </div>
  );
};

export default Player;