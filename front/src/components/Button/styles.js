import styled from "styled-components";

export const StyledButton = styled("button")`
  background: ${(p) => p.color || "#DA4459"};
  color: ${(p) => (p.text ? p.text : "#DA4459")};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: ${(p) => (p.stroke ? p.stroke : "2px")} solid
    ${(p) => (p.outline ? p.outline : "#DA4459")};
  border-radius: ${(p) => (p.borderradius ? p.borderradius : "45px")};
  padding: 5px 0;
  cursor: pointer;
  max-width: ${(p) => (p.width ? p.width : "150px")};
  transition: all 0.3s ease-in-out;
  box-shadow: ${(p) =>
    p.shadow ? "none" : "0 16px 30px rgb(23 31 114 / 20%)"};

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: ${(p) => (p.stroke ? p.stroke : "2px")} solid
      ${(p) => (p.hover ? p.hover : "#f8a026")};
    background-color: ${(p) => (p.hover ? p.hover : "#f8a026")};
  }
`;
