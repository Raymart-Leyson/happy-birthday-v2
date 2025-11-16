"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const openLetter = () => {
    router.push("/greeting");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center 
      bg-gradient-to-b from-[#b8d8ff] to-[#e6f2ff] p-4">

      <div onClick={openLetter} className="cursor-pointer flex flex-col items-center">
        
        {/* HEART IMAGE ONLY */}
        <Image
          src="/heart-card3.png"
          alt="Birthday Hearts"
          width={300}
          height={300}
          className="drop-shadow-md "
        />

        {/* TITLE TEXT */}
        <p className="text-center text-2xl font-semibold text-blue-700 tracking-wide">
          HAPPY BIRTHDAY <br /> TO MY BABY 🥳🎉
        </p>
      </div>

      {/* TAP TO OPEN TEXT */}
      <p className="text-center mt-6 text-blue-800 font-medium text-lg">
        Tap the card to open 💌
      </p>
    </div>
  );
}
