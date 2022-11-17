import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme == "system" ? systemTheme : theme;

    if (currentTheme == "dark") {
      return (
        <button className="dark:text-white dark:hover:text-red-500 hover:text-white ">
          <svg
            onClick={() => setTheme("light")}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class=" sm:w-8 sm:h-8 xl:w-7 xl:h-7"
          >
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        </button>
      );
    } else {
      return (
        <button className="dark:text-white dark:hover:text-red-500 hover:text-white">
          <svg
            onClick={() => setTheme("dark")}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="sm:w-8 sm:h-8 md:h-8 md:w-8 xl:w-7 xl:h-7 "
          >
            <path
              fillRule="evenodd"
              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      );
    }
  };
  return (
    <div className="navbar">
      <div className="flex flex-row">
        {" "}
        <div className={router.pathname == "/" ? "active " : ""}>
          {" "}
          <Link href="/">
            <a className="ml-10  sm:text-3xl md:text-2xl xl:text-2xl dark:text-white dark:hover:text-red-500 hover:text-white hover:underline transition delay-75">
              Home
            </a>
          </Link>
        </div>
        <div className="project">
          <div
            className={
              router.pathname == "/projects"
                ? "text-white border-b-2 border-white dark:text-red-500 dark:border-b-2 dark:border-red-500 "
                : ""
            }
          >
            {" "}
            <Link href="/projects">
              <a className="sm:text-3xl md:text-2xl xl:text-2xl">Projects</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="mr-7 ">{renderThemeChanger()}</div>
    </div>
  );
}

export default Navbar;
