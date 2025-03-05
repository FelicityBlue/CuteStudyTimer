import { useState, useEffect } from 'react'
import settingIcon from "../assets/setting_icon.svg";
function Timer() {
 const [timeLeft, setTimeLeft] = useState(1500);
 const [secLeft, setSecLeft] = useState("00");
 const [minLeft, setMinLeft] = useState(25);
 const [timerRun, setTimerRun] = useState(false);

 const [currTimer, setCurrTimer] = useState(1500);
 const [totalFocusTime, setTotalFocusTime] = useState(0);
 
  function setSecStr(second){
    if(second == 0){
      setSecLeft("00");
    }
    else if(second < 10){
      setSecLeft("0" + second);
    }
    else{
      setSecLeft(second.toString());
    }
  }

  function startTimer () {
    setTimerRun(true);
  }

  useEffect(() => {
    if(!timerRun) return;

    const timeInterval = setInterval (() => {
    if(timeLeft !== 0){
        const updatedTimeLeft = timeLeft - 1;
        setTimeLeft(updatedTimeLeft);

        setSecStr(updatedTimeLeft % 60);
        setMinLeft(Math.floor(updatedTimeLeft/60));
    }
    else{
        setTimerRun(false);
        setMinLeft(Math.floor(currTimer/60));
        setTimeLeft(currTimer);
        setTotalFocusTime(totalFocusTime+currTimer);
        clearInterval(timeInterval);
    }
}, 1000);
    return () => clearInterval(timeInterval);
  }, [timerRun, timeLeft]);
  function setTimer(seconds){
    setTimeLeft(seconds);
    setMinLeft(Math.floor(seconds / 60));
    setSecLeft("00");
    setCurrTimer(seconds);
    setTimerRun(false);
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
          <p className="timer">{minLeft}:{secLeft}</p>
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
