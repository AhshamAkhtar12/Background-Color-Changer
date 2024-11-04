import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("#BAFA01")

  return (
    <>
      <div id='mainDiv' style={{backgroundColor : color, display : "flex", justifyContent: "center" , alignItems: "center", flexDirection:"column"}}>
        <h1></h1>
        <div id='main' style={{backgroundColor : color}}>
        <button className='btn1' onClick={()=>setcolor("red")}>Red</button>
        <button className='btn2' onClick={()=>setcolor("green")}>Green</button>
        <button className='btn3' onClick={()=>setcolor("blue")}>Blue</button>
        <button className='btn4' onClick={()=>setcolor("purple")}>Purple</button>
        <button className='btn5' onClick={()=>setcolor("lime")}>Lime</button>
        <button className='btn6' onClick={()=>setcolor("gray")}>Gray</button>
        <button className='btn7' onClick={()=>setcolor("yellow")}>Yellow</button>
        <button className='btn8' onClick={()=>setcolor("pink")}>Pink</button>
        <button className='btn9' onClick={()=>setcolor("slateblue")}>Slateblue</button>
        <button className='btn10' onClick={()=>setcolor("black")}>Black</button>
        <button className='btn11' onClick={()=>setcolor("white")}>White</button>
        </div>
        </div>
    </>
  )
}

export default App
