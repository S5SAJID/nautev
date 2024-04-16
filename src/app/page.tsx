import { ContainerScroll } from "@/components/globals/container-scroll-animation";
import { HeroParallax } from "@/components/globals/hero-parallax";
import { LampDemo } from "@/components/globals/lamp-component";
import HomeNavbar from "@/components/home/navbar";
import { heroParallaxProducts } from "@/utils/constants";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex-col bg-neutral-950">
      <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
      <HomeNavbar />

      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-xl font-dm-sans bg-gradient-to-br from-black-600 to-white-500 text-transparent bg-clip-text font-semibold">
              Make it Easy To <br />
              <span className="text-xl md:text-[6rem] font-bold mt-1 leading-none uppercase">
                Build Websites
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/screenshot.jpeg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>

      <HeroParallax products={heroParallaxProducts} />

      <LampDemo />

    </main>
  );
}
