import BlogContent from "@/components/BlogContent";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col md:flex-row py-0 px-4 md:px-12 md:py-5 lg:px-28">
        <aside className="basis-full md:basis-2xs pt-1 pb-6 md:py-0">
          <Sidebar />
        </aside>
        <section className="basis-full md:basis-6xl">
          <BlogContent />
        </section>
      </main>
    </>
  );
}
