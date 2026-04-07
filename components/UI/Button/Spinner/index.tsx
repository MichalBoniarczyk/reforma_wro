'use client'
import { useTranslations } from "next-intl";

import { SpinnerColor } from "@/utils/enums/spinner";
import Spinner from "../../Spinner";

type Props = {
    readonly spinnerColor?: SpinnerColor;
}

const ButtonSpinner = ({ spinnerColor = SpinnerColor.WHITE }: Props) => {
    const t = useTranslations('commons');

    const colorClasses = {
        [SpinnerColor.BLACK]: 'text-black',
        [SpinnerColor.WHITE]: 'text-white'
    };

    return (
        <>
            <Spinner color={spinnerColor} />
            <span className={`${colorClasses[spinnerColor]}`}>{t('loading')}</span>
        </>
    )
}

export default ButtonSpinner;