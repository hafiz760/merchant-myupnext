import React, { useCallback, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import CustomInput from "../shared/CustomInput";
import Quil from "../shared/Quil";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDropzone } from "react-dropzone";
import DatePick from "../shared/DatePick";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import * as Yup from "yup";
import FacilitiesCard from "./FacilitiesCard";
import AddUploadMedia from "../shared/AddUploadMedia";
import UploadImg from "../../assets/img/uploadButtonIcon.svg";
import { hotelFacilties, hotelService } from "./HotelsData";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../shared/Toast";
import Spinner from "../shared/Spinner";
import { addNewHotel } from "../../redux/slices/HotelSlice";
import { useNavigate } from "react-router-dom";

function AddHotelForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state?.auth?.user?.data?.token);
  const loading = useSelector((state) => state?.hotel?.isLoading);
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [address, setAddress] = useState(null);
  const [docFiles, setDocFiles] = useState([]);
  const [policies, setPolicies] = useState([
    { id: 1, name: "", description: "" },
  ]);

  const addPolicy = () => {
    const newPolicyId = policies[policies.length - 1].id + 1;
    setPolicies([...policies, { id: newPolicyId, name: "", description: "" }]);
  };

  const onDrop = useCallback((acceptedFiles) => {
    setDocFiles(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const removePolicy = (idToRemove) => {
    if (policies.length > 1) {
      const updatedPolicies = policies.filter(
        (policy) => policy.id !== idToRemove
      );
      setPolicies(updatedPolicies);
    }
  };

  const handlePolicyChange = (id, field, value) => {
    const updatedPolicies = policies.map((policy) =>
      policy.id === id ? { ...policy, [field]: value } : policy
    );
    setPolicies(updatedPolicies);
  };

  let initialValues = {
    Title: "",
    Content: "",
    galleryImages: "",
    checkIn: "",
    checkOut: "",
    price: "",
    address: "",
  };
  const errorSchema = Yup.object().shape({
    Title: Yup.string().required("Title Is Required"),
    Content: Yup.string().required("Content Is Required"),
    checkIn: Yup.date().required("Check In Is Required"),
    checkOut: Yup.date().required("Check Out Is Required"),
    price: Yup.number().required("Price Is Required"),
    address: Yup.string().required("Address Is Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (!docFiles.length) {
      Toast.error("Add Gallery Images");
      return;
    }
    const data = new FormData();
    data.append("title", values.Title);
    data.append("description", values.Content);
    data.append("galleryImages", values.galleryImages);
    data.append("checkIn", values.checkIn);
    data.append("checkOut", values.checkOut);
    data.append("price", values.price);
    data.append("address", values.address);

    policies.forEach((policy, index) => {
      data.append(`name${index}`, policy.name);
      data.append(`description${index}`, policy.description);
    });

    docFiles.forEach((file, index) => {
      data.append(`file${index}`, file);
    });

    selectedFacilities.forEach((facility, index) => {
      data.append(`facilities${index}`, facility?.name);
    });

    selectedServices.forEach((service, index) => {
      data.append(`services${index}`, service?.name);
    });

    dispatch(addNewHotel({ data, token, navigate }));
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={errorSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <Row>
              <Col sm="12" md="7" lg="8">
                <Card className="card-post mt-4 p-3">
                  <CustomInput
                    id="Title"
                    label="Title"
                    type="text"
                    placeholder="Name of the hotel"
                    name="Title"
                  />
                  <Quil label="Content" name="Content" />
                  <AddUploadMedia
                    getRootProps={getRootProps}
                    UploadImg={UploadImg}
                    getInputProps={getInputProps}
                    docFiles={docFiles}
                    label="Gallery"
                  />

                  <DatePick
                    name="checkIn"
                    id="checkIn"
                    label="Check In"
                    placeholderText="Please select check in date"
                  />
                  <DatePick
                    id="checkOut"
                    name="checkOut"
                    label="Check Out"
                    placeholderText="Please select check out date"
                  />
                  <CustomInput
                    id="price"
                    label="Price"
                    type="number"
                    placeholder="Enter Price"
                    name="price"
                  />
                  <label className="form-label" htmlFor={"address"}>
                    Address
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
                    {policies.map((policy, index) => (
                      <div
                        key={policy.id}
                        className="d-flex w-100 align-items-center gap-2"
                      >
                        <div className="flex-1 w-100">
                          <CustomInput
                            label="Policy Name"
                            type="text"
                            placeholder="Policy Name"
                            name={`policyName${index}`}
                            value={policy.name}
                            onChange={(e) =>
                              handlePolicyChange(
                                policy.id,
                                "name",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div className="flex-1 w-100">
                          <CustomInput
                            label="Policy Description"
                            type="text"
                            placeholder="Policy Description"
                            name={`policyDes${index}`}
                            value={policy.description}
                            onChange={(e) =>
                              handlePolicyChange(
                                policy.id,
                                "description",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <i
                          className="ri-delete-bin-3-line ri-lg mt-3 delete-icon"
                          onClick={() => removePolicy(policy.id)}
                          variant="outline-primary"
                          role={"button"}
                        ></i>
                      </div>
                    ))}
                    <div className="w-100 d-flex align-items-center justify-content-end">
                      <Button variant="outline-primary" onClick={addPolicy}>
                        Add New Policy
                      </Button>
                    </div>
                  </Col>
                  <Button
                    className="w-100 d-none d-md-block"
                    style={{ color: "white" }}
                    type="submit"
                  >
                    Add Hotel
                  </Button>
                </Card>
              </Col>
              <Col sm="12" md="5" lg="4">
                <FacilitiesCard
                  label="Facilities"
                  facilities={hotelFacilties}
                  setSelectedFacilities={setSelectedFacilities}
                />
                <FacilitiesCard
                  label="Services"
                  facilities={hotelService}
                  setSelectedServices={setSelectedServices}
                />
              </Col>
            </Row>
            <Col md="8" className="d-block d-md-none">
              <Button
                className=" mt-2 w-100"
                style={{ color: "white" }}
                type="submit"
              >
                {loading ? <Spinner /> : " Add Hotel"}
              </Button>
            </Col>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
}

export default AddHotelForm;
