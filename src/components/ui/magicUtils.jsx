import { useId } from "react";

import { cn } from "../../lib/utils"

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}) {
  const id = useId();

  return (
    <div className="-z-10 w-full h-screen absolute inset-0  ">

    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-screen w-full fill-neutral-400/80 z-10",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
    </div>
  );
}
