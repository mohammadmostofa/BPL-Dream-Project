import Navbar from './assets/Component/Navbar/Navbar';

import './App.css'
import Player from './assets/Component/Player/Player';
import { Suspense, useState } from 'react';
import Banner from './assets/Component/Banner/Banner';

const fetchPlayer = async() => {
    const res = await fetch('/public/data.json')
   return res.json()
    
}

function App() {

  const playerPromise = fetchPlayer();

  // set coin usestate

  const [coin, setCoin] = useState(8000000)

  return (
    <>
            {/* transfer this coin in navbar  */}
           <Navbar coin = {coin} > </Navbar>
           <Banner></Banner>
           <Suspense fallback = {<span className="loading loading-dots loading-xl"></span>}>

           {/* setCoin tranfer player to update  */}

           <Player playerPromise = {playerPromise} setCoin = {setCoin}  coin = {coin} ></Player>
           </Suspense>

    </>
  )
}

export default App;
