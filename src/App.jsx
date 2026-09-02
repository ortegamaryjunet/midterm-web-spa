import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Registration from './components/Registration'

function App() {

  const [tracks, setTracks]=useState([]);
  const addTrack = (newTrack)=>{
    setTracks((prev)=> [...prev, newTrack]);
  };

  return (
  
    <div className="min-h-screen bg-white text-white">
        <Header/>

        <main className="pt-10">
          <Registration addTrack={addTrack}/>

        </main>

    </div>
   
  )
}

export default App
