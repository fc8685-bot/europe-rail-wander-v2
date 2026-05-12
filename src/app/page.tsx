import Image from "next/image";
import Link from "next/link";
import { HeroVideoBackground } from "@/components/HeroVideoBackground";
import { InteractiveMap } from "@/components/InteractiveMap";

const COUNTRIES = [
  { name: "法國", code: "FR" },
  { name: "奧地利", code: "AT" },
  { name: "德國", code: "DE" },
  { name: "瑞士", code: "CH" },
  { name: "丹麥", code: "DK" },
  { name: "瑞典", code: "SE" },
  { name: "挪威", code: "NO" },
  { name: "英國", code: "GB" },
  { name: "愛爾蘭", code: "IE" },
] as const;

const ROUTES = [
  {
    title: "法德奧主線",
    stops: ["波爾多", "巴黎", "慕尼黑", "維也納"],
    image: "/images/004.jpg",
    href: "/routes/france-austria-germany",
  },
  {
    title: "挪威橫向移動",
    stops: ["奧斯陸", "卑爾根"],
    image: "https://picsum.photos/seed/route-oslo-bergen/1200/900",
    href: "/routes/norway-horizontal",
  },
] as const;

const CITIES = [
  {
    name: "波爾多",
    country: "法國",
    tag: "TGV · 加龍河畔",
    image: "/images/043.jpg",
    href: "/cities/bordeaux",
  },
  {
    name: "維也納",
    country: "奧地利",
    tag: "ÖBB · 皇家鐵路",
    image: "/images/044.jpg",
    href: "/routes/vienna",
  },
  {
    name: "漢堡",
    country: "德國",
    tag: "ICE · 港口城市",
    image: "/images/045.jpg",
    href: "/cities/hamburg",
  },
  {
    name: "愛丁堡",
    country: "蘇格蘭",
    tag: "城堡 · 高地入口",
    image: "/images/046.jpg",
    href: "/cities/edinburgh",
  },
] as const;

const GALLERY = [
  "/images/047.jpg",
  "/images/048.jpg",
  "/images/049.jpg",
  "/images/050.jpg",
  "/images/051.jpg",
  "/images/052.jpg",
] as const;

/** Bordeaux → Dublin 這趟行程的實際統計 */
const JOURNEY_STATS = [
  { item: "Countries", value: "9" },
  { item: "Days", value: "32" },
  { item: "Cities", value: "27" },
  { item: "Trains", value: "32" },
  { item: "Time on Train", value: "68 hrs" },
  { item: "Distance", value: "5,823 km" },
  { item: "Steps", value: "1,000,000+" },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030712] text-zinc-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#030712]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <span className="text-sm font-medium tracking-[0.35em] text-zinc-400">
            EURAIL
          </span>
          <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 md:flex">
            <a href="#routes" className="transition hover:text-zinc-200">
              路線
            </a>
            <a href="#route-map" className="transition hover:text-zinc-200">
              路線圖
            </a>
            <a href="#cities" className="transition hover:text-zinc-200">
              城市
            </a>
            <a href="#pass" className="transition hover:text-zinc-200">
              Rail Pass
            </a>
            <a href="#gallery" className="transition hover:text-zinc-200">
              影像
            </a>
          </nav>
          <a
            href="#pass"
            className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-wide text-zinc-200 transition hover:border-sky-400/40 hover:bg-sky-950/30 hover:text-white"
          >
            規劃行程
          </a>
        </div>
      </header>

      <section className="relative min-h-[100svh] overflow-hidden">
        <HeroVideoBackground />
        <div
          className="absolute inset-0 z-[1] bg-gradient-to-b from-[#030712]/50 via-[#0a1628]/55 to-[#030712]"
          aria-hidden
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#030712]/70 via-transparent to-[#030712]/30" />
        <div className="relative z-[2] flex min-h-[100svh] flex-col justify-end pb-20 pt-32 md:justify-center md:pb-0 md:pt-24">
          <div className="mx-auto w-full max-w-7xl px-6">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.45em] text-sky-300/90">
              European rail journeys
            </p>
            <h1 className="max-w-4xl font-serif text-4xl font-light leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
              歐洲火車旅行
              <span className="mt-2 block text-2xl font-light text-zinc-400 md:text-3xl">
                一場從 Bordeaux 到 Dublin 的鐵路長征
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
              從北歐峡灣到阿爾卑斯山脊，一張車票串起九國脈絡。我們為你整理路線靈感、城市節奏與
              Pass 攻略，讓移動本身成為旅程的高潮。
            </p>
            {/* ── Stats ──────────────────────────────────── */}
            <div className="mt-8 max-w-md rounded-xl border border-white/10 bg-black/25 px-1 py-1 backdrop-blur-md">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">
                  這趟旅程的實際數據：天數、國家數、城市數、列車搭乘次數與步數
                </caption>
                <tbody className="text-zinc-200">
                  {JOURNEY_STATS.map((row) => (
                    <tr
                      key={row.item}
                      className="border-b border-white/[0.06] last:border-0"
                    >
                      <th
                        scope="row"
                        className="px-4 py-2.5 font-normal text-zinc-400"
                      >
                        {row.item}
                      </th>
                      <td className="px-4 py-2.5 text-right font-mono tabular-nums text-white">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ── Countries ──────────────────────────────── */}
            <div className="mt-6 flex flex-wrap gap-3">
              {COUNTRIES.map((c) => (
                <span
                  key={c.code}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs text-zinc-200 backdrop-blur-sm"
                >
                  <span className="font-medium">{c.name}</span>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-500">
                    {c.code}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] to-transparent"
          aria-hidden
        />
      </section>

      <section
        id="routes"
        className="border-t border-white/[0.06] bg-[#050a14] py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">
                Itineraries
              </p>
              <h2 className="mt-3 font-serif text-3xl font-light text-white md:text-4xl">
                我的旅行路線
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-zinc-500">
              三條可混搭的骨架行程，可依季節與票種延伸。點選城市即可在腦中排進你的時刻表。
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {ROUTES.map((route) => (
              <Link
                key={route.title}
                href={route.href}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a1220] transition-colors duration-300 hover:border-sky-500/30 hover:bg-[#0d1829]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={route.image}
                    alt=""
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-white">{route.title}</h3>
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-zinc-400">
                    {route.stops.map((stop, i) => (
                      <span key={`${route.title}-${i}`} className="flex items-center gap-2">
                        {i > 0 && (
                          <span className="text-sky-500/60" aria-hidden>→</span>
                        )}
                        {stop}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-xs font-medium uppercase tracking-widest text-sky-400/70">
                    查看路線 →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="route-map"
        className="border-t border-white/[0.06] bg-[#030712] py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">
              Route map
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-white md:text-4xl">
              歐洲鐵路旅行路線圖
            </h2>
            <p className="mt-4 overflow-x-auto text-xs leading-relaxed text-zinc-500 md:text-sm">
              <span className="inline-block min-w-0 whitespace-nowrap font-mono tracking-tight text-zinc-400 md:whitespace-normal">
                Bordeaux → Vienna → Salzburg → Munich → Hamburg → Copenhagen → Stockholm → Oslo → Bergen → London → Edinburgh → Glasgow → Cork → Galway → Dublin
              </span>
            </p>
          </div>

          {/* ── Map image ── */}
          <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/[0.08]">
            <Image
              src="/route-map.png"
              alt="歐洲鐵路旅行路線圖"
              width={1200}
              height={1320}
              className="w-1/2 block"
              style={{
                filter: "invert(1) brightness(0.65) saturate(0.35) contrast(1.15)",
                opacity: 0.92,
              }}
            />
          </div>

        </div>
      </section>

      <section id="cities" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">
              Curated
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-white md:text-4xl">
              精選城市卡片
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-zinc-500">
              每一站都值得多留一晚——用鐵路切換節奏，在城市與自然之間來回。
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CITIES.map((city: any) => {
              const inner = (
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={city.image}
                    alt={`${city.name}，${city.country}`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-sky-300/90">
                      {city.country}
                    </p>
                    <h3 className="mt-1 font-serif text-2xl text-white">{city.name}</h3>
                    <p className="mt-2 text-xs text-zinc-400">{city.tag}</p>
                  </div>
                </div>
              );
              const baseCls =
                "group overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a1220]";
              const staticCls = `${baseCls} transition hover:border-sky-500/25 hover:shadow-[0_0_40px_-12px_rgba(56,189,248,0.25)]`;
              const linkCls = `${baseCls} cursor-pointer transition-all duration-500 ease-out hover:scale-[1.02] hover:brightness-110 hover:shadow-2xl hover:border-sky-500/25`;
              return city.href ? (
                <Link key={city.name} href={city.href} className={linkCls}>{inner}</Link>
              ) : (
                <article key={city.name} className={staticCls}>{inner}</article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="pass"
        className="border-y border-white/[0.06] bg-gradient-to-br from-[#061018] via-[#0a1628] to-[#030712] py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">
              Eurail / Interrail
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-white md:text-4xl">
              歐洲鐵路 Pass 介紹
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-zinc-400 md:text-base">
              Global Pass 可在多國連續或彈性天數內搭乘參與鐵路公司的大部分列車；熱門景觀線與夜車通常需額外訂位費。建議先鎖定「必搭」路段，再回推天數與是否升等頭等，讓預算花在風景最好的窗邊座。
            </p>
            <ul className="mt-8 space-y-4 text-sm text-zinc-400">
              <li className="flex gap-3 border-l border-sky-500/30 pl-4">
                <span className="text-zinc-500">01</span>
                <span>彈性天數適合城市深度；連續天數適合跨國長距移動。</span>
              </li>
              <li className="flex gap-3 border-l border-sky-500/30 pl-4">
                <span className="text-zinc-500">02</span>
                <span>法、德、奧、北歐與英愛路網密度高，搭配區間快車最省時。</span>
              </li>
              <li className="flex gap-3 border-l border-sky-500/30 pl-4">
                <span className="text-zinc-500">03</span>
                <span>旺季務必提早訂位；部分私鐵不在 Pass 範圍內，需單獨購票。</span>
              </li>
            </ul>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div
              className="absolute -inset-4 rounded-3xl bg-sky-500/10 blur-2xl"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0f172a] to-[#020617] p-8 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                  Global Pass
                </span>
                <span className="rounded bg-sky-500/20 px-2 py-0.5 text-[10px] text-sky-300">
                  1st class
                </span>
              </div>
              <div className="mt-8 space-y-3 font-mono text-xs text-zinc-500">
                <div className="flex justify-between text-zinc-400">
                  <span>VALID</span>
                  <span className="text-emerald-400/90">● 啟用後 2 個月內任選 15 天</span>
                </div>
                <div className="flex justify-between">
                  <span>COUNTRIES</span>
                  <span className="text-white">9</span>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-4 gap-2">
                {COUNTRIES.map((c) => (
                  <div
                    key={c.code}
                    className="rounded-lg border border-white/5 bg-white/[0.03] px-1 py-3 text-center text-xs font-medium leading-snug text-zinc-200"
                  >
                    {c.name}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-center text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                Not for resale — illustrative layout
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-sky-400/80">
                Moments
              </p>
              <h2 className="mt-3 font-serif text-3xl font-light text-white md:text-4xl">
                精選美食區
              </h2>
            </div>
            <ul className="max-w-sm space-y-1 text-sm text-zinc-500">
              <li>北歐：重奶油、海鮮、黑麥麵包</li>
              <li>中歐：香腸、炸物、啤酒文化</li>
              <li>南歐：橄欖油、海鮮、慢食文化</li>
            </ul>
          </div>
          <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {GALLERY.map((src, i) => (
              <figure
                key={src}
                className={`relative mb-4 aspect-[4/5] w-full break-inside-avoid overflow-hidden rounded-xl border border-white/[0.06] ${
                  i % 3 === 1 ? "lg:mt-8" : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`歐洲鐵路旅行影像 ${i + 1}`}
                  fill
                  className="object-cover transition duration-500 hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.06] bg-[#020617] py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-medium tracking-[0.35em] text-zinc-500">EURAIL</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-600">
              歐洲鐵路旅行靈感與工具。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                探索
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="#routes" className="hover:text-white">
                    路線
                  </a>
                </li>
                <li>
                  <a href="#route-map" className="hover:text-white">
                    路線圖
                  </a>
                </li>
                <li>
                  <a href="#cities" className="hover:text-white">
                    城市
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-white">
                    影像
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                涵蓋國家
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                {COUNTRIES.map((c) => (
                  <li key={c.code}>{c.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                聯絡
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="mailto:hello@example.com" className="hover:text-white">
                    hello@example.com
                  </a>
                </li>
                <li className="text-zinc-600">© {new Date().getFullYear()}</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
