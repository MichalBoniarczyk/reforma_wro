import HeaderBannerPage from "@/components/UI/HeaderPage";
import { useTranslations } from "next-intl";
import OfferSchema from "./Schema";
import QandA from "@/components/Layout/QandA";
import Breadcrumb from "@/components/Features/Breadcrumb";
import { notFound } from "next/navigation";
import BookButton from "@/components/UI/Button/Book";
import { RESERVATION_PATH } from "@/utils/consts/paths";

type Props = {
    category: string;
}

const OfferDetailsPage = ({category}: Props) => {
    const t = useTranslations('offerPage');

    const data = [
        {
            title: t('data.massage1.title'),
            description: t('data.massage1.description'),
            slug: '/masaz-przeciwbolowy-plecow',
            imageSrc: "/images/offer/massages/przecibolowy-plecow.webp",
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
    ].find(item => item.slug === `/${category}`);

    if (!data) {
        notFound();
    }

    return (
        <>
            <OfferSchema title={data.title} description={data.description} />
            <div>
                <HeaderBannerPage title={data.title} imagePath={data.imageSrc} />
                <Breadcrumb />
                <section className="pt-12 md:pt-20 pb-4 md:pb-8 w-full md:w-[80%] mx-auto px-8 md:px-0">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4">{data.aboutTitle}</h2>
                    <p>{data.description}</p>
                    <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">{data.forWHoTitle}</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>{data.forWhoList.first}</li>
                        <li>{data.forWhoList.second}</li>
                        <li>{data.forWhoList.third}</li>
                        {data.forWhoList.fourth && <li>{data.forWhoList.fourth}</li>}
                    </ul>
                </section>
                <div className="py-12 md:py-20 flex items-center justify-center">
                    <BookButton urlBook={RESERVATION_PATH} />
                </div>
                <section className="w-full px-8 md:px-0 py-6 md:py-12 bg-gray-100 dark:bg-neutral-900">
                    <div className="md:w-[80%] md:mx-auto">
                        <QandA />
                    </div>
                </section>
            </div>
        </>
    )
}

export default OfferDetailsPage;    