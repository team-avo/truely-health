export default function TrulyLogo({ size = 44 }) {
  return (
    <svg
      width={size}
      height={size * 1.1}
      viewBox="0 0 88 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Four circles (heads) in slight arc */}
      <circle cx="12" cy="22" r="9" fill="#3BAA8C" />
      <circle cx="34" cy="14" r="9" fill="#C9A800" />
      <circle cx="56" cy="14" r="9" fill="#3BAA8C" />
      <circle cx="78" cy="22" r="9" fill="#3BAA8C" />

      {/* Three teardrop bodies */}
      {/* Left drop */}
      <path d="M12 34 C12 34 4 48 4 58 C4 65.732 7.582 72 12 72 C16.418 72 20 65.732 20 58 C20 48 12 34 12 34Z" fill="#3BAA8C" />
      {/* Centre drop (gold) */}
      <path d="M45 30 C45 30 37 46 37 57 C37 65.284 40.582 72 45 72 C49.418 72 53 65.284 53 57 C53 46 45 30 45 30Z" fill="#C9A800" />
      {/* Right drop */}
      <path d="M78 34 C78 34 70 48 70 58 C70 65.732 73.582 72 78 72 C82.418 72 86 65.732 86 58 C86 48 78 34 78 34Z" fill="#3BAA8C" />
    </svg>
  )
}
