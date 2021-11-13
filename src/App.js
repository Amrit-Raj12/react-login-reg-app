import "./App.css";
import Header from "./Components/Header";
import Register from "./Components/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./Components/Details";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/info" element={<Details />}/>
          <Route  path="/" element={<Register />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
