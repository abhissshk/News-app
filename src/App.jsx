import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Fetchdata from "./Components/Fetchdata";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/general" element={<Fetchdata cat={"general"} />} />
          <Route path="/Business" element={<Fetchdata cat={"Business"} />} />
          <Route path="/Fetchdata" element={<Fetchdata cat={"Fetchdata"} />} />
          <Route
            path="/Entertrainment"
            element={<Fetchdata cat={"Entertrainment"} />}
          />
          <Route path="/Health" element={<Fetchdata cat={"Health"} />} />
          <Route path="/Sport" element={<Fetchdata cat={"SPORT"} />} />
          <Route path="/Science" element={<Fetchdata cat={"sceinece"} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
