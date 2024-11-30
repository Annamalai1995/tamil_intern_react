import './Exter.css'
export function Table()
{
    return(
        <>
        <table align="center" cellPadding="3px" cellSpacing="3px">
            <tbody>
                <h1 align="center">STUDENT DATA</h1>
                <tr>
                    <td>
                        <label>First Name</label>
                    </td>
                    <td>
                        <input type="text" placeholder="Enter your Lastname"></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>LastName</label>
                    </td>
                    <td>
                        <input type="text" placeholder="Enter your Lastname"></input>
                    </td>
                </tr>
                <tr align="center">
                    <td>
                       <button type="submit">SUBMIT</button>

                    </td>
                    <td>
                       <button type="reset">Reset</button>
                    </td>

                </tr>

            </tbody>

        </table>

        </>
    )
}