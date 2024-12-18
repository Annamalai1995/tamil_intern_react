import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export let Bootstrap=()=>
{
    const Display=()=>
    {
        alert("Apple is costly ")
    }
    return(
        <>
        <link  src="design.css" rel='stylesheet'></link>
        <table>
           <thead>
            <tr>
                <th>Name</th>
                <th>College</th>
            </tr>
            </thead> 
        </table>
        <button className='btn btn-outline-primary text-dark' onClick={Display}></button>
        </>
    )
}