import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Navbar() {
    return (
        <nav className="absolute top-4 sm:top-8 left-0 right-0 px-4 sm:px-8 md:px-12 lg:px-24  z-10 flex justify-between">
            <Image src={"/logo.svg"} width={150} height={20} alt="logo" />
            <Button variant={"ghost"}>Enquire Now</Button>
        </nav>
    )

}