import styled from "styled-components";

export const ProductContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
`;

export const ProductTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  color: #555;
`;

export const AddToCartButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;
