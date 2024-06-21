import Image from "next/image";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Features from "./components/features";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col relative ">
      <Navbar />
      <Hero />
      <Features />
    </main>
    </>
  );
}
