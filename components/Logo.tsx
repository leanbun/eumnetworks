import Image from "next/image";

export default function Logo({
  height = 32,
  className = "",
}: {
  height?: number;
  className?: string;
}) {
  const ratio = 420 / 180;
  const w = Math.round(height * ratio);

  return (
    <Image
      src="/logo.png"
      alt="이음네트웍스글로벌 로고"
      width={w}
      height={height}
      className={className}
      priority
    />
  );
}
