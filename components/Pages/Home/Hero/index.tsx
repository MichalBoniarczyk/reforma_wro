import BannerContent from "@/components/UI/BannerContent";
import LinkHome from "@/components/UI/LinkHome";
import VidePlayer from "@/components/UI/Video";
import { RESERVATION_PATH } from "@/utils/consts/paths";
import { LinksStyleType } from "@/utils/enums/links";

const HeroHomePage = () => {

    return (
    <div className="relative h-[80vh] flex-center flex-col overflow-hidden">
        <VidePlayer autoPlay={true} 
                    muted={true}
                    loop={true}
                    playsInline={true}
                    srcVideo="/videos/hero.webm"
                    classNameVideo="absolute inset-0 w-full h-full object-cover z-0" />
        
        <div className="absolute inset-0 bg-black/50 dark:bg-black/60 z-1"></div>
        <BannerContent title="Masaż Wrocław" subtitle="Profesjonalny masaż we Wrocławiu, który pomaga rozluźnić napięte mięśnie, zmniejszyć stres i zadbać o regenerację" />
        <LinkHome href={RESERVATION_PATH} arialLabel="Rezerwacja" type={LinksStyleType.red} wrapperStyle="mt-6 z-10" isBlank="_blank">
            Rezerwacja
        </LinkHome>
     </div> 
    )
}

export default HeroHomePage;