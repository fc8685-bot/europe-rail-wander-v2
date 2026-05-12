import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { TrainCardWithVideo } from "@/components/TrainCardWithVideo";
import { GalleryLightbox } from "@/components/GalleryLightbox";

export const metadata: Metadata = {
  title: "挪威橫向移動 — 歐洲鐵路旅行",
  description: "從奧斯陸出發，橫越挪威腹地，抵達卑爾根的世界級鐵路路線。",
};

const CITIES = [
  {
    name: "奧斯陸",
    country: "挪威",
    description: "",
    highlights: [
      { title: "Oslo 是挪威首都", text: "城市很乾淨、安靜，融合北歐現代建築、海港與森林，自然感很強。" },
      { title: "最值得看的景點集中在海邊", text: "像是歌劇院、港灣步道、蒙克美術館與阿克斯胡斯城堡，很多地方可以直接步行。" },
      { title: "很適合當「挪威鐵路旅行起點」", text: "你之後搭 Bergen Railway 前往卑爾根時，會從這裡出發，一路進入挪威高山與峽灣地帶。" },
    ],
    tag: "NSB · 北歐設計之都",
    image: "/images/027.jpg",
  },
  {
    name: "Myrdal",
    country: "挪威",
    description: "",
    highlights: [
      { title: "Myrdal 是高山鐵路轉乘站", text: "位於奧斯陸－卑爾根主線上，很多人會在這裡轉乘著名的 Flåm Railway。" },
      { title: "這裡幾乎只有車站與山景", text: "海拔約 860 公尺，周圍是雪山、高原與瀑布，非常有「挪威荒野感」。" },
      { title: "Flåm Railway 最精彩的一段從這裡開始", text: "火車會從高山一路急降到峽灣小鎮 Flåm，沿途瀑布與峽谷景色非常震撼。" },
    ],
    tag: "高山驛站 · 860m",
    image: "/images/028.jpg",
  },
  {
    name: "Voss",
    country: "挪威",
    description: "",
    highlights: [
      { title: "Voss 是卑爾根鐵路上的山岳小鎮", text: "很多旅客會在這裡轉乘巴士，接續「挪威縮影 Norway in a Nutshell」峽灣路線。" },
      { title: "車站旁就是 Voss Gondol 纜車", text: "幾分鐘就能登上海拔高處，看湖泊、雪山與森林，全景非常漂亮。" },
      { title: "這裡是挪威戶外活動重鎮", text: "夏天有健行、泛舟、跳傘；冬天則是滑雪聖地，因此氣氛比一般小鎮更熱鬧。" },
    ],
    tag: "挪威的「戶外運動之都」",
    image: "/images/029.jpg",
  },
  {
    name: "卑爾根",
    country: "挪威",
    description: "",
    highlights: [
      { title: "Bergen 是挪威最有名的峽灣城市", text: "四周被山與海包圍，也是前往松恩峽灣等挪威峽灣的重要入口。" },
      { title: "最經典景點是「布呂根 Bryggen」彩色木屋", text: "這片漢薩同盟時代木造建築是世界遺產，也是卑爾根代表風景。" },
      { title: "一定要搭 Fløibanen 登山纜車", text: "幾分鐘直上山頂，可以俯瞰整個港灣、彩色木屋與峽灣地形，是卑爾根最經典視角。" },
    ],
    tag: "UNESCO · 峽灣之都",
    image: "/images/030.jpg",
  },
] as const;

const ITINERARY = [
  {
    dep: "08:25",
    depStation: "Oslo S",
    depDetail: "Platform 4",
    train: "REG 63 · REG Regiontog",
    direction: "Direction Bergen",
    arr: "15:00",
    arrStation: "Bergen",
    arrDetail: "Platform 3",
    duration: "6h 35m",
  },
] as const;

const SCENERY = [
  {
    title: "挪威高原雪景",
    description: "貝爾根線穿越挪威高地時，冬季白雪覆蓋整片荒野，車窗外是純粹的北歐極地景象，夏季則是遼闊的苔原與湖泊。",
    image: "/images/033.jpg",
  },
  {
    title: "哈當厄爾峽灣",
    description: "列車在卑爾根近郊沿峽灣邊行駛，峽灣水面倒映兩岸山壁，這是只有搭火車才能欣賞到的角度。",
    image: "/images/034.jpg",
  },
  {
    title: "Myrdal 高山轉乘站",
    description: "海拔 867 公尺的轉乘站，站在月台上即可感受高山稀薄的空氣，遠方雪峰與鐵軌交織成北歐特有的壯麗圖景。",
    image: "/images/035.jpg",
  },
  {
    title: "Finse 高原車站",
    description: "卑爾根鐵路海拔最高的車站，海拔 1222m，四周只有雪原與荒野，是挪威最具代表性的高山鐵路景色。",
    image: "/images/035.jpg",
  },
] as const;

const GALLERY = [
  "/images/036.jpg",
  "/images/037.jpg",
  "/images/038.jpg",
  "/images/039.jpg",
  "/images/040.jpg",
  "/images/041.jpg",
  "/images/042.jpg",
] as const;

export default function NorwayHorizontalPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-zinc-100">

      {/* ── Hero ─────────────────────────────────── */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/026.jpg"
          alt="挪威橫向移動"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/60 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 md:px-16">
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.45em] text-sky-300/90">
              Route 02 · Norway · Bergen Railway
            </p>
            <h1 className="font-serif text-4xl font-light leading-tight text-white md:text-6xl">
              挪威橫向移動
            </h1>
            <p className="mt-3 text-zinc-400">
              奧斯陸 → 芬瑟 → Myrdal → Voss → 卑爾根
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
              挪威橫向移動是整趟旅程中最令人屏息的段落。從首都奧斯陸出發，搭乘貝爾根線橫越斯堪地那維亞半島，
              穿越挪威高原、哈當厄爾高地與峽灣地帶，最終抵達西岸的卑爾根。
            </p>
            <p>
              最精彩路段是高山區，尤其接近 Finse 一帶，海拔超過 1200 公尺，很多人專門為了窗外風景而搭這班車。
            </p>
          </div>
        </section>

        {/* 行經城市 */}
        <section className="mb-20">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">
            Cities
          </p>
          <h2 className="mb-8 font-serif text-3xl font-light text-white">行經城市</h2>
          <div className="grid gap-6 md:grid-cols-2">
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
                    sizes="(max-width: 768px) 100vw, 50vw"
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
                  {"highlights" in city && city.highlights ? (
                    <ul className="mt-3 space-y-3">
                      {city.highlights.map((h) => (
                        <li key={h.title}>
                          <span className="text-xs font-medium text-zinc-200">{h.title}</span>
                          <p className="mt-0.5 text-sm leading-relaxed text-zinc-400">{h.text}</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">{city.description}</p>
                  )}
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
          <div className="space-y-2">
            {ITINERARY.map((seg, i) => (
              <TrainCardWithVideo
                key={i}
                dep={seg.dep}
                depStation={seg.depStation}
                depDetail={seg.depDetail}
                train={seg.train}
                direction={seg.direction}
                arr={seg.arr}
                arrStation={seg.arrStation}
                arrDetail={seg.arrDetail}
                duration={seg.duration}
                imageSrc="/images/032.jpg"
              />
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
          <GalleryLightbox images={GALLERY} />
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
