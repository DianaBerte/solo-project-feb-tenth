import locations from '../Components/newResponse.json'
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Locations = () => {
    return (
      <div>
        {locations.map((l) => (
          <div key={l.id} className="mt-5">
            <Link to={'/details/' + l.id}>
              <img src={l.image} alt="pasta" className="w-100" />
            </Link>
            <h4 className="d-flex justify-content-center mt-2">
              <span>{l.name}</span>
              <Badge className="mx-2" variant="warning">
                {l.price}
              </Badge>
              <Badge variant="danger">{l.label}</Badge>
            </h4>
          </div>
        ))}
      </div>
    )
  }
  
  export default Locations