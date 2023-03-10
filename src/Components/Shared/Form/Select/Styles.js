import styled from "styled-components";

export const SelectInput = styled.select`
  font-size: 12px;
  width: 100%;
  height: 44px;
  padding: 0 50px 0 15px;
  cursor: pointer;
  color: #242424;
  border: 1px solid ${(props) => (props.isError ? "red" : "#221ecd29")} !important;
  box-shadow: none !important;
  background: transparent;
  -webkit-appearance: none;
  border-radius: 0.375rem;
  &&:focus {
    border-color: #2a6dc9 !important;
    box-shadow: none !important;
    outline-color: #ebebeb !important;
  }
`;

export const OptionElement = styled.option`
  font-size: 14px;
  padding-left: 10px;
  border: 0 solid #626262;
  background: transparent;
`;
