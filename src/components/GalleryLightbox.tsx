"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface GalleryLightboxProps {
  images: readonly string[];
}

export function GalleryLightbox({ images }: GalleryLightboxProps) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i !== null ? (i + 1) % images.length : null));
      if (e.key === "ArrowLeft") setActive((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, images.length]);

  return (
    <>
      <div className="columns-2 gap-4 md:columns-3">
        {images.map((src, i) => (
          <div
            key={i}
            className="mb-4 cursor-pointer overflow-hidden rounded-xl"
            onClick={() => setActive(i)}
          >
            <Image
              src={src}
              alt={`旅程影像 ${i + 1}`}
              width={600}
              height={i % 2 === 1 ? 800 : 533}
              className="w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-h-[88vh] w-[92vw] max-w-4xl overflow-hidden rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[active]}
              alt={`旅程影像 ${active + 1}`}
              width={1200}
              height={900}
              className="h-auto max-h-[88vh] w-full object-contain"
              sizes="92vw"
            />

            {/* Close */}
            <button
              onClick={() => setActive(null)}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white/70 backdrop-blur-sm transition hover:text-white"
            >
              ✕
            </button>

            {/* Prev */}
            <button
              onClick={() => setActive((i) => (i !== null ? (i - 1 + images.length) % images.length : null))}
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white/70 backdrop-blur-sm transition hover:text-white"
            >
              ←
            </button>

            {/* Next */}
            <button
              onClick={() => setActive((i) => (i !== null ? (i + 1) % images.length : null))}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white/70 backdrop-blur-sm transition hover:text-white"
            >
              →
            </button>

            {/* Counter */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs text-white/60 backdrop-blur-sm">
              {active + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
