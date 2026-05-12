import { useTranslations } from "next-intl"

type Props = {
    subtitle?: string;
    title: string;
}

const Content = ({subtitle = '', title}: Props) => {
    const t = useTranslations('HomePage.mainBanners');

    return (
        <div className="relative top-18 z-10 text-center max-w-4xl mx-auto px-4">
            <h2 className="md:text-xl font-bold text-white tracking-wide uppercase">
                {title}
            </h2>
            <hr className="border-white/50 my-3 w-1/2 mx-auto" />
        </div>
    )
}

export default Content;