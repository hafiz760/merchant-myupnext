import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import EmptyImage from "../../assets/img/no-image.jpg";

function CarCard({ data }) {
  return (
    <Card className="card-people mb-3">
      <Link to="">
        <img
          src={EmptyImage}
          alt="car-img"
          style={{ width: "100%", height: "200px" }}
        />
      </Link>
      <Card.Body>
        <h6>{data?.title}</h6>

        <Col className="mutual-badge mt-2 mb-3 d-flex align-items-center justify-content-between">
          <p className="mb-0">{data?.address}</p>
          <label className="status-label">{data?.status}</label>
        </Col>
        <div className="d-grid">
          <Button className="w-100" style={{ color: "white" }}>
            Edit Car
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CarCard;
