import { useState } from 'react';
import Timer from './components/timer.jsx';
import Tasks from './components/Tasks.jsx';

import './App.css'

function App() {
  
    return (
    <>
    <h1 className="webName">Cute Study Timer</h1>
    <div className="mainDisplayContainer">
      <div className="timerDisplayContainer" >
        <Timer />
      </div>
      <div className="taskDisplayContainer">
        <Tasks />
      </div>
    </div>
    <div className="musicPlayer">
      <iframe id="spotify" width="100%" height="80" frameborder="0" allowfullscreen="" data-src="https://open.spotify.com/embed/playlist/4Zjli1P13J5mmSCD5iKAXK?theme=0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" src="https://open.spotify.com/embed/playlist/4Zjli1P13J5mmSCD5iKAXK?theme=0"></iframe>
    </div>
    <a className="ghLink" href="https://github.com/FelicityBlue">@FelicityBlue</a>
    </>
  )
}

export default App
