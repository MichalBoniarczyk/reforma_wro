import { BNR_FLOW } from "@/utils/consts/links";
import { useTranslations } from "next-intl";
import Link from "next/link";

const FooterAuthor = () => {
    const t = useTranslations('footer');
    
    return (
        <p className="text-white text-sm mt-4">
            {t('authorPage')} <Link href={BNR_FLOW} className="hover:text-gray-300 transition font-bold" target="_blank" rel="noopener noreferrer">BNRFlow.dev</Link>
        </p>
    )
}
export default FooterAuthor;