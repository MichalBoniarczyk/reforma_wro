import Image from "next/image";

type Props = {
    imagePath: string;
    title: string | undefined;  
}

const HeaderBannerPage = ({
    imagePath,
    title = ''
}: Props) => {
    return (
        <header className="relative w-full h-[200px] md:h-[50vh]">
            <Image src={imagePath} layout="fill" alt={title} className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white">{title}</h1>
            </div>
        </header>
    )
}

export default HeaderBannerPage;