import * as React from 'react';

function SvgClockIconSecondary(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8 0C3.59 0 0 3.59 0 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 14.5c-3.58 0-6.5-2.92-6.5-6.5S4.42 1.5 8 1.5s6.5 2.92 6.5 6.5-2.92 6.5-6.5 6.5z"
        fill="currentColor"
      />
      <path
        d="M8 8.75h1.95c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.2V6a.749.749 0 10-1.5 0v1.97c0 .01-.01.02-.01.03.01.41.35.75.76.75zM8 4.34c.41 0 .75-.34.75-.75V3a.749.749 0 10-1.5 0v.6c0 .41.34.74.75.74zM13 7.25h-.6c-.41 0-.75.34-.75.75s.34.75.75.75h.6a.749.749 0 100-1.5zM11.14 6.03c.12.29.4.47.69.47.09 0 .19-.02.28-.06l.48-.2a.751.751 0 10-.57-1.39l-.48.2c-.37.16-.55.6-.4.98zM9.97 4.87a.726.726 0 00.97-.4l.2-.5a.754.754 0 00-.41-.98.735.735 0 00-.97.41l-.2.49c-.16.38.02.82.41.98zM5.05 4.45c.12.29.4.47.69.47.09 0 .19-.02.28-.06.39-.15.58-.59.42-.97l-.2-.49a.743.743 0 00-.98-.41c-.38.15-.56.59-.41.97l.2.49zM3.4 6.24l.49.2c.09.04.18.06.28.06.3 0 .58-.18.69-.47a.754.754 0 00-.41-.98l-.49-.2a.748.748 0 00-.97.41c-.16.39.02.82.41.98zM10.95 11.55a.751.751 0 10-1.39.57l.2.49c.12.29.4.47.69.47.09 0 .19-.02.28-.06.38-.16.57-.59.41-.98l-.19-.49zM12.6 9.76l-.49-.2a.751.751 0 10-.57 1.39l.49.2c.09.04.19.06.28.06.3 0 .58-.18.7-.47a.74.74 0 00-.41-.98zM3.6 8.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H3a.749.749 0 100 1.5h.6zM4.87 9.96a.75.75 0 00-.98-.4l-.5.21c-.38.16-.56.6-.41.98a.746.746 0 00.98.4l.5-.21c.39-.16.57-.59.41-.98zM6.03 11.14a.743.743 0 00-.98.41l-.2.49c-.16.38.02.82.41.98a.746.746 0 00.98-.4l.2-.49c.16-.4-.02-.84-.41-.99zM8 11.66c-.41 0-.75.34-.75.75V13a.749.749 0 101.5 0v-.6c0-.41-.34-.74-.75-.74z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgClockIconSecondary;
