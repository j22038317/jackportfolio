import React from "react";
import Image from "next/image";
import { webDev } from "../Asset/asset";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[20vh] gap-10 p-10 bg-gray-200">
      <h1 className="flex justify-center w-full mt-0 text-4xl font-bold">
        Web Development
      </h1>
      <h1 className="flex justify-center w-full mt-0 text-3xl font-bold">
        The Puppet Shoes
      </h1>
      <p className="space-x-2 flex justify-center w-full mt-0">
        Developed a website to sell shoes using HTML, CSS, and JavaScript.
        Designed an intuitive user interface to enhance the online shopping
        experience. <br /><strong>~2022 AUG</strong>
      </p>
      <div className="flex flex-wrap justify-center gap-12 pt-10">
        {webDev.map((web) => (
          <div key={web.name} className="text-center">
            <h2 className="text-4xl font-bold">{web.name}</h2>
            <div className="p-1 border-4 border-gray-800 rounded-lg bg-white">
              <Image
                src={web.src}
                alt={web.name}
                layout="responsive"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
