import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Icon5: React.FC<IconProps> = ({ size = 18, ...props }) => {
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
        d="M8.08057 10.7056L3.15424 8.2978C2.1006 7.78286 2.1006 6.28155 3.15354 5.76664L7.85924 3.46669C8.47643 3.16475 9.19801 3.16475 9.8152 3.46669L14.5264 5.76874C15.5801 6.28365 15.5801 7.78567 14.5264 8.30054L9.81729 10.6019C9.19801 10.9046 8.47434 10.9046 7.855 10.6019L4.86361 9.13984"
        stroke="#A9ABAD"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.3238 7.02539L15.3 10.9233"
        stroke="#A9ABAD"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.86423 9.14062V12.7198C4.86423 13.3363 5.22992 13.9038 5.79948 14.1392C7.79746 14.9637 9.78711 14.9742 11.769 14.144C12.3343 13.9072 12.6965 13.3412 12.6965 12.7282V9.20578"
        stroke="#A9ABAD"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
