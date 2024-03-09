import Couple from "@/components/couple";
import Event from "@/components/event";
import Cover from "@/components/cover";
import Hero from "@/components/hero";
import Quote from "@/components/quote";
import { PiInstagramLogoThin, PiYoutubeLogoThin } from "react-icons/pi";
import Gallery from "@/components/gallery";
import Comments from "@/components/comments";
import Gift from "@/components/gift";
import Menu from "@/components/menu";
import Song from "@/components/song";
import { Suspense } from "react";

export const metadata = {
  metadataBase: process.env.NEXT_PUBLIC_APP_URL,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  title: `The Wedding Of Fanny & Angga`,
  description: `Sabtu, 27 April 2024`,
  authors: `sukundev`,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: `The Wedding Of Fanny & Angga`,
    description: `Sabtu, 27 April 2024`,
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: `fanny-and-angga`,
    locale: "id_ID",
    type: "article",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/img/IMG_0180.webp`,
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff",
};

const data = {
  family: [
    {
      full_name: "Fanny Indriani Cahyani",
      nick_name: "fanny",
      father_name: "Eko Santoso (ALM)",
      mother_name: "Suhaemi",
      image: "/img/IMG_0258.webp",
      type: "female",
    },
    {
      full_name: "Angga Saputra",
      nick_name: "angga",
      father_name: "Entis Setiawan",
      mother_name: "Yuhaeni",
      image: "/img/IMG_0242.webp",
      type: "male",
    },
  ],
  cover: "/img/IMG_0180.webp",
  weddingDate: "27-04-2024 08:00",
  imageList: [
    "/img/IMG_0074.webp",
    "/img/IMG_0080.webp",
    "/img/IMG_0083.webp",
    "/img/IMG_0087.webp",
    "/img/IMG_0126.webp",
    "/img/IMG_0180.webp",
    "/img/IMG_0226.webp",
    "/img/IMG_9979.webp",
  ],
  galleryList: [
    "/img/IMG_0006.webp",
    "/img/IMG_0018.webp",
    "/img/IMG_0074.webp",
    "/img/IMG_0080.webp",
    "/img/IMG_0083.webp",
    "/img/IMG_0087.webp",
  ],
  event: [
    {
      title: "akad nikah",
      date: "27-04-2024",
      jam: "08.00 - 10.00",
      lokasi: "kediaman mempelai wanita",
      address: "jalan padasuka no 16",
      maps_link: "#",
    },
    {
      title: "resepsi",
      date: "27-04-2024",
      jam: "11.00 - selesai",
      lokasi: "kediaman mempelai wanita",
      address: "jalan padasuka no 16",
      maps_link: "#",
    },
  ],
  streaming: {
    status: false,
    links: [
      {
        name: "youtube",
        link: "https://youtube.com/",
        icon: <PiYoutubeLogoThin className="text-xl" />,
      },
      {
        name: "instagram",
        link: "https://www.instagram.com/",
        icon: <PiInstagramLogoThin className="text-xl" />,
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <main className="flex flex-col flex-wrap flex-1">
        <Suspense>
          <Cover
            shortNameFemale={data.family[0].nick_name}
            shortNameMale={data.family[1].nick_name}
            src={data.cover}
          />
        </Suspense>
        <Hero
          imageList={data.imageList}
          weddingDate={data.weddingDate}
          shortNameFemale={data.family[0].nick_name}
          shortNameMale={data.family[1].nick_name}
        />
        <Quote
          shortNameFemale={data.family[0].nick_name}
          shortNameMale={data.family[1].nick_name}
          quote="“Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tentram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.”"
          quoteFrom="QS. Ar-Rum : 21"
        />
        <Couple coupleData={data.family} />
        <Event listEvent={data.event} streaming={data.streaming} />
        <Gallery imageList={data.galleryList} />
        <Comments />
        <Gift />
        <Menu />
        <Song />
      </main>
      <footer className="mb-14 sm:mb-0 bg-stone-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 900 80"
          className="w-full"
          version="1.1"
        >
          <path
            d="M0 42L75 17L150 21L225 39L300 49L375 16L450 17L525 36L600 19L675 22L750 47L825 35L900 33L900 81L825 81L750 81L675 81L600 81L525 81L450 81L375 81L300 81L225 81L150 81L75 81L0 81Z"
            fill="#57534e"
          />
          <path
            d="M0 51L75 51L150 42L225 47L300 35L375 39L450 34L525 46L600 37L675 38L750 43L825 50L900 55L900 81L825 81L750 81L675 81L600 81L525 81L450 81L375 81L300 81L225 81L150 81L75 81L0 81Z"
            fill="#403b38"
          />
          <path
            d="M0 60L75 56L150 68L225 68L300 57L375 61L450 54L525 52L600 49L675 69L750 69L825 50L900 61L900 81L825 81L750 81L675 81L600 81L525 81L450 81L375 81L300 81L225 81L150 81L75 81L0 81Z"
            fill="#292524"
          />
        </svg>
        <div className="px-4 py-8 -mt-2 font-thin text-center capitalize text-stone-300 bg-stone-800">
          <p>© made with love by sukundev</p>
        </div>
      </footer>
    </>
  );
}
