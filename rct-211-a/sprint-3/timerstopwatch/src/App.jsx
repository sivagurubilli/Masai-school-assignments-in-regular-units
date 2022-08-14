import { useState } from 'react'

import './App.css'
import { useStopwatch } from './Hooks/useStopwatch'
import { useTimer } from './Hooks/useTimer'


function App() {
  const [show,setshow]= useState(true)
  const{sec,hour,min,start,pause,reset} =useStopwatch()
const {sec1,hour1,min1,onStart,onStop,reset1,handlech} = useTimer()


  return (
    <div className="App">
      <h1>stop watch</h1>
    
{hour>1? hour+"-"+"hours":hour+"-"+"hour"}:{min>1? min+"-"+"mins":min+"-"+"min"}:{sec>1? sec+"-"+"secs":sec+"-"+"sec"}
     <br />
 <button onClick={start}>start</button>
 <button onClick={pause}>pause</button>
 <button onClick={reset}>reset</button>

<br />
<br />
<br />
<br />
<h1>timer gooogle</h1>


{show ? null:(
  <form>
  <span>-hrs</span>
  <input
  type  = "number"
  onChange={handlech}
  placeholder="HH"
  id ="hour" 
  />
  <span>-mins</span>
  <input
  type  = "number"
  onChange={handlech}
  placeholder="Min"
  id ="min" 
  />
  <span>-sec</span>
  <input
  type  = "number"
  onChange={handlech}
  placeholder="SEC"
  id ="sec" 
  />
  <button onClick={()=>setshow(!show)}>{show?null:"done"}</button>
  </form>
)}



{show ?(
  <div>
    <div onClick={()=>setshow(!show)}>   
      {hour1>1? hour1+"-"+"hours":hour1+"-"+"hour"}:{min1>1? min1+"-"+"mins":min1+"-"+"min"}:{sec1>1? sec1+"-"+"secs":sec1+"-"+"sec"}
 
    </div>
   
 
<br/>
<button onClick={onStart}>start</button>
 <button onClick={onStop}>pause</button>

<button onClick={reset1}>reset</button>

</div>
):null}

    </div>

  )
}

export default App
