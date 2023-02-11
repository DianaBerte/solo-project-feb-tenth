import { Card, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Row, Col} from "react-bootstrap";
import { useEffect, useState } from "react";



const Home = () => {

  const navigate = useNavigate()

  // const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("");

  const fetchWeather = async () => {
    try {
      let response = await fetch('api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5ba9d17923ff2d1e458d43d79ee8b7dc');
      if (response.ok) {
        const data = await response.json();
        setCity(data);
        console.log("City object:", city);
      } else {
        alert("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeather();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

    return(
      <>
        <h3>Welcome!</h3>
        <br/>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas nisl felis, a cursus velit pulvinar sed. Ut eu ex lectus. Integer luctus sodales ultricies. Donec interdum, eros et porttitor sagittis, dolor nulla condimentum nisi, a gravida tortor neque quis dolor. Fusce cursus hendrerit vehicula. Curabitur scelerisque feugiat eros in commodo. Donec suscipit, ante ac blandit accumsan, neque nunc pellentesque risus, non scelerisque turpis tellus at eros. Nam urna est, finibus a justo et, aliquam egestas purus. Fusce rutrum nisl vel enim pretium sagittis. Fusce massa neque, fermentum a sagittis eget, semper eu nisi. Nam ullamcorper elementum placerat. Aliquam iaculis metus porta, vestibulum nunc nec, euismod neque. Pellentesque eget tortor est. Curabitur sodales risus ligula. Morbi a ante eget ipsum sagittis posuere.
          </h6>
          <br />
          <Container>
          <Row>
          <Col>
    <Card >
      <Card.Img variant="top" src="https://fastly.picsum.photos/id/32/300/200.jpg?hmac=jA7ND38rGra6oapvq5VzLy1X3bMjZhM2LmK7lUytsMI" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={() => navigate('/details')} >Details</Button>
        <br />
        <Button variant="primary" onClick={() => navigate('/about')} >About</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col >
    <Card >
      <Card.Img variant="top" src="https://fastly.picsum.photos/id/826/300/200.jpg?hmac=NnmrhH_NCICiI15hFluZ11rXEWXDnXtpEyhA1TlwEfY" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
         <Button variant="primary" onClick={() => navigate('/details')} >Details</Button>
        <br />
        <Button variant="primary" onClick={() => navigate('/about')} >About</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card >
      <Card.Img variant="top" src="https://fastly.picsum.photos/id/118/300/200.jpg?hmac=4PdfMFtROS4lTO5bgSauhA_y7SjZGF0NhVRCGAq3NSs" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={() => navigate('/details')} >Details</Button>
        <br />
        <Button variant="primary" onClick={() => navigate('/about')} >About</Button>
      </Card.Body>
    </Card>
        </Col>
        </Row>
        </Container>
       </>
  )
  }

export default Home
