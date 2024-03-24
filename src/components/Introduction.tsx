import { useState } from "react";

export default function Introduction() {
  const [hovered, setHovered] = useState(false);
  return (
    <section className="flex justify-evenly h-screen items-center flex-col px-5 pt-8 lg:flex-row lg:px-0 ">
      {/* <div className="basis-5/12 flex justify-evenly items-center w-full h-full bg-[url('../assets/photo1.jpg')] bg-contain bg-center bg-no-repeat">
        <div className=" w-full h-full flex justify-evenly items-center backdrop-blur-sm">
        </div>
      </div> */}
      <div className="basis-5/12 flex justify-evenly items-center relative w-full lg:h-full ">
        <img
          className={`absolute object-cover h-full lg:w-full lg:h-auto rounded-3xl transition-all duration-500
          ${hovered ? "" : "blur-sm"}`}
          src="../assets/photo1.jpg"
          alt="Qi's photo"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />

        {!hovered && (
          <p className="text-2xl sm:text-3xl lg:text-5xl text-white z-10 select-none">
            o(*////▽////*)q
          </p>
        )}
      </div>
      <div className="basis-5/12 text-md md:text-xl lg:text-3xl">
        <p>
          <b>Qi Song</b>
          <br />
          E-mail: <a href="mailto:qsong7@uci.edu">qsong7@uci.edu</a>
          <br />
          Tel: <a href="tel:+1-(949)414-7432">+1-(949)414-7432</a>
          <br />
          <br />
          <span>
            Self-motivated software engineer with 2+ years of experience. BS in
            Computer Science from Rutgers, New Brunswick. Master in Data Science
            from UCI. Actively looking for new opportunities.
          </span>
        </p>
      </div>
    </section>
  );
}
