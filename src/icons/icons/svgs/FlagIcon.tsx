import * as React from 'react';

function SvgFlagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.94 9.13l-3.97-4.44L15.9.07 0 0v16h1.25V9.07l14.69.06zM13.22 1.3l-2.89 3.4 2.83 3.17-11.91-.05V1.25l11.97.05z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFlagIcon;
