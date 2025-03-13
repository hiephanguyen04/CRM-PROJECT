import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const PlusIcon: React.FC<IconProps> = ({ size = 18, ...props }) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.1634 2.25H5.83735C3.63284 2.25 2.25 3.81089 2.25 6.01978V11.9802C2.25 14.1891 3.62627 15.75 5.83735 15.75H12.1627C14.3744 15.75 15.75 14.1891 15.75 11.9802V6.01978C15.75 3.81089 14.3744 2.25 12.1634 2.25Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 6.521V11.4656"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.4742 8.99414H6.52441"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
