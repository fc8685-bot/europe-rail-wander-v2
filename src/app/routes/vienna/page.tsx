import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vienna 維也納 — 歐洲鐵路旅行",
  description: "帝國、音樂與歐洲鐵道交會之城。ÖBB Railjet 的心臟，文化遺產的最後盛宴。",
};

const MUST_DO = [
  {
    title: "Schönbrunn Palace",
    subtitle: "美泉宮",
    description:
      "哈布斯堡王朝夏宮，1441 個房間、巴洛克式花園與山頂涼亭。搭地鐵 U4 直達，是感受帝國氣派最直接的方式。",
    image: "https://picsum.photos/seed/vn-schoenbrunn/900/600",
    tag: "UNESCO · 帝國遺址",
  },
  {
    title: "Café Central",
    subtitle: "中央咖啡館",
    description:
      "1876 年開業，高聳哥德式拱頂下啜飲 Melange，弗洛伊德與托洛茨基都曾是座上客。是維也納咖啡館文化的精神聖地。",
    image: "https://picsum.photos/seed/vn-cafe-central/900/600",
    tag: "1876 · 世界遺產文化",
  },
  {
    title: "Vienna State Opera",
    subtitle: "維也納國家歌劇院",
    description:
      "全球最負盛名的歌劇院之一，每晚演出幾乎場場爆滿。即使不看演出，也可購買站票感受音樂廳氛圍，或預約後台導覽。",
    image: "https://picsum.photos/seed/vn-opera/900/600",
    tag: "古典音樂 · 必訪",
  },
  {
    title: "Belvedere Palace",
    subtitle: "貝爾維第宮",
    description:
      "兩座巴洛克宮殿之間的法式花園，Upper Belvedere 收藏克林姆名作《吻》原作。黃金時代的維也納精神在這裡凝固。",
    image: "https://picsum.photos/seed/vn-belvedere/900/600",
    tag: "克林姆 · 《吻》",
  },
] as const;

const COFFEE_HOUSES = [
  {
    name: "Café Central",
    founded: "1876",
    description: "維也納最具代表性的咖啡館，哥德式拱廊、大理石柱與紅絲絨座椅。必點 Melange（維也納拿鐵）與蘋果派。",
    specialty: "Melange · Apfelstrudel",
    image: "https://picsum.photos/seed/vn-cc/800/600",
  },
  {
    name: "Demel",
    founded: "1786",
    description: "皇家御用糕點師，位於 Kohlmarkt 皇家購物街。精緻的糕點展示如博物館般，Sachertorte 的正統挑戰者。",
    specialty: "Sachertorte · Violet Sweets",
    image: "https://picsum.photos/seed/vn-demel/800/600",
  },
  {
    name: "Café Sacher",
    founded: "1876",
    description: "Sachertorte 的發源地，Hotel Sacher 附設。深巧克力蛋糕配無糖鮮奶油，是維也納最著名的味覺記憶。",
    specialty: "Original Sachertorte",
    image: "https://picsum.photos/seed/vn-sacher/800/600",
  },
] as const;

const NIGHT_WALK = [
  {
    title: "Ringstrasse 環城大道",
    description: "夜晚點燈的新古典建築群延伸數公里，國家歌劇院、自然史博物館、市政廳一字排開，是歐洲最壯麗的城市步道之一。",
    image: "https://picsum.photos/seed/vn-ring/900/600",
  },
  {
    title: "Naschmarkt 夜市",
    description: "白天是市場，入夜後搖身一變為露天酒吧聚集地。維也納年輕人的聚集地，在此感受這座古典城市的現代脈動。",
    image: "https://picsum.photos/seed/vn-nasch/900/600",
  },
  {
    title: "Prater 摩天輪",
    description: "1897 年建造的維也納摩天輪，夜晚俯瞰整座城市燈火。電影《第三人》的經典場景，旋轉一圈約 20 分鐘。",
    image: "https://picsum.photos/seed/vn-prater/900/600",
  },
] as const;

const FOOD = [
  {
    title: "Wiener Schnitzel",
    description: "維也納炸豬排，麵衣酥脆、肉質柔嫩，是最具代表性的奧地利國民料理。",
    tag: "主食 · 必吃",
    image: "https://picsum.photos/seed/vn-schnitzel/600/600",
  },
  {
    title: "Sachertorte",
    description: "薄薄的杏桃果醬夾層，外層深黑巧克力，配一杯 Melange，是維也納下午茶的靈魂。",
    tag: "甜點 · 經典",
    image: "https://picsum.photos/seed/vn-sachertorte/600/600",
  },
  {
    title: "Apfelstrudel",
    description: "奧地利蘋果卷，酥薄麵皮包裹肉桂蘋果餡，熱騰騰端上桌時淋上香草醬，舒適的甜蜜。",
    tag: "甜點 · 家常",
    image: "https://picsum.photos/seed/vn-strudel/600/600",
  },
  {
    title: "Tafelspitz",
    description: "哈布斯堡皇家水煮牛肉，佐以辣根醬與烤骨髓，是維也納最具歷史感的一道正餐。",
    tag: "主食 · 皇家料理",
    image: "https://picsum.photos/seed/vn-tafelspitz/600/600",
  },
] as const;

const GALLERY = [
  "https://picsum.photos/seed/vn-g1/1200/800",
  "https://picsum.photos/seed/vn-g2/800/1100",
  "https://picsum.photos/seed/vn-g3/900/600",
  "https://picsum.photos/seed/vn-g4/800/1100",
  "https://picsum.photos/seed/vn-g5/1200/800",
  "https://picsum.photos/seed/vn-g6/800/1000",
] as const;

export default function ViennaPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-zinc-100">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <div className="relative h-[520px] overflow-hidden md:h-[640px]">
        <Image
          src="https://picsum.photos/seed/vn-hero/1600/900"
          alt="Vienna"
          fill
          className="object-cover"
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
              Austria · ÖBB · Railjet
            </p>
            <h1 className="font-serif text-5xl font-light leading-none text-white md:text-7xl">
              Vienna
            </h1>
            <p className="mt-2 font-serif text-2xl font-light text-zinc-400">
              維也納
            </p>
            <p className="mt-3 max-w-lg text-base text-zinc-400 md:text-lg">
              帝國、音樂與歐洲鐵道交會之城
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16 md:px-16 md:py-24">

        {/* ══════════════════════════════════════════
            MUST DO
        ══════════════════════════════════════════ */}
        <section className="mb-24">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">
            Must Do
          </p>
          <h2 className="mb-10 font-serif text-3xl font-light text-white md:text-4xl">
            必做體驗
          </h2>
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

        {/* ══════════════════════════════════════════
            COFFEE HOUSES
        ══════════════════════════════════════════ */}
        <section className="mb-24">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">
            Coffee Houses
          </p>
          <h2 className="mb-10 font-serif text-3xl font-light text-white md:text-4xl">
            維也納咖啡館文化
          </h2>
          <div className="space-y-4">
            {COFFEE_HOUSES.map((cafe) => (
              <div
                key={cafe.name}
                className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a1220] transition duration-300 hover:border-sky-500/20"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative aspect-[3/2] overflow-hidden md:aspect-auto md:w-56 md:shrink-0">
                    <Image
                      src={cafe.image}
                      alt={cafe.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 224px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-6">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-serif text-xl text-white">{cafe.name}</h3>
                      <span className="text-xs text-zinc-600">Est. {cafe.founded}</span>
                    </div>
                    <p className="mt-1 text-xs text-sky-400/70">{cafe.specialty}</p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">{cafe.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            RAILJET EXPERIENCE
        ══════════════════════════════════════════ */}
        <section className="mb-24">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">
            Train Experience
          </p>
          <h2 className="mb-10 font-serif text-3xl font-light text-white md:text-4xl">
            Railjet 體驗
          </h2>
          <div className="grid gap-6 md:grid-cols-2">

            {/* Left: Railjet intro */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a1220] p-7">
              <p className="text-[10px] font-medium uppercase tracking-widest text-sky-400/80">ÖBB Flagship</p>
              <h3 className="mt-2 font-serif text-2xl text-white">Railjet</h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                深紅色塗裝的奧地利旗艦列車，最高時速 230 km/h。提供商務艙（Business）、頭等艙（First）與
                二等艙，所有艙等均附有電源插座與 Wi-Fi。
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                從維也納出發，可直達慕尼黑（3h 50m）、薩爾茨堡（2h 30m）、布達佩斯（2h 40m），
                是探索奧地利及鄰近國家的最佳交通工具。
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Wien Hbf", "Salzburg", "Munich", "Budapest"].map((stop) => (
                  <span
                    key={stop}
                    className="rounded-full border border-sky-400/20 bg-sky-400/[0.06] px-3 py-1 text-xs text-sky-300"
                  >
                    {stop}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Vienna Hbf */}
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a1220]">
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/vn-hbf/900/600"
                  alt="Vienna Hauptbahnhof"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1220] to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-white">Wien Hauptbahnhof</h3>
                <p className="mt-0.5 text-xs text-sky-400/70">維也納中央車站</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  2015 年啟用的現代化樞紐，取代舊南站成為維也納最重要的鐵路節點。
                  對角線屋頂設計由建築師 HOK 操刀，連結歐洲東西南北四個方向的國際列車。
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════
            SCHÖNBRUNN
        ══════════════════════════════════════════ */}
        <section className="mb-24">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-14">
            <div className="md:w-1/2">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">
                Imperial Palace
              </p>
              <h2 className="mb-6 font-serif text-3xl font-light text-white md:text-4xl">
                Schönbrunn Palace
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-zinc-400">
                <p>
                  美泉宮是哈布斯堡王朝最重要的夏宮，建於 1696 年，巴洛克式建築群延伸至廣大的法式花園。
                  主建築正黃（Schönbrunn Yellow）的外牆顏色已成為維也納最具辨識度的視覺符號。
                </p>
                <p>
                  山頂的 Gloriette 涼亭可俯瞰整座維也納，花園免費開放，是城市中最大的公共綠地之一。
                  從市中心搭地鐵 U4 僅需 15 分鐘，是每位旅人必訪的第一站。
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["UNESCO 遺址", "U4 直達", "花園免費", "Gloriette 涼亭"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl md:w-1/2">
              <Image
                src="https://picsum.photos/seed/vn-palace-wide/900/650"
                alt="Schönbrunn Palace"
                width={900}
                height={650}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/30 to-transparent" />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            NIGHT WALK
        ══════════════════════════════════════════ */}
        <section className="mb-24">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">
            Night Walk
          </p>
          <h2 className="mb-10 font-serif text-3xl font-light text-white md:text-4xl">
            夜間漫步
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {NIGHT_WALK.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a1220] transition-all duration-500 ease-out hover:scale-[1.02] hover:border-sky-500/20"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1220] via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-medium text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FOOD & DESSERT
        ══════════════════════════════════════════ */}
        <section className="mb-24">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">
            Food &amp; Dessert
          </p>
          <h2 className="mb-10 font-serif text-3xl font-light text-white md:text-4xl">
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
        </section>

        {/* ══════════════════════════════════════════
            GALLERY
        ══════════════════════════════════════════ */}
        <section className="mb-24">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">
            Gallery
          </p>
          <h2 className="mb-10 font-serif text-3xl font-light text-white md:text-4xl">
            影像紀錄
          </h2>
          <div className="columns-2 gap-4 md:columns-3">
            {GALLERY.map((src, i) => (
              <div key={i} className="group relative mb-4 overflow-hidden rounded-xl">
                <Image
                  src={src}
                  alt={`維也納影像 ${i + 1}`}
                  width={600}
                  height={i % 3 === 1 ? 800 : 533}
                  className="w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />
              </div>
            ))}
          </div>
        </section>

        {/* ── Back ── */}
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
