'use client';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

type Props = {
    isOnlyIcon?: boolean
}

const ButtonBack = ({ isOnlyIcon }: Props) => {
    const t = useTranslations('commons');
    const router = useRouter();

    const goBack = () => {
        router.back();
    }

    return (
        <button className="flex items-center cursor-pointer text-xl" onClick={goBack}>
            <FontAwesomeIcon icon={faAngleLeft} className="mr-1" />
            {
                !isOnlyIcon && t('back')
            }
            
        </button>
    )
}

export default ButtonBack;