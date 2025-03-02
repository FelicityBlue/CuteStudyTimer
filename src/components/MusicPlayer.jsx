import beethoven from "/src/assets/beethovenMoonlightSonata1.mp3"; // Make sure the path is correct
import playIcon from "/src/assets/play_icon.svg";
import pauseIcon from "/src/assets/pause_icon.svg";

import { useState, useRef } from 'react';

function MusicPlayer() {
    const [currMusic, setCurrMusic] = useState(beethoven);
    const musicRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    function playMusic() {
        musicRef.current.play();
        musicRef.current.volume = 0.1;
        setIsPlaying(true);
    }
    function pauseMusic(){
        musicRef.current.pause();
        setIsPlaying(false);
    }

    return (
        <div className="playerContainer">
            <audio
                ref={musicRef}
                loop
                src={currMusic}
            ></audio>
            <img className="icon" onClick={playMusic} src={playIcon} />
            <img className="icon" onClick={pauseMusic} src={pauseIcon} />
        </div>
    );
}

export default MusicPlayer;
