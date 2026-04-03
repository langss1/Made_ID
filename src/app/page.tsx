"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Flow from "@/components/Flow";
import Manfaat from "@/components/Manfaat";
import Impact from "@/components/Impact";
import Comparison from "@/components/Comparison";
import Countdown from "@/components/Countdown";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <Flow />
      <Manfaat />
      <Impact />
      <Comparison />
      <Countdown />
      <Footer />
    </main>
  );
}
