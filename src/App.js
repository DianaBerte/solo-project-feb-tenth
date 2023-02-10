import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./Components/MyNavbar";
import Details from "./Components/Details";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar />
        <br />
        <body className="App-body">
          <br />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Details />} path="/details" />
            <Route element={<h1>Not Found 😢 </h1>} path="*" />v
          </Routes>
        </body>
      </div>
    </BrowserRouter>
  );
}

export default App;
