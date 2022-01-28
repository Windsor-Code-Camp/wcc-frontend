import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useToken } from "../providers/AuthTokenProvider";

function NavigationBar() {
    const authenticated = useToken() !== "";

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">WCC</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        {authenticated ? (
                            <>
                                <Nav.Link as={Link} to="/logout">
                                    Logout
                                </Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to="/register">
                                    Register
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar;
