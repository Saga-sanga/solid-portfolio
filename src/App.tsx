import profile from "./assets/profile_ai.png";
import Layout from "./components/Layout";

import resume from "./assets/documents/Developer_Resume.pdf";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin_logo_icon.svg";
import twitter from "./assets/twitter_logo_icon.svg";
import TechList from "./components/TechList";

function App() {
  return (
    <Layout>
      <article class="flex flex-col-reverse items-center md:flex-row gap-10 mx-6 mt-6">
        <div class="flex flex-col items-center md:items-start gap-8 max-w-md">
          <h1 class="text-5xl font-bold text-center md:text-left">
            Hello! I'm Reckson Khiangte 👋
          </h1>
          <h2 class="text-lg max-w-xl text-center md:text-left">
            I'm a <b>Web Developer</b> with a passion for creating functional and user-friendly web applications. I would impore you to look around and see if anything is to your tastes.
          </h2>
          <article>
            <ul class="flex gap-4">
              <li class="hover:scale-110 ease-in duration-200">
                <a href="https://github.com/Saga-sanga" target="_blank">
                  <img src={github} alt="github" width={30} height={30} />
                </a>
              </li>
              <li class="hover:scale-110 ease-in duration-200">
                <a href="https://twitter.com/RecksonKhiangte" target="_blank">
                  <img src={twitter} alt="twitter" width={30} height={30} />
                </a>
              </li>
              <li class="hover:scale-110 ease-in duration-200">
                <a
                  href="https://www.linkedin.com/in/reckson-khiangte-65a2a3190/"
                  target="_blank"
                >
                  <img src={linkedin} alt="linkedin" width={30} height={30} />
                </a>
              </li>
              <li class="hover:scale-110 ease-in duration-200">
                <a href={resume} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-base-content"
                    width="30px"
                    height="30px"
                    viewBox="0 0 512 512"
                  >
                    <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V304H176c-35.3 0-64 28.7-64 64V512H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56H192v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V448 368c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H192v48h16zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H304c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H320v96h16zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V432 368z" />
                  </svg>
                </a>
              </li>
            </ul>
          </article>
        </div>
        <img
          class="border-4 border-primary rounded-full hover:border-secondary hover:scale-110 ease-in duration-500"
          src={profile}
          alt="profile image"
          width={250}
          height={250}
        />
      </article>
      <TechList />
      <a href="https://www.buymeacoffee.com/recksonk94k" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 3rem !important;width: 176px !important;" /></a>
    </Layout>
  );
}

export default App;
