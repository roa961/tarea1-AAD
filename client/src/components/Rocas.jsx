// src/components/About.js

import React, { useEffect, useState } from "react";
import "./rocas.css";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Button from "react-bootstrap/Button";


function Rocas() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch(import.meta.env.VITE_API_URL)
  //   .then((response) => response.json())
  //   .then((data) => setData(data))
  //   .catch((error) => console.error("Error obteniendo datos", error));

  const handleDelete = (id) => {
    console.log(id);

    axios
      .delete(`${import.meta.env.VITE_API_URL}/${id}`)
      .then((response) => {
        if (response.status === 200) {
          console.log("Item deleted successfully");
        } else {
          console.error("Failed to delete item");
        }
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };
  

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL);
        if (!response.ok) {
          throw new Error("Respuesta Errónea " + response.statusText);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    FetchData();
  }, []);

  if (loading) {
    return <div>Cargando..</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <class class="reviews">
      <div>
        <h1>Rocas reseñadas</h1>
        <p>Reviews realizadas </p>
      </div>

      <div className="container">
        <div className="row">
          {data.map((item, index) => (
            <Col className="col-md-4 mb-4">
              <Card
                className="flex-fill"
                style={{ width: "18rem" }}
                key={index}
              >
                <Card.Body>
                  <Card.Title>{item.nombre_roca}</Card.Title>
                  <Card.Text>{item.comment}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Peso: {item.peso}</ListGroup.Item>
                  <ListGroup.Item>Puntaje: {item.score}</ListGroup.Item>
                  <ListGroup.Item>Usuario: {item.username}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  {/* <Card.Link href="/rocas?">Ver detalles</Card.Link> */}
                  <button
                    onClick={() => navigate(`/rocas/editreview/${item.ID}`)}
                  >
                    Editar
                  </button>
                  &#160;&#160;
                  <button onClick={() => handleDelete(item.ID)}>
                    Eliminar
                  </button>
                  <Button
                    className="Detalles"
                    variant="outline-info"
                    onClick={() => navigate(`/rocas/details/${item.ID}`)}
                  >
                    Detalles
                  </Button>{" "}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
      </div>
    </class>
  );
}

export default Rocas;
