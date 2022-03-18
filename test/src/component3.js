import React,{useState,useContext,useMemo} from 'react'
import { User } from './App'  // jaha use krna vaha i,port kar lo context ko
function Com3()
{
    console.log("com 3 is run");
    const {count,clr}=useContext(User)  // varible me store krwa lo hook se 
    console.log(clr)
    return(
        <div>
    <h1 style={{color:clr}}>{count}</h1> // use kar lo
   <h1>Component 3 </h1>

        </div>
    )
}
export default React.memo(Com3)  // useMemo stop unwantd rendering export krna jaruri