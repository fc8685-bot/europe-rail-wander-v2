import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "挪威縮影 — 歐洲鐵路旅行",
  description: "集合弗萊姆鐵路、峽灣渡輪與高山巴士的挪威精華一日環線。",
};

const CITIES = [
  {
    name: "弗洛姆",
    country: "挪威",
    description: "松恩峽灣最深處的小鎮，四面環山，弗萊姆山岳鐵路的起訖站。夏天充滿來自世界各地的旅人，峽灣郵輪從這裡出發。",
    tag: "峽灣入口 · Flåm Railway",
    image: "https://picsum.photos/seed/ns-city-flam/900/600",
  },
  {
    name: "Myrdal",
    country: "挪威",
    description: "海拔 867 公尺的高山中繼站，是貝爾根線與弗萊姆鐵路的交會點。在此換乘可感受兩種截然不同的挪威風景。",
    tag: "867m · 貝爾根線轉乘",
    image: "https://picsum.photos/seed/ns-city-myrdal/900/600",
  },
  {
    name: "Gudvangen",
    country: "挪威",
    description: "納勒菲峽灣深處的小村，峽灣渡輪的終點站之一。古老的維京市集在夏季重現，峽灣兩岸壁立千仞。",
    tag: "Nærøyfjord · 維京市集",
    image: "https://picsum.photos/seed/ns-city-gudvangen/900/600",
  },
] as const;

const TRAINS = [
  {
    name: "Flåm Railway（弗萊姆山岳鐵路）",
    route: "弗洛姆 → Myrdal",
    description: "全球坡度最陡的標準軌黏著鐵路之一，20 公里路程爬升 863 公尺。沿途穿越 20 個隧道，途中停靠 Kjosfossen 瀑布讓旅客下車拍攝。列車本身是這條路線最大的主角。",
    duration: "約 1 小時",
  },
] as const;

const SCENERY = [
  {
    title: "松恩峽灣（Sognefjord）",
    description: "全歐洲最長、最深的峽灣，全長 204 公里，深達 1308 公尺。搭乘峽灣渡輪穿梭其中，兩岸峭壁與瀑布構成北歐最震撼的自然奇景。",
    image: "https://picsum.photos/seed/ns-scenery-sognefjord/900/600",
  },
  {
    title: "Kjosfossen 瀑布停靠",
    description: "弗萊姆鐵路唯一的中途停靠景點，列車在此駐留數分鐘。水量龐大的瀑布直瀉而下，夏季傍晚時分甚至有服裝表演，令人難忘。",
    image: "https://picsum.photos/seed/ns-scenery-kjosfossen/900/600",
  },
  {
    title: "納勒菲峽灣（Nærøyfjord）",
    description: "松恩峽灣的支流，UNESCO 世界遺產。峽灣最窄處僅 250 公尺，兩岸山壁高達 1700 公尺，渡輪緩緩穿行其中宛如置身地圖之外的秘境。",
    image: "https://picsum.photos/seed/ns-scenery-naeroyfjord/900/600",
  },
  {
    title: "高山巴士俯瞰",
    description: "環線最後一段是從 Gudvangen 搭高山巴士蜿蜒而上，盤山公路俯瞰整個峽灣體系，雲霧繚繞時有如仙境。",
    image: "https://picsum.photos/seed/ns-scenery-stalheim/900/600",
  },
] as const;

const GALLERY = [
  "https://picsum.photos/seed/ns-gallery-1/1200/800",
  "https://picsum.photos/seed/ns-gallery-2/800/1200",
  "https://picsum.photos/seed/ns-gallery-3/1200/800",
  "https://picsum.photos/seed/ns-gallery-4/800/1200",
  "https://picsum.photos/seed/ns-gallery-5/1200/800",
  "https://picsum.photos/seed/ns-gallery-6/800/1200",
] as const;

export default function NorwayNutshellPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-zinc-100">

      {/* ── Hero ─────────────────────────────────── */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://picsum.photos/seed/ns-hero/1600/900"
          alt="挪威縮影"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/60 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 md:px-16">
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.45em] text-sky-300/90">
              Route 03 · Norway in a Nutshell
            </p>
            <h1 className="font-serif text-4xl font-light leading-tight text-white md:text-6xl">
              挪威縮影
            </h1>
            <p className="mt-3 text-zinc-400">
              弗洛姆 → Myrdal → 峽灣渡輪 → Gudvangen
            </p>
          </div>
        </div>
      </div>

      {/* ── Main content ─────────────────────────── */}
      <div className="mx-auto max-w-5xl px-6 py-16 md:px-16 md:py-24">

        {/* 路線介紹 */}
        <section className="mb-20">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">
            Route Overview
          </p>
          <h2 className="mb-6 font-serif text-3xl font-light text-white">路線介紹</h2>
          <div className="max-w-2xl space-y-4 text-base leading-relaxed text-zinc-400">
            <p>
              「挪威縮影」是挪威最著名的精華環線行程，將弗萊姆山岳鐵路、松恩峽灣渡輪、
              納勒菲峽灣與高山巴士串聯成一個緊湊而壯觀的循環。
            </p>
            <p>
              從弗洛姆搭乘弗萊姆鐵路攀升至高山站 Myrdal，接著換乘貝爾根線繼續旅程，
              或反向搭渡輪穿越 UNESCO 世界遺產納勒菲峽灣，最後由高山巴士蜿蜒下山收尾。
            </p>
            <p>
              這條路線適合一天內完成，也可拆成兩天慢慢品味峽灣的靜謐。是整趟歐洲旅程中
              最難忘的自然景觀片段。
            </p>
          </div>
        </section>

        {/* 行經城市 */}
        <section className="mb-20">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">
            Cities
          </p>
          <h2 className="mb-8 font-serif text-3xl font-light text-white">行經城市</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {CITIES.map((city, i) => (
              <div
                key={city.name}
                className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a1220]"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1220] via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs text-sky-300 backdrop-blur-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-xl text-white">{city.name}</h3>
                    <span className="text-xs text-zinc-500">{city.country}</span>
                  </div>
                  <p className="mt-1 text-xs text-sky-400/70">{city.tag}</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{city.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 必搭火車 */}
        <section className="mb-20">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">
            Must-Ride Trains
          </p>
          <h2 className="mb-8 font-serif text-3xl font-light text-white">必搭火車</h2>
          <div className="space-y-4">
            {TRAINS.map((train) => (
              <div
                key={train.name}
                className="rounded-2xl border border-white/[0.08] bg-[#0a1220] p-6"
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
        </section>

        {/* 風景亮點 */}
        <section className="mb-20">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">
            Scenery
          </p>
          <h2 className="mb-8 font-serif text-3xl font-light text-white">風景亮點</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {SCENERY.map((s) => (
              <div
                key={s.title}
                className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a1220]"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-medium text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 圖片區塊 */}
        <section className="mb-20">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">
            Gallery
          </p>
          <h2 className="mb-8 font-serif text-3xl font-light text-white">圖片區塊</h2>
          <div className="columns-2 gap-4 md:columns-3">
            {GALLERY.map((src, i) => (
              <div key={i} className="mb-4 overflow-hidden rounded-xl">
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
        </section>

        {/* 返回首頁 */}
        <div className="border-t border-white/[0.06] pt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-8 py-3 text-sm text-zinc-300 backdrop-blur-sm transition hover:border-sky-500/30 hover:bg-sky-500/[0.06] hover:text-white"
          >
            <span>←</span>
            <span>返回首頁</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
