import VisitButton from "@/components/UI/Button/Visit";
import { faCamera, faExpand, faHandPointDown, faPhotoFilm, faPhotoVideo, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";

const ReasonsWhy = () => {
    const t = useTranslations('reasonsWhy');

    return (
        <section className="bg-stone-100 py-4 md:py-20 px-4 md:px-8">
            <h2 className="text-3xl font-semibold mb-6 text-center py-4 md:py-8">{t('title')}</h2>
            <section className="flex flex-col md:flex-row gap-4 md:gap-12 px-4 md:px-20">
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faCamera} className="text-4xl mb-4 text-black" />
                    <h3 className="text-xl text-center font-semibold mb-4 text-black">{t('point1.title')}</h3>
                    <p className="text-sm text-center">
                        {t('point1.description')}
                    </p>
                </div>
                <hr className="bg-gray-700 w-[200px] h-[1px] md:w-[1px] md:h-[200px] block" />
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faPhotoFilm} className="text-4xl mb-4 text-black" />
                    <h3 className="text-xl text-center  font-semibold mb-4 text-black">{t('point2.title')}</h3>
                    <p className="text-sm text-center">
                        {t('point2.description')}
                    </p>
                </div>
                <hr className="bg-gray-700 w-[200px] h-[1px] md:w-[1px] md:h-[200px] block" />
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faExpand} className="text-4xl mb-4 text-black" />
                    <h3 className="text-xl text-center font-semibold mb-4 text-black">{t('point3.title')}</h3>
                    <p className="text-sm text-center">
                        {t('point3.description')}
                    </p>
                </div>                                
            </section>
            <VisitButton />
        </section>
    )
}

export default ReasonsWhy;