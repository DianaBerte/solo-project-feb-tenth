import { Navbar, Nav, Button } from 'react-bootstrap'
import { Form, FormControl } from 'react-bootstrap'

const CustomNavbar = (props) => {
    return(
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Leave your Umbrella at Home</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Locations</Nav.Link>
      <Nav.Link href="#pricing">Info</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    )
}

export default CustomNavbar