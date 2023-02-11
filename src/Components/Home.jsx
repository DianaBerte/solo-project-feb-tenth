// import { Card, Button, Container } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { Row, Col} from "react-bootstrap";
// import { useEffect, useState } from "react";
// import Job from "./SearchCity";



import { useState } from "react";
import { Container, Form, Jumbotron } from "react-bootstrap";
import Details from "./Details";


const WeatherSearch = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [locationArea, setLocationArea] = useState("");
  const [isloading, setIsLoading] = useState(true);

  const basepoint = `https://api.openweathermap.org/data/2.5/weather?q=`;
  const apiKey = ",&APPID=6af993cceb0d29ae03dc006dafe28c01";

  const handleChange = (e) => {
    setLocationArea(e.target.value);
  };

  const fetchWeather = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch(
        basepoint + locationArea + apiKey + "&units=metric",
        {
          method: "GET",
        }
      );

      if (response.ok) {
        const rawWeatherData = await response.json();
        console.log(rawWeatherData);
        setWeatherData(rawWeatherData);
        setIsLoading(false);
      } else {
        console.log("Error!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchWeather();

  return (
    <>
      <Jumbotron className="mainLanding" fluid>
        <Container>
          <div className="searchBar mb-5">
            <h1 className="title-app mb-3">Weather App</h1>
            <Form onSubmit={fetchWeather}>
              <Form.Control
                type="search"
                value={locationArea}
                placeholder="Please enter city and press Enter~"
                onChange={handleChange}
              />
            </Form>
          </div>
          {isloading ? <></> : <Details info={weatherData} />}
        </Container>
      </Jumbotron>
    </>
  );
};

export default WeatherSearch;








/////////////////////////////////////////////////////////////////////////////////////////////////////

// import { useState } from "react";
// import { Container, Form, Jumbotron } from "react-bootstrap";
// import Details from "./Details";



// const searchCityWeather = () => {

//   const [weatherData, setWeatherData] = useState([]);
//   const [locationArea, setLocationArea] = useState("");
//   const [isLoading, setIsLoading] = useState(true);

//   const basepoint = `https://api.openweathermap.org/data/2.5/weather?q=`;
//   const APIKey = ",&APPID=5ba9d17923ff2d1e458d43d79ee8b7dc";

//   const handleChange = (e) => {
//     setLocationArea(e.target.value);
//   };

//   const fetchWeather = async (e) => {
//     e.preventDefault();

//       try {
//         let response = await fetch(basepoint + locationArea + APIKey + "&units=metric",
//         {
//           method: "GET"
//         }
//         );
//         if (response.ok) {
//           const rawWeatherData = await response.json();
//           console.log(rawWeatherData);
//           setWeatherData(rawWeatherData);
//           setIsLoading(false);
//         } else {
//           console.log("Error");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//   };

//   fetchWeather();

//   return(
//     <>
//     <Jumbotron>
//       <Container>
//         <div>
//           <h1>Search Weather</h1>
//           <Form onSubmit={fetchWeather}>
//             <Form.Control
//             type="search"
//             value={locationArea}
//             placeholder="Search for any city"
//             onChange={handleChange}/>
//           </Form>
//         </div>
//         {isLoading ? <></> : <Details info={weatherData} /> }
//       </Container>
//     </Jumbotron>
//     </>
//   );
// }

// export default searchCityWeather

/////////////////////////////////////////////////////////////////////////////////////////////////////




// const Home = () => {

//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);

//   const getWeather = async (e) => {
//     e.preventDefault();
//     let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=5ba9d17923ff2d1e458d43d79ee8b7dc&units=metric`);
//     let cityWeather = await response.json();
//     setWeather(cityWeather);
//     console.log(cityWeather);
//   };
//   return(
//     <div>
//       <Container className="justify-content-center">
//         <Row className="justify-content-center mt-5">
//           <h1>Search for any city and check its weather</h1>
//         </Row>
//         <Row className="justify-content-center mt-5 w-100">
//           <Col lg={6}>
//             <Job getWeather={getWeather} setCity={setCity} />
//             {/* <WeatherInformation weather={weather} /> */}
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Home

//   // const navigate = useNavigate()

//   // // const [weather, setWeather] = useState([]);
//   // const [city, setCity] = useState("");

//   // const fetchWeather = async () => {
//   //   try {
//   //     let response = await fetch('api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5ba9d17923ff2d1e458d43d79ee8b7dc');
//   //     if (response.ok) {
//   //       const data = await response.json();
//   //       setCity(data);
//   //       console.log("City object:", city);
//   //     } else {
//   //       alert("error");
//   //     }
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   // useEffect(() => {
//   //   fetchWeather();
//   // // eslint-disable-next-line react-hooks/exhaustive-deps
//   // },[])

//   //   return(
//   //     <>
//   //       <h3>Welcome!</h3>
//   //       <br/>
//   //       <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas nisl felis, a cursus velit pulvinar sed. Ut eu ex lectus. Integer luctus sodales ultricies. Donec interdum, eros et porttitor sagittis, dolor nulla condimentum nisi, a gravida tortor neque quis dolor. Fusce cursus hendrerit vehicula. Curabitur scelerisque feugiat eros in commodo. Donec suscipit, ante ac blandit accumsan, neque nunc pellentesque risus, non scelerisque turpis tellus at eros. Nam urna est, finibus a justo et, aliquam egestas purus. Fusce rutrum nisl vel enim pretium sagittis. Fusce massa neque, fermentum a sagittis eget, semper eu nisi. Nam ullamcorper elementum placerat. Aliquam iaculis metus porta, vestibulum nunc nec, euismod neque. Pellentesque eget tortor est. Curabitur sodales risus ligula. Morbi a ante eget ipsum sagittis posuere.
//   //         </h6>
//   //         <br />
//   //         <Container>
//   //         <Row>
//   //         <Col>
//   //   <Card >
//   //     <Card.Img variant="top" src="https://fastly.picsum.photos/id/32/300/200.jpg?hmac=jA7ND38rGra6oapvq5VzLy1X3bMjZhM2LmK7lUytsMI" />
//   //     <Card.Body>
//   //       <Card.Title>Card Title</Card.Title>
//   //       <Card.Text>
//   //         Some quick example text to build on the card title and make up the
//   //         bulk of the card's content.
//   //       </Card.Text>
//   //       <Button variant="primary" onClick={() => navigate('/details')} >Details</Button>
//   //       <br />
//   //       <Button variant="primary" onClick={() => navigate('/about')} >About</Button>
//   //     </Card.Body>
//   //   </Card>
//   //   </Col>
//   //   <Col >
//   //   <Card >
//   //     <Card.Img variant="top" src="https://fastly.picsum.photos/id/826/300/200.jpg?hmac=NnmrhH_NCICiI15hFluZ11rXEWXDnXtpEyhA1TlwEfY" />
//   //     <Card.Body>
//   //       <Card.Title>Card Title</Card.Title>
//   //       <Card.Text>
//   //         Some quick example text to build on the card title and make up the
//   //         bulk of the card's content.
//   //       </Card.Text>
//   //        <Button variant="primary" onClick={() => navigate('/details')} >Details</Button>
//   //       <br />
//   //       <Button variant="primary" onClick={() => navigate('/about')} >About</Button>
//   //     </Card.Body>
//   //   </Card>
//   //   </Col>
//   //   <Col>
//   //   <Card >
//   //     <Card.Img variant="top" src="https://fastly.picsum.photos/id/118/300/200.jpg?hmac=4PdfMFtROS4lTO5bgSauhA_y7SjZGF0NhVRCGAq3NSs" />
//   //     <Card.Body>
//   //       <Card.Title>Card Title</Card.Title>
//   //       <Card.Text>
//   //         Some quick example text to build on the card title and make up the
//   //         bulk of the card's content.
//   //       </Card.Text>
//   //       <Button variant="primary" onClick={() => navigate('/details')} >Details</Button>
//   //       <br />
//   //       <Button variant="primary" onClick={() => navigate('/about')} >About</Button>
//   //     </Card.Body>
//   //   </Card>
//   //       </Col>
//   //       </Row>
//   //       </Container>
//   //      </>
//   // )
//   // }


