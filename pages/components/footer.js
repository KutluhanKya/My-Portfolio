import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";

function Footer() {
  return (
    <div className="  bottom-0 w-full h-8">
      <div className="flex flex-col justify-center items-center sm:mr-16  ">
        <p className=" text-white dark:text-white  sm:text-2xl md:text-2xl  md:ml-5 lg:text-2xl xl:text-2xl xl:ml-8 mb-5">
          Contact & Follow
        </p>
        <svg class="animate-bounce w-12 h-12 md:text-base bg-white ml-[455px] sm:ml-1  xl:ml-8 md:ml-7 dark:bg-red-500 rounded-full  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-blue-500 md:text-sm dark:text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </svg>
      </div>

      <div className="flex flex-row justify-between">
        <div>
          <p className="text-white sm:ml-2 xl:mt-16 xl:ml-4 sm:mt-9 sm:text-xl md:text-2xl md:mt-16 lg:text-2xl xl:text-2xl ">
            Website of Kutluhan Kaya
          </p>
        </div>
        <div className="flex flex-row sm:mt-6 md:mt-7">
          <div className="m-5">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/kutluhan-kaya-31ba81236/"
              rel="noreferrer"
            >
              {" "}
              <AiFillLinkedin
                className=" text-white  dark:hover:text-red-500 hover:text-black transition delay-75"
                size={45}
              />
            </a>
          </div>
          <div className="m-5">
            <a
              target="_blank"
              href="https://github.com/KutluhanKya"
              rel="noreferrer"
            >
              <AiFillGithub
                className="text-white dark:hover:text-red-500 hover:text-black transition delay-75"
                size={45}
              />
            </a>
          </div>
          <div className="m-5">
            <a
              target="_blank"
              href="https://www.instagram.com/kutlu.kya/"
              rel="noreferrer"
            >
              <AiFillInstagram
                className="text-white dark:hover:text-red-500  hover:text-black transition delay-75"
                size={45}
              />
            </a>
          </div>
          <div className="m-5">
            <a
              target="_blank"
              href="https://twitter.com/KutluhanKaya"
              rel="noreferrer"
            >
              <AiOutlineTwitter
                className="text-white  dark:hover:text-red-500 hover:text-black transition delay-75"
                size={45}
              />
            </a>
          </div>
        </div>

        <div className="mt-16 mr-3">
          <p className="text-white  sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl ">
            kutluhankaya07@icloud.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
