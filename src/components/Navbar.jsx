"use client"
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";

const Navbar = () => {

    const { 
        data: session, 
    } = authClient.useSession() 

    console.log(session);
    

    const handleSignOut = () => {
        authClient.signOut()
    }
    return (
        <div className="border p-5 bg-zinc-300
        ">
            <div className="flex gap-5 justify-center items-center">
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/models"}>Model</Link>
                </li>
                <li>
                    <Link href={"/signup"}>SignUp</Link>
                </li>
                <li>
                    <Link href={"/signin"}>SignIn</Link>
                </li>

               <Button onClick={handleSignOut} variant="danger">SignOut</Button>


            </div>

        </div>
    );
};

export default Navbar;