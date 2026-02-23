import { forwardRef } from "react";

export const CervicalesIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
      <path d="M38 8 C38 4, 42 2, 46 4 C50 6, 52 10, 52 16 C52 22, 48 26, 44 28" />
      <path d="M44 28 C46 30, 48 32, 48 34 C48 36, 46 38, 44 38" />
      <path d="M44 38 L44 42 C44 44, 42 46, 40 46 L36 46" />
      <path d="M36 46 C34 46, 30 48, 28 52 L24 60" />
      <path d="M36 46 C40 48, 44 50, 48 52 L54 56" />
      <path d="M30 18 C28 16, 26 16, 24 18" opacity="0.6" />
      <path d="M26 14 C24 12, 22 12, 20 14" opacity="0.5" />
      <path d="M22 10 C20 8, 18 8, 16 10" opacity="0.4" />
    </svg>
  )
);

CervicalesIcon.displayName = "CervicalesIcon";
