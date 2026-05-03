"use client"
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";

const Navbar = () => {

    const { 
        data: session, 
    } = authClient.useSession() 

    
    const user = session?.user
   

    const handleSignOut = () => {
        authClient.signOut()
    }
    return (

            <div className="flex gap-5 justify-center items-center bg-gray-300 py-6 font-semibold">
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/models"}>Model</Link>
                </li>
                <li>
                    <Link href={"/serverAction"}>ServerAction</Link>
                </li>

                <li>
                    <Link href={"/signup"}>SignUp</Link>
                </li>
                <li>
                    <Link href={"/signin"}>SignIn</Link>
                </li>
               <Button onClick={handleSignOut} variant="danger">SignOut</Button>
                <li className="text-blue-700 text-xs">
                    {user?.name}
                </li>


            </div>

       
    );
};

export default Navbar;