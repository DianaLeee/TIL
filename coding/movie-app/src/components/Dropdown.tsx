import React, { useState } from "react";
import styled from "styled-components";
import keydownImg from "../key_down.svg";

interface IDropdown {
  sortList: Array<string>;
  sortDefault: string;
  onChange(value: string): void;
}

const DropdownContainer = styled.div`
  margin-top: 80px;
  padding-top: 35px;
  align-self: flex-end;
`;

const StyledSelect = styled.select`
  width: 100px;
  appearance: none;
  padding: 1rem 1rem;
  border: none;
  font-family: inherit;
  background-color: #eff3f7;
  background: url(${keydownImg}) no-repeat 95%;
  background-size: 18px;
  font-size: 1rem;
  color: #adaeb9;

  &:focus {
    outline: none;
  }
`;

const SortDropdown = (dropdownInfo: IDropdown) => {
  const [sortItem, setSortItem] = useState(dropdownInfo.sortDefault);

  const handleChange = (e: any) => {
    const sortBy = e.target.value;
    setSortItem(sortBy);
    dropdownInfo.onChange(sortBy);
  };

  return (
    <DropdownContainer>
      <StyledSelect value={sortItem} onChange={handleChange}>
        {dropdownInfo.sortList.map((item: string) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </StyledSelect>
    </DropdownContainer>
  );
};

export default SortDropdown;
