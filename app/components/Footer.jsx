import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import the Link component
import { iconSocial } from "../Asset/asset";

const Footer = () => {
  return (
    <div className="bg-black py-6 px-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8 text-white">
          {/* Left Side - Paragraphs */}
          <p className="flex-1 text-left pl-10">Here is some information about me.</p>
        </div>

        {/* Right Side - Social Media Icons and Resume */}
        <div className="flex gap-3 items-center">
          {iconSocial.map((iconData) => (
            iconData.name !== "Resume" ? (
              // Social Media Icons
              <Link
                href={iconData.link}
                key={iconData.name}
                className="flex flex-col items-center"
              >
                <div className="relative mb-1">
                  <Image
                    src={iconData.src}
                    alt={`${iconData.name} Icon`}
                    width={50}
                    height={50}
                    className="mb-2 border border-white bg-white"
                  />
                </div>
                <p className="text-white text-sm">{iconData.name}</p>
              </Link>
            ) : (
              // Resume Link - This will trigger a download
              <a
                key={iconData.name}
                href={iconData.link}
                download
                className="flex flex-col items-center"
              >
                <div className="relative mb-1">
                  <Image
                    src={iconData.src}
                    alt={`${iconData.name} Icon`}
                    width={50}
                    height={50}
                    className="mb-2 border border-white bg-white"
                  />
                </div>
                <p className="text-white text-sm">{iconData.name}</p>
              </a>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
