import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import EmptyImage from "../../assets/img/no-image.jpg";
import { useNavigate } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import "../../scss/pages/hotels.scss";
import Dropdown from "react-bootstrap/Dropdown";

function HotelCard({ data }) {
  const navigate = useNavigate();
  console.log(data);
  const trimDescription = () => {
    if (data?.description) {
      let desc = data.description;
      return desc.length > 150 ? `${desc.slice(0, 148)}...` : desc;
    } else {
      return;
    }
  };
  return (
    <>
      <Card className="card-people mb-3 ">
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
          <p>{trimDescription(data.description)}</p>
        </Card.Body>
        <Dropdown className="position-absolute top-0 end-0">
          <Dropdown.Toggle
            style={{
              background: "transparent",
              border: "none",
              textAlign: "center",
              padding: "5px",
            }}
          >
            <CiMenuKebab size={20} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item> Edit</Dropdown.Item>
            <Dropdown.Item
              onClick={() => navigate(`/hotel/${data?._id}/manage-rooms`)}
            >
              Manage
            </Dropdown.Item>
            <Dropdown.Item>Manage Available Rooms</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card>
    </>
  );
}

export default HotelCard;
