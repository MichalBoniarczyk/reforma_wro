import Schema from "@/components/Seo/Schema";
import { baseUrl } from "@/utils/consts/seo";

type Props = {
    title: string;
    description: string;
}

const PricesSchema = ({title, description}: Props) => {
    
    const seoSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": title,
        "description": description,
        "url": `${baseUrl}/cennik`,
    }

    return <Schema schema={seoSchema} />
}

export default PricesSchema;