import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  // const  [count,setCount] = useState(0)

  // let val = useRef(0)
  // let btnRef = useRef();

  // function handleIncrement(){
  //   val.current = val.current + 1;
  //   console.log("the value is :", val.current)
  //   setCount(count+1)
  //   btnRef.current.style.backgroundColor = "#4f46e5"
  // }

  // function colorChange(){
  //   btnRef.current.style.backgroundColor = "red"
  // }

  // useEffect(()=>{
  //   console.log("i have rendered one more time..")
  // })

  // return (
    // <div className="app">
    //   <div className="counter-box">
    //     <p className="count">Count: {count}</p>

    //     <button onClick={handleIncrement} ref={btnRef}>
    //       Click me
    //     </button>

    //     <button onClick={colorChange}>
    //       Change Color
    //     </button>
    //   </div>
    // </div>
  // )

  const [time,setTime] = useState(0);

  let timerRef = useRef(null);

  function startTimer(){
    timerRef.current = setInterval(() => {
      setTime(time => time+1)
    }, 1000);
  }

  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer(){
    stopTimer();
    setTime(0);
  }

  return (
    <div className="app">
      <div className="counter-box">
        <h1>StopWatch: {time} seconds</h1>
        <button onClick={startTimer}>Start</button><br/><br/>
        <button onClick={stopTimer}>Stop</button><br/><br/>
        <button onClick={resetTimer}>reset</button><br/><br/>
      </div>
    </div>
  )
}

export default App