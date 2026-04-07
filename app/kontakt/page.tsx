import ContactPage from "@/components/Pages/Contact";
import { CONTACT_PATH } from "@/utils/consts/paths";
import { baseUrl, SEO_CONFIG } from "@/utils/consts/seo";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const canonical = encodeURI(`${baseUrl}${CONTACT_PATH}`);

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("contactPage.metadata");

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


const ContactMe = () => {

    return <ContactPage />
}

export default ContactMe;