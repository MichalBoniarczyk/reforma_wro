import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image"

const Logo = () => {
    const isMobile = useIsMobile()

    if (isMobile) {
        return <Image src="/images/logo.jpg" alt="Logo" width={140} height={140} className="" priority />

    }

    return (
        <Image src="/images/logo.jpg" alt="Logo" width={200} height={200} className="" priority />
    )

}

export default Logo;