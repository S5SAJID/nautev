"use client"

export default function Navbar() {
  return (
    <nav className="w-full font-space py-3">
      <div className="w-full h-full flex justify-between items-center gap-2">
        <div className="logo text-lg text-neutral-200">
          <span className="font-bold bg-gradient-to-r text-xl from-cyan-400 to-blue-500 text-transparent bg-clip-text">N</span>
          autev</div>
        <div className="w-96 navbar-btns grid gap-1 grid-cols-6 h-10 rounded-lg">

        </div>
      </div>
    </nav>
  );
}