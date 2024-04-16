import Link from "next/link";

export default function HomeNavbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-30 font-space py-3 bg-black-900/40 backdrop-blur-lg border-b border-b-neutral-500/50">
        <div className="container mx-auto flex items-center justify-between">
          <h2 className="logo text-xl text-neutral-200">
            <span className="font-bold bg-gradient-to-r text-xl from-cyan-400 to-blue-500 text-transparent bg-clip-text">N</span>
            autev
          </h2>

          <p className="creator text-neutral-500">{"\/\/ PROJECT BY S5 SAJID"}</p>

          <button className="inline-flex h-10 animate-shimmer items-center justify-center rounded-full border hover:scale-95 hover:transition-transform hover:duration-200 border-cyan-900 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-black-200 hover:text-black-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <Link href="/builder">GET STARTED</Link>
          </button>

        </div>
      </nav>
    );
}