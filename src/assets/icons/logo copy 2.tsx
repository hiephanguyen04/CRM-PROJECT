import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Icon2: React.FC<IconProps> = ({ size = 18, ...props }) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.19363 11.4053C9.96038 11.4053 12.3251 11.8245 12.3251 13.4993C12.3251 15.174 9.97613 15.6053 7.19363 15.6053C4.42613 15.6053 2.06213 15.1898 2.06213 13.5143C2.06213 11.8388 4.41038 11.4053 7.19363 11.4053Z"
        stroke="#A9ABAD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.19364 9.015C5.37714 9.015 3.90414 7.54275 3.90414 5.72625C3.90414 3.90975 5.37714 2.4375 7.19364 2.4375C9.00939 2.4375 10.4824 3.90975 10.4824 5.72625C10.4891 7.536 9.02664 9.00825 7.21689 9.015H7.19364Z"
        stroke="#A9ABAD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3623 8.16145C13.5631 7.9927 14.4878 6.9622 14.4901 5.71495C14.4901 4.4857 13.5938 3.4657 12.4186 3.27295"
        stroke="#A9ABAD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9466 11.0493C15.1098 11.2226 15.9221 11.6306 15.9221 12.4706C15.9221 13.0488 15.5396 13.4238 14.9216 13.6586"
        stroke="#A9ABAD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
