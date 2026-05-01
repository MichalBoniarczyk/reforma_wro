import Opinions from "@/components/Features/Opinions";
import HeaderBannerPage from "@/components/UI/HeaderPage";
import { useTranslations } from "next-intl";
import Image from "next/image";
import AboutMeSchema from "./Schema";

const AboutMePage = () => {
    const t = useTranslations('aboutMePage');

    return (
        <>
            <AboutMeSchema title={t('title')} description={t('description1')} />
            <HeaderBannerPage title={t('title')} imagePath="/images/photos/place.jpg" />
            <section className="py-12 md:py-20 w-full md:w-[80%] mx-auto px-8 md:px-0">
                <div className="py-4 md:py-8 mx-auto flex flex-col md:flex-row items-center gap-8"> 
                    <Image src="/images/me/main-3.webp" alt="Masażysta Wrocław" width={620} height={820} className="" />
                    <article>
                        <h2 className="font-semibold text-5xl">{t('subtitle')}</h2>

                    </article>
                </div>
                <article>
                    <p className="py-4 text-gray-700 dark:text-gray-300 text-md md:text-lg font-news leading-relaxed">
                        {t('description1')}
                    </p>
                    <p className="py-4 text-gray-700 dark:text-gray-300 text-md md:text-lg font-news leading-relaxed">
                        {t('description2')}
                    </p>
                    <p className="py-4 text-gray-700 dark:text-gray-300 text-md md:text-lg font-news leading-relaxed">
                        {t('description3')}
                    </p>
                    <p className="py-4 text-gray-700 dark:text-gray-300 text-md md:text-lg font-news leading-relaxed">
                        {t('description4')}
                    </p>
                </article>
                </section>
            <Opinions />
        </>    
    )
}

export default AboutMePage;