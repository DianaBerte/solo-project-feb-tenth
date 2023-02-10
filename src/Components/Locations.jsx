// import locations from '../Components/newResponse.json'
// import { Badge } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Locations = () => {

    const navigate = useNavigate()

    return (
        <>
    <ListGroup variant="flush">
      <ListGroup.Item>Cras justo odio <br />
      <Button variant="primary" onClick={() => navigate('/about')} >About</Button>
      </ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in <br />
      <Button variant="primary" onClick={() => navigate('/about')} >About</Button></ListGroup.Item>
      <ListGroup.Item>Morbi leo risus <br />
      <Button variant="primary" onClick={() => navigate('/about')} >About</Button></ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac <br />
      <Button variant="primary" onClick={() => navigate('/about')} >About</Button></ListGroup.Item>
    </ListGroup>
      </>
    )
  }
  
  export default Locations