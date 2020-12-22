import * as React from 'react';

function SvgElatedEmoji(props: React.SVGProps<SVGSVGElement>) {
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
        d="M38.75 24c0-8.13-6.62-14.75-14.75-14.75-8.14 0-14.75 6.62-14.75 14.75 0 8.13 6.62 14.75 14.75 14.75 8.13 0 14.75-6.62 14.75-14.75zM8 24c0-8.84 7.16-16 16-16 8.83 0 16 7.17 16 16 0 8.84-7.16 16-16 16S8 32.84 8 24zm8.45-3.66c.68 0 1.27.44 1.48 1.08l1.19-.38a2.79 2.79 0 00-2.67-1.95c-1.13 0-2.14.67-2.58 1.71l1.15.49c.24-.58.81-.95 1.43-.95zm12.42.7l1.19.38c.21-.65.8-1.08 1.48-1.08.63 0 1.19.37 1.43.95l1.15-.49a2.803 2.803 0 00-5.25.24zm-4.41 9.97c-4.53 0-6.99-2.71-7.64-3.55-.74-.95-.85-2.09-.3-2.99.55-.9 1.66-1.31 2.88-1.08.87.17 3.05.45 5.18.45h.03c1.98 0 3.87-.24 4.89-.45 1.18-.3 2.29.08 2.88 1 .59.93.47 2.13-.3 3.08a9.785 9.785 0 01-7.62 3.54zm-5.74-6.44c-.51 0-.92.19-1.14.55-.27.44-.18 1.04.22 1.57.56.72 2.68 3.06 6.65 3.06 3.74 0 5.9-2.15 6.66-3.08.52-.63.45-1.25.21-1.61-.29-.46-.87-.63-1.54-.46-1.11.23-3.1.48-5.17.48h-.04c-2.23 0-4.46-.29-5.41-.48l-.154-.013a3.242 3.242 0 00-.286-.017z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgElatedEmoji;
