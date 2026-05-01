import Link from "next/link";

const Navbar = () => {
    return (
        <div className="border p-5 bg-zinc-700
        ">
            <div className="flex gap-5 justify-center">
                <Link href={"/"}>Home</Link>
                <Link href={"/models"}>Model</Link>
            </div>

        </div>
    );
};

export default Navbar;