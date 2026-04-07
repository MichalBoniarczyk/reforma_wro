import { useTranslations } from "next-intl";
import Image from "next/image";
import Content from "./Content";

const HomePageOffer = () => {
    const t = useTranslations("homePage.offer");

    const data = [
        {
            title: t('offer1.title'),
            description: 'Lorem ipsum daskdasdas',
            image: 'massage.webp'
        },
        {
            title: t('offer2.title'),
            description: 'Lorem ipsum daskdasdas',
            image: 'massage-3.webp'
        },
                {
            title: t('offer3.title'),
            description: 'Lorem ipsum daskdasdas',
            image: 'massage-2.webp'
        },
        // {
        //     title: t('offer3.title'),
        // },
        // {
        //     title: t('offer4.title'),
        // },
        // {
        //     title: t('offer5.title'),
        // },
        // {
        //     title: t('offer6.title'),
        // }
    ]

    return (

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 md:mt-8">
            {
                data.map((item, index) => (
                    <div key={index} className="py-4 bg-white text-center p-2 border border-gray-900 relative h-[220px]">
                        <Content title={item.title} subtitle={item.description} />
                        <div className="absolute inset-0 bg-black/60 dark:bg-black/70 z-1"></div>
                        <Image src={`/images/offer/${item.image}`} alt={item.title} layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full object-cover z-0" />
                    </div>
                ))
            }
        </section>
    )
}

export default HomePageOffer;