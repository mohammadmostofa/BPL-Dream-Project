import React, { use, useState } from 'react';
import AvailabePlayer from '../AvailabePlayer/AvailabePlayer';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Player = ({playerPromise , setCoin ,coin}) => {
  const players = use(playerPromise)

  // setState 
  const [SelectedType, setSelectedType]  =  useState('available')
  console.log(setSelectedType, 'selectedType');

  // setState for selected card 
  const [selectedPlayer , setSelectedPlayer] = useState([])

  return (
    <div className='container mx-auto  my-10'>
       
        <div className='flex justify-between items-center mb-8 '>
        
            <div>

                    {
                       
                       SelectedType === 'available' ?
                        (<h2 className='text-2xl font-bold text-black'> Availabe Players  </h2>): 
                        (<h2 className='text-2xl font-bold text-black'>Selected Players ( {selectedPlayer.length} / {players.length}  ) </h2>)

                   }

            </div>

            <div className='flex justify-center items-center space-x-2'>

             <button onClick={ () => setSelectedType ('available') }
              className =  {  ` btn ${SelectedType === 'available' ? 'bg-yellow-300' :  '' } `} >
              Available
             </button>

             <button onClick={ () =>setSelectedType ('selected') }

              className = {` btn ${ SelectedType === 'selected' ? 'bg-yellow-300' : '' } `} >
                Selected( {selectedPlayer.length} )
              </button>

            </div>

        </div>
           
           {
              //  setCoin transfer available player
            SelectedType === 'available' ? 
            <AvailabePlayer
             players = {players} setCoin = {setCoin}

                                  coin = {coin}

               selectedPlayer = {selectedPlayer}

               setSelectedPlayer = {setSelectedPlayer} >

              </AvailabePlayer> :
              
            <SelectedPlayers selectedPlayer = {selectedPlayer}  setSelectedPlayer = {setSelectedPlayer} > </SelectedPlayers>


           }
           
    </div>
  );
};

export default Player;