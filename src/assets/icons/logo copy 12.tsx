import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Icon12: React.FC<IconProps> = ({ size = 18, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.94247 12.7856H10.748"
        stroke="white"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.86594 8.08594H5.67144"
        stroke="white"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0205 7.78076H15.826"
        stroke="white"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.34595 15.1933V12.7856"
        stroke="white"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.26797 15.1925V8.08594"
        stroke="white"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4225 15.1928V7.78076"
        stroke="white"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.26797 5.15612V2.80664"
        stroke="white"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4225 4.85069V2.80664"
        stroke="white"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.34451 9.85505V2.80664"
        stroke="white"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
