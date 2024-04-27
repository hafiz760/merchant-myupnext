import React, { useEffect, useState } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import {
  Button,
  Card,
  Col,
  Nav,
  ProgressBar,
  Row,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactApexChart from "react-apexcharts";

import { dp1, dp2, dp3 } from "../data/DashboardData";
import prod1 from "../assets/img/prod1.jpg";
import prod2 from "../assets/img/prod2.jpg";
import prod3 from "../assets/img/prod3.jpg";
import prod4 from "../assets/img/prod4.jpg";
import prod5 from "../assets/img/prod5.jpg";

export default function ProductManagement() {
  const states = {
    hover: {
      filter: {
        type: "none",
      },
    },
    active: {
      filter: {
        type: "none",
      },
    },
  };

  const seriesOne = [
    {
      data: [
        [0, 1000],
        [1, 600],
        [2, 500],
        [3, 400],
        [4, 600],
        [5, 500],
        [6, 800],
        [7, 1000],
        [8, 900],
        [9, 1100],
        [10, 1500],
        [11, 1700],
        [12, 1400],
        [13, 1300],
        [14, 1500],
        [15, 1300],
        [16, 1200],
        [17, 1000],
        [18, 1100],
        [19, 800],
        [20, 500],
        [21, 300],
        [22, 500],
        [23, 600],
        [24, 500],
        [25, 600],
        [26, 800],
        [27, 1000],
        [28, 900],
        [29, 800],
        [30, 500],
      ],
    },
    {
      data: [
        [0, 30],
        [1, 30],
        [2, 30],
        [3, 30],
        [4, 30],
        [5, 30],
        [6, 30],
        [7, 30],
        [8, 30],
        [9, 30],
        [10, 30],
        [11, 30],
        [12, 30],
        [13, 30],
        [14, 30],
        [15, 30],
        [16, 30],
        [17, 30],
        [18, 30],
        [19, 30],
        [20, 30],
        [21, 30],
        [22, 30],
        [23, 30],
        [24, 30],
        [25, 30],
        [26, 30],
        [27, 30],
        [28, 30],
        [29, 30],
        [30, 30],
      ],
    },
    {
      data: [
        [0, 800],
        [1, 600],
        [2, 500],
        [3, 400],
        [4, 600],
        [5, 500],
        [6, 800],
        [7, 1000],
        [8, 900],
        [9, 1100],
        [10, 1500],
        [11, 1700],
        [12, 1400],
        [13, 1300],
        [14, 1500],
        [15, 1300],
        [16, 1200],
        [17, 1000],
        [18, 1100],
        [19, 800],
        [20, 500],
        [21, 300],
        [22, 500],
        [23, 600],
        [24, 500],
        [25, 600],
        [26, 800],
        [27, 1000],
        [28, 900],
        [29, 800],
        [30, 500],
      ],
    },
  ];

  const optionOne = {
    chart: {
      parentHeightOffset: 0,
      stacked: true,
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    grid: {
      borderColor: "rgba(72,94,144, 0.07)",
      padding: {
        top: -20,
        left: 5,
      },
    },
    states: states,
    colors: ["#506fd9", "#fff", "#c8ccd4"],
    plotOptions: {
      bar: {
        columnWidth: "35%",
      },
    },
    stroke: {
      curve: "straight",
      lineCap: "square",
      width: 0,
    },
    tooltip: { enabled: false },
    fill: { opacity: 1 },
    legend: { show: false },
    xaxis: {
      type: "numeric",
      tickAmount: 11,
      decimalsInFloat: 0,
      labels: {
        style: {
          fontSize: "11px",
        },
      },
    },
    yaxis: {
      max: 4000,
      tickAmount: 8,
      labels: {
        style: {
          colors: ["#a2abb5"],
          fontSize: "11px",
        },
      },
    },
  };

  var chart = {
    parentHeightOffset: 0,
    toolbar: { show: false },
    stacked: true,
  };

  var grid = {
    borderColor: "rgba(72,94,144, 0.07)",
    padding: {
      top: -20,
      left: -20,
      right: -20,
      bottom: 0,
    },
    yaxis: {
      lines: { show: false },
    },
  };

  var stroke = {
    curve: "straight",
    width: 1.5,
  };

  var fill = {
    type: "gradient",
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0,
    },
  };

  var yaxis = {
    min: 0,
    max: 80,
    show: false,
  };

  function setOption(color, min, max) {
    return {
      chart: chart,
      colors: [color],
      grid: grid,
      stroke: stroke,
      xaxis: {
        type: "numeric",
        tickAmount: 6,
        min: min,
        max: max,
        decimalsInFloat: 0,
        axisBorder: { show: false },
        labels: {
          style: {
            colors: "#6e7985",
            fontSize: "9px",
          },
        },
      },
      yaxis: yaxis,
      fill: fill,
      dataLabels: { enabled: false },
      legend: { show: false },
      tooltip: { enabled: false },
    };
  }

  ///// Skin Switch /////
  const currentSkin = localStorage.getItem("skin-mode") ? "dark" : "";
  const [skin, setSkin] = useState(currentSkin);

  const switchSkin = (skin) => {
    if (skin === "dark") {
      const btnWhite = document.getElementsByClassName("btn-white");

      for (const btn of btnWhite) {
        btn.classList.add("btn-outline-primary");
        btn.classList.remove("btn-white");
      }
    } else {
      const btnOutlinePrimary = document.getElementsByClassName(
        "btn-outline-primary"
      );

      for (const btn of btnOutlinePrimary) {
        btn.classList.remove("btn-outline-primary");
        btn.classList.add("btn-white");
      }
    }
  };

  switchSkin(skin);

  useEffect(() => {
    switchSkin(skin);
  }, [skin]);

  return (
    <React.Fragment>
      <Header onSkin={setSkin} />
      <div className="main main-app p-3 p-lg-4">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <div>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item">
                <Link to="#">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Home
              </li>
            </ol>
            <h4 className="main-title mb-0">Welcome to Dashboard</h4>
          </div>
        </div>

        <Row className="g-3">
          <Col xl="12">
            <Row className="g-3">
              <Col sm="6" xl="3">
                <Card className="card-one">
                  <Card.Body className="overflow-hidden px-0">
                    <div className="crypto-item">
                      <div className="avatar bg-orange">
                        <i className="ri-clockwise-line"></i>
                      </div>
                      <div className="crypto-body">
                        <label className="card-label">Total Pending</label>
                        <h6 className="card-value">0</h6>
                      </div>
                    </div>
                    <ReactApexChart
                      series={[
                        {
                          data: dp3,
                        },
                      ]}
                      options={setOption("#fd7e14", 5, 55)}
                      type="area"
                      height={100}
                      className="apex-chart-ten"
                    />
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="6" xl="3">
                <Card className="card-one">
                  <Card.Body className="overflow-hidden px-0">
                    <div className="crypto-item">
                      <div className="avatar bg-twitter">
                        <i className="ri-wallet-2-line"></i>
                      </div>
                      <div className="crypto-body">
                        <label className="card-label">Total Earnings</label>
                        <h6 className="card-value">$136.99</h6>
                      </div>
                    </div>
                    <ReactApexChart
                      series={[
                        {
                          data: dp3,
                        },
                      ]}
                      options={setOption("#1c96e9", 45, 95)}
                      type="area"
                      height={100}
                      className="apex-chart-ten"
                    />
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="6" xl="3">
                <Card className="card-one">
                  <Card.Body className="overflow-hidden px-0">
                    <div className="crypto-item">
                      <div className="avatar bg-success">
                        <i className="ri-clipboard-line"></i>
                      </div>
                      <div className="crypto-body">
                        <label className="card-label">Total Bookings</label>
                        <h6 className="card-value">$160.43</h6>
                      </div>
                    </div>
                    <ReactApexChart
                      series={[
                        {
                          data: dp3,
                        },
                      ]}
                      options={setOption("#0cb785", 15, 75)}
                      type="area"
                      height={100}
                      className="apex-chart-ten"
                    />
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="6" xl="3">
                <Card className="card-one">
                  <Card.Body className="overflow-hidden px-0">
                    <div className="crypto-item">
                      <div className="avatar bg-primary">
                        <i className="ri-hotel-line"></i>
                      </div>
                      <div className="crypto-body">
                        <label className="card-label">
                          Total Bookable Services
                        </label>
                        <h6 className="card-value">$90.58</h6>
                      </div>
                    </div>
                    <ReactApexChart
                      series={[
                        {
                          data: dp3,
                        },
                      ]}
                      options={setOption("#506fd9", 35, 85)}
                      type="area"
                      height={100}
                      className="apex-chart-ten"
                    />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xl="12">
            <Card className="card-one card-product-inventory">
              <Card.Header>
                <Card.Title as="h6">EARNING STATISTICS</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href="">
                    <i className="ri-refresh-line"></i>
                  </Nav.Link>
                  <Nav.Link href="">
                    <i className="ri-more-2-fill"></i>
                  </Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body className="p-3">
                <ul className="legend mb-3 position-absolute">
                  <li>Total Earning</li>
                  <li>Total Pending</li>
                </ul>
                <ReactApexChart
                  series={seriesOne}
                  options={optionOne}
                  type="bar"
                  height={310}
                  className="apex-chart-twelve mt-4 pt-3"
                />
              </Card.Body>
            </Card>
          </Col>
          <Col xl="8">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Popular Products</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href="">
                    <i className="ri-refresh-line"></i>
                  </Nav.Link>
                  <Nav.Link href="">
                    <i className="ri-more-2-fill"></i>
                  </Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body className="p-3">
                {[
                  {
                    image: prod1,
                    name: "iPhone 14 Pro Max Leather Case",
                    text: "Leather Case with MagSafe",
                    price: "$35.50",
                    available: "560",
                    sold: "40",
                    sales: "$1,420.00",
                  },
                  {
                    image: prod2,
                    name: "Apple Watch Series 7 GPS",
                    text: "Midnight Aluminum Sport Band",
                    price: "$395.99",
                    available: "350",
                    sold: "150",
                    sales: "$59,398.50",
                  },
                  {
                    image: prod3,
                    name: "Apple Wireless Black Airpods",
                    text: "(3rd Generation) Wireless Earbuds",
                    price: "$210.95",
                    available: "250",
                    sold: "100",
                    sales: "$21,095.00",
                  },
                  {
                    image: prod4,
                    name: "Macbook Air M2 Chip",
                    text: "16GB Ram 512GB SSD Storage",
                    price: "$1,910.00",
                    available: "100",
                    sold: "50",
                    sales: "$95,500.00",
                  },
                ].map((item, index) => (
                  <div className="product-wrapper" key={index}>
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <div className="product-thumb">
                              <img src={item.image} alt="" />
                            </div>
                          </td>
                          <td>
                            <h6 className="mb-1">
                              <Link to="">{item.name}</Link>
                            </h6>
                            <span className="fs-sm text-secondary">
                              {item.text}
                            </span>
                          </td>
                          <td>
                            <label className="d-block text-secondary fs-sm mb-1">
                              Price
                            </label>
                            <span className="d-block fw-medium text-dark ff-numerals">
                              {item.price}
                            </span>
                          </td>
                          <td>
                            <label className="d-block text-secondary fs-sm mb-1">
                              Available
                            </label>
                            <span className="d-block fw-medium text-dark ff-numerals">
                              {item.available}
                            </span>
                          </td>
                          <td>
                            <label className="d-block text-secondary fs-sm mb-1">
                              Sold
                            </label>
                            <span className="d-block fw-medium text-dark ff-numerals">
                              {item.sold}
                            </span>
                          </td>
                          <td>
                            <label className="d-block text-secondary fs-sm mb-1">
                              Sales
                            </label>
                            <span className="d-block fw-medium text-dark ff-numerals">
                              {item.sales}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Revenue By Departments</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href="">
                    <i className="ri-refresh-line"></i>
                  </Nav.Link>
                  <Nav.Link href="">
                    <i className="ri-more-2-fill"></i>
                  </Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body className="p-3">
                {[
                  {
                    name: "Automotive",
                    amount: "$12,550.50",
                    color: "success",
                    percent: "55.6%",
                    progress: 50,
                  },
                  {
                    name: "Home & Kitchen",
                    amount: "$9,805.00",
                    color: "danger",
                    percent: "6.8%",
                    progress: 40,
                  },
                  {
                    name: "Health & Fashion",
                    amount: "$15,004.90",
                    color: "success",
                    percent: "69.2%",
                    progress: 70,
                  },
                  {
                    name: "Movies & Television",
                    amount: "$5,338.00",
                    color: "danger",
                    percent: "28.5%",
                    progress: 25,
                  },
                  {
                    name: "Toys & Games",
                    amount: "$4,965.40",
                    color: "danger",
                    percent: "18.2%",
                    progress: 20,
                  },
                ].map((item, index) => (
                  <div className="revenue-item" key={index}>
                    <div className="revenue-item-body">
                      <span>{item.name}</span>
                      <span>{item.amount}</span>
                      <span className={"text-" + item.color}>
                        {item.percent}
                      </span>
                    </div>
                    <ProgressBar now={item.progress} />
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Footer />
      </div>
    </React.Fragment>
  );
}
