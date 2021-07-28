//import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }) => (
  <img src={`/Assets/svg/${src}`} alt={src} width={width} height={height} />
);
