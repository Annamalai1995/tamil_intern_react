import { useState } from "react"

export let FirstHook=()=>
{

    //const[getname,setname]=usestate("")
    const[Hai,setUser]=useState("")
    const Display=()=>
    {
        alert(Hai+"Added Successfully");

 
    }
    const output=(temp)=>{
        setUser(temp.target.value)


    }
    return(
        <>
        <input type="text" placeholder="Enter The name" name={Hai} onChange={output}/>
        <button className="btn-btn-outline-secondary" onClick={Display}>ACtion</button>
        </>
    )



}