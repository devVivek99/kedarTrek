import Camp from "@/components/Camp";
import Features from "@/components/Features";
import Getapp from "@/components/Getapp";
import Guide from "@/components/Guide";
import MainPage from "@/components/MainPage";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MainPage/>
      <Camp/>
      <Guide/>
      <Features/>
      <Getapp/>
    </>
  );
}
