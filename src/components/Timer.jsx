import Modal from 'react-modal';
import { useState, useEffect, useRef } from 'react'
import settingIcon from "../assets/setting_icon.svg";


function Timer(props) {
 const [timeLeft, setTimeLeft] = useState(1500);
 const [timerRun, setTimerRun] = useState(false);
 const [totalFocusTime, setTotalFocusTime] = useState(0);
 const [settingOpen, setSettingOpen] = useState(false);
 const [currTimer, setCurrTimer] = useState(1500);
 const startTimeRef  = useRef(0);
 const timeUpAudioRef = useRef(null);
 let pomodoroTime = 1500;
 let shortBreak = 300;
 let longBreak = 600;

  // start timer
  function handleStartTimer () {
    setTimerRun(true);
    startTimeRef.current = Date.now() - (currTimer - timeLeft) * 1000;
    // hide start btn & show pause btn
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("stop-btn").style.display = "block";
  }
  // Pause timer
  function handlePauseTimer() {
    setTimerRun(false);
    // show pause btn & hide start btn
    document.getElementById("start-btn").style.display = "block";
    document.getElementById("stop-btn").style.display = "none";
  }
  useEffect(() => {
    if(!timerRun) return;

    const timeInterval = setInterval (() => {
    if(timeLeft > 0){
      const timePassed = Date.now() - startTimeRef.current;
      const updatedTimeLeft = currTimer - (Math.floor(timePassed/1000));

      setTimeLeft(updatedTimeLeft);
    }
    else{   
      timeUpAudioRef.current.play();
      setTimerRun(false);
      setTimeLeft(currTimer);
      setTotalFocusTime(totalFocusTime+(Math.floor(currTimer / 60)));
      clearInterval(timeInterval);
    }
}, 800);
    return () => clearInterval(timeInterval);
  }, [timerRun, timeLeft]);
  
  function setTimer(seconds){
    setTimeLeft(seconds);
    setCurrTimer(seconds);
    setTimerRun(false);

    const pomodoroBtn = document.getElementById("pomodoro-btn");
    const shortBreakBtn = document.getElementById("shortbreak-btn");
    const longBreakBtn = document.getElementById("longbreak-btn");

    pomodoroBtn.classList.remove("currModeBtn");
    shortBreakBtn.classList.remove("currModeBtn");
    longBreakBtn.classList.remove("currModeBtn");

    if (seconds == pomodoroTime){
      pomodoroBtn.classList.add("currModeBtn");
    }
    else if(seconds == shortBreak){
      shortBreakBtn.classList.add("currModeBtn");
    }
    else if(seconds == longBreak){
      longBreakBtn.classList.add("currModeBtn");
    }
  }
  function displayTime(){
    let second = timeLeft % 60;
    let minute = Math.floor(timeLeft/60);
    
    // formatting the string
    let sec = String(second).padStart(2, "0");
    let min = String(minute).padStart(2,"0");

    return `${min}:${sec}`;
  }

    return (
    <>
      <audio ref={timeUpAudioRef} src={props.timeUpSound} />
      <div className="timeDisplayContainer">
        <div className="timerContainer">
          <div className="timerBtns">
            <button id="pomodoro-btn" className="timerBtn" onClick={() => setTimer(pomodoroTime)}>pomodoro</button>
            <button id="shortbreak-btn" className="timerBtn" onClick={() => setTimer(shortBreak)}>short break</button>
            <button id="longbreak-btn" className="timerBtn" onClick={() => setTimer(longBreak)}>long break</button>
          </div>
          <p className="timer">{displayTime()}</p>
        </div>
        <div className="controlBtns">
          <button id="start-btn" onClick={handleStartTimer}>Start</button>
          <button id="stop-btn" onClick={handlePauseTimer}>Pause</button>
          <button onClick={() => setTimer(currTimer)}>Reset</button>
        </div>

      </div>
    </>
  )
}

export default Timer
