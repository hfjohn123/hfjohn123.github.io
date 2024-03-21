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
      typeSpeed: 20,
      onComplete: () => {
        setTyped(true);
      },
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="bg-slate-900 h-screen">
      <span
        className={`text-4xl text-white transition-all duration-300 select-none  ${
          typed ? "blur" : ""
        }`}
        id="typed"
      />
      {typed && <h1 className="text-4xl text-white">Hello World!</h1>}
    </div>
  );
}
