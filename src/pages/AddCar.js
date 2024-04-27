import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import AddCarForm from "../components/Cars/AddCarForm";
export default function AddCar() {
  return (
    <React.Fragment>
      <Header />
      <div className="main main-app p-3 p-lg-4">
        <div className="d-md-flex align-items-center justify-content-between mb-4">
          <div>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item">
                <Link to="#">Cars</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Add Car
              </li>
            </ol>
            <h4 className="main-title mb-0">Add New Car</h4>
          </div>
        </div>
        <Row>
          <Col md="12">
            <AddCarForm />
          </Col>
        </Row>
        <Footer />
      </div>
    </React.Fragment>
  );
}
