import { Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavDropdown, NavLink } from "react-bootstrap"

export const Homepage=()=>
{
    return(
        <>
        <Navbar bg="light" expand="lg">
            <NavbarBrand href="#Home">REACT BOOTSTRAP</NavbarBrand>
            <NavbarToggle aria-controls="Navbar-basic"/>
            <NavbarCollapse id="Navbar-basic">
                <Nav classname="mt-auto">
                    <Nav.Link href="./create">CREATE</Nav.Link>
                    <Nav.Link href="./Update">UPDATE</Nav.Link>
                    <NavDropdown title="Dropdown" id="Navbar-basic-dropdown">
                        <NavDropdown.Item href="haii">ACTION</NavDropdown.Item>
                        <NavDropdown.Item href="Hello">ONE</NavDropdown.Item>
                        <NavDropdown.Item href="HEY">Two</NavDropdown.Item>

                        <NavDropdown.Item href="WHERE">Three</NavDropdown.Item>

                    </NavDropdown>

                </Nav>
            </NavbarCollapse>
        </Navbar>
        </>
    )
}