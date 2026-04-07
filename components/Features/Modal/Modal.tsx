import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";

import { AnimationClasses } from "@/utils/types/animation";

type Props = {
    animationClasses?: AnimationClasses
    title: string
    cssClasses?: string
    onClose: () => void
    children: React.ReactNode
}

const Modal: FC<Props> = ({animationClasses, title, cssClasses, onClose, children}) => (
    <>
        <div className={clsx(
            'fixed z-modal w-full h-auto bottom-0 bg-white-main py-4 bg-white dark:bg-black-tertiary sm:w-[420px] sm:h-auto sm:top-[50%] sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] rounded-t-lg sm:rounded-lg shadow-lg',
            animationClasses,
            cssClasses
            )}>
            <header className='flex relative mx-4 my-2'>
                <h3 className='text-xl'>{title}</h3>
                <span className="cursor-pointer absolute top-0 right-2" aria-label='Close modal' onClick={onClose}>
                    <FontAwesomeIcon icon={faClose} />
                </span>
            </header>
            <section className='my-4 flex flex-col justify-center'>
                {children}
            </section>
        </div>
    </>
)

export default Modal