import { forwardRef } from "react";

export const SciatiquIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M22 16 C20 24, 18 32, 16 42 C15 47, 14 52, 13 58" />
      <path d="M42 16 C44 24, 46 32, 48 42 C49 47, 50 52, 51 58" />
      <path d="M22 16 C26 14, 28 13, 32 12.5 C36 13, 38 14, 42 16" />
      <path d="M24 28 C28 30, 36 30, 40 28" />
      <path d="M32 22 L32 22" strokeWidth="3" />
      <path d="M28 34 C30 33, 34 33, 36 34 C36 37, 34 38, 32 38 C30 38, 28 37, 28 34Z" />
      <path d="M32 12.5 L32 8" />
      <path d="M27 7 C25 5, 24 3, 23 1" opacity="0.6" />
      <path d="M32 6 C32 4, 32 2, 32 1" opacity="0.7" />
      <path d="M37 7 C39 5, 40 3, 41 1" opacity="0.6" />
      <path d="M25 8 C23 6, 21 4, 20 3" opacity="0.5" />
      <path d="M39 8 C41 6, 43 4, 44 3" opacity="0.5" />
    </svg>
  )
);

SciatiquIcon.displayName = "SciatiquIcon";
