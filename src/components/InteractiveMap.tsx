"use client";

import type { CSSProperties } from "react";
import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";

type Props = {
  src?: string;
  alt?: string;
  initialScale?: number;
  className?: string;
  style?: CSSProperties;
};

export function InteractiveMap({
  src = "/map.png",
  alt = "歐洲鐵路旅行路線圖",
  initialScale = 0.5,
  className,
  style,
}: Props) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#020810",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "1.5rem",
        boxShadow:
          "0 0 32px -10px rgba(56,189,248,0.10), inset 0 0 0 1px rgba(255,255,255,0.04)",
        ...style,
      }}
    >
      <TransformWrapper
        initialScale={initialScale}
        minScale={0.5}
        maxScale={5}
        centerOnInit
        limitToBounds={false}
        smooth
        wheel={{
          step: 0.008,
          wheelDisabled: false,
        }}
        pinch={{ step: 4 }}
        doubleClick={{ disabled: true }}
        panning={{ velocityDisabled: false }}
        zoomAnimation={{
          disabled: false,
          animationTime: 180,
          animationType: "easeOut",
        }}
        velocityAnimation={{
          disabled: false,
          sensitivityMouse: 0.5,
          sensitivityTouch: 1,
          animationTime: 400,
          animationType: "easeOut",
        }}
      >
        {({ state }) => (
          <>
            <TransformComponent
              contentStyle={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "grab",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                draggable={false}
                style={{
                  display: "block",
                  width: 900,
                  height: 990,
                  maxWidth: "none",
                  userSelect: "none",
                  filter:
                    "invert(1) brightness(0.65) saturate(0.35) contrast(1.15)",
                  opacity: 0.92,
                }}
              />
            </TransformComponent>

            {/* Scale badge */}
            <span
              style={{
                position: "absolute",
                bottom: 10,
                right: 10,
                fontSize: 10,
                fontFamily: "monospace",
                letterSpacing: "0.12em",
                color: "rgba(148,163,184,.75)",
                background: "rgba(2,8,16,.7)",
                border: "1px solid rgba(255,255,255,.07)",
                borderRadius: 4,
                padding: "2px 7px",
                backdropFilter: "blur(8px)",
                pointerEvents: "none",
                zIndex: 10,
              }}
            >
              {state.scale.toFixed(1)}×
            </span>

            {/* Hint */}
            <span
              style={{
                position: "absolute",
                bottom: 10,
                left: 12,
                fontSize: 9,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(148,163,184,.38)",
                pointerEvents: "none",
              }}
            >
              drag · scroll · pinch
            </span>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}
