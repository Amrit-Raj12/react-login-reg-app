import "./App.css";
import Header from "./Components/Header";
import Register from "./Components/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./Components/Details";
import Footer from "./Components/Footer";
import Movies from "./Components/Movies";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/info" element={<Details />}/>
          <Route  path="/" element={<Register />} />
          <Route  path="/movies" element={<Movies />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
