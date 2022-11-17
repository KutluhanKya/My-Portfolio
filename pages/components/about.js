import { motion } from "framer-motion";
import ReactTyped from "react-typed";

function About() {
  return (
    <div className=" m-32">
      <motion.div
        transition={{ duration: 0.8 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
      >
        {" "}
        <div className=" sm:ml-38 md:mr-20 flex justify-center items-center flex-col">
          <ReactTyped
            className=" sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl  underline underline-offset-1 text-shadow-xl dark:text-red-500"
            strings={["FRONT-END DEVELOPER"]}
            typeSpeed={100}
            backSpeed={100}
          />

          <p className="text-white sm:mr-7  sm:text-2xl md:text-2xl lg:text-2xl xl:text-xl ">
            &quot;Practice makes perfect&quot;
          </p>
        </div>
        <div className="image1">
          <div className=" m-4 rounded-lg ">
            {" "}
            <h1 className="  sm:text-5xl md:text-4xl lg:text-4xl xl:text-5xl dark:text-red-500 ml-5 text-shadow-xl">
              WHO AM I ?
            </h1>
            <p className="mt-8 ml-5  text-white  sm:text-3xl md:text-3xl lg:text-3xl xl:text-2xl">
              I&quot;m Kutluhan Kaya. I &quot;m studying Computer Engineering at
              Üsküdar University, 3rd year. I have a competitive personality who
              likes to develop. I like teamwork because of my hobbies. I try to
              keep myself updated on topics that I love.
            </p>
          </div>

          <div className="image3 m-4 rounded-lg ">
            {" "}
            <h1 className="  sm:text-5xl md:text-4xl lg:text-4xl xl:text-5xl ml-5 text-shadow-xl dark:text-red-500">
              HOW IT STARTED ?
            </h1>
            <p className="mt-8 ml-5  text-white  sm:text-3xl md:text-3xl lg:text-3xl xl:text-2xl ">
              While I was doing my volunteer internship, 2rd year, I was trying
              to make an admin dashboard with React. It caught my attention and
              I wanted to improve myself.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
