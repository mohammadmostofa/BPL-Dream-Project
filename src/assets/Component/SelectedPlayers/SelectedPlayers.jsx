import { Trash, UserRound } from 'lucide-react';

const SelectedPlayers = ({selectedPlayer , setSelectedPlayer}) => {
  console.log(selectedPlayer , 'selectedPlayer')


  // delete btn setup (nise player parameter ta kintu selectedplayer er map er parameter teke nowya hoyeche)!

  const handleDeleteSelected = (player) => {
  const updatedPlayer = selectedPlayer.filter(
    selectedPlayer => selectedPlayer.playerName !== player.playerName
  );

  setSelectedPlayer(updatedPlayer);
};



  return (
    <div>
       
{

    selectedPlayer.map((player,index) => {

                    return <div key={index}   >

                                  <div className='flex  my-2 p-4 rounded-2xl border border-gray-300 justify-between items-center'>

                                 
                                      <div className='flex  items-center'>

                                                <div className='flex flex-col justify-center items-center '>       
                                      <img className='w-40 h-40 rounded-2xl' src= {player.image} alt=""/>
                                     </div>                                 
                                 
                                 <div className='px-2 '>
                                   <h2 className='flex text-black font-semibold text-xl'><UserRound></UserRound> {player.playerName} </h2>
                                   <h2 className='text-xl font- text-black'> {player.playerType} </h2>
                                 </div>

                                      </div>

                                 <div>
                                    
                                      <button  onClick={() => handleDeleteSelected(player)  }
                                      className= 'btn text-red-500'> <Trash></Trash>
                                       </button>

                                 </div>
                                 

                                  </div>
                                  

                                  <div>

                                  </div>
                                  

                    </div>
    })

}
    </div>
  );
};

export default SelectedPlayers;