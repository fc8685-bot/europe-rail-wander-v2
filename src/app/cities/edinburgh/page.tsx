import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edinburgh 愛丁堡 — 歐洲鐵路旅行",
  description: "城堡與高地的交會點，石砌古城與威士忌文化構成蘇格蘭最令人難忘的城市景觀。",
};

const QUICK_INFO = [
  { label: "國家", value: "蘇格蘭 / 英國" },
  { label: "推薦停留", value: "2–3 天" },
  { label: "最佳季節", value: "6–9 月" },
  { label: "車站", value: "Edinburgh Waverley" },
  { label: "特色", value: "城堡 · 威士忌 · 高地" },
  { label: "必去", value: "Arthur's Seat" },
] as const;

const MUST_DO = [
  {
    title: "Edinburgh Castle",
    subtitle: "愛丁堡城堡",
    description:
      "聳立於火山岩之上，俯瞰整座城市。城堡內收藏蘇格蘭王冠珠寶與 Mons Meg 中世紀大砲，每日一點鐘的禮炮聲是城市最古老的儀式。",
    image: "https://picsum.photos/seed/ed-castle/900/600",
    tag: "UNESCO · 必訪",
  },
  {
    title: "Arthur's Seat",
    subtitle: "亞瑟王座山",
    description:
      "市區內的死火山，海拔 251 公尺，步行約 45 分鐘可登頂。站在山頂俯瞰整座愛丁堡、福斯灣與遠處高地輪廓，是這座城市最野性的體驗。",
    image: "https://picsum.photos/seed/ed-arthurs/900/600",
    tag: "健行 · 城市制高點",
  },
  {
    title: "Royal Mile",
    subtitle: "皇家一英里大道",
    description:
      "從城堡延伸至荷里路德宮的石板大道，兩側是百年威士忌店、傳統蘇格蘭商鋪與隱藏小巷（Close）。每個轉角都藏著一段歷史。",
    image: "https://picsum.photos/seed/ed-royalmile/900/600",
    tag: "歷史大道 · 步行",
  },
  {
    title: "Holyrood Palace",
    subtitle: "荷里路德宮",
    description:
      "英國王室在蘇格蘭的正式居所，瑪麗女王的故居。宮殿緊鄰 Holyrood Park，是徒步 Arthur's Seat 的完美起點。",
    image: "https://picsum.photos/seed/ed-holyrood/900/600",
    tag: "王室宮殿",
  },
] as const;

const TRAINS = [
  {
    name: "LNER Azuma",
    route: "愛丁堡 Waverley → 倫敦 King's Cross",
    duration: "約 4 小時 20 分",
    description:
      "英國東海岸主線的旗艦列車，日立製造的 Class 800 型。沿途穿越英格蘭東岸，景色壯觀。是連結蘇格蘭與倫敦最快速的陸路方式。",
  },
  {
    name: "ScotRail",
    route: "愛丁堡 → 格拉斯哥 / 高地",
    duration: "50 分鐘 / 視目的地",
    description:
      "蘇格蘭境內鐵路網絡，連結愛丁堡、格拉斯哥、因佛內斯與西高地。西高地線（West Highland Line）被 Wanderlust 評為全球最美鐵路之一。",
  },
  {
    name: "Caledonian Sleeper",
    route: "倫敦 Euston → 愛丁堡（夜行）",
    duration: "約 9 小時（夜間）",
    description:
      "英國最具儀式感的夜行列車，在倫敦上車入睡，清晨抵達蘇格蘭。私人臥鋪包廂、餐車服務，是旅程中最具電影感的段落。",
  },
] as const;

const WHISKY = [
  { name: "The Scotch Whisky Experience", note: "皇家一英里入口，含品飲體驗" },
  { name: "Johnnie Walker Princes Street", note: "品牌旗艦體驗館，8 樓觀景吧" },
  { name: "The Bow Bar", note: "Old Town 百年酒吧，逾 300 款蘇格蘭威士忌" },
  { name: "Cadenhead's Whisky Shop", note: "1842 年創立，最老的獨立裝瓶商" },
] as const;

const FOOD = [
  {
    title: "Haggis",
    description: "羊雜燕麥腸，蘇格蘭國民料理。加上蕪菁泥與馬鈴薯泥的「Haggis, Neeps & Tatties」是最道地的一餐。",
    tag: "傳統料理 · 必吃",
    image: "https://picsum.photos/seed/ed-haggis/600/600",
  },
  {
    title: "Scottish Breakfast",
    description: "培根、香腸、黑布丁、烤番茄、蘑菇與炸麵包，份量驚人，是高地健行前最好的熱量補給。",
    tag: "早餐 · 豐盛",
    image: "https://picsum.photos/seed/ed-breakfast/600/600",
  },
  {
    title: "Fish & Chips",
    description: "蘇格蘭式炸魚薯條，份量比英格蘭版更大，常以新鮮北海鱈魚製作，配上麥芽醋是最正統的吃法。",
    tag: "街頭美食",
    image: "https://picsum.photos/seed/ed-fishnchips/600/600",
  },
  {
    title: "Cranachan",
    description: "蘇格蘭傳統甜點，燕麥、鮮奶油、覆盆子與威士忌的組合。季節限定，夏末最好。",
    tag: "甜點 · 季節限定",
    image: "https://picsum.photos/seed/ed-cranachan/600/600",
  },
] as const;

const GALLERY = [
  "https://picsum.photos/seed/ed-g1/1200/800",
  "https://picsum.photos/seed/ed-g2/800/1100",
  "https://picsum.photos/seed/ed-g3/900/600",
  "https://picsum.photos/seed/ed-g4/800/1100",
  "https://picsum.photos/seed/ed-g5/1200/800",
  "https://picsum.photos/seed/ed-g6/800/1000",
] as const;

export default function EdinburghPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-zinc-100">

      {/* ── Hero ── */}
      <div className="relative h-[520px] overflow-hidden md:h-[640px]">
        <Image
          src="https://picsum.photos/seed/ed-hero/1600/900"
          alt="Edinburgh"
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
              Scotland · LNER · Caledonian Sleeper
            </p>
            <h1 className="font-serif text-5xl font-light leading-none text-white md:text-7xl">
              Edinburgh
            </h1>
            <p className="mt-2 font-serif text-2xl font-light text-zinc-400">
              愛丁堡
            </p>
            <p className="mt-3 max-w-lg text-base text-zinc-400 md:text-lg">
              城堡與高地的交會點，石砌古城的永恆輪廓
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16 md:px-16 md:py-24">

        {/* Quick Info */}
        <section className="mb-20">
          <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">Quick Info</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {QUICK_INFO.map((info) => (
              <div key={info.label} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
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
                  <p className="text-xs text-sky-400/70">{item.subtitle}</p>
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

        {/* Whisky */}
        <section className="mb-24">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-14">
            <div className="md:w-1/2">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">Whisky Culture</p>
              <h2 className="mb-6 font-serif text-3xl font-light text-white md:text-4xl">蘇格蘭威士忌</h2>
              <div className="space-y-4 text-sm leading-relaxed text-zinc-400">
                <p>
                  蘇格蘭是單一麥芽威士忌的發源地，五大產區各有獨特風土：Speyside 的花果香氣、
                  Islay 的泥煤煙燻、Highlands 的厚重複雜，都在愛丁堡的酒吧裡可以一一品味。
                </p>
                <p>
                  Royal Mile 沿途有多家威士忌專賣店與體驗中心，從入門到珍稀年份一應俱全。
                  傍晚在 The Bow Bar 與當地人並排而坐，讓調酒師推薦一杯，是最真實的蘇格蘭體驗。
                </p>
              </div>
              <div className="mt-6 space-y-2">
                {WHISKY.map((w) => (
                  <div key={w.name} className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/60" />
                    <div>
                      <p className="text-sm text-zinc-200">{w.name}</p>
                      <p className="text-xs text-zinc-500">{w.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl md:w-1/2">
              <Image
                src="https://picsum.photos/seed/ed-whisky-wide/900/650"
                alt="Scottish Whisky"
                width={900}
                height={650}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/40 to-transparent" />
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
                  alt={`愛丁堡影像 ${i + 1}`}
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
