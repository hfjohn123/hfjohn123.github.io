import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useFloating, autoUpdate, flip, shift } from "@floating-ui/react";
import { useState, useEffect } from "react";
import { Link, scrollSpy } from "react-scroll";

const navigation = [
  { name: "Welcome", href: "Welcome" },
  { name: "Introduction", href: "Introduction" },
  { name: "Skills", href: "Skills" },
  { name: "Projects", href: "This Website" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [flip(), shift()],
  });
  useEffect(() => {
    scrollSpy.update();
  }, []);
  return (
    <div className={`bg-stone-800 sticky z-50 top-0 ${className}}`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 items-center justify-between lg:h-20">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              ref={refs.setReference}
              onClick={() => setIsOpen((prev) => !prev)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-stone-400 hover:bg-stone-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="../favicon.ico"
                alt="Qi's Portfolio Icon"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    activeClass="bg-stone-600 text-white"
                    key={item.name}
                    to={item.href}
                    spy={true}
                    smooth={true}
                    className="text-stone-300 hover:bg-stone-700 hover:text-white rounded-md px-3 py-2 text-md font-medium lg:text-lg"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div ref={refs.setFloating} style={{ ...floatingStyles }}>
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                activeClass="bg-stone-600 text-white"
                to={item.href}
                smooth={true}
                spy={true}
                className="text-stone-300 hover:bg-stone-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium bg-stone-500"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
