import EditorComponent from "@/components/editor";
import Navbar from "@/components/navbar";
import NewEditor from "@/components/newEditor";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex-col bg-neutral-950">
      <NewEditor />
    </main>
  );
}
