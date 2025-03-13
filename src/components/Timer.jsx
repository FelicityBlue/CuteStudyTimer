import { useState, useEffect, useRef } from 'react'
import settingIcon from "../assets/setting_icon.svg";
function Timer() {
 const [timeLeft, setTimeLeft] = useState(1500);
 const [timerRun, setTimerRun] = useState(false);
 const [totalFocusTime, setTotalFocusTime] = useState(0);
 
 const [currTimer, setCurrTimer] = useState(1500);
 const startTimeRef  = useRef(0);

  function startTimer () {
    setTimerRun(true);
    startTimeRef.current = Date.now();
  }

  useEffect(() => {
    if(!timerRun) return;

    const timeInterval = setInterval (() => {
    if(timeLeft !== 0){
        const timePassed = Date.now() - startTimeRef.current;
        const updatedTimeLeft = currTimer - (Math.floor(timePassed/1000));

        setTimeLeft(updatedTimeLeft);
    }
    else{
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
  }
  function displayTime(){
    let second = timeLeft % 60;
    let minute = Math.floor(timeLeft/60);
    
    // formatting the string
    let sec = String(second).padStart(2, "0");
    let min = String(minute).padStart(2,"0");

    return `${min}:${sec}`;
  }
  function settingPopup(){

  }
    return (
    <>
      <div className="timeDisplayContainer">
        <div className="timerContainer">
          <div className="timerBtns">
            <button className="timerBtn" onClick={() => setTimer(1500)}>pomodoro</button>
            <button className="timerBtn" onClick={() => setTimer(300)}>short break</button>
            <button className="timerBtn" onClick={() => setTimer(600)}>long break</button>
          </div>
          <p className="timer">{displayTime()}</p>
        </div>
        <div className="controlBtns">
          <button onClick={startTimer}>Start</button>
          <button onClick={() => setTimer(currTimer)}>Reset</button>
          <img onClick={settingPopup} src={settingIcon} />
        </div>
        <div id="totalTime">
          <p>Total Focus Time: {totalFocusTime} minutes</p>
        </div>
      </div>
    </>
  )
}

export default Timer
