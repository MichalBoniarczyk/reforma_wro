import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";
import React from "react";
import clsx from 'clsx';
import { INSTAGRAM_NAME, INSTAGRAM_URL, SOCIAL_MEDIA_LINK_CSS } from '@/utils/consts/social-media';


type Props = {
    size?: string;
}

const InstagramIcon = ({size} : Props): React.JSX.Element => {

    return (
        <Link href={`${INSTAGRAM_URL}/${INSTAGRAM_NAME}`}
            target="_blank"
            className={SOCIAL_MEDIA_LINK_CSS}
            aria-label={`Go to ${INSTAGRAM_NAME} profile`}
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram}   
                            className={clsx(size)} />
        </Link>
    );
}

export default InstagramIcon;