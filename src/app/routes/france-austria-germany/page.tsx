import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { TrainCardWithVideo } from "@/components/TrainCardWithVideo";
import { GalleryLightbox } from "@/components/GalleryLightbox";

export const metadata: Metadata = {
  title: "法德奧主線 — 歐洲鐵路旅行",
  description: "從波爾多出發，穿越巴黎、慕尼黑，抵達維也納的經典歐洲鐵路路線。",
};

const CITIES = [
  {
    name: "波爾多",
    country: "法國",
    description: "",
    highlights: [
      { title: "葡萄酒之都", text: "世界最有名的紅酒產區之一，周圍有超多酒莊與葡萄園，像是聖愛美濃（Saint-Émilion）很受歡迎。這裡不只是喝酒，還能參觀地下教堂、酒窖與葡萄園列車。" },
      { title: "超漂亮的 18 世紀城市", text: "老城區被列為 UNESCO 世界遺產，最經典的是水之鏡（Miroir d'eau）與交易廣場（Place de la Bourse），晚上倒影非常有名。" },
      { title: "很適合慢慢生活", text: "電車系統方便、河岸步道舒服，咖啡廳與甜點店很多。法國人會在加龍河旁散步、喝酒、曬太陽，整體氣氛比巴黎悠閒很多。" },
    ],
    tag: "TGV · 葡萄酒產區",
    image: "/images/005.JPG",
  },
  {
    name: "巴黎",
    country: "法國",
    description: "",
    highlights: [
      { title: "世界級博物館與藝術", text: "有 Louvre Museum、Musée d'Orsay 等超強美術館，可以直接看到《蒙娜麗莎》、《自由引導人民》等名作。" },
      { title: "經典歐洲城市景觀", text: "Eiffel Tower、香榭麗舍大道、塞納河夜景幾乎都是「法國」代表畫面，晚上散步非常有氣氛。" },
      { title: "咖啡館與日常生活文化", text: "巴黎人很愛坐露天咖啡座，一杯咖啡坐很久。比起趕行程，巴黎更適合慢慢逛街、看建築、吃甜點與觀察城市生活。" },
    ],
    tag: "ICE · TGV · Eurostar",
    image: "/images/006.JPG",
  },
  {
    name: "慕尼黑",
    country: "德國",
    description: "",
    highlights: [
      { title: "啤酒與巴伐利亞文化", text: "慕尼黑是德國啤酒文化代表城市，啤酒花園超有氣氛，Oktoberfest 更是世界最大啤酒節。" },
      { title: "科技與汽車迷天堂", text: "BMW Welt 和 BMW Museum 非常值得看，可以直接看到 BMW 新車、概念車與品牌歷史。" },
      { title: "很適合當南德旅行基地", text: "從慕尼黑很容易前往新天鵝堡、阿爾卑斯山與奧地利，火車交通方便，城市本身也比柏林乾淨整齊很多。" },
    ],
    tag: "ICE · DB · 阿爾卑斯門戶",
    image: "/images/007.JPG",
  },
  {
    name: "維也納",
    country: "奧地利",
    description: "",
    highlights: [
      { title: "音樂之都", text: "Vienna State Opera、金色大廳與大量古典音樂演出都在這裡，莫札特、貝多芬、舒伯特都和維也納有深厚關聯。" },
      { title: "皇宮與哈布斯堡帝國氣氛", text: "Schönbrunn Palace 和霍夫堡皇宮非常壯觀，可以直接感受到以前奧匈帝國的規模與華麗感。" },
      { title: "咖啡館文化超強", text: "維也納咖啡館很有名，很多店像藝術沙龍一樣，可以慢慢坐著吃蛋糕、看報紙。蘋果派、Sachertorte 與維也納咖啡都很經典。" },
    ],
    tag: "ÖBB · 皇家鐵路",
    image: "/images/008.jpg",
  },
] as const;

const ITINERARY: (
  | { type: "train"; dep: string; depStation: string; train: string; arr: string; arrStation: string; duration: string }
  | { type: "transfer"; duration: string; station: string }
)[] = [
  { type: "train", dep: "07:45", depStation: "Bordeaux St-Jean", train: "TGV 8404 · TGV INOUI", arr: "10:00", arrStation: "Paris Montparnasse", duration: "2h 15m" },
  { type: "transfer", duration: "50 分鐘轉乘", station: "Paris" },
  { type: "train", dep: "11:07", depStation: "Paris Est", train: "ICE 9591", arr: "13:51", arrStation: "Karlsruhe Hbf", duration: "2h 44m" },
  { type: "train", dep: "14:32", depStation: "Karlsruhe Hbf", train: "RE 19019", arr: "15:49", arrStation: "Stuttgart Hbf", duration: "1h 17m" },
  { type: "transfer", duration: "10 分鐘轉乘", station: "Stuttgart Hbf" },
  { type: "train", dep: "15:59", depStation: "Stuttgart Hbf", train: "ICE 1095", arr: "18:10", arrStation: "München Hbf", duration: "2h 11m" },
  { type: "transfer", duration: "25 分鐘轉乘", station: "München Hbf" },
  { type: "train", dep: "18:35", depStation: "München Hbf", train: "IC 416", arr: "23:09", arrStation: "Wien Meidling", duration: "4h 34m" },
];

const SCENERY = [
  {
    title: "加龍河畔",
    description: "波爾多舊城區沿河漫步，黃昏時分石灰岩建築染上金色，是路線啟程前的完美序曲。",
    image: "/images/014.JPG",
  },
  {
    title: "萊茵河谷",
    description: "ICE 列車從法德邊境切入萊茵河谷，葡萄園梯田與古堡點綴兩岸，是全歐洲最美的鐵路景觀之一。",
    image: "/images/015.JPG",
  },
  {
    title: "巴伐利亞丘陵",
    description: "進入德國南部後，窗外從平原轉為緩丘，針葉林與農莊交錯，遠方已可見阿爾卑斯山輪廓。",
    image: "/images/016.JPG",
  },
  {
    title: "薩爾茨堡近郊",
    description: "Intercity 越過邊境後短暫停靠薩爾茨堡，這座莫扎特故鄉在陽光下格外明媚。",
    image: "/images/017.JPG",
  },
] as const;

const GALLERY = [
  "/images/018.JPG",
  "/images/019.JPG",
  "/images/020.JPG",
  "/images/021.JPG",
  "/images/022.JPG",
  "/images/023.JPG",
  "/images/025.JPG",
] as const;

export default function FranceAustriaGermanyPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-zinc-100">

      {/* ── Hero ─────────────────────────────────── */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/003.jpg"
          alt="法德奧主線"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/60 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 md:px-16">
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.45em] text-sky-300/90">
              Route 01 · France · Germany · Austria
            </p>
            <h1 className="font-serif text-4xl font-light leading-tight text-white md:text-6xl">
              法德奧主線
            </h1>
            <p className="mt-3 text-zinc-400">
              波爾多 → 巴黎 → 慕尼黑 → 維也納
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
              這條路線是整趟歐洲旅程的骨幹。從法國大西洋岸的波爾多啟程，搭 TGV 飛速穿越法國腹地抵達巴黎，
              再轉乘 ICE 高速列車越過萊茵河谷進入德國，最後由電力機車頭牽引 Intercity 車廂帶你抵達維也納。
            </p>
            <p>
              三段火車、三個國家、三種語言，串起了西歐最核心的鐵路脈絡。每一段都有截然不同的窗外風景，
              從葡萄酒莊到阿爾卑斯山麓，法國西部的平原，德國南部的草原，這是一條讓你愛上坐火車的路線。
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
            {ITINERARY.map((seg, i) =>
              seg.type === "transfer" ? (
                <div key={i} className="flex items-center gap-3 px-2 py-1">
                  <div className="flex w-16 shrink-0 justify-center">
                    <div className="h-6 w-px bg-white/10" />
                  </div>
                  <span className="text-xs text-zinc-500">{seg.duration}</span>
                </div>
              ) : i === 0 ? (
                <TrainCardWithVideo
                  key={i}
                  dep={seg.dep}
                  depStation={seg.depStation}
                  train={seg.train}
                  arr={seg.arr}
                  arrStation={seg.arrStation}
                  duration={seg.duration}
                  imageSrc="/images/009.JPG"
                />
              ) : i === 2 ? (
                <TrainCardWithVideo
                  key={i}
                  dep={seg.dep}
                  depStation={seg.depStation}
                  train={seg.train}
                  arr={seg.arr}
                  arrStation={seg.arrStation}
                  duration={seg.duration}
                  imageSrc="/images/010.JPG"
                />
              ) : i === 3 ? (
                <TrainCardWithVideo
                  key={i}
                  dep={seg.dep}
                  depStation={seg.depStation}
                  train={seg.train}
                  arr={seg.arr}
                  arrStation={seg.arrStation}
                  duration={seg.duration}
                  imageSrc="/images/011.JPG"
                />
              ) : i === 5 ? (
                <TrainCardWithVideo
                  key={i}
                  dep={seg.dep}
                  depStation={seg.depStation}
                  train={seg.train}
                  arr={seg.arr}
                  arrStation={seg.arrStation}
                  duration={seg.duration}
                  imageSrc="/images/012.JPG"
                />
              ) : i === 7 ? (
                <TrainCardWithVideo
                  key={i}
                  dep={seg.dep}
                  depStation={seg.depStation}
                  train={seg.train}
                  arr={seg.arr}
                  arrStation={seg.arrStation}
                  duration={seg.duration}
                  imageSrc="/images/013.JPG"
                />
              ) : (
                <div
                  key={i}
                  className="rounded-2xl border border-white/[0.08] bg-[#0a1220] p-5"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-1 items-center gap-5">
                      <div className="text-center">
                        <p className="font-mono text-lg font-light text-white">{seg.dep}</p>
                        <p className="mt-0.5 text-[11px] text-zinc-500">{seg.depStation}</p>
                      </div>
                      <div className="flex flex-1 flex-col items-center gap-1">
                        <p className="text-xs text-sky-400/80">{seg.train}</p>
                        <div className="flex w-full items-center gap-1">
                          <div className="h-px flex-1 bg-white/10" />
                          <svg className="h-3 w-3 text-white/20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0l8 8-8 8V0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="font-mono text-lg font-light text-white">{seg.arr}</p>
                        <p className="mt-0.5 text-[11px] text-zinc-500">{seg.arrStation}</p>
                      </div>
                    </div>
                    <div className="shrink-0 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-center sm:ml-4">
                      <p className="text-[10px] uppercase tracking-widest text-zinc-500">車程</p>
                      <p className="mt-0.5 font-mono text-sm text-zinc-200">{seg.duration}</p>
                    </div>
                  </div>
                </div>
              )
            )}
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
