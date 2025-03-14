import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Icon10: React.FC<IconProps> = ({ size = 18, ...props }) => {
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
        d="M9 15.2056V2.24561"
        stroke="#A9ABAD"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.68481 8.75287C5.68481 7.95758 5.0401 7.31287 4.24481 7.31287C3.44952 7.31287 2.80481 7.95758 2.80481 8.75287C2.80481 9.54816 3.44952 10.1929 4.24481 10.1929C5.0401 10.1929 5.68481 9.54816 5.68481 8.75287Z"
        stroke="#A9ABAD"
        strokeWidth="1.44"
      />
      <path
        d="M7.9397 8.75293H8.9999"
        stroke="#A9ABAD"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.68481 8.75293H6.55194"
        stroke="#A9ABAD"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3152 5.0268C12.3152 4.23151 12.9599 3.5868 13.7552 3.5868C14.5505 3.5868 15.1952 4.23151 15.1952 5.0268C15.1952 5.82209 14.5505 6.4668 13.7552 6.4668C12.9599 6.4668 12.3152 5.82209 12.3152 5.0268Z"
        stroke="#A9ABAD"
        strokeWidth="1.44"
      />
      <path
        d="M10.0603 5.02687L9.00012 5.02686"
        stroke="#A9ABAD"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3153 5.02687L11.4481 5.02686"
        stroke="#A9ABAD"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3152 12.4247C12.3152 11.6295 12.9599 10.9847 13.7552 10.9847C14.5505 10.9847 15.1952 11.6295 15.1952 12.4247C15.1952 13.22 14.5505 13.8647 13.7552 13.8647C12.9599 13.8647 12.3152 13.22 12.3152 12.4247Z"
        stroke="#A9ABAD"
        strokeWidth="1.44"
      />
      <path
        d="M10.0603 12.4248H9.00012"
        stroke="#A9ABAD"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3153 12.4248H11.4481"
        stroke="#A9ABAD"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
