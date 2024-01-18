import { Hero } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden ">
      <Hero />

      {/*car Car Catalogue*/}
      <div className="mt-12 paddng-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        </div>
      </div>
    </main>
  );
}
