import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Registration from './components/Registration'
import Table from './components/Table'
import Details from './components/Details'

function App() {

  const[selectedTrack, setSelectedTrack]=useState(null);
  const [tracks, setTracks]=useState([]);
  const addTrack = (newTrack)=>{
    setTracks((prev)=> [...prev, newTrack]);
  };

  return (
  
    <div className="min-h-screen bg-black text-white">
        <Header/>

        <main className="pt-10">
          
          <Registration addTrack={addTrack}/>
          <Table data={tracks} setSelectedTrack={setSelectedTrack}/>
          <Details track={selectedTrack}/>
          
        </main>

    </div>
   
  )
}

export default App
