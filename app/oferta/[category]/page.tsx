import OfferPage from "@/components/Pages/Offer";
import OfferDetailsPage from "@/components/Pages/OfferDetails";

import { OFFER_PATH } from "@/utils/consts/paths";
import { baseUrl, SEO_CONFIG } from "@/utils/consts/seo";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const canonical = encodeURI(`${baseUrl}${OFFER_PATH}`);

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("aboutMePage.metadata");

  return {
    title: `${t('title')} | ${SEO_CONFIG.siteName}`,
    description: t('description'),
    openGraph: {
      title: `${t('title')} | ${SEO_CONFIG.siteName}`,
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

const Offer = async ({ params }: { params: { category: string } }) => {
    const { category } =  await params;

    return <OfferDetailsPage category={category} />
}

export default Offer;