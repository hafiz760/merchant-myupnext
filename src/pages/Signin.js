import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomInput from "../components/shared/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slices/AuthSlice";
import Spinner from "../components/shared/Spinner";

export default function Signin() {
  const naviagte = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state?.auth?.loading);

  // Login Form Initial Values
  const initialValues = {
    email: "",
    password: "",
  };
  // Error Schema
  const errorSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password  is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    let formData = {
      email: values?.email,
      password: values?.password,
    };
    dispatch(loginUser({ formData, naviagte }));
  };
  return (
    <div className="page-sign">
      <Card className="card-sign">
        <Card.Header>
          <Link to="/" className="header-logo mb-4">
            Tripiphy Merchant
          </Link>
          <Card.Title>Sign In</Card.Title>
          <Card.Text>Welcome back! Please signin to continue.</Card.Text>
        </Card.Header>
        <Card.Body>
          <Formik
            initialValues={initialValues}
            validationSchema={errorSchema}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form className="w-full">
                <CustomInput
                  type="email"
                  label="Email Address"
                  name="email"
                  placeholder="Enter your email"
                />
                <CustomInput
                  type="password"
                  label="Password"
                  name="password"
                  placeholder="Enter your password"
                />

                <Button type="submit" variant="primary" className="btn-sign">
                  {loading ? <Spinner /> : "Sign In"}
                </Button>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </div>
  );
}
