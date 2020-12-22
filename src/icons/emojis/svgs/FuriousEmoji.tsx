import * as React from 'react';

function SvgFuriousEmoji(props: React.SVGProps<SVGSVGElement>) {
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
        d="M38.75 24c0-8.13-6.62-14.75-14.75-14.75-8.13 0-14.75 6.62-14.75 14.75 0 8.13 6.62 14.75 14.75 14.75 8.13 0 14.75-6.62 14.75-14.75zM8 24c0-8.84 7.16-16 16-16s16 7.17 16 16c0 8.84-7.16 16-16 16S8 32.84 8 24zm24.445-1.741l-3.552 2.203.66 1.063 3.551-2.204-.659-1.062zm-17.543 1.084l.659-1.062 3.551 2.205-.659 1.062-3.551-2.205zM19.37 33.84c.3.48.82.74 1.39.74.16 0 .33-.02.52-.06.55-.12 1.58-.25 2.67-.25h.01c1.16 0 2.35.16 2.83.25.8.15 1.52-.13 1.89-.73.36-.6.29-1.36-.19-1.98-.38-.49-1.82-2.08-4.47-2.08-2.5 0-3.95 1.45-4.46 2.07-.51.62-.58 1.42-.19 2.04zm1.15-1.25c.4-.48 1.53-1.61 3.49-1.61 2.08 0 3.19 1.23 3.48 1.59.16.2.2.42.11.56-.09.15-.31.2-.59.15-.55-.11-1.81-.27-3.07-.27h-.01c-1.18 0-2.31.15-2.95.28-.26.07-.46.02-.56-.13-.08-.12-.09-.34.1-.57zm10.84-4.45a1.18 1.18 0 100-2.36 1.18 1.18 0 000 2.36zm-13.31-1.18a1.18 1.18 0 11-2.36 0 1.18 1.18 0 012.36 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFuriousEmoji;
