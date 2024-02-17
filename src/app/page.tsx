import { Footer } from "@/app/components/Footer";
import { Hero } from "@/app/components/Hero";
import { Navbar } from "@/app/components/Navbar";
import { Sample } from "@/app/components/Sample";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Sample/>
    </div>
  );
}
