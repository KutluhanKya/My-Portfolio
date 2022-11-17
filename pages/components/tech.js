import Image from "next/image";
import react from "../../public/react2.png";
import next from "../../public/next.svg";
import tailwind from "../../public/tailwind.svg";
import java from "../../public/java.png";
import html from "../../public/html.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

function Tech() {
  const [shouldShowActions, setShouldShowActions] = useState(false);

  const [lastYPos, setLastYPos] = useState(0);
  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = lastYPos < yPos;

      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }
    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);
  return (
    <div className="tech3">
      <motion.div
        className="mt-48"
        animate={{ opacity: shouldShowActions ? 1 : 0 }}
        initial={{ opacity: 0 }}
        transition={{ opacity: { duration: 2 } }}
      >
        <div className="border-b-2 border-white">
          {" "}
          <p className="text-white  sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl text-shadow-xl flex justify-center dark:text-red-500  ">
            MY SKILLS
          </p>
          <span className="text-6xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-xl text-gray-100 dark:text-white flex justify-center">
            -My skills that I continue to develop and learn
          </span>
        </div>

        <div className="flex flex-row mt-4  ml-12">
          {" "}
          <div className="mr-12 ">
            <Image width={80} height={80} src={html} />
            <a
              className="hover:underline"
              target="_blank"
              href="https://html.com/"
              rel="noreferrer"
            >
              <p className=" flex justify-center  sm:text-3xl md:text-3xl lg:text-3xl xl:text-2xl text-white dark:hover:text-red-500">
                Html
              </p>
            </a>
          </div>
          <div className="mr-12 ">
            <Image width={80} height={80} src={java} />
            <a
              className="hover:underline"
              target="_blank"
              href="https://www.javascript.com/"
              rel="noreferrer"
            >
              <p className=" flex justify-center   sm:text-3xl md:text-3xl lg:text-2xl xl:text-2xl text-white dark:hover:text-red-500">
                Javascript
              </p>
            </a>
          </div>
          <div className="mr-12 ">
            <Image width={80} height={80} src={tailwind} />
            <a
              target="_blank"
              className="hover:underline"
              href="https://tailwindcss.com/"
              rel="noreferrer"
            >
              {" "}
              <p className=" flex justify-center text-5xl sm:text-3xl md:text-3xl lg:text-2xl xl:text-2xl text-white dark:hover:text-red-500">
                Tailwind
              </p>
            </a>
          </div>
          <div className="mr-12 ">
            <Image width={80} height={80} src={react} />
            <a
              target="_blank"
              className="hover:underline"
              href="https://reactjs.org/"
              rel="noreferrer"
            >
              {" "}
              <p className=" flex justify-center text-5xl sm:text-3xl md:text-3xl lg:text-2xl xl:text-2xl text-white dark:hover:text-red-500">
                React.js
              </p>
            </a>
          </div>
          <div className="mr-12 ">
            <Image width={80} height={80} src={next} />
            <a
              target="_blank"
              className="hover:underline"
              href="https://nextjs.org/"
              rel="noreferrer"
            >
              {" "}
              <p className=" flex justify-center text-5xl sm:text-3xl md:text-3xl lg:text-2xl xl:text-2xl text-white dark:hover:text-red-500">
                Next.js
              </p>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Tech;
