'use client';

import { useTranslations } from "next-intl";
import HomePageOffer from "../Offer";
import LinkHome from "@/components/UI/LinkHome";
import { LinksStyleType } from "@/utils/enums/links";
import { OFFER_PATH } from "@/utils/consts/paths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { clsx } from "clsx";
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import RevealOnScroll from "@/components/Features/RevealOnScroll";

const SectionFirst = () => {
  const t = useTranslations("homePage.sectionFirst");

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-100 dark:bg-neutral-900">
      <div className="bg-white dark:bg-black p-8">
        <RevealOnScroll delay={0}>
          <h2 className="text-center text-2xl md:text-4xl font-bold mb-3 md:mb-5">
            {t('title')}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={80}>
          <hr className="border-zinc-300 dark:border-zinc-900 my-4 w-[80%] mx-auto" />
        </RevealOnScroll>

        <RevealOnScroll delay={160}>
          <p className="py-4 w-[80%] mx-auto text-center leading-relaxed tracking-wide">
            {t('description')}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={240}>
          <p className="py-4 w-[80%] mx-auto text-center leading-relaxed tracking-wide">
            {t('description2')}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={320}>
          <p className="py-4 w-[80%] mx-auto text-center leading-relaxed tracking-wide md:text-lg font-semibold">
            {t('description3')}
          </p>
        </RevealOnScroll>
      </div>

      <RevealOnScroll delay={380}>
        <HomePageOffer />
      </RevealOnScroll>

      <RevealOnScroll delay={460}>
        <LinkHome href={OFFER_PATH} arialLabel={t('buttonAriaLabel')} type={LinksStyleType.primary} wrapperStyle="mt-8 md:mt-12">
          <FontAwesomeIcon icon={faAngleDoubleRight} className={clsx("text-black-tertiary w-3 h-3")} />
          {t('buttonLabel')}
          <FontAwesomeIcon icon={faAngleDoubleLeft} className={clsx("text-black-tertiary w-3 h-3")} />
        </LinkHome>
      </RevealOnScroll>
    </section>
  );
};

export default SectionFirst;