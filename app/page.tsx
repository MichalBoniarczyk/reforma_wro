import HomePage from "@/components/Pages/Home";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { baseUrl, SEO_CONFIG } from "@/utils/consts/seo";
import { getTranslations } from "next-intl/server";

const canonical = encodeURI(`${baseUrl}/`);

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("homePage.metadata");

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: "article",
      siteName: SEO_CONFIG.siteName,
      url: canonical,
      images: [`${process.env.NEXT_PUBLIC_MAIN_DOMAIN}/images/og/main.jpg`],
    },
    alternates: {
      canonical,
      languages: {
        "x-default": canonical,
        pl: canonical,
      },
    },
  };
}

export default function Home() {
  return (
    <HomePage />
  );
}
