import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function Navigation() {
    return(
        <>
            <img src="classdemo/src/images/image.jpg"></img>
            <h1>SARAH "DASHA" NOLAN</h1>
            <Navbar bg="light">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#education">Education</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                    </Nav>
                    <Button variant="secondary" onClick={() => {localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'); window.location.reload()}}>
                        Change Mode
                    </Button>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;