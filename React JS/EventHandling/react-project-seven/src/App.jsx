import { useState } from 'react'
import './App.css'
import ColorSwitch from './colorSwitch'
import ResizeWindow from './components/ResizeWindow'

function App() {
  // const [click, setClick] = useState(0);

  // function handleClickOutside(){
  //   setClick(c => c+1);
  // }

  // function getRandomColor(){
  //   let r = 150 + Math.round(100 * Math.random());
  //   let g = 150 + Math.round(100 * Math.random());
  //   let b = 150 + Math.round(100 * Math.random());
  //   return `rgb(${r} , ${g} , ${b})`
  // }

  // function handleColorChange(){
  //   let bodyStyle = document.body.style;
  //   bodyStyle.backgroundColor = getRandomColor();
  // }
  return (
    // <div style={{width:'200px', height:'200px'}} onClick={handleClickOutside}>
    <div>
      {/* <ColorSwitch onChangeColor= {handleColorChange}/>
      <br/>
      <br/>
      <h2>Clicks on the page: {click}</h2> */}
      <ResizeWindow/>
    </div>
  )
}

export default App
