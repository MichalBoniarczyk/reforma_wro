import Schema from "@/components/Seo/Schema";
import { baseUrl } from "@/utils/consts/seo";

type Props = {
    title: string | undefined;
    description: string | undefined;
}

const OfferSchema = ({title, description}: Props) => {
    
    const seoSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": title || '',
        "description": description || '',
        "url": `${baseUrl}/oferta`,
    }

    return <Schema schema={seoSchema} />
}

export default OfferSchema;