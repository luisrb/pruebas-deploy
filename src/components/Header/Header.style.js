import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  li {
    font-size: 18px;
  }

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
