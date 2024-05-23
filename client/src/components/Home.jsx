import React from "react";
import "./home.css";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate()

  return (
    <div class="Home">
      <div>
        <h1>Reseña de rocas</h1>
        <p>Bienvenido a nuestra web de reseña de rocas</p>
        <div className="mb-2">
          <Button variant="primary" size="lg" onClick={() => navigate("/newreview")}>
            Ingresar nueva reseña
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Home;
