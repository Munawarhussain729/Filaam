import "./App.css";
import MovieDetails from "./components/Movie/MovieDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movieDetail" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
