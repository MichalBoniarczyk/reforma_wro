import Link from "next/link"

const VisitButton = () => {

    return (
        <div className="mt-4 md:mt-8 flex">
            <Link href="/kontakt" className="mt-8 mx-auto bg-cyan-600 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition w-fit">
                Umów się na sesję
            </Link>
        </div>
    )
}

export default VisitButton;