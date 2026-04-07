import HeaderBannerPage from "@/components/UI/HeaderPage";
import { useTranslations } from "next-intl";
import OfferSchema from "./Schema";
import QandA from "@/components/Layout/QandA";
import Breadcrumb from "@/components/Features/Breadcrumb";
import { notFound } from "next/navigation";

type Props = {
    category: string;
}

const OfferDetailsPage = ({category}: Props) => {
    const t = useTranslations('offerPage');

    const data = [
        {
            title: t('data.massage1.title'),
            description: t('data.massage1.description'),
            slug: '/masaz-przecowbolowy-plecow',
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
    ].find(item => item.slug === `/${category}`);

    if (!data) {
        notFound();
    }

    return (
        <>
            <OfferSchema title={data.title} description={data.description} />
            <div>
                <HeaderBannerPage title={data.title} imagePath="/images/photos/place.jpg" />
                <Breadcrumb />
                <section className="pt-12 md:pt-20 pb-4 md:pb-8 w-full md:w-[80%] mx-auto px-8 md:px-0">
                    <p>{data.description}</p>
                </section>
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