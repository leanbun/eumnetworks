const widths: Record<string, number> = {
  Company: 90,
  Sports: 68,
  "IT System": 95,
  Group: 62,
};

export default function NavText({ label }: { label: string }) {
  const w = widths[label] ?? label.length * 10;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${w} 20`}
      width={w}
      height={20}
      aria-label={label}
    >
      <text
        x="0"
        y="15"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontSize="16"
        fontWeight="400"
        fontStyle="italic"
        fill="currentColor"
        letterSpacing="0.5"
      >
        {label}
      </text>
    </svg>
  );
}
