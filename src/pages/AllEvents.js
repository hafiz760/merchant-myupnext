import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import EventCard from "../components/events/EventCard";

export default function AllEvents() {
  let eventsData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <React.Fragment>
      <Header />
      <Col className="main main-app p-3 p-lg-4">
        <Col className="d-sm-flex align-items-center justify-content-between mb-4">
          <Col>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item">
                <Link to="#">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Evnets
              </li>
            </ol>
            <h4 className="main-title mb-0">All Events</h4>
          </Col>
        </Col>
        <Row className="all-hotels-container">
          {eventsData?.length &&
            eventsData?.map((data, index) => (
              <Col sm="6" md="4" lg="3" key={index}>
                <EventCard data={data} />
              </Col>
            ))}
        </Row>
        <Footer />
      </Col>
    </React.Fragment>
  );
}
