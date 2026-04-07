import Prices from "@/app/cennik/page";
import Opinions from "@/components/Features/Opinions";
import HeaderBannerPage from "@/components/UI/HeaderPage";
import { PricesCurrency, PricesTime, PricesValues } from "@/utils/enums/prices";
import { useTranslations } from "next-intl";
import BannerOfferHomePage from "../Home/BannerOffer";
import QandA from "@/components/Layout/QandA";
import clsx from "clsx";
import PricesSchema from "./Schema";

const PricesPage = () => {
    const t = useTranslations('pricesPage');

    const data = [
        {
            title: t('massage1'),
            prices: {
                price1: `${PricesValues.oneHundredSeventy}`,
                price2: `${PricesValues.twoHundredTwenty}`,
                price3: `${PricesValues.threeHundred}`             
            },
            currency: PricesCurrency.currency
        },
        {
            title: t('massage2'),
            prices: {
                price1: `${PricesValues.oneHundredSeventy}`,
                price2: `${PricesValues.twoHundredTwenty}`,
                price3: `${PricesValues.threeHundred}`             
            },
            currency: PricesCurrency.currency
        },
        {
            title: t('massage3'),
            prices: {
                price1: `${PricesValues.oneHundredSeventy}`,
                price2: `${PricesValues.twoHundredTwenty}`,
                price3: `${PricesValues.threeHundred}`             
            },
            currency: PricesCurrency.currency
        },
        {
            title: t('massage4'),
            prices: {
                price1: `${PricesValues.oneHundredSeventy}`,
                price2: `${PricesValues.twoHundredTwenty}`,
                price3: `${PricesValues.threeHundred}`             
            },
            currency: PricesCurrency.currency
        },
        {
            title: t('massage5'),
            prices: {
                price1: `${PricesValues.oneHundredSeventy}`,
                price2: `${PricesValues.twoHundredTwenty}`,
                price3: `${PricesValues.threeHundred}`             
            },
            currency: PricesCurrency.currency
        },
        {
            title: t('massage6'),
            prices: {
                price1: `${PricesValues.oneHundredSeventy}`,
                price2: `${PricesValues.twoHunredThirty}`,
                price3: `${PricesValues.threeHundred}`             
            },
            currency: PricesCurrency.currency
        }     
    ]

    return (
        <>
            <PricesSchema title={t('title')} description={t('description')} />
            <HeaderBannerPage title={t('title')} imagePath="/images/photos/place.jpg" />
            <section className="py-12 md:py-20 w-full md:w-[80%] mx-auto px-8 md:px-0 ">
                <section className="mb-10">
                    <p className="text-gray-700 dark:text-gray-300 text-md md:text-lg font-news leading-relaxed">
                        {t('description')}
                    </p>
                </section>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left">
                        <thead className="text-white bg-black">
                            <tr>
                                <th className="px-4 py-6 text-sm">{t('table.service')}</th>
                                <th className="px-4 py-6 text-sm">{PricesTime.sixty} {PricesCurrency.time}</th>
                                <th className="px-4 py-6 text-sm">{PricesTime.ninety} {PricesCurrency.time}</th>
                                <th className="px-4 py-6 text-sm">{PricesTime.oneTwenty} {PricesCurrency.time}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={item.title} className={clsx('border-y border-neutral-200 dark:border-neutral-800', index % 2 === 0 ? '' : '')}>
                                    <td className="px-4 py-8"><strong>{item.title}</strong></td>
                                    <td className="px-4 py-8 text-sm">{item.prices.price1} {item.currency}</td>
                                    <td className="px-4 py-8 text-sm">{item.prices.price2} {item.currency}</td>
                                    <td className="px-4 py-8 text-sm">{item.prices.price3} {item.currency}</td>
                                </tr>
                            ))}         
                        </tbody>
                    </table>
                </div>                
            </section>
            <section className="w-full px-8 md:px-0 py-6 md:py-12 bg-gray-100 dark:bg-neutral-900">
                <div className="md:w-[80%] md:mx-auto">
                    <QandA />
                </div>
            </section>
            <BannerOfferHomePage />
            <Opinions />
        </>    
    )
}

export default PricesPage;