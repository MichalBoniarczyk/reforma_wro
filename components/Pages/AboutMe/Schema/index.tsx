import Schema from "@/components/Seo/Schema";
import { baseUrl } from "@/utils/consts/seo";

type Props = {
    title: string;
    description: string;
}

const AboutMeSchema = ({title, description}: Props) => {
    
    const seoSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": title,
        "description": description,
        "url": `${baseUrl}/o-mnie`,
    }

    return <Schema schema={seoSchema} />
}

export default AboutMeSchema;