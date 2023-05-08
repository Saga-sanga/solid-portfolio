import html5 from "../assets/html5.svg";
import css3 from "../assets/css-3.svg";
import javascript from "../assets/javascript.svg";
import typescript from "../assets/typescript.svg";
import reactLogo from "../assets/react.svg";
import tailwindCss from "../assets/tailwind-css.svg";
import nextjs from "../assets/nextjs.svg";

function TechList() {
  return (
    <div class="flex items-center flex-col gap-4">
        <h2 class="text-xl font-bold pb-4 border-b-2 border-neutral">My Tech Stack</h2>
      <div>
        {/* <hr class="w-full" /> */}
      </div>
      <ul class="flex flex-wrap justify-center gap-4">
        <li class="flex items-center justify-center rounded-full h-16 w-16 shadow">
          <img width={32} height={32} src={html5} alt="HTML logo" />
        </li>
        <li class="flex items-center justify-center rounded-full h-16 w-16 shadow">
          <img width={32} height={32} src={css3} alt="CSS logo" />
        </li>
        <li class="flex items-center justify-center rounded-full h-16 w-16 shadow">
          <img width={32} height={32} src={javascript} alt="Javascript logo" />
        </li>
        <li class="flex items-center justify-center rounded-full h-16 w-16 shadow">
          <img width={32} height={32} src={typescript} alt="Typescript logo" />
        </li>
        <li class="flex items-center justify-center rounded-full h-16 w-16 shadow">
          <img width={32} height={32} src={reactLogo} alt="React logo" />
        </li>
        <li class="flex items-center justify-center rounded-full h-16 w-16 shadow">
          <img width={32} height={32} src={nextjs} alt="NextJs logo" />
        </li>
        <li class="flex items-center justify-center rounded-full h-16 w-16 shadow">
          <img
            width={32}
            height={32}
            src={tailwindCss}
            alt="Tailwind CSS logo"
          />
        </li>
      </ul>
    </div>
  );
}

export default TechList;
