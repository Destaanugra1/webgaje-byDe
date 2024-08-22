"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";
import sapines from "@/assets/sapiens.png";
import Image from "next/image";
import { CoverDemo } from "./cover";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-[100vh] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg container-bg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <div className="flex justify-between items-center p-4 container-text  ">
        <Boxes />
        <div className="text-center justify-center m-4 ">
          <h1 className={cn("md:text-3xl text-xl text-white relative z-20")}>
            Halo, Saya <span className="text-blue-white">Desta</span>
          </h1>
          <p className="text-center md:text-xl  mt-2 text-neutral-300 relative z-20">
            Selamat datang di Website saya, Nama lengkap saya Desta Anugrah
            Pratama, saya kuliah di UMKO dengan Jurusan Sistem Teknologi
            Informasi
          </p>
            <CoverDemo />
        </div>
        <div className="img-bck flex items-end justify-end">
          <Image src={sapines} alt="#" className="w-[75%] " />
        </div>
      </div>
    </div>
  );
}
