import About from "./components/about";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Tech from "./components/tech";
import Intern from "./intern";
import { useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => {};
  }, []);

  return (
    <div className="scroll-smooth  " style={{ scrollBehavior: "smooth" }}>
      {loading ? (
        <PacmanLoader
          className="  sm:ml-[310px] sm:mt-[400px] md:ml-[300px] md:mt-[400px] lg:ml-[400px] lg:mt-[400px] xl:ml-[700px] 2xl:ml-[900px]"
          size={40}
          loading={loading}
          color={"#FFFFFF"}
        />
      ) : (
        <div>
          {" "}
          <div>
            <Navbar />
          </div>
          <div className="about">
            <About />
          </div>
          <div>
            <Tech />
          </div>
          <div>
            <Intern />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}
