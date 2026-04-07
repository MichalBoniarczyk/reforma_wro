import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";
import React from "react";
import clsx from 'clsx';
import { FACEBOOK_NAME, FACEBOOK_URL, SOCIAL_MEDIA_LINK_CSS } from '@/utils/consts/social-media';

type Props = {
    size?: string;
}

const FacebookIcon = ({size}: Props): React.JSX.Element => {

    return (
        <Link href={`${FACEBOOK_URL}/${FACEBOOK_NAME}`}
            target="_blank"
            className={SOCIAL_MEDIA_LINK_CSS}
            aria-label={`Go to ${FACEBOOK_NAME} profile`}
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook}   
                            className={clsx(size)} />
        </Link>
    );
}

export default FacebookIcon;