import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Table } from "react-bootstrap";

export default function PlanetsView() {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://www.swapi.tech/api/planets/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data.result.properties);
      });
  }, []);
  return (
    <Container fluid>
      <Row>
        <Col>
          <Image src="https://via.placeholder.com/500x400" />
        </Col>
        <Col>
          <h2>{detail.name}</h2>
          <p className="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            eligendi accusantium facilis officia minima, obcaecati neque
            quaerat! Nisi, velit. Officiis ratione vero aperiam exercitationem!
            Voluptates recusandae a cumque libero corrupti natus, expedita non
            iusto dolore optio, reprehenderit, soluta nam fugiat nisi eius ipsam
            sit maiores quasi quod excepturi laboriosam repellat! Minima, neque
            quos voluptates ex inventore dolores iste sint ab. Incidunt
            excepturi modi aliquid adipisci, laudantium ea dolore reiciendis
            nulla.
          </p>
        </Col>
      </Row>
      <Table striped borderless hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Climate</th>
            <th>Population</th>
            <th>Orbital Period</th>
            <th>Rotation Period</th>
            <th>Diameter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{detail.name}</td>
            <td>{detail.climate}</td>
            <td>{detail.population}</td>
            <td>{detail.orbital_period}</td>
            <td>{detail.rotation_period}</td>
            <td>{detail.diameter}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
