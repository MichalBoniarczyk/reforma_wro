import Opinions from "@/components/Features/Opinions";
import HomePageAboutMe from "./AboutMe";
import BannerOfferHomePage from "./BannerOffer";
import HeroHomePage from "./Hero";
import SectionFirst from "./SectionFirst";
import HomeSchema from "./Schema";

const HomePage = () => {

    return (
        <>
            <HomeSchema />
            <HeroHomePage />
            <SectionFirst />
            <HomePageAboutMe />
            <BannerOfferHomePage />
            <Opinions />
        </>
    )
}

export default HomePage;