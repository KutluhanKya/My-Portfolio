import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { motion } from "framer-motion";

function Projects() {
  const [apis, setApis] = useState([]);

  const getApis = async () => {
    let response = await axios.get(
      "https://api.github.com/users/KutluhanKya/repos"
    );

    setApis(response.data);
    console.log(response);
  };

  useEffect(() => {
    getApis();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.8,
              },
            },
          }}
        >
          <div className="   grid   sm:grid-cols-1 xl:grid-cols-4 xl:m-5 gap-2 mt-5 ">
            {apis &&
              apis.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="   border-2 border-white rounded-lg bg-white items-center mt-10 mr-7 ml-7 "
                  >
                    <h1 className="mb-3  sm:text-4xl md:text-3xl lg:text-3xl xl:text-4xl dark:text-red-500 text-[#3270e4] flex justify-center mt-3  ">
                      {data.name}
                    </h1>
                    <p className=" sm:text-3xl md:text-2xl lg:text-2xl xl:text-2xl m-6 text-black">
                      {data.description}
                    </p>
                    <div className="flex justify-center sm:text-2xl mb-3">
                      {" "}
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="mr-5"
                        href={data.html_url}
                      >
                        <button className="bg-black text-white p-3 rounded-full dark:hover:text-red-500 hover:text-[#3270e4] delay-75">
                          Github
                        </button>
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        </motion.div>
        <div className="bottom-0 absolute w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Projects;
