import Image from "next/image";
import Hero from "./components/hero";
import Features from "./components/features";
import Gallery from "./components/gallery";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col relative ">
      <Hero />
      <Features />
      <Gallery />
    </main>
    </>
  );
}
