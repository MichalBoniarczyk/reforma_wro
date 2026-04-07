'use client'
import { useState } from "react";
import SliderContainer from "../Slider";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const data = [
    {
        author: "Adam",
        content: "Dobry masaż, głębokich tkanek, komfortowa atmosfera",
        source: "",
        slug: "adam-dobra-masaz"
    },
    {
        author: "Natalia",
        content: "Bardzo polecam Pana Mateusza, po jednym masażu poczułam ulgę oraz puściły mnie całe napięcia mięśniowe.",
        source: "",
        slug: "natalia-bardzo-polecam-pana-mateusza"
    },
    {
        author: "Karolina",
        content: "Jestem bardzo zadowolona z usług p. Mateusza. To profesjonalista w swoim fachu! Każdy ruch jest celowany dokładnie w miejsce które jest bolesne. Mnie masaże p. Mateusza 	postawiły na przysłowiowe nogi po okresie wzmożonej pracy zawodowej, gdzie miałam już problemy nie tylko z kręgosłupem (praca siedząca) ale także z początkiem cieśni nadgarstka. Dzięki regularnym mocnym masażom spięcia puściły i przestałam mieć dolegliwości bólowe i mrowienia. Jak dla mnie ten Pan czyni cuda! ",
        source: "",
        slug: "karolina-jestem-bardzo-zadowolona-z-uslug-p-mateusza"
    },
    {
        author: "Aleksandara",
        content: "Masaż przyniósł mi upragnioną ulgę i odprężenie. Długi czasem walczyłam ze spięciem i w końcu po tej wizycie poczułam ulgę. Czułam się zaopiekowana - każdy ruch był przemyślany i dobrany pod konkretny problem. Polecam serdecznie",
        source: "",
        slug: "aleksandra-masaz-przyniosl-mi-upragniona-ulge-i-odprezenie"
    },
    {
        author: "Krysiek",
        content: "Polecam serdecznie pana Mateusza",
        source: "",
        slug: "krysiek-polecam-serdecznie-pana-mateusza"
    },
        {
        author: "Martyna",
        content: "Bardzo duża ulga dla pleców i profesjonalne podejście! Polecam!",
        source: "",
        slug: "martyna-bardzo-duza-ulga-dla-plecow-i-profesjonalne-podejscie-polecam"
    },
    {
        author: "Anna",
        content: "Polecam z całego serca. Dziękuje za pomoc.nMasaż wykonany profesjonalnie. Po jednym masażu puściło mi napięcie mięśniowe w okolicach karku, szczękościsk oraz spięcie między łopatkamiĺ",
        source: "",
        slug: "anna-polecam-z-calego-serca-dziekuje-za-pomoc-masaz-wykonany-profesjonalnie"
    },
        {
        author: "Paweł",
        content: "Masaż u Mateusza to natychmiastowa ulga dla ciała i duszy:) polecam serdecznie",
        source: "",
        slug: "pawel-masaz-u-mateusza-to-natychmiastowa-ulga-dla-ciala-i-duszy-polecam-serdecznie"
    }
] 

const Opinions = () => {

    return (
        <section className="py-4 md:py-20 px-4 md:px-0 bg-gray-200 dark:bg-neutral-900">
            <div className="mx-auto md:w-[80%]">
                <h3 className="text-3xl font-bold">Opinie</h3>
                <p className="mt-1 mb-4 text-xs">Sprawdź, co mówią o mnie klienci</p>
                <SliderContainer sliderContainerClasses="flex justify-start items-start w-full lg:w-full overflow-x-scroll hide-scrollbar snap-x snap-start gap-4 mx-auto">
                    {
                        data.map((item, index) => (
                            <div key={item.slug} className={clsx("border border-gray-300 dark:border-gray-950 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 shrink-0 w-full md:w-100 p-8 h-75 bg-white dark:bg-black flex flex-col", {
                                            'snap-start': index === 0,
                                            'snap-end': index === data.length - 1
                                        })}>
                                <FontAwesomeIcon icon={faQuoteLeft} className={clsx("text-black dark:text-white w-3 h-3")} />
                                <blockquote className="text-black dark:text-white italic text-lg px-2 py-4 overflow-y-auto max-h-[200px]">{item.content}</blockquote>
                                <FontAwesomeIcon icon={faQuoteRight} className={clsx("text-black dark:text-white w-3 h-3")} />
                                <p className="text-sm font-semibold mt-4 text-right text-black dark:text-white">{item.author}</p>
                            </div>
                            ))
                    }
                </SliderContainer>
            </div>
        </section>
    )

}

export default Opinions