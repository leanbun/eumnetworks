import Image from "next/image";

export default function Logo({
  height = 32,
  className = "",
}: {
  height?: number;
  className?: string;
}) {
  const imgRatio = 587 / 162;
  const imgW = Math.round(height * imgRatio);

  return (
    <Image
      src="/logo.png"
      alt="이음네트웍스글로벌 로고"
      width={imgW}
      height={height}
      priority
      className={className}
    />
  );
}
