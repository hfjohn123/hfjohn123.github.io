import { useEffect, useState } from "react";
import Typed from "typed.js";

export default function Header() {
  const [typed, setTyped] = useState(false);
  useEffect(() => {
    const typed = new Typed("#typed", {
      strings: [
        '<span style="color: orange; ">public class</span> QiSong {' +
          '<br>&emsp;&emsp;<span style="color: orange; ">public static void</span> <span style="color: #f4d47c">main</span>(String[] args){' +
          '<br><br>&emsp;&emsp;&emsp;&emsp;System.<span style="color: violet;">out</span>.println( <span style="color: forestgreen">"Hello World!"</span> );' +
          "<br><br>&emsp;&emsp;}" +
          "<br>}",
      ],
      typeSpeed: 10,
      showCursor: false,
      onComplete: () => {
        setTyped(true);
      },
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header className="h-[calc(100vh-4rem)] flex flex-col print:hidden">
      <div className="bg-slate-900 flex-1 flex justify-center items-center">
        <span
          className={`text-lg md:text-4xl text-white transition-all duration-500 select-none absolute  ${
            typed ? "blur" : ""
          }`}
          id="typed"
        />
        <div
          className={` text-white transition-all duration-500  ${
            typed ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className={`text-8xl`}>Hello World!</h1>
          <br />
          <h2 className={`text-6xl`}>Welcome to my portfolio!</h2>
        </div>
      </div>
    </header>
  );
}
