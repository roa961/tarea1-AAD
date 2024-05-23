import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Rocas from "./components/Rocas";
import Footer from "./components/Footer";
import NewReview from "./components/NewReview";
import './components/footer.css';
import './components/rocas.css'
import EditReview from "./components/EditReview";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/rocas" element={<Rocas/>} />
          <Route path="/newreview" element={<NewReview/>} />
          <Route path="/rocas/editreview/:id" element={<EditReview/>} />
        </Routes>

        
        {/* <h1>Hola</h1>
        <button
          onClick={async () => {
            const response = await fetch("http://0.0.0.0:8080/rocas", {
              method: "GET",
            });
            const data = await response.json();
            console.log(data);
          }}
        >
          {" "}
          Obtener
        </button> */}

        <script
          src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
          integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
          crossorigin="anonymous"
        ></script>
      </div>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
