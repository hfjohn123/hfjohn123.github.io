import { Element } from "react-scroll";

export default function Projects({
  title,
  img,
  imgDescription,
  imgUrl,
  children,
  left = true,
}: {
  title: string;
  img?: string | null;
  imgDescription?: string | null;
  imgUrl?: string | null;
  children: React.ReactNode;
  left?: boolean;
}) {
  return (
    <Element
      name={title}
      className="flex justify-evenly items-center flex-col lg:flex-row"
    >
      <h2 className="basis-1/5 lg:hidden order-1">{title}</h2>
      {img && imgDescription && (
        <div
          className={`lg:basis-5/12 flex justify-evenly items-center relative w-full order-1 ${
            left ? "lg:order-1" : "lg:order-2"
          }`}
        >
          {imgUrl && (
            <a
              href={imgUrl}
              download={title}
              target="_blank"
              rel="noreferrer"
              className="w-full h-full flex justify-evenly items-center"
            >
              <img
                className="object-contain h-full lg:w-full lg:h-auto rounded-3xl"
                src={img}
                alt={imgDescription}
              />
            </a>
          )}
          {!imgUrl && (
            <img
              className="object-contain h-full lg:w-full lg:h-auto rounded-3xl"
              src={img}
              alt={imgDescription}
            />
          )}
        </div>
      )}

      <div
        className={`${img && "basis-5/12"} ${
          left ? "lg:order-2" : "lg:order-1"
        }  flex flex-col justify-center gap-10 lg:h-full order-2 `}
      >
        <h1 className="hidden lg:block text-center ">{title}</h1>
        {children}
      </div>
    </Element>
  );
}
