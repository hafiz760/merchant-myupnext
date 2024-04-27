import React, { useState } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import AirCondtion from "../../assets/img/AirCondtion.svg";

const FacilitiesCard = ({
  label,
  facilities,
  setSelectedFacilities,
  setSelectedServices,
}) => {
  const [switchStates, setSwitchStates] = useState(facilities.map(() => false));
  const toggleSwitch = (index, event) => {
    const newSwitchStates = [...switchStates];
    newSwitchStates[index] = !newSwitchStates[index];
    setSwitchStates(newSwitchStates);
    const name = event.target.name.replace(/\s+/g, "").toLowerCase();
    const checked = event.target.checked;
    if (setSelectedFacilities && setSelectedFacilities.length > 0) {
      setSelectedFacilities((prevSelectedFacilities) => {
        const updatedFacilities = prevSelectedFacilities.filter(
          (facility) => facility.name !== name
        );
        if (checked) {
          updatedFacilities.push({ name, isActive: checked });
        }
        return updatedFacilities;
      });
    } else {
      setSelectedServices((prevSelectedFacilities) => {
        const updatedFacilities = prevSelectedFacilities.filter(
          (facility) => facility.name !== name
        );
        if (checked) {
          updatedFacilities.push({ name, isActive: checked });
        }
        return updatedFacilities;
      });
    }
  };

  return (
    <Row className="mt-4">
      <label className="form-label">{label}</label>
      {facilities.map((data, index) => (
        <Col sm="6" md="6" lg="6" key={index} className="px-1">
          <Card className="d-flex flex-column justify-content-center align-items-center gap-1 card-post mb-2  p-3 formSpaceCard">
            <div
              className={`${
                switchStates[index] ? "switch-btn-on" : "switch-btn-off"
              }`}
            >
              <span>{data.icon}</span>
            </div>
            <div>
              <span className="text-capitalize">{data?.label}</span>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id={`flexSwitchCheckDefault${index}`}
                checked={switchStates[index]}
                onChange={(e) => toggleSwitch(index, e)}
                name={data?.label}
              />
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default FacilitiesCard;
