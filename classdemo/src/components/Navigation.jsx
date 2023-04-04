import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function Navigation() {
    return(
        <>
            <h1>SARAH "DASHA" NOLAN</h1>
            <a class="image" href="https://imgur.com/dAyZ2r9"><img src="https://i.imgur.com/dAyZ2r9.jpg" title="source: imgur.com" width="473" height="473"/></a>
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