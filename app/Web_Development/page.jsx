"use client"
import React from "react";
import Image from "next/image";
import { webDev } from "../Asset/asset";
import { motion } from "framer-motion";


const Page = () => {
  return (
    <motion.div className="flex flex-col items-center justify-center min-h-[20vh] p-10 bg-slate-950 text-white"
      initial={{ opacity: 0, x: "blur(10px) " }} // Start off-screen to the left
      whileInView={{ opacity: 1, filter: "blur(0px)" }} // Animate when in view
      transition={{ duration: 0.8, ease: "easeOut" }}

    >
      <h1 className="flex justify-center w-full mt-0 text-2xl text-yellow-500">
        Web Development
      </h1>
      <h1 className="flex justify-center w-full mt-0 text-4xl font-bold">
        The Puppet Shoes
      </h1>
      <p className="space-x-2 flex justify-center w-full mt-5">
        Developed a website to sell shoes using HTML, CSS, and JavaScript.
        Designed an intuitive user interface to enhance the online shopping
        experience. <br /><strong className="text-yellow-500">~2022 AUG</strong>
      </p>
      <div className="gap-12 pt-10 grid lg:grid-cols-2 sm:grid-cols-1 ">
        {webDev.map((web) => (
          <div key={web.name} className="text-center ">
            <h2 className="text-4xl font-bold">{web.description}</h2>
            <div className="p-1 border-4 border-gray-800 rounded-lg bg-white">
              <Image
                src={web.src}
                alt=""
                layout="responsive"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Page;
