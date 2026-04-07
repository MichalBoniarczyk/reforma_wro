'use client';
import { faAngleUp, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from "next-intl";

import useScrollVisibility from '@/hooks/useScrollVisibility';

import { ScrollDirection } from "@/utils/enums/scroll";
import { ENTER_KEY, SPACE_KEY } from '@/utils/consts/keys';
import { SCROLL_DEFAULT_THRESHOLD, TOP_ZERO } from '@/utils/consts/scroll';

const BackToTop = () => {
    const t = useTranslations('commons');
    const { isSticky } = useScrollVisibility({ threshold: SCROLL_DEFAULT_THRESHOLD, direction: ScrollDirection.DOWN });

    const scrollToTop = () => {
        window.scrollTo({
            top: TOP_ZERO,
            behavior: "smooth"
        });
    };

    const onKeyScrollToTop = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === ENTER_KEY || e.key === SPACE_KEY) {
            scrollToTop();
        }
    }

    if (!isSticky) {
        return null;
    }

    return (
        <button className="size-12 flex-center fixed bottom-4 right-4 p-2 bg-sky-800 hover:bg-sky-950 text-white rounded-full shadow-lg cursor-pointer z-50" 
                aria-label={t('backToTop')}
                onKeyDown={onKeyScrollToTop}
                onClick={scrollToTop} >
            <FontAwesomeIcon icon={faAngleUp} className="size-3" />
        </button>
    );
}

export default BackToTop;
