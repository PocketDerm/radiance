import * as React from 'react';

function SvgElatedSelectedEmoji(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 24c0-8.84 7.16-16 16-16 8.83 0 16 7.16 16 16s-7.16 16-16 16S8 32.84 8 24zm5.87-3.21l1.15.49c.24-.58.81-.95 1.43-.95.68 0 1.27.44 1.48 1.08l1.19-.38a2.8 2.8 0 00-2.67-1.95c-1.13 0-2.14.67-2.58 1.71zm10.58 10.2c4.28 0 6.76-2.47 7.63-3.53.77-.94.89-2.15.29-3.09-.59-.92-1.7-1.3-2.88-1-1.02.21-2.91.45-4.89.45h-.03c-2.12 0-4.29-.27-5.17-.45-1.24-.23-2.34.18-2.89 1.08-.55.9-.44 2.04.3 2.99.65.84 3.11 3.55 7.64 3.55zm7.09-10.66c.63 0 1.19.37 1.43.95l1.15-.49a2.793 2.793 0 00-2.58-1.71c-1.23 0-2.3.79-2.67 1.95l1.19.38c.21-.65.8-1.08 1.48-1.08zm-6.93 4.75c2.08 0 4.06-.25 5.17-.48.68-.17 1.26 0 1.54.45.24.36.3.98-.21 1.61-.76.93-2.92 3.08-6.66 3.08-3.97 0-6.09-2.34-6.65-3.06-.4-.53-.49-1.13-.22-1.57.22-.36.63-.55 1.14-.55.14 0 .29.01.44.04.95.19 3.18.48 5.41.48h.04z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgElatedSelectedEmoji;
