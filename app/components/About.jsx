import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center text-lg mb-2 font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      <div className="flex flex-col w-full lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="font-Ovo mb-10 max-w-2xl text-center">
            Frontend & Full-Stack Developer skilled in Next.js, Nodejs, and
            Django. Passionate about building scalable web applications with
            optimized performance. Strong problem-solving abilities with
            experience in Deep Learning research.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({icon,iconDark,title,description},index)=>(
            <li key={index} className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-2 hover:shadow-black duration-500">
                <Image src={icon} alt={title} className="w-6 mt-2" />
                <h3 className="my-3 font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-700 text-sm">{description}</p>
            </li>
            ))}
          </ul>

          <h4 className="font-Ovo my-6 text-gray-700">Tool I use</h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool,index)=>(
              <li key={index} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                <Image src={tool} alt="" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
