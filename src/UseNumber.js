import { useState } from "react"

export let UseState1=()=>
{
    const[count,setcount]=useState(0)
    const counting=()=>
    {
        setcount(count+20);
    }
    const countZero=()=>
    {
        setcount(0);
    }
    return(
        <>
        <button onClick={counting} onDoubleClick={countZero}>Single click value is added and Double click value is zero</button>
        <span style={{color:'blue',backgroundColor:'black'}}>
            {count}
        </span>
        </>
    )

}