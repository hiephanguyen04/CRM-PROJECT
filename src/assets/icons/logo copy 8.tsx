import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Icon8: React.FC<IconProps> = ({ size = 18, ...props }) => {
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
        d="M5.54211 6.73839H4.84236C3.31611 6.73839 2.07861 7.97589 2.07861 9.50214L2.07861 13.1584C2.07861 14.6839 3.31611 15.9214 4.84236 15.9214H13.1899C14.7161 15.9214 15.9536 14.6839 15.9536 13.1584V9.49464C15.9536 7.97289 14.7199 6.73839 13.1981 6.73839H12.4909"
        stroke="#A9ABAD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.01605 1.64308V10.6738"
        stroke="#A9ABAD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.82971 3.83936L9.01596 1.64336L11.203 3.83936"
        stroke="#A9ABAD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
