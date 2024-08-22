import Image from "next/image";
import { Inter } from "next/font/google";

import Navitems from "@/components/frontend/Navitems";
import { BackgroundBoxesDemo } from "@/components/frontend/background-boxes";
import { HeroParallaxDemo } from "@/components/frontend/hero";
import { LampDemo } from "@/components/frontend/lamp";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <div className="nav sticky">
    <Navitems />
    </div>
    <div className="">
      <BackgroundBoxesDemo />
    </div>
    <div className="bg-blue-black text-white">
      <HeroParallaxDemo />
    </div>
    <div>
      <LampDemo />
    </div>
    <div>

    </div>
    </>
  );
}
