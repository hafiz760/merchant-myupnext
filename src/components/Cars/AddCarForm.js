import React, { useCallback, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Row, Col, Card, Button } from "react-bootstrap";
import CustomInput from "../shared/CustomInput";
import * as yup from "yup";
import { useDropzone } from "react-dropzone";
import FacilitiesCard from "../hotel/FacilitiesCard";
import Quil from "../shared/Quil";
import UploadImg from "../../assets/img/uploadButtonIcon.svg";
import AddUploadMedia from "../shared/AddUploadMedia";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { carFeaturesData, carTypesData } from "./CarsData";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Toast from "../shared/Toast";
import { addNewCar } from "../../redux/slices/CarSlice";

function AddCarForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state?.auth?.user?.data?.token);
  const loading = useSelector((state) => state?.car?.isLoading);
  const [FAQ, setFAQ] = useState([{ id: 1, title: "", description: "" }]);
  const [docFiles, setDocFiles] = useState([]);
  const [address, setAddress] = useState(null);

  const addFAQ = () => {
    const newFAQId = FAQ[FAQ.length - 1].id + 1;
    setFAQ([...FAQ, { id: newFAQId, title: "", description: "" }]);
  };

  const removeFAQ = (idToRemove) => {
    if (FAQ.length > 1) {
      const updatedFAQ = FAQ.filter((faq) => faq.id !== idToRemove);
      setFAQ(updatedFAQ);
    }
  };

  const handleFAQChange = (id, field, value) => {
    const updatedFAQ = FAQ.map((faq) =>
      faq.id === id ? { ...faq, [field]: value } : faq
    );
    setFAQ(updatedFAQ);
  };

  const onDrop = useCallback((acceptedFiles) => {
    setDocFiles(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const [carFeatures, setSelectedcarFeatures] = useState([]);
  const [carTypes, setSelectedcarTypes] = useState([]);
  const Features = [1, 2, 3, 4, 5];

  const initialValues = {
    Title: "",
    Description: "",
    Gallery: "",
    Passengers: "",
    GearShift: "",
    Baggage: "",
    Door: "",
    Status: "",
    carNumber: "",
    Price: "",
    SalePrice: "",
    Advance: "",
    MinDay: "",
    address: "",
  };

  const ValidationSchema = yup.object().shape({
    Title: yup.string().required("Title is required"),
    Description: yup.string().required("Description is required"),
    Passengers: yup.number().required("Number of passengers is required"),
    GearShift: yup.string().required("GearShift is required"),
    Baggage: yup.number().required("Number of baggage is required"),
    Door: yup.number().required("Number of door is required"),
    carNumber: yup.number().required("Number of car is required"),
    Status: yup.string().required("Status is required"),
    Price: yup.string().required("Price is required"),
    SalePrice: yup.string().required("SalePrice is required"),
    Advance: yup.string().required("Advance is required"),
    MinDay: yup.number().required("MinDay is required"),
    address: yup.string().required("Address is required"),
  });

  const handelSubmit = (values) => {
    if (!docFiles.length) {
      Toast.error("Add Gallery Images");
      return;
    }
    const data = new FormData();
    data.append("title", values.Title);
    data.append("description", values.Description);
    data.append("passenger", values.Passengers);
    data.append("gearShift", values.GearShift);
    data.append("baggage", values.Baggage);
    data.append("door", values.Door);
    data.append("status", values.Status);
    data.append("carNumber", values.carNumber);
    data.append("price", values.Price);
    data.append("salePrice", values.SalePrice);
    data.append("advance", values.Advance);
    data.append("minDayStay", values.MinDay);
    data.append("address", values.address);

    FAQ.forEach((faq, index) => [
      data.append(`FAQ${index}`, faq.title),
      data.append(`FAQdes${index}`, faq.description),
    ]);

    docFiles.forEach((file, index) => {
      data.append(`file${index}`, file);
    });

    carFeatures.forEach((feature, index) => {
      data.append(`selectedFeatures${index}`, feature?.name);
    });

    carTypes.forEach((type, index) => {
      data.append(`selectedTypes${index}`, type?.name);
    });

    dispatch(addNewCar({ data, token, navigate }));
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={handelSubmit}
      >
        {(values) => (
          <Form>
            <Row>
              <Col md="8">
                <Card className="card-post mt-4 p-3">
                  <CustomInput
                    id="Title"
                    label="Title"
                    type="text"
                    placeholder="Name of the car"
                    name="Title"
                  />
                  <Quil label="Description" name="Description" />

                  <AddUploadMedia
                    getRootProps={getRootProps}
                    UploadImg={UploadImg}
                    getInputProps={getInputProps}
                    docFiles={docFiles}
                    label="Gallery"
                  />
                  <CustomInput
                    id="Passengers"
                    label="Passengers"
                    type="number"
                    name="Passengers"
                    placeholder="Number of passengers"
                  />
                  <CustomInput
                    id="GearShift"
                    label="Gear Shift"
                    type="text"
                    name="GearShift"
                    placeholder="Gear Shift"
                  />
                  <CustomInput
                    id="Baggage"
                    label="Baggage"
                    type="number"
                    name="Baggage"
                    placeholder="Baggage"
                  />
                  <CustomInput
                    id="Door"
                    label="Door"
                    type="number"
                    name="Door"
                    placeholder="Door"
                  />
                  <CustomInput
                    id="Status"
                    label="Status"
                    type="text"
                    name="Status"
                    placeholder="Status"
                  />
                  <CustomInput
                    id="carNumber"
                    label="Car Number"
                    type="number"
                    name="carNumber"
                    placeholder="carNumber"
                  />
                  <CustomInput
                    id="Price"
                    label="Price"
                    type="text"
                    name="Price"
                    placeholder="Price"
                  />
                  <CustomInput
                    id="SalePrice"
                    label="Sale Price"
                    type="text"
                    name="SalePrice"
                    placeholder="Sale Price"
                  />
                  <CustomInput
                    id="Advance"
                    label="Advance"
                    type="text"
                    name="Advance"
                    placeholder="Advance"
                  />
                  <CustomInput
                    id="MinDay"
                    label="Min Day Stay"
                    type="number"
                    name="MinDay"
                    placeholder="Number of days to stay"
                  />
                  <label className="form-label" htmlFor={"address"}>
                    Location
                  </label>
                  <Field
                    name="address"
                    component={({ form }) => (
                      <GooglePlacesAutocomplete
                        selectProps={{
                          defaultInputValue: address,
                          address,
                          placeholder: "Select Address",

                          onChange: (option) => {
                            setAddress(option.label);
                            form.setFieldValue("address", option.label);
                          },
                          onBlur: () => form.setFieldTouched("address", true),
                        }}
                        // apiKey={"AIzaSyAqOUaSEz5euu2qu_ngwLyReZEfs6Q7ONs"}
                      />
                    )}
                  />
                  <ErrorMessage
                    component="small"
                    name="address"
                    className="mt-1 text-danger"
                  />
                  <Col className="mt-4 mb-4">
                    {FAQ.map((faq, index) => (
                      <div
                        key={faq.id}
                        className="d-flex w-100 align-items-center gap-2"
                      >
                        <div className="flex-1 w-100">
                          <CustomInput
                            label="FAQ Title"
                            type="text"
                            placeholder="FAQ Title"
                            name={`FAQ${index}`}
                            value={faq.title}
                            onChange={(e) =>
                              handleFAQChange(faq.id, "title", e.target.value)
                            }
                          />
                        </div>
                        <div className="flex-1 w-100">
                          <CustomInput
                            label="FAQ Description"
                            type="text"
                            placeholder="FAQ Description"
                            name={`FAQdes${index}`}
                            value={faq.description}
                            onChange={(e) =>
                              handleFAQChange(
                                faq.id,
                                "description",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <i
                          className="ri-delete-bin-3-line ri-lg mt-3 delete-icon"
                          onClick={() => removeFAQ(faq.id)}
                          role="button"
                        ></i>
                      </div>
                    ))}
                    <div className="w-100 d-flex align-items-center justify-content-end">
                      <Button variant="outline-primary" onClick={addFAQ}>
                        Add New FAQ
                      </Button>
                    </div>
                  </Col>
                  <Button
                    className="w-100 d-none d-md-block"
                    style={{ color: "white" }}
                    type="submit"
                  >
                    Add Car
                  </Button>
                </Card>
              </Col>
              <Col md="4">
                <FacilitiesCard
                  label="Features"
                  facilities={carFeaturesData}
                  setSelectedFacilities={setSelectedcarFeatures}
                />
                <FacilitiesCard
                  label="Types"
                  facilities={carTypesData}
                  setSelectedServices={setSelectedcarTypes}
                />
              </Col>
            </Row>
            <Col md="8" className="d-block d-md-none">
              <Button
                className=" mt-2 w-100"
                style={{ color: "white" }}
                type="submit"
              >
                Add Car
              </Button>
            </Col>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
}

export default AddCarForm;
