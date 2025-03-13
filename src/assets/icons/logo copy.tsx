import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Icon1: React.FC<IconProps> = ({ size = 18, ...props }) => {
  return (
    <svg
      width={size}
      height={size} // Giữ tỷ lệ gốc (22x20)
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0534 2.07131H6.0636C4.5036 2.06533 3.22485 3.30883 3.1881 4.86808V12.9028C3.1536 14.4876 4.40985 15.8008 5.9946 15.8361C6.01785 15.8361 6.04035 15.8368 6.0636 15.8361H12.0554C13.6259 15.7723 14.8634 14.4748 14.8522 12.9028V6.02833L11.0534 2.07131Z"
        stroke="#A9ABAD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.8563 2.0625V4.24425C10.8563 5.30925 11.7173 6.1725 12.7823 6.1755H14.8486"
        stroke="#A9ABAD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.7161 11.519H6.66608"
        stroke="#A9ABAD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.18241 8.70459H6.66541"
        stroke="#A9ABAD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
