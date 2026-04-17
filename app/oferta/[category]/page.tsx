import OfferPage from "@/components/Pages/Offer";
import OfferDetailsPage from "@/components/Pages/OfferDetails";

import { OFFER_PATH } from "@/utils/consts/paths";
import { baseUrl, SEO_CONFIG } from "@/utils/consts/seo";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type OfferCategoryParams = Promise<{ category: string }>;

export async function generateMetadata({ params }: { params: OfferCategoryParams }): Promise<Metadata> {
    const { category } = await params;
    const t = await getTranslations("aboutMePage.metadata");
  const formattedCategory = category.replace(/-/g, ' ');
  const title = formattedCategory.charAt(0).toUpperCase() + formattedCategory.slice(1);
    const canonical = encodeURI(`${baseUrl}${OFFER_PATH}/${category}`);

  return {
    title: `${title} | ${SEO_CONFIG.siteName}`,
    description: t('description'),
    openGraph: {
      title: `${title} | ${SEO_CONFIG.siteName}`,
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

const Offer = async ({ params }: { params: OfferCategoryParams }) => {
    const { category } = await params;

    return <OfferDetailsPage category={category} />
}

export default Offer;