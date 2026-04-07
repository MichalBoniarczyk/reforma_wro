'use client'

import clsx from "clsx";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

type Props = {
    readonly childrenTitle?: React.ReactNode;
    readonly childrenBody: React.ReactNode;
    readonly isDefaultOpened?: boolean;
}

const Dropdown = ({childrenTitle, childrenBody, isDefaultOpened = false}: Props)  => {
    const [isOpen, setIsOpen] = useState(isDefaultOpened);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className={clsx("cursor-pointer p-3 flex items-center rounded-lg transition duration-600 border border-gray-200 dark:border-neutral-900", {
                "bg-gray-200 dark:bg-neutral-800 text-black-primary dark:text-white-primary": isOpen,
                "bg-white dark:bg-neutral-950 hover:bg-white-tertiary dark:hover:bg-black-tertiary text-black-primary dark:text-white-primary": !isOpen,
            })} onClick={toggleDropdown}>
                <div>
                    {childrenTitle}
                </div>
                <FontAwesomeIcon icon={faChevronDown} className={clsx("ml-auto mr-4 transition duration-500", {"rotate-180": isOpen})} />
            </div>
            {isOpen && (
                <section>
                    {childrenBody}
                </section>
            )}
        </>
    )

}

export default Dropdown;