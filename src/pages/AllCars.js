import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import CarCard from "../components/Cars/CarCard";
import { getAllCars } from "../redux/slices/CarSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/shared/Loading";

export default function AllCars() {
  const carsData = useSelector((state) => state?.car?.CarsData?.body);
  const loading = useSelector((state) => state?.car?.isLoading);
  const token = useSelector((state) => state?.auth?.user?.data?.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars(token));
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
                Cars
              </li>
            </ol>
            <h4 className="main-title mb-0">All Cars</h4>
          </Col>
        </Col>
        <Row className="all-hotels-container">
          {carsData?.length &&
            carsData?.map((data, index) => (
              <Col sm="6" md="4" lg="3" key={index}>
                <CarCard data={data} />
              </Col>
            ))}
        </Row>
        <Footer />
      </Col>
    </React.Fragment>
  );
}
