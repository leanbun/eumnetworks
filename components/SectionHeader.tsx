interface Props {
  label: string;
  title: string;
  desc?: string;
  theme?: "dark" | "light";
  center?: boolean;
}

export default function SectionHeader({
  label,
  title,
  desc,
  theme = "dark",
  center = false,
}: Props) {
  const align = center ? "text-center" : "";
  const titleColor = theme === "dark" ? "text-white" : "text-gray-900";
  const descColor =
    theme === "dark" ? "text-white/50" : "text-gray-500";

  return (
    <div className={align}>
      <p className="text-[13px] font-bold tracking-[2px] uppercase text-coral mb-3">
        {label}
      </p>
      <h2
        className={`text-4xl max-md:text-[28px] font-extrabold leading-tight mb-3.5 ${titleColor}`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {desc && (
        <p
          className={`text-base leading-relaxed max-w-[560px] ${descColor} ${center ? "mx-auto" : ""}`}
        >
          {desc}
        </p>
      )}
    </div>
  );
}
