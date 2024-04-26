import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90px;
  height: 45px;
  padding: 0 24px;
  border-radius: 8px;
  background-color: #ffffff;
  border: none;

  &:hover {
    background-color: #f3f3f3;
    cursor: pointer;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 16px;
  background: #0f52ba;
`;
