import Schema from "@/components/Seo/Schema";
import { baseUrl } from "@/utils/consts/seo";
import { useTranslations } from "next-intl";


const ContactSchema = () => {
    const t = useTranslations('contactPage.metadata');

    const seoSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": t('title'),
        "description": t('description'),
        "url": `${baseUrl}/o-mnie`,
    }

    return <Schema schema={seoSchema} />
}

export default ContactSchema;