import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const SearchIcon: React.FC<IconProps> = ({ size = 18, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.82491 15.5668C12.5481 15.5668 15.5663 12.5486 15.5663 8.8254C15.5663 5.10222 12.5481 2.08398 8.82491 2.08398C5.10173 2.08398 2.0835 5.10222 2.0835 8.8254C2.0835 12.5486 5.10173 15.5668 8.82491 15.5668Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5137 13.8643L16.1567 16.5004"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
