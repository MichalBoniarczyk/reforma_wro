'use client';
import { useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SPACE_KEY } from "@/utils/consts/keys";

type Props = {
    autoPlay: boolean;
    muted: boolean;
    loop: boolean;
    playsInline: boolean;
    srcVideo: string;
    hasIconsPlayStop?: boolean;
    classNameVideo: string;
}

const VidePlayer = ({
    autoPlay,
    muted,
    loop,
    playsInline,
    srcVideo,
    hasIconsPlayStop = false,
    classNameVideo
}: Props) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const handleVideoClick = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    const handleKeyDownVideo = (e: React.KeyboardEvent<HTMLSpanElement>) => {
        if (e.key === SPACE_KEY) {
            handleVideoClick();
        }
    }

    return (
        <>
            <video 
                autoPlay={autoPlay}
                muted={muted}
                loop={loop}
                playsInline={playsInline}
                src={srcVideo}
                className={classNameVideo}
            ></video>
            {
                hasIconsPlayStop && (
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white-main p-4 flex-center size-20 text-2xl rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-400" 
                        onClick={handleVideoClick} 
                        onKeyDown={handleKeyDownVideo} 
                        onTouchStartCapture={handleVideoClick}>
                        {
                            isPlaying ?
                            <FontAwesomeIcon icon="stop" className="size-10" /> : <FontAwesomeIcon icon="play" className="size-10" />
                        }
                    </span>
                )
            }
        </>
    )
}

export default VidePlayer;