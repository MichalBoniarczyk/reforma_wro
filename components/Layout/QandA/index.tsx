import Dropdown from "@/components/Features/Dropdown"
import { useTranslations } from "next-intl";

const QandA = () => {
    const t = useTranslations('qna');

    const data = [
        {
            question: t('first.question'),
            answer: t('first.answer'),
            isDefaultOpened: true
        },
        {
            question: t('second.question'),
            answer: t('second.answer'),
            isDefaultOpened: false
        },
        {
            question: t('third.question'),
            answer: t('third.answer'),
            isDefaultOpened: false
        },
        {
            question: t('fourth.question'),
            answer: t('fourth.answer'),
            isDefaultOpened: false
        },
        {
            question: t('fifth.question'),
            answer: t('fifth.answer'),
            isDefaultOpened: false
        }
    ]

    return (
        <>
            <h3 className="py-4 text-lg md:text-xl text-center mb-2 uppercase font-weight-bold">{t('title')}</h3>
            <section className="w-full flex flex-col gap-2">
                {
                    data.map((item) => (
                        <Dropdown
                            key={item.question}
                            isDefaultOpened={item.isDefaultOpened}
                            childrenTitle={
                                <h3 className="text-lg font-semibold py-2">{item.question}</h3>
                            }
                            childrenBody={
                                <p className="text-sm p-4">
                                    {item.answer}
                                </p>
                            }
                        />
                    ))
                }
            </section>
        </>
    )
}

export default QandA;