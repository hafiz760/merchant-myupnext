import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import AddHotelForm from "../components/hotel/AddHotelForm";
import "../scss/pages/hotels.scss";

export default function AddHotel() {
  return (
    <React.Fragment>
      <Header />
      <div className="main main-app p-3 p-lg-4">
        <div className="d-md-flex align-items-center justify-content-between mb-4">
          <div>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item">
                <Link to="#">Hotels</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Add Hotel
              </li>
            </ol>
            <h4 className="main-title mb-0">Add New Hotel</h4>
          </div>
        </div>
        <Row>
          <Col md="12">
            <AddHotelForm />
          </Col>
        </Row>
        <Footer />
      </div>
    </React.Fragment>
  );
}
