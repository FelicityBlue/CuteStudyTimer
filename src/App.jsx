import { useState } from 'react';
import Timer from './components/timer.jsx';
import MusicPlayer  from './components/MusicPlayer.jsx';
import './App.css'

function App() {
  
    return (
    <>
    <h1 className="webName">Cute Study Timer</h1>
    <MusicPlayer />
    <Timer />
    <a className="ghLink" href="https://github.com/FelicityBlue">@FelicityBlue</a>
    </>
  )
}

export default App
