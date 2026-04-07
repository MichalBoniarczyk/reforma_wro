import HeaderBannerPage from "@/components/UI/HeaderPage";
import { useTranslations } from "next-intl";
import ContactSchema from "./Schema";
import QandA from "@/components/Layout/QandA";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { EMAIL_ADDRESS, PHONE_NUMBER } from "@/utils/consts/contact";

const ContactPage = () => {
    const t = useTranslations('contactPage');

    return (
        <>
            <ContactSchema />
            <HeaderBannerPage title={t('title')} imagePath="/images/photos/place.jpg" />
            <section className="py-12 md:py-20 w-full md:w-[80%] mx-auto px-8 md:px-0 flex flex-col md:flex-row items-center gap-8">
                <article>
                    <p className="py-4 text-gray-700 dark:text-gray-300 text-md md:text-lg font-news leading-relaxed">
                        {t('description')}
                    </p>
                    <ul className="space-y-2 text-lg">
                        <li>
                            <FontAwesomeIcon icon={faPhone} className="mr-2 text-sm" />
                            <a href={`tel:${PHONE_NUMBER}`} className="text-black dark:text-white hover:underline semi-bold">{PHONE_NUMBER}</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-sm" />
                            <a href={`mailto:${EMAIL_ADDRESS}`} className="text-black dark:text-white hover:underline semi-bold">{EMAIL_ADDRESS}</a>
                        </li>
                    </ul>                    
                </article>
            </section>
            <section className="w-full md:mx-auto px-8 md:px-0 py-6 md:py-12 pt-0 bg-gray-100 dark:bg-neutral-900">
                <div className="w-[80%] mx-auto">
                     <QandA />
                </div>
            </section>
        </>    
    )
}

export default ContactPage;