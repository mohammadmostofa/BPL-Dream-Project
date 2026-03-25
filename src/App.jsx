import Navbar from './assets/Component/Navbar/Navbar';

import './App.css'
import Player from './assets/Component/Player/Player';
import { Suspense } from 'react';
import Banner from './assets/Component/Banner/Banner';

const fetchPlayer = async() => {
    const res = await fetch('/public/data.json')
   return res.json()
    
}

function App() {

  const playerPromise = fetchPlayer();

  return (
    <>
           <Navbar> </Navbar>
           <Banner></Banner>
           <Suspense fallback = {<span className="loading loading-dots loading-xl"></span>}>
           <Player playerPromise = {playerPromise} ></Player>
           </Suspense>

    </>
  )
}

export default App;
