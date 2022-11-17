import React from "react";

function intern() {
  return (
    <div className="flex flex-col justify-center sm:mt-72 sm:mb-72">
      <div className=" flex justify-center    ">
        <p className=" sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl text-white dark:text-red-500  text-shadow-xl">
          INTERNSHIPS
        </p>
      </div>
      <div className="flex  justify-center border-t-2 border-white  ">
        <ul className="flex flex-col text-2xl justify-center mt-5 text-white dark:text-white list-disc">
          <li className="  sm:text-3xl md:text-2xl lg:text-2xl xl:text-2xl">
            <a
              className="hover:text-black  delay-75 dark:hover:text-red-500"
              rel="noreferrer"
              target="_blank"
              href="https://www.ledbim.com/"
            >
              Ledbim Bilişim Danışmanlık ve Ticaret Anonim Şirketi
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default intern;
