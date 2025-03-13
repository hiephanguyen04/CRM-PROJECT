import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Icon9: React.FC<IconProps> = ({ size = 18, ...props }) => {
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
        d="M6.19306 2.52002H12.2661C14.3887 2.52002 15.7092 4.01848 15.7092 6.13901V11.861C15.7092 13.9816 14.3887 15.48 12.2653 15.48H6.19306C4.07043 15.48 2.74921 13.9816 2.74921 11.861V6.13901C2.74921 4.01848 4.07673 2.52002 6.19306 2.52002Z"
        stroke="#A9ABAD"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.15727 5.07568H5.11734M6.94762 5.07568H6.90769M8.73799 5.07568H8.69803"
        stroke="#A9ABAD"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.07361 9.89795H8.75248M6.07361 12.3786H10.9851"
        stroke="#A9ABAD"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7092 7.19385H2.74921"
        stroke="#A9ABAD"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
