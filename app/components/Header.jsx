"use client";
import React, { useState } from "react";
import Image from "next/image";
import { icon, program_page } from "../asset/asset"; // Importing the icon array
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  const [selectedIcon, setSelectedIcon] = useState("aboutMe");
  const [selectedProgram, setSelectedProgram] = useState("Game Development");

  return (
    <div>
      <div className="flex justify-center gap-x-12 my-6 flex-nowrap"> {/* Prevent wrapping */}
        {icon.map((iconData) => (
          <Link
            href={iconData.link}
            key={iconData.name}
            className={`flex flex-col items-center transition-all duration-300  ${
              selectedIcon === iconData.name ? "shadow-[0px_7px_0px_#000000]" : "" // Apply shadow to bottom-left only
            }`}
            onClick={() => {
              setSelectedIcon(iconData.name);
              setSelectedProgram("Game Development");
            }}
          >
            <Image
              src={iconData.src}
              alt={`${iconData.name} Icon`}
              width={50}
              height={50}
            />
            <motion.p className="text-center mt-2 font-bold"
            animate={selectedIcon===iconData.name?{ color: ["#ff0088", "#0d63f8"] }:{color:"black"}}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",}}>
              {iconData.name.charAt(0).toUpperCase() + iconData.name.slice(1)}
            </motion.p>
          </Link>
        ))}
      </div>

      {/* Program page links render based on icon selection */}
      {selectedIcon === "program" && (
        <div className="flex justify-center gap-x-12 my-6 flex-nowrap">
          {program_page.map((pPage) => (
            <Link
              href={pPage.link}
              key={pPage.name}
              className={`flex flex-col items-center transition-all duration-300 ${
                selectedProgram === pPage.name ? "shadow-[0px_7px_0px_#000000]" : "" // Apply shadow to bottom-left only
              }`}
              onClick={() => setSelectedProgram(pPage.name)}
            >
              <motion.p className="text-center mt-2 font-bold"
               animate={selectedProgram===pPage.name?{ color: ["#ff0088", "#0d63f8"] }:{color:"black"}}
               transition={{
                 duration: 2,
                 repeat: Infinity,
                 repeatType: "reverse",
                 ease: "linear",}}
              >
                {pPage.name}
              </motion.p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;