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




      <footer className="rounded-lg shadow">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <h2 className="logo text-xl text-neutral-200">
                <span className="font-bold bg-gradient-to-r text-xl from-cyan-400 to-blue-500 text-transparent bg-clip-text">N</span>
                autev
              </h2>
            </a>
            <h2 className="text-neutral-300 uppercase">Project By <a href="http://s5sajid.github.io" target="_blank"><span className="underline decoration-cyan-400">S5SAJID</span></a></h2>
          </div>
          <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
          <span className="block text-sm sm:text-center text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">S5SAJID</a>. All Rights Reserved.</span>
        </div>
      </footer>


    </main>
  );
}
