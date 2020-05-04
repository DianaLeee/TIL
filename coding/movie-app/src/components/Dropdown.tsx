import React, { useState, useEffect } from "react";
import "./Dropdown.css";

interface IDropdown {
  sorting: Array<string>;
  default: string;
  onChange(value: string): void;
}

const Dropdown = (dropdownInfo: IDropdown) => {
  const [sortBy, setSortBy] = useState("");

  const handleChange = (e: any) => {
    setSortBy(e.target.value);
    dropdownInfo.onChange(e.target.value);
  };

  useEffect(() => {
    setSortBy(dropdownInfo.default);
    // dropdownInfo.onCreate(sortBy);
  }, []);

  // const handleCreate = (value: string) => {
  //   dropdownInfo.onCreate(value);
  // };

  return (
    <div className="sorting-dropdown">
      <select value={sortBy} onChange={handleChange}>
        {dropdownInfo.sorting.map((item: string) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
