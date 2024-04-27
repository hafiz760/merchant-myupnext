import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import HotelCard from "../components/hotel/HotelCard";
import "../scss/pages/hotels.scss";
import Loading from "../components/shared/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getAllHotels } from "../redux/slices/HotelSlice";

export default function AllHotels() {
  const hotelsData = useSelector((state) => state?.hotel?.hotelsData);
  const loading = useSelector((state) => state?.hotel?.isLoading);
  const token = useSelector((state) => state?.auth?.user?.data?.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHotels(token));
  }, []);

  if (loading) {
    return <Loading />;
  }

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
                Hotels
              </li>
            </ol>
            <h4 className="main-title mb-0">All Hotels</h4>
          </Col>
        </Col>
        <Row className="all-hotels-container">
          {hotelsData?.length &&
            hotelsData?.map((data, index) => (
              <Col sm="6" md="4" lg="3" key={index}>
                <HotelCard data={data} />
              </Col>
            ))}
        </Row>
        <Footer />
      </Col>
    </React.Fragment>
  );
}
