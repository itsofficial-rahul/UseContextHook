// imp point 
// create context globally with export keyword 
// every com. ko React.memo se niche wrap kar do (rendering stop ko liye )

// jaha contecxt ka use karna ho vaha import karke useContext hook () me daal lo aur varible me store k=rwa lo

// then use like porp {} ke sath

// we can also send multiple value in single provider in double {{ : }}   ke andr


import React,{ createContext, useState} from 'react'
import Com1 from "./component1";
import Title from "./Title";
export  const User=createContext()  // context create with export ke sath 
function App()
{
  const [count,setCount]=useState(0)
  const[color,setcolor]=useState("green")
    return(
    <div>
   <Title /> 
      <User.Provider value={{count:count,clr:color}}> 
     <Com1 />
      <button onClick={()=>setCount(count+1)}>update me</button>
      <h1>useContext</h1>
      </User.Provider>
    </div>
  )
}
export default App;

