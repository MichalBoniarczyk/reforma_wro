import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { useTranslations } from "next-intl";

import HeaderMobileContext from "../../Headers/Mobile/context";
import { ENTER_KEY } from "@/utils/consts/keys";
import Logo from "@/components/UI/Logo";

const NavigationMobileHeader = () => {
    const t = useTranslations('mobileMenu');
    const { handlerCloseNavigation } = useContext(HeaderMobileContext);

    const onClickClose = () => {
        handlerCloseNavigation();
    }

    const onKeyDownClose = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === ENTER_KEY) {
            handlerCloseNavigation();
        }
    }

    return (
        <div className="px-4 py-4 flex items-center border-b border-white-primary dark:border-stone-800 bg-black">
           <Logo />
            <button className="ml-auto mr-2"
                    aria-label={t('closeMenu')}
                    onKeyDown={onKeyDownClose} 
                    onClick={onClickClose}>
                <FontAwesomeIcon icon={faClose} className="text-xl text-white" />
            </button>
        </div>
    )
}

export default NavigationMobileHeader;