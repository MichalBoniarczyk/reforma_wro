import BannerContent from "@/components/UI/BannerContent";
import LinkHome from "@/components/UI/LinkHome";
import { RESERVATION_PATH } from "@/utils/consts/paths";
import { LinksStyleType } from "@/utils/enums/links";
import Image from "next/image";

const BannerOfferHomePage = () => {

    return (
    <div className="relative h-[50vh] flex-center flex-col overflow-hidden">
        <Image src="/images/photos/place.jpg" alt="Masaż Wrocław" layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-black/50 dark:bg-black/60 z-1"></div>
        <BannerContent title="Masaż we Wrocławiu" subtitle="Masaż we Wrocławiu to doskonały sposób na relaks, redukcję napięcia i poprawę samopoczucia. Oferuje profesjonalne masaże odprężające, lecznicze i regeneracyjne." />
        <LinkHome href={RESERVATION_PATH} arialLabel="Rezerwacja" type={LinksStyleType.red} wrapperStyle="mt-6 z-10">
            Rezerwacja
        </LinkHome>
    </div>
    )
}

export default BannerOfferHomePage;