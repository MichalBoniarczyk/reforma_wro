import { useTranslations } from "next-intl";

const FooterCopyrights = () => {
    const currentYear = new Date().getFullYear();
    const t = useTranslations('footer');
    
    return (
        <p className="text-white text-sm mt-12">
            <strong>Reforma.pl</strong> ©{currentYear} - {t('allRightsReserved')}
        </p>
    )
}
export default FooterCopyrights;