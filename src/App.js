import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./Components/MyNavbar";
import WeatherSearch from "./Components/Home";
import DisplayArea from "./Components/Details";
// import Details from "./Components/Details";
// import Home from "./Components/Home";
// import Locations from "./Components/Locations";
// import About from "./Components/About";
// import MainSearch from "./Components/Search";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar />
        <Routes>
          <Route path="/" element={<WeatherSearch />} />
          <Route path="/weather" element={<DisplayArea />} />
          {/* <Route element={<MainSearch />} path="/" />
          <Route element={<Home />} path="/" />
          <Route element={<Details />} path="/details" />
          <Route element={<Locations />} path="/locations" />
          <Route element={<About />} path="/about" /> */}
          <Route element={<h1>Not Found 😢</h1>} path="*" />v
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
