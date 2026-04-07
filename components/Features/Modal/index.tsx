'use client'
import { type FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import useIsMobile from "@/hooks/useIsMobile";
import Modal from "./Modal";
import { onBodyNoScrollable } from "@/utils/helpers/onBodyNoScrollable";
import { DEBOUNCE_ANIMATION_IN_TIME_OUT, DEBOUNCE_ANIMATION_TIME_OUT } from "@/utils/consts/timeouts";

type Props = {
    children: React.ReactNode
    title: string
    isOpen: boolean
    cssClasses?: string
    onClose: () => void
}

const ModalContainer: FC<Props> = ({children, title, isOpen, cssClasses, onClose}) => {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isAnimatingIn, setIsAnimatingIn] = useState<boolean>(false);
    const isMobile = useIsMobile()

    useEffect(() =>  {         
        setIsMounted(true)
    }, [isMounted]);

   useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            onBodyNoScrollable(true);
            setTimeout(() => setIsAnimatingIn(true), DEBOUNCE_ANIMATION_IN_TIME_OUT);
        } else {
            setIsAnimatingIn(false);
            onBodyNoScrollable(false);
            setTimeout(() => setIsVisible(false), DEBOUNCE_ANIMATION_TIME_OUT);
        }

        return () => {
            onBodyNoScrollable(false);
        };
    }, [isOpen]); 

    const getAnimationClasses = () => {
        if (isMobile) {
            return {
                'animate-slideInFromBottom': isAnimatingIn,
                'animate-slideOutToBottom': !isAnimatingIn && isVisible
            };
        } else {
            return {
                'animate-slideInFromBottom': isAnimatingIn,
                'animate-slideOutToBottom': !isAnimatingIn && isVisible
            };
        }
    };

    const props = {
        animationClasses: getAnimationClasses(),
        title,
        cssClasses,
        onClose,
        children
    }

    if (!isMounted || !isVisible) {
        return null;
    }

    return createPortal(
      <Modal {...props} />
    , document.body)
}

export default ModalContainer