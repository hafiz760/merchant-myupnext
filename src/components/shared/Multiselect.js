import React from "react";
import Multiselect from "multiselect-react-dropdown";

function Multiselectoption({
  options,
  setOptions,
  selectedValue,
  setSelectedValue,
}) {
  const onSelect = (selectedList, selectedItem) => {
    setSelectedValue(selectedList);
  };

  const onRemove = (selectedList, removedItem) => {
    setSelectedValue(selectedList);
  };

  return (
    <div className="mb-4">
      <label className="form-label">Attribute: Room Amenities</label>
      <Multiselect
        options={options}
        selectedValues={selectedValue}
        onSelect={onSelect}
        onRemove={onRemove}
        displayValue="name"
      />
    </div>
  );
}

export default Multiselectoption;
