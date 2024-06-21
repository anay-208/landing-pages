import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <>
            <section className="min-h-[1200px] md:min-h-[600px]  h-screen w-screen   bg-[url('/hero.jpeg')] bg-cover bg-center relative">
                <div className="w-full h-full bg-gradient-to-r from-sky-950/95  to-black/40 to-100% grid grid-cols-1 md:grid-cols-2">
                    {/* column 1 */}
                    <div className="flex flex-col justify-center items-start pl-4 sl:pl-8 md:pl-12 lg:pl-24 mt-12 sm:mt-6 md:mt-0">
                        <h1 className=" leading-tight font-medium uppercase text-white font-oswald text-5xl">
                            Harbour Lights de <span className="text-primary">GRESOGONO</span></h1>
                        <p className="text-neutral-50 text-2xl font-bold  leading-tight font-poppins mt-2 tracking-wide">1, 2 & 3 Bedrooms Seaside Apartments  in Dubai Maritime City</p>
                        <div className="mt-12 w-full space-y-4">
                            <div className="bg-black/25 text-white w-2/3 pl-4 py-2 border-l-4 border-primary font-poppins">
                                <h2>
                                    Rental Returns of <span className="text-lg font-semibold">UPTO 11%**</span>
                                </h2>
                            </div>
                            <div className="bg-black/25 text-white w-2/3 pl-4 py-2 border-l-4 border-primary font-poppins">
                                <h2>
                                    Capital Appreciation of  <span className="text-lg font-semibold">UPTO 32%**</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    {/* column 2 */}
                    <div className="flex flex-col justify-center items-center md:items-end sm:pr-8 md:pr-12 md:pt-24 lg:pr-24 md:mt-12 sm:mt-6">
                        <div className=" w-4/5 md:w-1/2 bg-slate-500/10 backdrop-blur-lg rounded-lg text-white flex flex-col">
                        <div className="px-6 py-8">
                            <h4 className="text-md font-poppins font-extralight tracking-widest uppercase ">Pricing Starts From</h4>
                            <h1 className="text-5xl font-oswald mt-3">
                                $ 425,000
                            </h1>
                            <h3 className="text-2xl font-oswald font-normal mt-4">
                                AED 1.3 Million
                            </h3>
                            <Button className="uppercase font-poppins tracking-tight text-md px-10 py-5 mt-5 mx-auto justify-self-center" >
                                Get a presentation
                            </Button>
                            </div>
                            <div className="bg-slate-500/30 w-full text-[#98C4E8] text-sm p-4">
                            Get an Expert&apos;s Presentation of Real Estate in Dubai for Life and investment
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}