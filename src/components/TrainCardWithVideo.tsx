"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface TrainCardWithVideoProps {
  dep: string;
  depStation: string;
  depDetail?: string;
  train: string;
  direction?: string;
  arr: string;
  arrStation: string;
  arrDetail?: string;
  duration: string;
  videoSrc?: string;
  imageSrc?: string;
}

export function TrainCardWithVideo({
  dep,
  depStation,
  depDetail,
  train,
  direction,
  arr,
  arrStation,
  arrDetail,
  duration,
  videoSrc,
  imageSrc,
}: TrainCardWithVideoProps) {
  const [hovered, setHovered] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const handleMouseEnter = () => {
    setHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <>
    <div
      className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a1220] p-5"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onDoubleClick={() => imageSrc && setLightbox(true)}
    >
      {/* Card content */}
      <div
        className="relative z-10 flex flex-col gap-4 transition-opacity duration-500 sm:flex-row sm:items-center sm:justify-between"
        style={{ opacity: hovered ? 0 : 1 }}
      >
        <div className="flex flex-1 items-center gap-5">
          <div className="text-center">
            <p className="font-mono text-lg font-light text-white">{dep}</p>
            <p className="mt-0.5 text-[11px] text-zinc-400">{depStation}</p>
            {depDetail && <p className="text-[10px] text-zinc-600">{depDetail}</p>}
          </div>
          <div className="flex flex-1 flex-col items-center gap-1">
            <p className="text-xs text-sky-400/80">{train}</p>
            {direction && <p className="text-[10px] text-zinc-500">{direction}</p>}
            <div className="flex w-full items-center gap-1">
              <div className="h-px flex-1 bg-white/10" />
              <svg className="h-3 w-3 text-white/20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0l8 8-8 8V0z" />
              </svg>
            </div>
          </div>
          <div className="text-center">
            <p className="font-mono text-lg font-light text-white">{arr}</p>
            <p className="mt-0.5 text-[11px] text-zinc-400">{arrStation}</p>
            {arrDetail && <p className="text-[10px] text-zinc-600">{arrDetail}</p>}
          </div>
        </div>
        <div className="shrink-0 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-center sm:ml-4">
          <p className="text-[10px] uppercase tracking-widest text-zinc-500">車程</p>
          <p className="mt-0.5 font-mono text-sm text-zinc-200">{duration}</p>
        </div>
      </div>

      {/* Image overlay */}
      {imageSrc && (
        <div
          className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-500"
          style={{ opacity: hovered ? 1 : 0 }}
        >
          <Image
            src={imageSrc}
            alt=""
            fill
            className="rounded-2xl object-cover"
            sizes="100vw"
          />
        </div>
      )}

      {/* Video overlay */}
      {videoSrc && (
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          className="pointer-events-none absolute inset-0 z-20 h-full w-full rounded-2xl object-cover transition-opacity duration-500"
          style={{ opacity: hovered ? 1 : 0 }}
        />
      )}
    </div>

    {/* Lightbox */}
    {lightbox && imageSrc && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        onClick={() => setLightbox(false)}
      >
        <div
          className="w-[90vw] max-w-3xl overflow-hidden rounded-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative max-h-[65vh] overflow-hidden">
            <Image
              src={imageSrc}
              alt=""
              width={1200}
              height={800}
              className="h-auto w-full object-contain"
              sizes="90vw"
            />
            <button
              onClick={() => setLightbox(false)}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white/70 backdrop-blur-sm transition hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Train info bar */}
          <div className="flex flex-col gap-4 bg-[#0a1220] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-1 items-center gap-5">
              <div className="text-center">
                <p className="font-mono text-lg font-light text-white">{dep}</p>
                <p className="mt-0.5 text-[11px] text-zinc-500">{depStation}</p>
              </div>
              <div className="flex flex-1 flex-col items-center gap-1">
                <p className="text-xs text-sky-400/80">{train}</p>
                <div className="flex w-full items-center gap-1">
                  <div className="h-px flex-1 bg-white/10" />
                  <svg className="h-3 w-3 text-white/20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0l8 8-8 8V0z" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <p className="font-mono text-lg font-light text-white">{arr}</p>
                <p className="mt-0.5 text-[11px] text-zinc-500">{arrStation}</p>
              </div>
            </div>
            <div className="shrink-0 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-center sm:ml-4">
              <p className="text-[10px] uppercase tracking-widest text-zinc-500">車程</p>
              <p className="mt-0.5 font-mono text-sm text-zinc-200">{duration}</p>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
