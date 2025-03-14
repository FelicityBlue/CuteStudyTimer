import { useState } from 'react';
import Timer from './components/Timer.jsx';
import Tasks from './components/Tasks.jsx';
import timeUpSound1 from "/src/assets/timeup_sound_1.mp3";
import timeUpSound2 from "/src/assets/timeup_sound_2.mp3";

import './App.css'

function App() {
  const currTimeUpSound = timeUpSound1;
  
    return (
    <>
    <h1 className="webName">Cute Study Timer</h1>
    
    <div className="mainDisplayContainer">
      <div className="timerDisplayContainer" >
        <Timer timeUpSound={currTimeUpSound} />
      </div>
      <div className="taskDisplayContainer">
        <Tasks />
      </div>
    </div>
    <div className="musicPlayer">
      <iframe id="spotify" data-src="https://open.spotify.com/embed/playlist/4Zjli1P13J5mmSCD5iKAXK?theme=0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" src="https://open.spotify.com/embed/playlist/4Zjli1P13J5mmSCD5iKAXK?theme=0"></iframe>
    </div>
    <a className="ghLink" href="https://github.com/FelicityBlue">@FelicityBlue</a>
    </>
  )
}

export default App
