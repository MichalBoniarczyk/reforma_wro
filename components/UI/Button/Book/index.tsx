import Link from "next/link"

type Props = {
    urlBook: string;
}

const BookButton = ({ urlBook = '' }: Props) => {

    return (
        <Link href={urlBook} target="_blank" className="mt-8 mx-auto bg-cyan-600 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition w-fit" aria-label="Umów się na sesję">
            Umów się na sesję
        </Link>
    )
}

export default BookButton;