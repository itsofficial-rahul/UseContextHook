import Com2 from "./component2"
import React,{useMemo} from "react";
function Com1(props)
{
    console.log("com 1 is run");
    return(
        <div>
       <h1>Component 1 </h1>
 <Com2 />

        </div>
    )
}
export default React.memo(Com1)   // useMemo stop unwantd rendering export krna jaruri