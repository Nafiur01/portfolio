import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center text-lg mb-2 font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>

      <div className="grid grid-cols-auto my-10 gap-5">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 absolute rounded-md  bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between group-hover:bottom-7 duration-500">
              <div>
                <h2 className="font-semibold ">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center group-hover:bg-lime-300 transition shadow-[2px_2px_4px_#000]">
                <Image src={assets.send_icon} alt="send_icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href=""
        className="w-max mx-auto my-10 flex items-center justify-center gap-2 text-gray-800 border-[0.5px] border-gray-600 py-3 px-9 rounded-full hover:bg-lightHover duration-500"
      >
        Show more <Image src={assets.right_arrow} className="w-4" />
      </a>
    </div>
  );
};

export default Work;
