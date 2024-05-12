import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import ManageRoomCard from "../components/hotel/ManageRoomCard";
import CustomNotFound from "../components/shared/CustomNotFound";
import AddRoomModal from "../components/hotel/AddRoomModal";
export default function ManageRooms() {
  const Data = [1, 2, 3, 4, 5];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Header />
      <Col className="main main-app  p-3 p-lg-4">
        <Col className="d-sm-flex align-items-center justify-content-between mb-4">
          <Col>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item">
                <Link to="#">Hotels</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Id
              </li>
            </ol>
            <Col className="d-flex align-items-center justify-content-between ">
              <h4 className="main-title mb-0">Manage Rooms</h4>
              <Button
                variant="primary"
                className="text-white"
                onClick={handleShow}
              >
                Add Room
              </Button>
            </Col>
          </Col>
        </Col>
        <Row className="manage-room-container">
          {Data && Data?.length > 0 ? (
            Data?.map((data, index) => (
              <Col sm="6" md="4" lg="3" key={index}>
                <ManageRoomCard />
              </Col>
            ))
          ) : (
            <CustomNotFound text="No rooms data available." />
          )}
        </Row>
        <Footer />
      </Col>
      <AddRoomModal
        setShow={setShow}
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </React.Fragment>
  );
}
