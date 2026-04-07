import { useTranslations } from "next-intl";

import { SpinnerColor, SpinnerSize } from "@/utils/enums/spinner";

type SpinnerProps = {
    size?: SpinnerSize;
    color?: SpinnerColor;
}

const Spinner = ({ size = SpinnerSize.MEDIUM, color = SpinnerColor.WHITE }: SpinnerProps) => {
    const t = useTranslations('commons');

    const sizeClasses = {
        [SpinnerSize.SMALL]: 'h-3 w-3',
        [SpinnerSize.MEDIUM]: 'h-4 w-4', 
        [SpinnerSize.LARGE]: 'h-5 w-5',
        [SpinnerSize.XLARGE]: 'h-10 w-10'
    };

    const colorClasses = {
        [SpinnerColor.BLACK]: 'border-gray-900 border-t-transparent',
        [SpinnerColor.WHITE]: 'border-black dark:border-white border-t-transparent'
    };

    return (
        <div 
            className={`${sizeClasses[size]} animate-spin rounded-full border-2 ${colorClasses[color]} border-t-transparent`}
            role="status"
            aria-label={t('loading')}
        />
    );
};

export default Spinner;