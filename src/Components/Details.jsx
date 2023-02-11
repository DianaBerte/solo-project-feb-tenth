// import { Card, Button, Container } from "react-bootstrap"
// import { useNavigate } from "react-router-dom"

import { Container, Row, Col } from "react-bootstrap";
// import "./WeatherCss.css";
// import {
//   BsClouds,
//   BsThermometerLow,
//   BsThermometerHigh,
//   BsCompass,
//   BsWind,
// } from "react-icons/bs";

const DisplayArea = (props) => {
  return (
    <>
      <Container className="d-flex justify-content-center">
        <Row className="outer-container">
          <Col className="d-flex justify-content-center align-items-center">
            <div className="weather-container d-flex ">
              <div className="p-4 weather-info text-left">
                <h4>
                  {props.info.name} , {props.info.sys.country}
                </h4>
                <p className="main-temp">
                   {props.info.main.temp}°C
                </p>
                <p>
                  <b>
                    Feels like {props.info.main.feels_like}°C with {""}
                    {props.info.weather[0].description}.
                  </b>
                </p>
                <span className="mr-5">
                 
                  {props.info.main.temp_min}°C
                </span>
                <span>
                  {" "}
                  {""}
                  
                  {props.info.main.temp_max}°C
                </span>
                <br />
                <span className="mr-5">
                
                  {props.info.main.temp_min}°C
                </span>
                <span>
                  {" "}
                  {""}
               
                  {props.info.wind.speed}m/s
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DisplayArea;


// const Details = () => {

//     const navigate = useNavigate()

//     return(
//         <>
//         <Container>
//         <Card>
//         <Card.Body>
//           <Card.Text>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas nisl felis, a cursus velit pulvinar sed. Ut eu ex lectus. Integer luctus sodales ultricies. Donec interdum, eros et porttitor sagittis, dolor nulla condimentum nisi, a gravida tortor neque quis dolor. Fusce cursus hendrerit vehicula. Curabitur scelerisque feugiat eros in commodo. Donec suscipit, ante ac blandit accumsan, neque nunc pellentesque risus, non scelerisque turpis tellus at eros. Nam urna est, finibus a justo et, aliquam egestas purus. Fusce rutrum nisl vel enim pretium sagittis. Fusce massa neque, fermentum a sagittis eget, semper eu nisi. Nam ullamcorper elementum placerat. Aliquam iaculis metus porta, vestibulum nunc nec, euismod neque. Pellentesque eget tortor est. Curabitur sodales risus ligula. Morbi a ante eget ipsum sagittis posuere.
//           </Card.Text>
//         </Card.Body>
//         <Card.Img variant="bottom" src="https://fastly.picsum.photos/id/685/300/200.jpg?hmac=o3Va3kQ6AKfTS-RO-WzaL9qVhHFWm9lGLadtN5j1LYA" />
//       </Card>
//       <Button variant="primary" onClick={() => navigate('/')} >Back</Button>
//       </Container>
//       </>
//     )
// }

// export default Details