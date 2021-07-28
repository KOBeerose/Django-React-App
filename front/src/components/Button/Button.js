import { StyledButton } from "./styles";
//import { ButtonProps } from "../types";

export const Button = ({
  outline,
  hover,
  text,
  color,
  fixedWidth,
  children,
  width,
  stroke,
  borderradius,
  shadow,
  onClick,
}) => (
  <StyledButton
    color={color}
    shadow={shadow}
    outline={outline}
    stroke={stroke}
    text={text}
    hover={hover}
    hover={hover}
    fixedWidth={fixedWidth}
    borderradius={borderradius}
    onClick={onClick}
    width={width}
  >
    {children}
  </StyledButton>
);
