import clsx from "clsx";
import { useTranslations } from "next-intl"

type Props = {
    subtitle: string;
    title: string;
    wrapperStyles?: string;
}

const BannerContent = ({subtitle, title, wrapperStyles}: Props) => {
    const t = useTranslations('HomePage.mainBanners');

    return (
        <div className={clsx("relative z-10 text-center max-w-4xl mx-auto px-4", wrapperStyles)}>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
                {title}
            </h1>
            <hr className="border-white/50 my-3 w-1/2 mx-auto" />
            <p className="text-white/90 text-lg md:text-xl font-news">
                {subtitle}
            </p>
        </div>
    )
}

export default BannerContent;