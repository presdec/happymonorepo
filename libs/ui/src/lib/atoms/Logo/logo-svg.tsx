import { FC } from "react";

export const LogoSvg: FC<{
  color?: string;
  className?: string;
  width?: string;
  height?: string;
}> = ({ color, className = "", width = "24", height = "24", ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      // viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <title>logo</title>
      <path
        opacity="0.2"
        d="M23.2419 15.7296L6.50105 18.2357L16.1208 23.9998L23.2419 15.7296Z"
        fill={color || "currentColor"}
      />
      <path
        opacity="0.4"
        d="M12.6775 0L6.52704 18.1622L0 11.569L12.6775 0Z"
        fill={color || "currentColor"}
      />
      <path
        opacity="0.6"
        d="M22.7449 5.1184L23.2421 15.7297L12.6775 0L22.7449 5.1184Z"
        fill={color || "currentColor"}
      />
    </svg>
  );
};

export default LogoSvg;
