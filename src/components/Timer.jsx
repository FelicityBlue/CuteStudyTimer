import { useState, useEffect } from 'react'
import settingIcon from "../assets/setting_icon.svg";
function Timer() {
 const [timeLeft, setTimeLeft] = useState(1500);
 const [timerRun, setTimerRun] = useState(false);
 const [totalFocusTime, setTotalFocusTime] = useState(0);
 
 let currTimer = 1500;
 let startTime = Date.now();


  function startTimer () {
    setTimerRun(true);
    startTime = Date.now();
  }

  useEffect(() => {
    if(!timerRun) return;

    const timeInterval = setInterval (() => {
    if(timeLeft !== 0){
        const updatedTimeLeft = timeLeft - 1;
        setTimeLeft(updatedTimeLeft);
    }
    else{
        setTimerRun(false);
        setTotalFocusTime(totalFocusTime+(Math.floor(currTimer / 60)));
        clearInterval(timeInterval);
    }
}, 1000);
    return () => clearInterval(timeInterval);
  }, [timerRun, timeLeft]);
  function setTimer(seconds){
    setTimeLeft(seconds);
    currTimer = seconds;
    setTimerRun(false);
  }
  function displayTime(){
    let sec = "";
    let second = timeLeft % 60;
    if(second == 0){
      sec = "00";
    }
    else if(second < 10){
      sec = "0" + timeLeft;
    }
    else{
      sec = second.toString();
    }

    let minute = Math.floor(timeLeft/60);

    return `${minute}:${sec}`;
  }
  function settingPopup(){

  }
    return (
    <>
      <div className="timeDisplayContainer">
        <div className="timerContainer">
          <div className="timerBtns">
            <button className="timerBtn" onClick={() => setTimer(1500)}>pomodoro</button>
            <button className="timerBtn" onClick={() => setTimer(60)}>short break</button>
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
