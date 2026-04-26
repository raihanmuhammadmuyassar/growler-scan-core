import { cn } from "@/lib/utils";

export function GrowlerLogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-primary", className)}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="growler-aura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.55" />
          <stop offset="60%" stopColor="currentColor" stopOpacity="0.05" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="growler-ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.4" />
        </linearGradient>
        <filter id="growler-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* aura */}
      <circle cx="120" cy="120" r="118" fill="url(#growler-aura)" />

      {/* outer crosshair ring */}
      <g filter="url(#growler-glow)" stroke="url(#growler-ring)" strokeWidth="2.5" fill="none" strokeLinecap="round">
        <circle cx="120" cy="120" r="92" />
        {/* crosshair ticks */}
        <line x1="120" y1="14" x2="120" y2="34" />
        <line x1="120" y1="206" x2="120" y2="226" />
        <line x1="14" y1="120" x2="34" y2="120" />
        <line x1="206" y1="120" x2="226" y2="120" />
        {/* inner tick gaps */}
        <path d="M120 28 L120 40" strokeWidth="1.2" opacity="0.6" />
        <path d="M120 200 L120 212" strokeWidth="1.2" opacity="0.6" />
        <path d="M28 120 L40 120" strokeWidth="1.2" opacity="0.6" />
        <path d="M200 120 L212 120" strokeWidth="1.2" opacity="0.6" />
      </g>

      {/* fox head */}
      <g filter="url(#growler-glow)" fill="currentColor">
        {/* ears */}
        <path d="M70 70 L88 105 L78 112 Z" />
        <path d="M170 70 L152 105 L162 112 Z" />
        {/* head silhouette */}
        <path d="M120 78
                 C 92 78, 72 100, 72 128
                 C 72 152, 88 172, 110 178
                 L 120 188
                 L 130 178
                 C 152 172, 168 152, 168 128
                 C 168 100, 148 78, 120 78 Z" />
      </g>

      {/* eyes (cut-out via background color) */}
      <g fill="oklch(0.13 0.01 35)">
        <path d="M96 122 q 8 -10 16 0 q -8 6 -16 0 Z" />
        <path d="M128 122 q 8 -10 16 0 q -8 6 -16 0 Z" />
      </g>

      {/* snout / nose */}
      <g fill="oklch(0.13 0.01 35)">
        <path d="M112 148 q 8 8 16 0 q -2 10 -8 12 q -6 -2 -8 -12 Z" />
      </g>
    </svg>
  );
}
