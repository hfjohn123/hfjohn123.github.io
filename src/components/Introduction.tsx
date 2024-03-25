import { useState } from "react";
import { Element } from "react-scroll";
import { DocumentArrowDownIcon } from "@heroicons/react/24/solid";
import GitHubIcon from "../assets/github-mark.svg";
import LinkedInIcon from "../assets/Linkedin.png";
export default function Introduction() {
  const [hovered, setHovered] = useState(false);
  return (
    <Element
      name="Introduction"
      className="flex justify-evenly lg:h-screen items-center flex-col px-5 pt-8 lg:flex-row lg:px-0"
      id="Introduction"
    >
      <div className="h-[50vh] lg:basis-5/12 flex justify-evenly items-center relative w-full lg:h-full ">
        <img
          className={`absolute object-cover h-full lg:w-full lg:h-auto rounded-3xl transition-all duration-500 z-0
          ${hovered ? "" : "blur-sm"}`}
          src="../assets/photo1.jpg"
          alt="Qi's photo"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />

        <p
          className={`text-2xl sm:text-3xl lg:text-5xl text-white z-10 select-none ${
            hovered ? "opacity-0 -z-10" : "opacity-100"
          } transition-500 duration-500`}
        >
          o(*////▽////*)q
        </p>
      </div>
      <div className="basis-5/12 text-md md:text-xl lg:text-3xl flex flex-col justify-center gap-10 lg:h-full">
        <p>
          <b>Qi Song</b>
          <br />
          E-mail: <a href="mailto:qsong7@uci.edu">qsong7@uci.edu</a> (preferred)
          <br />
          Tel: <a href="tel:+1-949-414-7432">+1-949-414-7432</a>
          <br />
          <br />
          <span>
            Hey there! I&apos;m a self-motivated software engineer with over 2
            years of experience under my belt. I graduated with a BS in Computer
            Science from Rutgers, New Brunswick, and then went on to get my
            Master&apos;s in Data Science from UCI. Currently, I&apos;m on the
            lookout for new opportunities to grow and challenge myself. Feel
            free to reach out!
          </span>
        </p>
        <div className="justify-center lg:justify-normal flex gap-6 lg:gap-10">
          <button onClick={() => window.print()}>
            <DocumentArrowDownIcon
              className="size-14 md:size-16 lg:size-20
            "
            />
          </button>
          <button
            onClick={() => (location.href = "https://github.com/hfjohn123")}
          >
            <img src={GitHubIcon} className="size-14 md:size-16 lg:size-20" />
          </button>
          <button
            onClick={() => (location.href = "https://www.linkedin.com/in/qs7/")}
          >
            <img
              src={LinkedInIcon}
              className="size-14 md:size-16 lg:size-20 "
            />
          </button>
        </div>
      </div>
    </Element>
  );
}
