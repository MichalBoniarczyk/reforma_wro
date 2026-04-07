'use client'

import React from "react";


type Props = {
    isActive: boolean
    onClick: () => void
    onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void
}

const Blackout = ({ isActive, onClick, onKeyDown }: Props) => {

    if (!isActive) {
        return null;
    }

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-hull bg-black/60 z-blackout" onClick={onClick} onKeyDown={onKeyDown} tabIndex={0} role="button" aria-label="Close modal by clicking on the backdrop">
        </div>
    )
}

export default Blackout;