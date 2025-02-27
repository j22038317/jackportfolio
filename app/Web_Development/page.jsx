"use client"
import React from "react";
import Image from "next/image";
import { webDev } from "../Asset/asset";
import { motion } from "framer-motion";


const Page = () => {
  return (
    <motion.div className="flex flex-col items-center justify-center min-h-[20vh] gap-10 p-10 bg-gray-200"
      initial={{ opacity: 0, x: "blur(10px) " }} // Start off-screen to the left
      whileInView={{ opacity: 1, filter: "blur(0px)" }} // Animate when in view
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h1 className="flex justify-center w-full mt-0 text-4xl font-bold">
        Web Development
      </h1>
      <h1 className="flex justify-center w-full mt-0 text-3xl font-bold">
        The Puppet Shoes
      </h1>
      <p className="space-x-2 flex justify-center w-full mt-0">
        Developed a website to sell shoes using HTML, CSS, and JavaScript.
        Designed an intuitive user interface to enhance the online shopping
        experience. <br /><motion.strong
          animate={{ color: ["#ff0088", "#0d63f8"] }} transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >~2022 AUG</motion.strong>
      </p>
      <div className="flex flex-wrap justify-center gap-12 pt-10">
        {webDev.map((web) => (
          <div key={web.name} className="text-center">
            <h2 className="text-4xl font-bold">{web.description}</h2>
            <div className="p-1 border-4 border-gray-800 rounded-lg bg-white">
              <Image
                src={web.src}
                alt={web.description}
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
