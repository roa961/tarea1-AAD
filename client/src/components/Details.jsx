import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import axios from "axios";

import { useParams } from "react-router-dom";

function Details() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
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
    <class className="Detalle">
      <div>
        <h1>Detalles de {data.nombre_roca}</h1>
      </div>
      &nbsp;
      <div className="Container">
        <ul>Nombre: {data.nombre_roca}</ul>
        <ul>Descripción: {data.descrip}</ul>
        <ul>Peso: {data.peso}</ul>
        <ul>Ranking: {data.score}</ul>
        <ul>Comentario: {data.comment}</ul>
      </div>
    </class>
  );
}

export default Details;
