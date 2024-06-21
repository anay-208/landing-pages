import Image from "next/image";
interface Feature {
    src: string;
    sm: string;
    lg: string;
}

const features: Feature[] = [
    {
        src: "/features/book.svg",
        sm: "book with",
        lg: "only 20%"
    },
    {
        src: "/features/payment.svg",
        sm: "payment plan",
        lg: "easy 70/30"
    },
    {
        src: "/features/handover.svg",
        sm: "handover on",
        lg: "q2 2027"
    },
    {
        src: "/features/area.svg",
        sm: "area starts from",
        lg: "700 sqmt"
    }
]

interface FeatureAmenities {
    src: string;
    title: string;
}

const FeatureAmenities: FeatureAmenities[] = [
    {
        src: "/features/floating_pools.jpg",
        title: "Floating Pools"
    },
    {
        src: "/features/spacious_cabins.jpg",
        title: "Spacious Cabins Like Rooms"
    },
    {
        src: "/features/swimming_pools.jpg",
        title: "Sea Facing Swimming Pools"
    },
    {
        src: "/features/gymnasium.jpg",
        title: "Gymnasium & Fitness"
    }
]



export default function Features() {

    return (
        <>
            <section className="w-screen overflow-hidden">
                {/* widgets */}
                <div className="grid grid-cols-2 gap-y-16 md:grid-cols-4 justify-evenly bg-sky-50 text-secondary py-4">
                    {features.map(feature => (
                        <div key={feature.lg} className="flex flex-col justify-center items-center uppercase">
                            <Image className="w-auto" src={feature.src} width={50} height={50} alt={feature.sm + " " + feature.lg} />
                            <h3 className="font-poppins mt-3">{feature.sm}</h3>
                            <h2 className="font-oswald text-3xl font-semibold"> {feature.lg} </h2>
                        </div>
                    ))}
                </div>
                <div className="py-16 flex flex-col items-center text-center">
                    {/* logo */}
                    <Image src={"/features/harbour_lights.svg"} width={182} height={79} alt="harbour lights logo" />
                    {/* features and amenities */}
                    <h1 className="font-oswald text-4xl font-semibold mt-8 uppercase text-secondary" >Features & Amenities</h1>
                    <p className="mx-auto w-full  sm:w-5/6 md:w-2/3 font-poppins text-zinc-800 font-normal mt-4">Harbour Lights beautifully honours maritime voyages while embracing an opulent seafront lifestyle. Its maritime-inspired amenities provide an unmatched seaside experience, offering a life of tranquility and bliss.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 w-screen  gap-4">
                        {FeatureAmenities.map((FeatureAmenitie) => (
                            <div key={FeatureAmenitie.title} className="p-8  w-full ">
                                <div  className="flex flex-col bg-[#FCFCFC] h-60 shadow-lg p-4 items-center  ">
                                    <Image className="rounded-full border-4 border-zinc-300 transition duration-300 hover:scale-105" src={FeatureAmenitie.src} alt="floating pools" width={150} height={150} />
                                    <p className="text-secondary font-poppins mt-4  mx-auto font-semibold w-2/3"> {FeatureAmenitie.title} </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}