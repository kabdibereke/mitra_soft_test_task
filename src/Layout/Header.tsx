import { Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';



const Header = () => {
    const navigate = useNavigate()
  return (
    <Navbar  bg="dark" variant='dark' expand='xxl' className="mb-3">
        <Container fluid='xxl'>
            <Navbar.Brand style={{'cursor':'pointer'}} onClick={()=>navigate('/')} >Mitra Soft</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-'xxl'`} />
            <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-'xxl'`}
                aria-labelledby={`offcanvasNavbarLabel-expand-'xxl'}`}
                placement="start"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-'xxl'`}>
                     Burger Menu
                    </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link onClick={()=>navigate('/')} >Post List</Nav.Link>
                        <Nav.Link onClick={()=>navigate('/about')}>About Me</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>
  )
}

export default Header