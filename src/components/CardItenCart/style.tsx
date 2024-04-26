import styled from "styled-components";

export const Text = styled.p`
  color: #2c2c2c;
  font-size: 16px;
  padding: 0;
  margin: 0;

  overflow: hidden;
  text-overflow: ellipsis;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  display: -moz-box;
  -moz-line-clamp: 2;
  -moz-box-orient: vertical;

  display: box;
  line-clamp: 2;
  box-orient: vertical;
`;
