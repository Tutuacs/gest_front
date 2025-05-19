import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="justify-between flex w-full px-32">
                <Link href="/" className="text-white text-2xl">
                    Home
                </Link>
                <Link href="/users" className="text-white text-2xl">
                    users
                </Link>
            </div>
        </nav>
    )
}