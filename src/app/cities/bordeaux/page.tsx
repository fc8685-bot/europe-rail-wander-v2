import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bordeaux 波爾多 — 歐洲鐵路旅行",
  description: "從月台走進葡萄園，TGV 與紅酒在這裡交會。法國西南的葡萄酒與鐵道入口。",
};

const QUICK_INFO = [
  { label: "國家", value: "法國" },
  { label: "推薦停留", value: "2–3 天" },
  { label: "最佳季節", value: "4–6 月" },
  { label: "車站", value: "Bordeaux Saint-Jean" },
  { label: "特色", value: "葡萄酒 · 河岸 · 古城" },
  { label: "必去", value: "Saint-Émilion" },
] as const;

const MUST_DO = [
  {
    title: "Saint-Émilion 一日遊",
    description:
      "UNESCO 世界遺產小鎮，從波爾多搭 TER 僅 35 分鐘。石灰岩地窖、地下教堂與無盡的葡萄園梯田，是法國最美的葡萄酒小鎮之一。",
    image: "https://picsum.photos/seed/bx-saint-emilion/900/600",
  },
  {
    title: "Bordeaux 河岸散步",
    description:
      "加龍河畔的石板路沿岸延伸數公里。水鏡廣場（Miroir d'eau）是全球最大的倒影水池，黃昏時波爾多古典建築的倒影如夢似幻。",
    image: "https://picsum.photos/seed/bx-riverfront/900/600",
  },
  {
    title: "Bordeaux Saint-Jean 車站",
    description:
      "1898 年建成的新藝術風格車站，是法國最美的火車站之一。高聳的玻璃鋼鐵穹頂與精緻裝飾，搭 TGV 前往巴黎或慕尼黑的旅程都從這裡啟程。",
    image: "https://picsum.photos/seed/bx-station/900/600",
  },
] as const;

const TRAINS = [
  {
    name: "TGV INOUI",
    route: "波爾多 → 巴黎 Montparnasse",
    duration: "約 2 小時 4 分",
    description:
      "法國大西洋高速鐵路的旗艦列車，時速 320 km/h。寬敞座椅、電源插座與餐車服務，是往返巴黎最舒適的選擇。",
  },
  {
    name: "TER Nouvelle-Aquitaine",
    route: "波爾多 → Saint-Émilion / Arcachon",
    duration: "35–50 分鐘",
    description:
      "區域快車，連結波爾多與周邊葡萄酒鄉、大西洋海岸。班次密集，憑 Eurail Pass 免費搭乘，是探索周邊的最佳工具。",
  },
  {
    name: "Intercités",
    route: "波爾多 → 里昂 / 波城",
    duration: "3–4 小時",
    description:
      "連結法國主要城市的城際列車，走法國腹地路線，途中穿越佩里格、利摩日等古老小鎮，是感受法國鄉村風景的慢旅選擇。",
  },
] as const;

const FOOD = [
  {
    title: "Café de Flore 風格咖啡館",
    description: "石板街角的小咖啡館，濃縮咖啡配可麗露（Canelé），是波爾多最道地的早晨儀式。",
    tag: "咖啡 · 早餐",
    image: "https://picsum.photos/seed/bx-cafe/600/600",
  },
  {
    title: "可麗露（Canelé）",
    description: "波爾多的靈魂甜點。外層焦糖脆殼，內裡柔軟濕潤，充滿蘭姆酒與香草的香氣，每家麵包店的配方都略有不同。",
    tag: "甜點 · 必吃",
    image: "https://picsum.photos/seed/bx-canele/600/600",
  },
  {
    title: "大西洋海鮮",
    description: "距大西洋僅一小時，波爾多的牡蠣與海鮮拼盤新鮮到令人難以置信。搭配一杯白蘇維翁，是最完美的午餐。",
    tag: "海鮮 · 午餐",
    image: "https://picsum.photos/seed/bx-seafood/600/600",
  },
  {
    title: "法式早午餐",
    description: "週末的 brunch 文化在波爾多相當盛行，奶油可頌、法式吐司與現榨果汁，讓一天從容而優雅地展開。",
    tag: "Brunch · 週末",
    image: "https://picsum.photos/seed/bx-brunch/600/600",
  },
] as const;

const GALLERY = [
  "https://picsum.photos/seed/bx-g1/1200/800",
  "https://picsum.photos/seed/bx-g2/800/1100",
  "https://picsum.photos/seed/bx-g3/900/600",
  "https://picsum.photos/seed/bx-g4/800/1100",
  "https://picsum.photos/seed/bx-g5/1200/800",
  "https://picsum.photos/seed/bx-g6/800/1000",
] as const;

const MAP_MARKERS = [
  { label: "Bordeaux Saint-Jean", x: "48%", y: "62%" },
  { label: "Saint-Émilion", x: "72%", y: "38%" },
  { label: "河岸區域", x: "40%", y: "32%" },
] as const;

export default function BordeauxPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-zinc-100">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden md:flex-row">

        {/* Left: text */}
        <div className="relative z-10 flex flex-col justify-center px-8 py-24 md:w-[45%] md:px-16 md:py-32">
          <Link
            href="/"
            className="mb-10 inline-flex w-fit items-center gap-2 text-xs text-zinc-500 transition hover:text-zinc-300"
          >
            ← 返回首頁
          </Link>
          <p className="text-[11px] font-medium uppercase tracking-[0.45em] text-sky-300/90">
            France · Nouvelle-Aquitaine
          </p>
          <h1 className="mt-4 font-serif text-6xl font-light leading-none tracking-tight text-white md:text-7xl lg:text-8xl">
            Bordeaux
          </h1>
          <p className="mt-3 font-serif text-2xl font-light text-zinc-400 md:text-3xl">
            波爾多
          </p>
          <p className="mt-4 text-base text-zinc-400 md:text-lg">
            法國西南的葡萄酒與鐵道入口
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-zinc-500 md:text-base">
            從月台走進葡萄園，TGV 與紅酒在這裡交會。
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-zinc-400 backdrop-blur-sm">
              🍷 葡萄酒之都
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-zinc-400 backdrop-blur-sm">
              🚄 TGV 直達巴黎
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-zinc-400 backdrop-blur-sm">
              🏛️ UNESCO 遺產
            </span>
          </div>
        </div>

        {/* Right: hero image */}
        <div className="relative h-[520px] md:h-auto md:flex-1">
          <Image
            src="https://picsum.photos/seed/bx-hero/1200/1600"
            alt="Bordeaux"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/30 to-transparent md:via-[#030712]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/60 via-transparent to-transparent" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          QUICK INFO
      ══════════════════════════════════════════ */}
      <section className="border-t border-white/[0.06] bg-[#050a14] py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">
            Quick Info
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {QUICK_INFO.map((info) => (
              <div
                key={info.label}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
              >
                <p className="text-[10px] uppercase tracking-widest text-zinc-500">{info.label}</p>
                <p className="mt-2 text-sm font-medium text-zinc-200">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MUST DO
      ══════════════════════════════════════════ */}
      <section className="border-t border-white/[0.06] py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">
            Must Do
          </p>
          <h2 className="mb-12 font-serif text-3xl font-light text-white md:text-4xl">
            必做體驗
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {MUST_DO.map((item) => (
              <div
                key={item.title}
                className="group cursor-default overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a1220] transition-all duration-500 ease-out hover:scale-[1.02] hover:border-sky-500/20 hover:shadow-[0_0_40px_-12px_rgba(56,189,248,0.2)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1220] via-[#0a1220]/20 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TRAIN EXPERIENCE
      ══════════════════════════════════════════ */}
      <section className="border-t border-white/[0.06] bg-[#050a14] py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">
            Train Experience
          </p>
          <h2 className="mb-12 font-serif text-3xl font-light text-white md:text-4xl">
            搭乘體驗
          </h2>
          <div className="space-y-4">
            {TRAINS.map((train) => (
              <div
                key={train.name}
                className="rounded-2xl border border-white/[0.08] bg-[#0a1220] p-6 transition duration-300 hover:border-sky-500/20"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <h3 className="font-serif text-lg text-white">{train.name}</h3>
                    <p className="mt-0.5 text-sm text-sky-400/80">{train.route}</p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">{train.description}</p>
                  </div>
                  <div className="shrink-0 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-center md:text-right">
                    <p className="text-[10px] uppercase tracking-widest text-zinc-500">車程</p>
                    <p className="mt-1 font-mono text-sm text-zinc-200">{train.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WINE SECTION
      ══════════════════════════════════════════ */}
      <section className="border-t border-white/[0.06] py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">

            {/* Left: text */}
            <div className="md:w-1/2">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">
                Wine Culture
              </p>
              <h2 className="mb-6 font-serif text-3xl font-light text-white md:text-4xl">
                Bordeaux Wine
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-zinc-400">
                <p>
                  波爾多是全球最著名的葡萄酒產區，擁有超過 7,000 個酒莊。梅多克、波美侯、
                  聖愛美濃三大產區各有其風土個性，Cabernet Sauvignon 與 Merlot 是靈魂品種。
                </p>
                <p>
                  Cité du Vin 是城市中的葡萄酒文化中心，建築本身已是地標。頂層酒吧可一邊品酒，
                  一邊俯瞰整座城市與加龍河，是旅程中不可錯過的體驗。
                </p>
                <p>
                  每年 6 月舉辦的 Bordeaux Fête le Vin，是全球最盛大的葡萄酒節，
                  百萬旅人齊聚河畔，把這座古典城市變成全球最大的戶外酒吧。
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Médoc", "Pomerol", "Saint-Émilion", "Cité du Vin"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: image */}
            <div className="relative overflow-hidden rounded-3xl md:w-1/2">
              <Image
                src="https://picsum.photos/seed/bx-wine/900/700"
                alt="Bordeaux Wine"
                width={900}
                height={700}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/40 to-transparent" />
              <div
                className="absolute inset-0 rounded-3xl"
                style={{ boxShadow: "inset 0 0 60px -20px rgba(56,189,248,0.08)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOD & COFFEE
      ══════════════════════════════════════════ */}
      <section className="border-t border-white/[0.06] bg-[#050a14] py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">
            Food &amp; Coffee
          </p>
          <h2 className="mb-12 font-serif text-3xl font-light text-white md:text-4xl">
            飲食體驗
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {FOOD.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a1220] transition-all duration-500 ease-out hover:scale-[1.02] hover:border-sky-500/20"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1220] via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] text-zinc-300 backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-white">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GALLERY
      ══════════════════════════════════════════ */}
      <section className="border-t border-white/[0.06] py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">
            Gallery
          </p>
          <h2 className="mb-10 font-serif text-3xl font-light text-white md:text-4xl">
            影像紀錄
          </h2>
          <div className="columns-2 gap-4 md:columns-3">
            {GALLERY.map((src, i) => (
              <div
                key={i}
                className="group relative mb-4 overflow-hidden rounded-xl"
              >
                <Image
                  src={src}
                  alt={`波爾多影像 ${i + 1}`}
                  width={600}
                  height={i % 3 === 1 ? 800 : 533}
                  className="w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MAP
      ══════════════════════════════════════════ */}
      <section className="border-t border-white/[0.06] bg-[#050a14] py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">
            Map
          </p>
          <h2 className="mb-10 font-serif text-3xl font-light text-white md:text-4xl">
            位置指南
          </h2>
          <div
            className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#020810]"
            style={{
              height: 360,
              boxShadow: "0 0 60px -20px rgba(56,189,248,0.08), inset 0 0 0 1px rgba(255,255,255,0.04)",
            }}
          >
            {/* Grid pattern background */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(56,189,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.3) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            {/* Subtle glow center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-sky-500/5 blur-3xl" />
            </div>

            {/* Markers */}
            {MAP_MARKERS.map((m) => (
              <div
                key={m.label}
                className="absolute"
                style={{ left: m.x, top: m.y, transform: "translate(-50%, -50%)" }}
              >
                <div className="flex flex-col items-center gap-1.5">
                  <div className="relative flex h-3 w-3 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-40" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                  </div>
                  <span className="whitespace-nowrap rounded-full border border-sky-400/20 bg-sky-400/10 px-2.5 py-0.5 text-[10px] text-sky-300 backdrop-blur-sm">
                    {m.label}
                  </span>
                </div>
              </div>
            ))}

            {/* Region label */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-zinc-600">
                Nouvelle-Aquitaine · France
              </span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-600">
                44.8° N · 0.6° W
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER NAV
      ══════════════════════════════════════════ */}
      <div className="border-t border-white/[0.06] py-16 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-8 py-3 text-sm text-zinc-300 backdrop-blur-sm transition hover:border-sky-500/30 hover:bg-sky-500/[0.06] hover:text-white"
        >
          <span>←</span>
          <span>返回首頁</span>
        </Link>
      </div>

    </div>
  );
}
