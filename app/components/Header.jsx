"use client";
import React, { useState } from "react";
import Image from "next/image";
import { icon, program_page } from "../asset/asset"; // Importing the icon array
import Link from "next/link";

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
            onClick={() => setSelectedIcon(iconData.name)}
          >
            <Image
              src={iconData.src}
              alt={`${iconData.name} Icon`}
              width={50}
              height={50}
            />
            <p className="text-center mt-2 text-black no-underline">
              {iconData.name.charAt(0).toUpperCase() + iconData.name.slice(1)}
            </p>
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
              className={`hover:motion-preset-flomoji-🚀  flex flex-col items-center transition-all duration-300 ${
                selectedProgram === pPage.name ? "shadow-[0px_7px_0px_#000000]" : "" // Apply shadow to bottom-left only
              }`}
              onClick={() => setSelectedProgram(pPage.name)}
            >
              <p className="text-center mt-2 text-black no-underline">
                {pPage.name}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;