import Image from "next/image";

export default function Logo({
  height = 32,
  className = "",
}: {
  height?: number;
  className?: string;
}) {
  const imgRatio = 420 / 180;
  const imgW = Math.round(height * imgRatio);
  const koreanSize = Math.max(9, Math.round(height * 0.2));
  const koreanBottom = Math.round(height * 0.04);
  const koreanLeft = Math.round(height * 0.58);

  // Clip: keep full image except bottom-right Korean text area
  // Original "네트웍스글로벌" sits at roughly x:48%~100%, y:68%~100%
  const clip = "polygon(0 0, 100% 0, 100% 68%, 48% 68%, 48% 100%, 0 100%)";

  return (
    <span className={`relative inline-block ${className}`} style={{ width: imgW, height }}>
      <Image
        src="/logo.png"
        alt="이음네트웍스글로벌 로고"
        width={imgW}
        height={height}
        priority
        style={{ clipPath: clip }}
      />
      <span
        className="absolute text-white/50 font-normal whitespace-nowrap"
        style={{
          fontSize: koreanSize,
          bottom: koreanBottom,
          left: koreanLeft,
          letterSpacing: "0.3px",
        }}
      >
        이음네트웍스글로벌
      </span>
    </span>
  );
}
