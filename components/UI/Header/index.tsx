type Props = {
    title: string;
}

const HeaderPage = ({ title }: Props) => {
    return (
        <header className="flex justify-center items-center py-4 md:py-8 mt-20 bg-stone-900">
            <h1 
                className="text-3xl font-semibold uppercase bg-cyan-600 text-white w-fit px-4 py-2"
                style={{
                    clipPath: 'polygon(12px 0%, calc(100% - 12px) 0%, 100% 50%, calc(100% - 12px) 100%, 12px 100%, 0% 50%)'
                }}
            >
                {title}
            </h1>
        </header>
    )
}

export default HeaderPage;