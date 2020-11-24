import * as React from 'react';

function SvgGridIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.02 2.2a2.121 2.121 0 004.24 0 2.121 2.121 0 00-4.24 0zm1.25-.01a.87.87 0 111.741.001.87.87 0 01-1.741 0zm4.65.01a2.121 2.121 0 004.24 0 2.121 2.121 0 00-4.24 0zm1.25-.01c0-.48.39-.87.87-.87s.88.39.87.87a.87.87 0 01-1.74 0zm6.72 2.13a2.121 2.121 0 010-4.24 2.121 2.121 0 010 4.24zm0-3a.87.87 0 10.001 1.741.87.87 0 00-.001-1.74zM.02 8.01a2.121 2.121 0 004.24 0 2.121 2.121 0 00-4.24 0zM1.27 8a.87.87 0 111.741.001.87.87 0 01-1.741 0zm6.77 2.13a2.121 2.121 0 010-4.24 2.121 2.121 0 010 4.24zm0-3a.87.87 0 10.87.87.864.864 0 00-.87-.87zm3.73.88a2.121 2.121 0 004.24 0 2.121 2.121 0 00-4.24 0zM13.02 8a.87.87 0 111.741.001.87.87 0 01-1.741 0zM2.14 15.94a2.121 2.121 0 010-4.24 2.121 2.121 0 010 4.24zm0-3a.87.87 0 10.87.87c0-.47-.39-.87-.87-.87zm3.78.88a2.121 2.121 0 004.24 0 2.121 2.121 0 00-4.24 0zm1.25-.01a.87.87 0 111.741.001.87.87 0 01-1.741-.001zm6.72 2.13a2.121 2.121 0 010-4.24 2.121 2.121 0 010 4.24zm0-3a.87.87 0 10.87.87c0-.47-.39-.87-.87-.87z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgGridIcon;
