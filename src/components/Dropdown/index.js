import React from "react";
import focusAndBlurHandler from "../../helpers/focusAndBlurHandler";
import servicesDropdownOptions from "../../consts/consts";

export default function Dropdown() {
  return (
    <div className="input-container">
      <label className="sr-only" htmlFor="services-menu">
        Almak istediğiniz hizmeti seçiniz:
      </label>
      <select
        className="dropdown"
        id="services-menu"
        onFocus={(e) => focusAndBlurHandler(e)}
        onBlur={(e) => focusAndBlurHandler(e)}
      >
        {servicesDropdownOptions.map(({ value, option }) => {
          return (
            <option key={value} value={value}>
              {option}
            </option>
          );
        })}
      </select>
      <span></span>
    </div>
  );
}
