import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 960px;
  margin: 18px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 426px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
