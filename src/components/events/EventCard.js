import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function EventCard() {
  return (
    <Card className="card-people mb-3">
      <Card.Body>
        <Link to="">
          <img
            src="https://tripiphy.com/uploads/demo/event/gallery-6.jpg"
            alt="event-img"
            style={{ width: "100%", height: "200px" }}
          />
        </Link>
        <h6 className="mt-3">Event of Washington, D.C. Highlights</h6>

        <Col className="mutual-badge mb-3 d-flex align-items-center justify-content-between">
          <p className="mb-0">Los Angeles</p>
          <label className="status-label">Publish</label>
        </Col>
        <div className="d-grid">
          <Button className="w-100" style={{ color: "white" }}>
            Edit Event
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default EventCard;
