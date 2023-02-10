import { Navbar, Nav, Button } from 'react-bootstrap'
import { Form, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CustomNavbar = (props) => {
    return(
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Weather Forecast</Navbar.Brand>
    <Nav className="mr-auto">
      <Link to="/">
        <div className="nav-link" style={{ color: 'whitesmoke' }}>Home</div>
       </Link>
       <Link to="/locations">
        <div className="nav-link" style={{ color: 'whitesmoke' }}>Locations</div>
       </Link>
      <Link to="/details">
        <div className="nav-link" style={{ color: 'whitesmoke' }}>Details</div>
       </Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    )
}

export default CustomNavbar