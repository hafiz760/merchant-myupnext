import { Form, Formik, Field, ErrorMessage } from "formik";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Card, Col, Row, Button } from "react-bootstrap";
import CustomInput from "../shared/CustomInput";
import * as yup from "yup";
import Quil from "../shared/Quil";
import FacilitiesCard from "../hotel/FacilitiesCard";
import UploadImg from "../../assets/img/uploadButtonIcon.svg";
import AddUploadMedia from "../shared/AddUploadMedia";
import { EventTypes, Publish } from "../events/EventsData";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Title } from "chart.js";

function EventForm() {
  const [address, setAddress] = useState(null);
  const [FAQ, setFAQ] = useState([{ id: 1, title: "", description: "" }]);
  const [Education, setEducation] = useState([
    { id: 1, name: "", content: "", distance: "" },
  ]);
  const [Health, setHealth] = useState([
    { id: 1, name: "", content: "", distance: "" },
  ]);
  const [Transportation, setTransportation] = useState([
    { id: 1, name: "", content: "", distance: "" },
  ]);

  const AddEducation = () => {
    const newEduId = Education[Education.length - 1].id + 1;
    setEducation([
      ...Education,
      { id: newEduId, name: "", content: "", distance: "" },
    ]);
  };

  const AddHealth = () => {
    const newHealthId = Health[Health.length - 1].id + 1;
    setHealth([
      ...Health,
      { id: newHealthId, name: "", content: "", distance: "" },
    ]);
  };

  const AddTransportation = () => {
    const newTransportationID =
      Transportation[Transportation.length - 1].id + 1;
    setTransportation([
      ...Transportation,
      { id: newTransportationID, name: "", content: "", distance: "" },
    ]);
  };

  const addFAQ = () => {
    const newFAQId = FAQ[FAQ.length - 1].id + 1;
    setFAQ([...FAQ, { id: newFAQId, title: "", description: "" }]);
  };

  const removeFAQ = (idToRemove, state, setState) => {
    if (state.length > 1) {
      const updatedFAQ = state.filter((faq) => faq.id !== idToRemove);
      setState(updatedFAQ);
    }
  };

  const handleFAQChange = (id, field, value, state, setState) => {
    const updatedFAQ = state.map((faq) =>
      faq.id === id ? { ...faq, [field]: value } : faq
    );
    setState(updatedFAQ);
  };

  const [docFiles, setDocFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    setDocFiles(acceptedFiles);
  }, []);
  const {
    getRootProps: getRootPropsBanner,
    getInputProps: getInputPropsBanner,
  } = useDropzone({ onDrop });

  const [selectedPublish, setselectedPublish] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const initialValues = {
    Title: "",
    Content: "",
    YoutubeVideo: "",
    StartTime: "",
    Duration: "",
    Price: "",
    address: "",
    SalePrice: "",
  };

  const ValidationSchema = yup.object().shape({
    Title: yup.string().required("Title is required"),
    Content: yup.string().required("Content is required"),
    YoutubeVideo: yup.string().required("Youtube video link is required"),
    StartTime: yup.string().required("StartTime is required"),
    Duration: yup
      .number()
      .positive("Duration must be a positive number")
      .required("Duration is required"),
    Price: yup
      .number()
      .positive("Price must be a positive number")
      .required("Price is required"),
    SalePrice: yup
      .number()
      .positive("Sale price must be a positive number")
      .required("Sale price is required"),
    address: yup.string().required("Address is required"),
  });

  const handelSubmit = (values) => {
    if (!docFiles.length) {
      return;
    }
    const data = new FormData();
    data.append("title", values.Title);
    data.append("Content", values.Content);
    data.append("YoutubeVideo", values.YoutubeVideo);
    data.append("StartTime", values.StartTime);
    data.append("Duration", values.Duration);
    data.append("Price", values.Price);
    data.append("address", values.address);
    data.append("SalePrice", values.SalePrice);

    docFiles.forEach((file, index) => {
      data.append(`file${index}`, file);
    });

    selectedPublish.forEach((publish) => {
      data.append("publish", publish?.name);
    });

    selectedTypes.forEach((type) => {
      data.append("types", type?.name);
    });

    Health.forEach((health, index) => {
      data.append(`health${index}`, health.name);
      data.append(`health${index}`, health.content);
      data.append(`health${index}`, health.distance);
    });
    Education.forEach((edu, index) => {
      data.append(`Education${index}`, edu.name);
      data.append(`Education${index}`, edu.content);
      data.append(`Education${index}`, edu.distance);
    });
    Transportation.forEach((transport, index) => {
      data.append(`Transportation${index}`, transport.name);
      data.append(`Transportation${index}`, transport.content);
      data.append(`Transportation${index}`, transport.distance);
    });

    for (let pair of data.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
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
                    placeholder="Name of the Event"
                    name="Title"
                  />
                  <Quil label="Content" name="Content" />
                  <CustomInput
                    id="YoutubeVideo"
                    label="Youtube Video"
                    type="text"
                    placeholder="Youtube video link"
                    name="YoutubeVideo"
                  />
                  <Col className="mb-4">
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
                          apiKey={"AIzaSyAqOUaSEz5euu2qu_ngwLyReZEfs6Q7ONs"}
                        />
                      )}
                    />
                    <ErrorMessage
                      component="small"
                      name="address"
                      className="mt-1 text-danger"
                    />
                  </Col>
                  <CustomInput
                    id="StartTime"
                    label="Start Time"
                    type="time"
                    placeholder="Start Time"
                    name="StartTime"
                  />
                  <CustomInput
                    id="Duration"
                    label="Duration"
                    type="number"
                    placeholder="Duration"
                    name="Duration"
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
                              handleFAQChange(
                                faq.id,
                                "title",
                                e.target.value,
                                FAQ,
                                setFAQ
                              )
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
                                e.target.value,
                                FAQ,
                                setFAQ
                              )
                            }
                          />
                        </div>
                        <i
                          className="ri-delete-bin-3-line ri-lg mt-3 delete-icon"
                          onClick={() => removeFAQ(faq.id, FAQ, setFAQ)}
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
                  <AddUploadMedia
                    getRootProps={getRootPropsBanner}
                    UploadImg={UploadImg}
                    getInputProps={getInputPropsBanner}
                    docFiles={docFiles}
                    label="Gallery"
                  />
                  <CustomInput
                    id="Price"
                    label="Price"
                    type="text"
                    placeholder="Price"
                    name="Price"
                  />
                  <CustomInput
                    id="SalePrice"
                    label="SalePrice"
                    type="text"
                    placeholder="Sale Price"
                    name="SalePrice"
                  />
                  <Col className="mt-4 mb-4">
                    <h4>Sorroundings</h4>
                    <Col className="mt-4 mb-4">
                      {Education.map((Edu, index) => (
                        <div
                          key={Edu.id}
                          className="d-flex w-100 align-items-center gap-2"
                        >
                          <div className="flex-1 w-100">
                            <CustomInput
                              label="Education Name"
                              type="text"
                              placeholder="Education Name"
                              name={`Edu${index}`}
                              value={Edu.name}
                              onChange={(e) =>
                                handleFAQChange(
                                  Edu.id,
                                  "name",
                                  e.target.value,
                                  Education,
                                  setEducation
                                )
                              }
                            />
                          </div>
                          <div className="flex-1 w-100">
                            <CustomInput
                              label="Education Content"
                              type="text"
                              placeholder="Education Content"
                              name={`EduContent${index}`}
                              value={Edu.content}
                              onChange={(e) =>
                                handleFAQChange(
                                  Edu.id,
                                  "content",
                                  e.target.value,
                                  Education,
                                  setEducation
                                )
                              }
                            />
                          </div>
                          <div className="flex-1 w-100">
                            <CustomInput
                              label="Education Distance"
                              type="text"
                              placeholder="Education Distance"
                              name={`EduDistance${index}`}
                              value={Edu.distance}
                              onChange={(e) =>
                                handleFAQChange(
                                  Edu.id,
                                  "distance",
                                  e.target.value,
                                  Education,
                                  setEducation
                                )
                              }
                            />
                          </div>
                          <i
                            className="ri-delete-bin-3-line ri-lg mt-3 delete-icon"
                            onClick={() =>
                              removeFAQ(Edu.id, Education, setEducation)
                            }
                            role="button"
                          ></i>
                        </div>
                      ))}
                      <div className="w-100 d-flex align-items-center justify-content-end">
                        <Button
                          variant="outline-primary"
                          onClick={AddEducation}
                        >
                          Add New Education
                        </Button>
                      </div>
                    </Col>{" "}
                    <Col className="mt-4 mb-4">
                      {Health.map((health, index) => (
                        <div
                          key={health.id}
                          className="d-flex w-100 align-items-center gap-2"
                        >
                          <div className="flex-1 w-100">
                            <CustomInput
                              label="Health Name"
                              type="text"
                              placeholder="Health Name"
                              name={`health${index}`}
                              value={health.name}
                              onChange={(e) =>
                                handleFAQChange(
                                  health.id,
                                  "name",
                                  e.target.value,
                                  Health,
                                  setHealth
                                )
                              }
                            />
                          </div>
                          <div className="flex-1 w-100">
                            <CustomInput
                              label="Health Content"
                              type="text"
                              placeholder="Health Content"
                              name={`HealthContent${index}`}
                              value={health.content}
                              onChange={(e) =>
                                handleFAQChange(
                                  health.id,
                                  "content",
                                  e.target.value,
                                  Health,
                                  setHealth
                                )
                              }
                            />
                          </div>
                          <div className="flex-1 w-100">
                            <CustomInput
                              label="Health Distance"
                              type="text"
                              placeholder="Health Distance"
                              name={`HealthDistance${index}`}
                              value={health.distance}
                              onChange={(e) =>
                                handleFAQChange(
                                  health.id,
                                  "distance",
                                  e.target.value,
                                  Health,
                                  setHealth
                                )
                              }
                            />
                          </div>
                          <i
                            className="ri-delete-bin-3-line ri-lg mt-3 delete-icon"
                            onClick={() =>
                              removeFAQ(health.id, Health, setHealth)
                            }
                            role="button"
                          ></i>
                        </div>
                      ))}
                      <div className="w-100 d-flex align-items-center justify-content-end">
                        <Button variant="outline-primary" onClick={AddHealth}>
                          Add New Health
                        </Button>
                      </div>
                    </Col>{" "}
                    <Col className="mt-4 mb-4">
                      {Transportation.map((trn, index) => (
                        <div
                          key={trn.id}
                          className="d-flex w-100 align-items-center gap-2"
                        >
                          <div className="flex-1 w-100">
                            <CustomInput
                              label="Transportation Name"
                              type="text"
                              placeholder="Transportation Name"
                              name={`trn${index}`}
                              value={trn.name}
                              onChange={(e) =>
                                handleFAQChange(
                                  trn.id,
                                  "name",
                                  e.target.value,
                                  Transportation,
                                  setTransportation
                                )
                              }
                            />
                          </div>
                          <div className="flex-1 w-100">
                            <CustomInput
                              label="Transportation Content"
                              type="text"
                              placeholder="Transportation Content"
                              name={`TransportationContent${index}`}
                              value={trn.content}
                              onChange={(e) =>
                                handleFAQChange(
                                  trn.id,
                                  "content",
                                  e.target.value,
                                  Transportation,
                                  setTransportation
                                )
                              }
                            />
                          </div>
                          <div className="flex-1 w-100">
                            <CustomInput
                              label="Transportation Distance"
                              type="text"
                              placeholder="Transportation Distance"
                              name={`trnDistance${index}`}
                              value={trn.distance}
                              onChange={(e) =>
                                handleFAQChange(
                                  trn.id,
                                  "distance",
                                  e.target.value,
                                  Transportation,
                                  setTransportation
                                )
                              }
                            />
                          </div>
                          <i
                            className="ri-delete-bin-3-line ri-lg mt-3 delete-icon"
                            onClick={() =>
                              removeFAQ(
                                trn.id,
                                Transportation,
                                setTransportation
                              )
                            }
                            role="button"
                          ></i>
                        </div>
                      ))}
                      <div className="w-100 d-flex align-items-center justify-content-end">
                        <Button
                          variant="outline-primary"
                          onClick={AddTransportation}
                        >
                          Add New Transportation
                        </Button>
                      </div>
                    </Col>
                  </Col>
                  <Button
                    className="w-100 d-none d-md-block"
                    style={{ color: "white" }}
                    type="submit"
                  >
                    Add Event
                  </Button>
                </Card>
              </Col>
              <Col md="4">
                <FacilitiesCard
                  label="Publish"
                  facilities={Publish}
                  setSelectedServices={setselectedPublish}
                />
                <FacilitiesCard
                  label="Types"
                  facilities={EventTypes}
                  setSelectedServices={setSelectedTypes}
                />
              </Col>
            </Row>
            <Col md="8" className="d-block d-md-none">
              <Button
                className=" mt-2 w-100"
                style={{ color: "white" }}
                type="submit"
              >
                Add Event
              </Button>
            </Col>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
}

export default EventForm;
