'use client';
import RevealOnScroll from "@/components/Features/RevealOnScroll";
import LinkHome from "@/components/UI/LinkHome";
import { ABOUT_PATH } from "@/utils/consts/paths";
import { LinksStyleType } from "@/utils/enums/links";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons/faAngleDoubleRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { clsx } from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";

const HomePageAboutMe = () => {
    const t = useTranslations("homePage.aboutMe");

    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-black border-y border-gray-300 dark:border-gray-900">
            <div className="w-full lg:w-[80%] lg:mx-auto flex flex-col md:flex-row items-center gap-8">

                <RevealOnScroll delay={0}>
                    <Image src="/images/me/main.webp" alt={t('title')} width={800} height={800} className="rounded-full border-4 border-white w-full shadow-2xl" />
                </RevealOnScroll>
                <article className="px-4 md:px-8">
                    <h2 className="text-center text-2xl md:text-4xl font-bold mb-2 md:mb-4">
                        {t('title')}
                    </h2>
                    <hr className="border-black/50 dark:border-white/50 my-3 w-[80%] mx-auto" />
                    <p className="py-4 px-4 leading-9 tracking-wide md:text-lg text-center">
                        {t('description')}
                    </p>    
                    <LinkHome href={ABOUT_PATH} arialLabel={t('buttonAriaLabel')} type={LinksStyleType.green} wrapperStyle="mt-4 md:mt-8">
                        <FontAwesomeIcon icon={faAngleDoubleRight} className={clsx("text-black-tertiary w-3 h-3")} />
                        {t('buttonLabel')}
                    </LinkHome>
                </article>
            </div>
        </section>
    )

}

export default HomePageAboutMe;