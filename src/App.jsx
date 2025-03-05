import { useState } from 'react';
import Timer from './components/timer.jsx';
import Tasks from './components/Tasks.jsx';
import MusicPlayer  from './components/MusicPlayer.jsx';

import './App.css'

function App() {
  
    return (
    <>
    <h1 className="webName">Cute Study Timer</h1>
    <MusicPlayer />
    <div className="mainDisplayContainer">
      <div className="timerDisplayContainer" >
        <Timer />
      </div>
      <div className="taskDisplayContainer">
        <Tasks />
      </div>
    </div>
    <a className="ghLink" href="https://github.com/FelicityBlue">@FelicityBlue</a>
    </>
  )
}

export default App
