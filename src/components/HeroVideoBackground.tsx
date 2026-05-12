"use client";

export function HeroVideoBackground() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center"
    >
      <source src="/videos/001.mp4" type="video/mp4" />
    </video>
  );
}
