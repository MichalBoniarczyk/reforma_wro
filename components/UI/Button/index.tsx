import clsx from "clsx";
import { SpinnerColor } from "@/utils/enums/spinner";
import { ButtonVariant, ButtonSize } from "@/utils/enums/button";
import ButtonSpinner from "./Spinner";

type ButtonType = ButtonVariant.DANGER | 
                ButtonVariant.PRIMARY | 
                ButtonVariant.SECONDARY | 
                ButtonVariant.DISABLED | 
                ButtonVariant.TEXT |
                ButtonVariant.BLACK;

type ButtonSizes = ButtonSize.SMALL | ButtonSize.MEDIUM | ButtonSize.LARGE;

type ButtonTypes = 'button' | 'submit' | 'reset';

type Props = {
    children: React.ReactNode;
    readonly variant: ButtonType;
    readonly size: ButtonSizes;
    readonly ariaLabel: string;
    readonly isDisabled?: boolean;
    readonly isLoading?: boolean;
    readonly spinnerColor?: SpinnerColor;
    readonly btnClases?: string;
    readonly type?: ButtonTypes;
    onClick?: (() => void) | ((e: React.FormEvent) => Promise<void>);
    onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
}

const getVariantClasses = (variant: ButtonType) => {
    switch (variant) {
        case ButtonVariant.PRIMARY:
            return 'bg-purple-primary text-white hover:bg-purple-secondary';
        case ButtonVariant.SECONDARY:
            return 'bg-yellow-primary text-white hover:bg-yellow-secondary focus:ring-4 focus:ring-yellow-300';
        case ButtonVariant.DANGER:
            return 'bg-red-primary text-white hover:bg-red-secondary focus:ring-4 focus:ring-red-300';
        case ButtonVariant.DISABLED:
            return 'bg-gray-secondary text-gray-primary cursor-not-allowed';
        case ButtonVariant.BLACK:
            return 'bg-black text-white hover:bg-purple-primary focus:ring-4 focus:ring-gray-300';
        default:
            return '';
    }
};

const getSizeClasses = (size: ButtonSizes): string => {
    switch (size) {
        case ButtonSize.SMALL:
            return 'px-3 py-1 text-sm';
        case ButtonSize.MEDIUM:
            return 'px-4 py-1.5 text-sm';
        case ButtonSize.LARGE:
            return 'px-6 py-2 text-sm';
        default:
            return '';
    }
};

const Button = ({
    children,
    variant,
    size,
    ariaLabel,
    isDisabled = false,
    isLoading = false,
    spinnerColor = SpinnerColor.WHITE,
    btnClases,
    type = 'button',
    onClick,
    onKeyDown
}: Props) => {
    const variantClasses = getVariantClasses(variant);
    const sizeClasses = getSizeClasses(size);

    return (
        <button className={clsx(`rounded-lg cursor-pointer flex gap-1 items-center transition duration-700 outline:border ${variantClasses} ${sizeClasses} ${btnClases}`, {
                    'cursor-not-allowed opacity-50': isDisabled || isLoading,
                })}
                disabled={isDisabled} 
                aria-label={ariaLabel} 
                type={type}
                onClick={onClick} 
                onKeyDown={onKeyDown}>
                    {
                        isLoading ? <ButtonSpinner spinnerColor={spinnerColor} /> : children
                    }
        </button>
    );
}

export default Button;
