import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import EmptyImage from "../../assets/img/no-image.jpg";
import { useNavigate } from "react-router-dom";
import "../../scss/pages/hotels.scss";

function ManageRoomCard() {
  const navigate = useNavigate();
  const trimDescription = (data) => {
    if (data?.description) {
      let desc = data.description;
      return desc.length > 150 ? `${desc.slice(0, 148)}...` : desc;
    } else {
      return;
    }
  };
  return (
    <>
      <Card className="card-people mb-3 manage-room">
        <Link to="">
          <img
            src={EmptyImage}
            alt="hotel-img"
            style={{ width: "100%", height: "150px" }}
          />
        </Link>
        <Card.Body>
          <h6> Lorem ipsum dolor</h6>
          <Col className="mutual-badge mt-2  mb-3 d-flex align-items-center justify-content-between">
            <p className="mb-0">Price:100$</p>
            <label className="status-label">Publish</label>
          </Col>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </Card.Body>
      </Card>
    </>
  );
}

export default ManageRoomCard;
