import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import ManageRoomCard from "../components/hotel/ManageRoomCard";
import CustomNotFound from "../components/shared/CustomNotFound";
export default function ManageRooms() {
  const Data = [1, 2, 3, 4, 5];
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
            <h4 className="main-title mb-0">Manage Rooms</h4>
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
    </React.Fragment>
  );
}
