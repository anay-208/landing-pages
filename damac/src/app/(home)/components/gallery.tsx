import { Button } from "@/components/ui/button";
import Image from "next/image";

const smImages : string[] = ["sm-1.jpg", "sm-2.jpg", "sm-3.jpg", "sm-4.jpg"]


export default function Gallery() {
    return (
        <>
            <section className="w-full flex flex-col items-center gap-4 py-8">
                <div className="flex justify-center md:justify-end  w-11/12 gap-4">
                    <Button className="py-4 md:py-2 px-8 font-poppins uppercase font-bold transition hover:scale-105 w-full md:w-auto" variant={"secondary"}>Exteriors</Button>
                    <Button className="py-4 md:py-2 px-8 font-poppins uppercase font-bold transition hover:scale-105 w-full md:w-auto" variant={"ghostSecondary"}>Interiors</Button>
                </div>
                <div className="sm:px-1 md:px-4 lg:px-8 w-full space-y-2 md:space-y-4">
                    <div className="w-full">
                        <Image src={"/gallery/lg.jpg"} alt="gallery lg" width={1122} height={494} className="w-full h-auto" />
                    </div>
                    <div className="grid grid-cols-4 gap-2 md:gap-4">
                        {smImages.map(smImage => (
                                <Image key={smImage} src={"/gallery/" + smImage} alt="gallery sm" width={265} height={108} className="w-full h-auto" />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}