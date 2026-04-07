import Schema from "@/components/Seo/Schema";
import { baseUrl } from "@/utils/consts/seo";
import { useTranslations } from "next-intl";
import { use } from "react";

const HomeSchema = () => {
    const t = useTranslations('homePage.metadata');
    
    const seoSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": t('title'),
        "description": t('description'),
        "url": `${baseUrl}`,
    }

    return <Schema schema={seoSchema} />
}

export default HomeSchema;