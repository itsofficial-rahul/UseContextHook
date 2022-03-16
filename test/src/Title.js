import React,{useMemo} from "react"
function Title()
{
    console.log("title is runn")
    return(
        <div>

            <h1>this is title</h1>
        </div>
    )
}
export default React.memo( Title)  // useMemo stop unwantd rendering export krna jaruri