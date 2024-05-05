import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import EmptyImage from "../../assets/img/no-image.jpg";
import { useNavigate } from "react-router-dom";

function HotelCard({ data }) {
  const navigate = useNavigate();
  return (
    <Card className="card-people mb-3">
      <Link to="">
        <img
          src={EmptyImage}
          alt="hotel-img"
          style={{ width: "100%", height: "150px" }}
        />
      </Link>
      <Card.Body>
        <h6>{data?.title}</h6>
        <Col className="mutual-badge mt-2  mb-3 d-flex align-items-center justify-content-between">
          <p className="mb-0">{data?.address}</p>
          <label className="status-label">{data?.status}</label>
        </Col>
        <div className="d-grid">
          <div className="d-flex   align-items-center gap-2 mb-2">
            <Button variant="outline-primary" className="w-100">
              Edit
            </Button>
            <Button
              variant="outline-primary"
              className="w-100"
              onClick={() => navigate(`/hotel/${data?.id}/manage-rooms`)}
            >
              Manage
            </Button>
          </div>
          <Button style={{ color: "white" }}>Manage Available Rooms</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default HotelCard;
