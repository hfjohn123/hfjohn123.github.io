import { Element } from "react-scroll";

export default function Projects({
  title,
  img,
  imgDescription,
  children,
  left = true,
}: {
  title: string;
  img?: string | null;
  imgDescription?: string | null;
  children: React.ReactNode;
  left?: boolean;
}) {
  return (
    <Element
      name={title}
      className="flex justify-evenly lg:h-screen items-center flex-col px-5 pt-8 lg:flex-row lg:px-0"
    >
      <h2 className="basis-1/5 lg:hidden order-1">{title}</h2>
      {img && imgDescription && (
        <div
          className={`h-[50vh] lg:basis-5/12 flex justify-evenly items-center relative w-full lg:h-full ${
            left ? "order-1" : "order-2"
          }`}
        >
          <img
            className="absolute object-cover h-full lg:w-full lg:h-auto rounded-3xl"
            src={img}
            alt={imgDescription}
          />
        </div>
      )}

      <div
        className={`${img && "basis-5/12"} ${
          left ? "order-2" : "order-1"
        } text-md md:text-xl lg:text-3xl flex flex-col justify-center gap-10 lg:h-full`}
      >
        <h1 className="hidden lg:block text-center text-5xl font-bold	">
          {title}
        </h1>
        {children}
      </div>
    </Element>
  );
}
