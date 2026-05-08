import HeaderBannerPage from "@/components/UI/HeaderPage";
import { useTranslations } from "next-intl";
import BannerOfferHomePage from "../Home/BannerOffer";
import QandA from "@/components/Layout/QandA";
import Image from "next/image";
import OfferSchema from "./Schema";
import LinkHome from "@/components/UI/LinkHome";
import { LinksStyleType } from "@/utils/enums/links";
import { OFFER_PATH, RESERVATION_PATH } from "@/utils/consts/paths";
import BookButton from "@/components/UI/Button/Book";

const OfferPage = () => {
    const t = useTranslations('offerPage');

    const data = [
        {
            title: t('data.massage1.title'),
            description: t('data.massage1.description'),
            slug: '/masaz-przeciwbolowy-plecow',
            imageSrc: "/images/offer/massages/przeciwbolowy-plecow.webp",
            aboutTitle: t('data.massage1.aboutTitle'),
            "forWHoTitle": t('data.massage1.forWhoTitle'),
            "forWhoList": {
                "first": t('data.massage1.forWhoList.first'),
                "second": t('data.massage1.forWhoList.second'),
                "third": t('data.massage1.forWhoList.third')
            }
        },
        {
            title: t('data.massage2.title'),
            description: t('data.massage2.description'),
            slug: '/masaz-tkanek-glebokich',
            imageSrc: "/images/offer/massage-2.webp",
            aboutTitle: t('data.massage2.aboutTitle'),
            "forWHoTitle": t('data.massage2.forWhoTitle'),
            "forWhoList": {
                "first": t('data.massage2.forWhoList.first'),
                "second": t('data.massage2.forWhoList.second'),
                "third": t('data.massage2.forWhoList.third'),
                "fourth": t('data.massage2.forWhoList.fourth')
            }
        },
        {
            title: t('data.massage3.title'),
            description: t('data.massage3.description'),
            slug: '/masaz-kompleksowy',
            imageSrc: "/images/offer/massages/kompleksowy.webp",
            aboutTitle: t('data.massage3.aboutTitle'),
            "forWHoTitle": t('data.massage3.forWhoTitle'),
            "forWhoList": {
                "first": t('data.massage3.forWhoList.first'),
                "second": t('data.massage3.forWhoList.second'),
                "third": t('data.massage3.forWhoList.third')
            }
        },
        {
            title: t('data.massage4.title'),
            description: t('data.massage4.description'),
            slug: '/masaz-relaksacyjny',
            imageSrc: "/images/offer/massages/relaksacyjny.webp",
            aboutTitle: t('data.massage4.aboutTitle'),
            "forWHoTitle": t('data.massage4.forWhoTitle'),
            "forWhoList": {
                "first": t('data.massage4.forWhoList.first'),
                "second": t('data.massage4.forWhoList.second'),
                "third": t('data.massage4.forWhoList.third')
            }
        },
        {
            title: t('data.massage5.title'),
            description: t('data.massage5.description'),
            slug: '/masaz-klasyczny',
            imageSrc: "/images/offer/massages/klasyczny.webp",
            aboutTitle: t('data.massage5.aboutTitle'),
            "forWhoTitle": t('data.massage5.forWhoTitle'),
            "forWhoList": {
                "first": t('data.massage5.forWhoList.first'),
                "second": t('data.massage5.forWhoList.second'),
                "third": t('data.massage5.forWhoList.third')
            }
        },
        {
            title: t('data.massage6.title'),
            description: t('data.massage6.description'),
            slug: '/masaz-sportowy',
            imageSrc: "/images/offer/massages/sportowy.webp",
            aboutTitle: t('data.massage6.aboutTitle'),
            "forWhoTitle": t('data.massage6.forWhoTitle'),
            "forWhoList": {
                "first": t('data.massage6.forWhoList.first'),
                "second": t('data.massage6.forWhoList.second'),
                "third": t('data.massage6.forWhoList.third')
            }
        }
    ]

    return (
        <>
            <OfferSchema title={t('title')} description={t('description')} />
            <HeaderBannerPage title={t('title')} imagePath="/images/photos/place.jpg" />
            <section className="pt-12 md:pt-20 w-full md:w-[80%] mx-auto px-8 md:px-0">
                <section className="mb-10">
                    <p className="text-gray-700 dark:text-gray-300 text-md md:text-lg font-news leading-relaxed">
                        {t('description')}
                    </p>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {
                        data.map((item, index) => (
                            <article key={index} className="relative h-[280px] md:h-[400px] group">
                                <Image src={item.imageSrc} alt={item.title} layout="fill" className="absolute inset-0 w-full h-full object-cover z-0" />
                                <div className="absolute inset-0 bg-black/80 dark:bg-black/70 z-1 group-hover:bg-black/90 transition  duration-300"></div>
                                <div className="absolute z-10 text-center max-w-4xl mx-auto px-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                                    <div className="opacity-100 transition-opacity duration-200">
                                        <h2 className="text-2xl md:text-4xl font-bold text-white">
                                            {item.title}
                                        </h2>
                                        <hr className="border-white/50 my-3 w-1/2 mx-auto opacity-100 transition-opacity duration-600 group-hover:opacity-0" />
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
            <div className="py-12 md:py-20 flex items-center justify-center">
                <BookButton urlBook={RESERVATION_PATH} />
            </div>
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