import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hamburg 漢堡 — 歐洲鐵路旅行",
  description: "北德的港口靈魂，倉庫城與易北愛樂廳交織的城市景觀，ICE 直達的歐洲大門。",
};

const QUICK_INFO = [
  { label: "國家", value: "德國" },
  { label: "推薦停留", value: "2–3 天" },
  { label: "最佳季節", value: "5–9 月" },
  { label: "車站", value: "Hamburg Hauptbahnhof" },
  { label: "特色", value: "港口 · 倉庫城 · 音樂廳" },
  { label: "必去", value: "Speicherstadt" },
] as const;

const MUST_DO = [
  {
    title: "Speicherstadt 倉庫城",
    description:
      "UNESCO 世界遺產，19 世紀紅磚倉庫沿運河綿延，現已改建為博物館、設計工作室與咖啡館。黃昏時分水面倒映橘紅色磚牆，是漢堡最迷人的一幕。",
    image: "https://picsum.photos/seed/hh-speicher/900/600",
    tag: "UNESCO · 必訪",
  },
  {
    title: "Elbphilharmonie 易北愛樂廳",
    description:
      "2017 年開幕，由赫爾佐格與德梅隆設計的波浪型玻璃建築聳立於舊倉庫之上，免費登上觀景台可俯瞰整座港口與城市天際線。",
    image: "https://picsum.photos/seed/hh-elphi/900/600",
    tag: "建築 · 音樂廳",
  },
  {
    title: "Hamburg Harbour 漢堡港",
    description:
      "歐洲最繁忙的港口之一，搭 Hadag 港口遊船穿梭巨型貨輪之間，或在 Landungsbrücken 碼頭感受北海的鹹味空氣與海鷗聲響。",
    image: "https://picsum.photos/seed/hh-harbour/900/600",
    tag: "港口 · 遊船",
  },
  {
    title: "Reeperbahn 夜生活區",
    description:
      "聖保利區的不夜城。甲殼蟲樂隊 1960 年代在這裡磨練樂技，如今是漢堡最活躍的酒吧、音樂現場與劇場聚集地，夜晚才是真正的開始。",
    image: "https://picsum.photos/seed/hh-reeperbahn/900/600",
    tag: "夜生活 · 音樂",
  },
] as const;

const TRAINS = [
  {
    name: "ICE 3 / ICE 4",
    route: "漢堡 → 法蘭克福 / 慕尼黑",
    duration: "3h 30m / 5h 50m",
    description:
      "Deutsche Bahn 旗艦高速列車，從漢堡中央車站直達德國各大城市。車廂寬敞，備有餐車與安靜車廂，是德國境內最舒適的移動方式。",
  },
  {
    name: "ICE / EC 跨國列車",
    route: "漢堡 → 哥本哈根",
    duration: "約 4 小時 55 分",
    description:
      "從漢堡出發的國際列車北行至丹麥，穿越渡輪（Fehmarn Belt）或橋梁連接斯堪地那維亞。是整趟歐洲旅程中最具儀式感的越境段落之一。",
  },
  {
    name: "S-Bahn / U-Bahn",
    route: "市內各區交通",
    duration: "視目的地而定",
    description:
      "漢堡市區交通以 S-Bahn 和 U-Bahn 為主，幾乎覆蓋所有景點。Speicherstadt 搭 U3 至 Baumwall，Elbphilharmonie 步行即達。",
  },
] as const;

const FOOD = [
  {
    title: "Fischbrötchen 魚三明治",
    description: "碼頭邊的快速美食，醃鯡魚、醃黃瓜與洋蔥夾在麵包裡，是漢堡最道地的港口風味。",
    tag: "街頭美食 · 必吃",
    image: "https://picsum.photos/seed/hh-fisch/600/600",
  },
  {
    title: "Labskaus",
    description: "源自北海水手的傳統料理，醃牛肉、馬鈴薯與甜菜根混合，頂上一顆荷包蛋，是漢堡最具歷史感的一道主食。",
    tag: "傳統料理",
    image: "https://picsum.photos/seed/hh-labskaus/600/600",
  },
  {
    title: "漢堡市場早餐",
    description: "每週六清晨 Fischmarkt 魚市場開張，現烤麵包、新鮮果汁與海鮮小吃，漢堡人的週末儀式。",
    tag: "早餐 · 週末市集",
    image: "https://picsum.photos/seed/hh-market/600/600",
  },
  {
    title: "港口啤酒花園",
    description: "夏日漢堡港邊的露天啤酒花園，一杯冰涼 Pilsner 配著港口夕陽，是旅程中最放鬆的片刻。",
    tag: "啤酒 · 戶外",
    image: "https://picsum.photos/seed/hh-beer/600/600",
  },
] as const;

const GALLERY = [
  "https://picsum.photos/seed/hh-g1/1200/800",
  "https://picsum.photos/seed/hh-g2/800/1100",
  "https://picsum.photos/seed/hh-g3/900/600",
  "https://picsum.photos/seed/hh-g4/800/1100",
  "https://picsum.photos/seed/hh-g5/1200/800",
  "https://picsum.photos/seed/hh-g6/800/1000",
] as const;

export default function HamburgPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-zinc-100">

      {/* ── Hero ── */}
      <div className="relative h-[520px] overflow-hidden md:h-[640px]">
        <Image
          src="https://picsum.photos/seed/hh-hero/1600/900"
          alt="Hamburg"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/70 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-6 pb-14 md:px-16">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 text-xs text-zinc-500 transition hover:text-zinc-300"
            >
              ← 返回首頁
            </Link>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.45em] text-sky-300/90">
              Germany · ICE · North Sea Gateway
            </p>
            <h1 className="font-serif text-5xl font-light leading-none text-white md:text-7xl">
              Hamburg
            </h1>
            <p className="mt-2 font-serif text-2xl font-light text-zinc-400">
              漢堡
            </p>
            <p className="mt-3 max-w-lg text-base text-zinc-400 md:text-lg">
              北德的港口靈魂，倉庫城與易北愛樂廳交織的城市景觀
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16 md:px-16 md:py-24">

        {/* Quick Info */}
        <section className="mb-20">
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
        </section>

        {/* Must Do */}
        <section className="mb-24">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">Must Do</p>
          <h2 className="mb-10 font-serif text-3xl font-light text-white md:text-4xl">必做體驗</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {MUST_DO.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a1220] transition-all duration-500 ease-out hover:scale-[1.02] hover:border-sky-500/20 hover:shadow-[0_0_40px_-12px_rgba(56,189,248,0.2)]"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1220] via-[#0a1220]/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] text-zinc-300 backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Train Experience */}
        <section className="mb-24">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">Train Experience</p>
          <h2 className="mb-10 font-serif text-3xl font-light text-white md:text-4xl">搭乘體驗</h2>
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
        </section>

        {/* Elbphilharmonie highlight */}
        <section className="mb-24">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-14">
            <div className="md:w-1/2">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">Landmark</p>
              <h2 className="mb-6 font-serif text-3xl font-light text-white md:text-4xl">
                Elbphilharmonie
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-zinc-400">
                <p>
                  漢堡最具代表性的當代建築，由瑞士建築師事務所 Herzog &amp; de Meuron 操刀。
                  波浪狀玻璃外牆疊在百年舊倉庫之上，象徵漢堡新舊並存的城市性格。
                </p>
                <p>
                  觀景台（Plaza）免費開放，360° 視野俯瞰漢堡港、Speicherstadt 與整座城市。
                  每晚的音樂會票價從學生票到高級座位皆有，是感受德國音樂文化最好的場所之一。
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["免費觀景台", "世界級音響", "港口正面", "2017 開幕"].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl md:w-1/2">
              <Image
                src="https://picsum.photos/seed/hh-elphi-wide/900/650"
                alt="Elbphilharmonie"
                width={900}
                height={650}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/30 to-transparent" />
            </div>
          </div>
        </section>

        {/* Food */}
        <section className="mb-24">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">Food &amp; Drink</p>
          <h2 className="mb-10 font-serif text-3xl font-light text-white md:text-4xl">飲食體驗</h2>
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
        </section>

        {/* Gallery */}
        <section className="mb-24">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">Gallery</p>
          <h2 className="mb-10 font-serif text-3xl font-light text-white md:text-4xl">影像紀錄</h2>
          <div className="columns-2 gap-4 md:columns-3">
            {GALLERY.map((src, i) => (
              <div key={i} className="group relative mb-4 overflow-hidden rounded-xl">
                <Image
                  src={src}
                  alt={`漢堡影像 ${i + 1}`}
                  width={600}
                  height={i % 3 === 1 ? 800 : 533}
                  className="w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />
              </div>
            ))}
          </div>
        </section>

        {/* Back */}
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
