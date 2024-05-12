import React, { useCallback, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import CustomInput from "../shared/CustomInput";
import { useDropzone } from "react-dropzone";
import UploadImg from "../../assets/img/uploadButtonIcon.svg";
import AddUploadMedia from "../shared/AddUploadMedia";
import * as Yup from "yup";
import { Col } from "react-bootstrap";
import Multiselectoption from "../shared/Multiselect";

function AddRoomModal({ show, handleClose }) {
  const [docFiles, setDocFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    setDocFiles(acceptedFiles);
  }, []);
  const {
    getRootProps: getRootPropsBanner,
    getInputProps: getInputPropsBanner,
  } = useDropzone({ onDrop });
  const [options, setOptions] = useState([
    { name: "Wake-up call", id: 1 },
    { name: "Flat TV", id: 2 },
    { name: "Laundry and dry cleaning", id: 3 },
    { name: "Internet – Wifi", id: 4 },
    { name: "Coffee and tea maker", id: 5 },
  ]);
  const [selectedValue, setSelectedValue] = useState([]);
  const initialValues = {
    room_name: "",
    feature_image: "",
    price: "",
    no_of_room: "",
    min_day_stay: "",
    num_of_beds: "",
    room_size: "",
    max_adults: "",
    max_children: "",
    import_url: "",
    select_option: "",
  };

  const validationSchema = Yup.object().shape({
    room_name: Yup.string().required("Room Name is required"),
    feature_image: Yup.string().required("Feature Image is required"),
    price: Yup.string().required("Price is required"),
    no_of_room: Yup.number().required("Number of room is required"),
    min_day_stay: Yup.number().required("Minimum day stay is required"),
    num_of_beds: Yup.number().required("Number of beds is required"),
    room_size: Yup.string().required("Room Size is required"),
    max_adults: Yup.number().required("Max Adults is required"),
    max_children: Yup.number().required("Max Children is required"),
    import_url: Yup.string().required("Import URL is required"),
    select_option: Yup.string().required("Status is required"),
  });

  const onSubmit = (values) => {
    console.log("Form submitted:", values);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} className="overflow-auto">
        <Modal.Header closeButton>
          <Modal.Title>Add Room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ handleSubmit, setFieldValue, errors, touched }) => (
              <Form onSubmit={handleSubmit}>
                <CustomInput
                  id="room_name"
                  label="Room Name"
                  type="text"
                  placeholder="Name of the room"
                  name="room_name"
                />
                <CustomInput
                  id="feature_image"
                  label="Feature Image"
                  type="file"
                  name="feature_image"
                />
                <AddUploadMedia
                  getRootProps={getRootPropsBanner}
                  UploadImg={UploadImg}
                  getInputProps={getInputPropsBanner}
                  docFiles={docFiles}
                  label="Gallery"
                />
                <CustomInput
                  id="price"
                  label="Price"
                  type="text"
                  placeholder="Price"
                  name="price"
                />
                <CustomInput
                  id="no_of_room"
                  label="Number of room"
                  type="number"
                  placeholder="Number of room"
                  name="no_of_room"
                />
                <CustomInput
                  id="min_day_stay"
                  label="Minimum day stay "
                  type="number"
                  placeholder="Minimum day stay"
                  name="min_day_stay"
                />
                <CustomInput
                  id="num_of_beds"
                  label="Number of beds"
                  type="number"
                  placeholder="Number of beds"
                  name="num_of_beds"
                />
                <CustomInput
                  id="room_size"
                  label="Room Size"
                  type="text"
                  placeholder="Room Size (meter square)"
                  name="room_size"
                />
                <CustomInput
                  id="max_adults"
                  label="Max Adults"
                  type="number"
                  placeholder="Max Adults"
                  name="max_adults"
                />
                <CustomInput
                  id="max_children"
                  label="Max Children"
                  type="number"
                  placeholder="Max Children"
                  name="max_children"
                />
                <CustomInput
                  id="import_url"
                  label="Import url"
                  type="text"
                  placeholder="Import url"
                  name="import_url"
                />
                <Col>
                  <div className="mb-4">
                    <label className="form-label" htmlFor="select_option">
                      Status
                    </label>
                    <Form.Select
                      id="select_option"
                      label="Select Option"
                      name="select_option"
                      aria-label="Select Option"
                      onChange={(e) =>
                        setFieldValue("select_option", e.target.value)
                      }
                      className={`form-control focus:border-orange-500 border shadow-hidden  ${
                        errors.select_option && touched.select_option
                          ? "border-danger"
                          : ""
                      }`}
                    >
                      <option value="">Select Status</option>
                      <option value="Publish">Publish</option>
                      <option value="Pending">Pending</option>
                      <option value="Draft">Draft</option>
                    </Form.Select>
                    {errors.select_option && touched.select_option && (
                      <p className=" mt-1 text-danger mb-1">
                        {errors.select_option}
                      </p>
                    )}
                  </div>
                </Col>
                <Multiselectoption
                  options={options}
                  setOptions={setOptions}
                  selectedValue={selectedValue}
                  setSelectedValue={setSelectedValue}
                />
                <Button
                  type="submit"
                  variant="primary"
                  className="text-white w-100"
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddRoomModal;
