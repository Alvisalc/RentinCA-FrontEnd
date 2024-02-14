import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Sample } from "@/components/Sample";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Sample/>
        <h1>Home Page</h1>
    </div>
  );
}
