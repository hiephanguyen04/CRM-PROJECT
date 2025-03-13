import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Icon4: React.FC<IconProps> = ({ size = 18, ...props }) => {
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
        d="M13.4158 8.17279C14.4621 8.02579 15.2676 7.12879 15.2698 6.04204C15.2698 4.97104 14.4891 4.08304 13.4653 3.91504"
        stroke="#A9ABAD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.7964 10.688C15.8096 10.8395 16.5169 11.1942 16.5169 11.9255C16.5169 12.4287 16.1839 12.7557 15.6454 12.9612"
        stroke="#A9ABAD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.91505 10.998C6.50455 10.998 4.4458 11.3633 4.4458 12.822C4.4458 14.28 6.4918 14.6558 8.91505 14.6558C11.3256 14.6558 13.3836 14.2943 13.3836 12.8348C13.3836 11.3753 11.3383 10.998 8.91505 10.998Z"
        stroke="#A9ABAD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.91504 8.916C10.4968 8.916 11.7793 7.63425 11.7793 6.05175C11.7793 4.47 10.4968 3.1875 8.91504 3.1875C7.33329 3.1875 6.05077 4.47 6.05077 6.05175C6.04479 7.62825 7.31754 8.91075 8.89404 8.916H8.91504Z"
        stroke="#A9ABAD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.4136 8.17279C3.3666 8.02579 2.56185 7.12879 2.5596 6.04204C2.5596 4.97104 3.34035 4.08304 4.3641 3.91504"
        stroke="#A9ABAD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.03294 10.688C2.01969 10.8395 1.31244 11.1942 1.31244 11.9255C1.31244 12.4287 1.64544 12.7557 2.18394 12.9612"
        stroke="#A9ABAD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
