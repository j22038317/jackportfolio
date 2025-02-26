import React from "react";
import Image from "next/image";
import { EP } from "../Asset/asset";


const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10 p-10 bg-gray-200"> {/* Centering the content horizontally and vertically */}
      <h1 className="text-4xl font-bold text-center w-full">
        Employer Project
      </h1>
      <h1 className="text-3xl font-bold text-center w-full">
        BYOD Policy and SETA Program Design
      </h1>

      <div className="flex flex-wrap justify-center gap-10"> {/* Centering the content within the flex container */}
        {/* Left side - EP[2] images displayed top-to-bottom */}
        <div className="flex flex-col gap-5 items-center"> {/* Added items-center for centering images and text */}
          {EP[2].map((ep) => (
            <div key={ep.name} className="flex flex-col items-center">
              <h2 className="text-4xl font-bold text-left w-full">{ep.description}</h2>
              <Image
                src={ep.src}
                alt={ep.description}
                width={850}
                className="p-1 border-4 border-gray-800 rounded-lg bg-white"
              />
            </div>
          ))}
        </div>

        {/* Right side - Description and EP[0], EP[1], EP[3] images */}
        <div className="pl-24 pt-5 max-w-2xl flex flex-col items-center gap-12"> {/* Added items-center to center the content */}
          <p className="text-left space-x-2">
            Collaborated with IP Server One to design a BYOD policy and SETA program, including the creation of awareness quizzes and specific
            real-world solutions for the company.
            <br />
            <strong>~2024 DEC</strong>
          </p>

          <div className="flex justify-center">
            <Image src={EP[0].src} alt="profile" className="p-1 border-4 border-gray-800 rounded-lg bg-white" width={600}/>
          </div>

          <div className="flex justify-center">
            <Image src={EP[1].src} alt="profile" className="p-1 border-4 border-gray-800 rounded-lg bg-white "width={600}/>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold text-left w-full">{EP[3].description}</h2>
            <Image src={EP[3].src} alt={EP[3].description} className="p-1 border-4 border-gray-800 rounded-lg bg-white" width={600}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
