"use client"
import React from "react";
import Image from "next/image";
import { gameDev } from "../Asset/asset";
import { motion, px } from "framer-motion";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10 p-10  bg-slate-950 text-white ">
      <motion.div
        initial={{ opacity: 0, x: "blur(10px) " }} // Start off-screen to the left
        whileInView={{ opacity: 1, filter: "blur(0px)" }} // Animate when in view
        transition={{ duration: 0.8, ease: "easeOut" }}>
        <h1 className="flex justify-center w-full mt-0 text-2xl text-yellow-500">
          Game Development
        </h1>
        <h1 className="flex justify-center w-full mt-0 text-4xl font-bold">
          Lumberjack Blues
        </h1>
        <div className="flex">
          <div>
            <h2 className="text-4xl font-bold">Poster</h2>
            <div className="p-1 border-4 border-gray-800 rounded-lg bg-white">
              <Image src={gameDev[2].src} alt="title" width={800} />
              <Image src={gameDev[3].src} alt="title" />
            </div>
          </div>

          <div className="pl-24 pt-5 max-w-2xl">
            <p className="space-x-2">
              Developed a 2D game in Unity where players chop trees to earn money, upgrade attributes, and unlock new skills through market transactions. Utilized C# scripting for game mechanics, including tree chopping, attribute upgrades, and skill unlocking.
              <br /><strong className="text-yellow-500" >~2024 DEC</strong>
            </p>
            <br />
            <h2 className="text-3xl font-bold">Developed By:</h2>
            <h3 className="text-xl font-bold pt-2">
              Coding: Ng Jee Chian <br /> Animation and UI: Nigel
            </h3>
            <h2 className="text-4xl font-bold pt-10">Title</h2>
            <div className="p-1 border-4 border-gray-800 rounded-lg bg-white">
              <Image src={gameDev[1].src} alt="title" />
            </div>
            <h2 className="text-4xl font-bold pt-10">Game Scene</h2>
            <div className="p-1 border-4 border-gray-800 rounded-lg bg-white">
              <Image src={gameDev[0].src} alt="control" />
            </div>
          </div>
        </div >
      </motion.div>


      <motion.div className="flex flex-col items-center justify-center w-full pt-10"
        initial={{ opacity: 0, x: "blur(10px) " }} // Start off-screen to the left
        whileInView={{ opacity: 1, filter: "blur(0px)" }} // Animate when in view
        transition={{ duration: 0.8, ease: "easeOut" }}>
        <h2 className="text-4xl font-bold pt-10 text-left">~Lumberjack Blues Gameplay</h2>
        <video width={1200} height={1000} controls className="p-1 border-4 border-gray-800 rounded-lg bg-white">
          <source src="LB_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      <motion.div className="flex flex-wrap justify-center gap-10 pt-10 grid lg:grid-cols-3 md-grid-cols-2 sm:grid-cols-1 "
        initial={{ opacity: 0, x: "blur(10px) " }} // Start off-screen to the left
        whileInView={{ opacity: 1, filter: "blur(0px)" }} // Animate when in view
        transition={{ duration: 0.8, ease: "easeOut" }}>
        {/* Display LB1 to LB12 */}
        {gameDev[4].map((gameItem) => (
          <div key={gameItem.name}>
            <h2 className={`text-4xl font-bold ${gameItem.description === "" ? "pt-10" : ""}`}>{gameItem.description}</h2>
            <div className="p-1 border-4 border-gray-800 rounded-lg bg-white ">
              <Image src={gameItem.src} alt={gameItem.name} width={450} height={450} />
            </div>
          </div>
        ))}

      </motion.div>


    </div>
  );
};

export default Page;
