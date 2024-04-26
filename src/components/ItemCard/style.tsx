import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 198px;
  background: #ffffff;
  padding: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const CardInfo = styled.div`
  display: flex;
  width: 200px;
  gap: 8px;
  justify-content: space-between;
  margin-top: 14px;
  margin-bottom: 8px;
  max-height: 48px;
`;

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

export const Description = styled(Text)`
  font-weight: 300;
`;

export const PriceCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #373737;
  padding: 4px;
`;

export const Price = styled(Text)`
  color: #ffffff;
  font-weight: bold;
`;
