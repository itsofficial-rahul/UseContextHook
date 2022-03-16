import Com3 from "./component3"
import React,{useMemo} from "react";
function Com2()
{
    console.log("com 2 is run");
    return(
        <div>
           
       <h1>Compomet 2 </h1>
       <Com3 />

        </div>
    )
}
export default React.memo(Com2)   // useMemo stop unwantd rendering export krna jaruri