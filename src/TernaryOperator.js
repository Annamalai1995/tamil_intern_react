import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react'
export const Ternary=()=>
{
    const[wish,setWish]=useState("")
    const[changes,setChanges]=useState({color:'green',background:'black'})
    const[result,setResult]=useState("")
    const action=(temp)=>
    {
        setWish(temp.target.value)
    }
    function exec()
    {
        (wish=="salem")?
        setChanges({color:'pink',backgroundColor:'black'}):
        (wish=="chennai")?
        setChanges({color:'yellow',backgroundColor:'black'}):
        (wish=="coimbatore")?
        setChanges({color:'blue',backgroundColor:'black'}):
        (wish=="Bangalore")?
        setChanges({color:'red',backgroundColor:'black'}):

        setChanges({color:'violet',backgroundColor:'black'})
        setResult(wish)

}
return(
    <>
    <input placeholder='Enter the city names' type='text' onChange={action}/>
    <button onClick={exec} className='btn btn-outline-warning'>PASS</button>

    <p style={changes}>
        {result}
    </p>
    </>
)


    
}