import HeaderBannerPage from "@/components/UI/HeaderPage";
import { useTranslations } from "next-intl";
import BannerOfferHomePage from "../Home/BannerOffer";
import QandA from "@/components/Layout/QandA";
import Image from "next/image";
import OfferSchema from "./Schema";
import LinkHome from "@/components/UI/LinkHome";
import { LinksStyleType } from "@/utils/enums/links";
import { OFFER_PATH } from "@/utils/consts/paths";

const OfferPage = () => {
    const t = useTranslations('offerPage');

    const data = [
        {
            title: t('data.massage1.title'),
            description: t('data.massage1.description'),
            slug: '/masaz-tkanek-glebokich',
            imageSrc: "/images/offer/massage.webp",
        },
        {
            title: t('data.massage2.title'),
            description: t('data.massage2.description'),
            slug: '/masaz-tkanek-glebokich',
            imageSrc: "/images/offer/massage-2.webp"
        },
        {
            title: t('data.massage3.title'),
            description: t('data.massage3.description'),
            slug: '/masaz-kompleksowy',
            imageSrc: "/images/offer/massage-3.webp"
        },
        {
            title: t('data.massage4.title'),
            description: t('data.massage4.description'),
            slug: '/masaz-relaksacyjny',
            imageSrc: "/images/offer/massage.webp"
        },
        {
            title: t('data.massage5.title'),
            description: t('data.massage5.description'),
            slug: '/masaz-klasyczny',
            imageSrc: "/images/offer/massage-2.webp"
        },
        {
            title: t('data.massage6.title'),
            description: t('data.massage6.description'),
            slug: '/masaz-sportowy',
            imageSrc: "/images/offer/massage-3.webp"
        }
    ]

    return (
        <>
            <OfferSchema title={t('title')} description={t('description')} />
            <HeaderBannerPage title={t('title')} imagePath="/images/photos/place.jpg" />
            <section className="pt-12 md:pt-20 pb-4 md:pb-8 w-full md:w-[80%] mx-auto px-8 md:px-0">
                <section className="mb-10">
                    <p className="text-gray-700 dark:text-gray-300 text-md md:text-lg font-news leading-relaxed">
                        {t('description')}
                    </p>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {
                        data.map((item, index) => (
                            <article key={index} className="mb-8 relative h-[280px] md:h-[400px] group">
                                <Image src={item.imageSrc} alt={item.title} layout="fill" className="absolute inset-0 w-full h-full object-cover z-0" />
                                <div className="absolute inset-0 bg-black/80 dark:bg-black/70 z-1 group-hover:bg-black/90 transition  duration-300"></div>
                                <div className="absolute z-10 text-center max-w-4xl mx-auto px-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                                    <div className="opacity-100 transition-opacity duration-200 group-hover:opacity-0">
                                        <h2 className="text-2xl md:text-4xl font-bold text-white">
                                            {item.title}
                                        </h2>
                                        <hr className="border-white/50 my-3 w-1/2 mx-auto opacity-100 transition-opacity duration-600 group-hover:opacity-0" />
                                        <LinkHome href={`${OFFER_PATH}${item.slug}`} type={LinksStyleType.secondary} wrapperStyle="mt-4">
                                            zobacz więcej
                                        </LinkHome>
                                    </div>
                                    <div className="opacity-0 transition-opacity duration-600 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                                        <p className="text-white/90 text-lg md:text-lg font-news w-full px-4">
                                            <strong>{item.title}</strong> - {item.description}
                                        </p>
                                        <LinkHome href={`${OFFER_PATH}${item.slug}`} type={LinksStyleType.secondary} wrapperStyle="mt-4">
                                            zobacz więcej
                                        </LinkHome>
                                    </div>
           
                                </div>
                            </article>
                        ))
                    }
                </section>
            </section>
            <section className="w-full md:mx-auto px-8 md:px-0 py-6 md:py-12 pt-0 bg-gray-100 dark:bg-neutral-900">
                <div className="md:w-[80%] md:mx-auto">
                    <QandA />
                </div>
            </section>
            <BannerOfferHomePage />
        </>    
    )
}

export default OfferPage;