import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import "./EditReview.css";
import { useParams } from "react-router-dom";

function EditReview() {
  const [validated, setValidated] = useState(false);
  const [score, setScore] = useState(null);
  const [peso, setPeso] = useState(null);
  const [usuario, setUsuario] = useState("");
  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [origen, setOrigen] = useState("");
  const [exito, setExito] = useState("");
  const {id} = useParams();




  let handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    console.log(id)
    try {
      let res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          username: usuario,
          nombre_roca: nombre,
          peso: parseFloat(peso),
          score: parseFloat(score),
          comment: comentario,
          descrip: descripcion,
          origen: origen,
        }),
      });

      if (res.status === 200) {
        setNombre("");
        setPeso("");
        setComentario("");
        setScore("");
        setDescripcion("");
        setUsuario("");

        setExito("Review ingresada con éxito");
      } else {
        setExito("No se ha podido ingresar");
      }
    } catch (error) {
      console.log(error);
    }
  };


  const handleChangeScore = (e) => {
    const newValue = e.target.value;
    if (newValue === "" || /^[0-9](\.[0-9]*)?$/.test(newValue)) {
      setScore(newValue);
    }
  };
  const handleChangePeso = (e) => {
    const newValue = e.target.value;
    if (newValue === "" || /^[0-9]*\.?[0-9]*$/.test(newValue)) {
      setPeso(newValue);
    }
  };
  return (
    <div className="FormRoca">
      <h1>Edición de review de roca {}</h1>

      <Form validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Nombre de la Roca</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese nombre de la roca"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{ width: 1000, margin: "0 auto" }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Descripción de la roca</Form.Label>
          <Form.Control
            type="text"
            placeholder="Descripción detallada"
            as="textarea"
            style={{
              height: "auto",
              minHeight: "100px",
              width: 1000,
              margin: "0 auto",
            }}
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPeso">
          <Form.Label>Peso</Form.Label>
          <Form.Control
            keyboardType="numeric"
            placeholder="Ingrese peso"
            value={peso}
            onChange={handleChangePeso}
            style={{ width: 1000, margin: "0 auto" }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Puntaje</Form.Label>
          <Form.Control
            type="numeric"
            placeholder="Ingrese puntaje de review (1 a 5)"
            value={score}
            onChange={handleChangeScore}
            style={{ width: 1000, margin: "0 auto" }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Comentario</Form.Label>
          <Form.Control
            type="test"
            placeholder="Comentario acerca de la roca"
            as="textarea"
            style={{
              height: "auto",
              minHeight: "100px",
              width: 1000,
              margin: "0 auto",
            }}
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Editar reseña
        </Button>
        <div className="exito">{exito ? <p>{exito}</p> : null}</div>
      </Form>
    </div>
  );
}

export default EditReview;
