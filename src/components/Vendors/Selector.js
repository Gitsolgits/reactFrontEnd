import React from "react";
import ActionButtonFill from "../common/ActionButtonFill";
export default function Selector() {
  return (
    <div>
      <div className="custom-control form-control-lg custom-checkbox ">
        <input
          type="checkbox"
          className="custom-control-input mx-2 my-2"
          id="customCheck1"
        />
        <label className="custom-control-label selectall" for="customCheck1">
          <ActionButtonFill value="Select All" />
        </label>
      </div>
    </div>
  );
}
