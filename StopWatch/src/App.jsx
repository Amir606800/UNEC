import { useEffect, useState } from 'react';

import './App.css';

function StopWatch() {
  const [time,setTime] = useState(0);
  const[isRunning,setIsRunning] = useState(false);

  useEffect(()=>{
    let timer;

    if(isRunning){
      timer = setInterval(() => {
        setTime((prevTime) => prevTime+10);
      }, 10);
    }
    return()=>clearInterval(timer)
  },[isRunning])

  function start(){
    setIsRunning(true)
  }
  function stop(){
    setIsRunning(false)
  }
  function reset(){
    setIsRunning(false)
    setTime(0)
  }

  const updateTime = ()=>{
    const milliseconds = time%1000/10;
    const seconds = Math.floor((time / 1000) % 60); // Extract seconds
    const minutes = Math.floor((time / (1000 * 60)) % 60); // Extract minutes
    return `${String(minutes).padStart("2",0)}:${String(seconds).padStart("2",0)}:${String(milliseconds).padStart("2",0)}`
  }
  
  return (
    <>
      <div id="head">
        StopWatch
      </div>
      <div id="container">
        <div className="screen">
          {updateTime()}
        </div>
        <div className="buttons">
          <button onClick={start} id='Start'>Start</button>
          <button onClick={stop} id='Stop'>Stop</button>
          <button onClick={reset} id='Restart'>Restart</button>
        </div>
      </div>
    </>
  )
}

export default StopWatch