import profile from "./assets/profile.jpeg";
import Layout from "./components/Layout";

import github from "./assets/github.svg";
import linkedin from "./assets/linkedin_logo_icon.svg";
import twitter from "./assets/twitter_logo_icon.svg";
import TechList from "./components/TechList";

function App() {
  return (
    <Layout>
      <article class="flex flex-col-reverse items-center md:flex-row gap-10 mx-6 mt-6">
        <div class="flex flex-col items-center md:items-start gap-8 max-w-md">
          <h1 class="text-5xl font-bold md:text-left">
            Hello! I'm Reckson Khiangte 👋
          </h1>
          <h2 class="text-2xl max-w-xl">
            I'm a <b>Front-end Developer</b> from India 🇮🇳
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
            </ul>
          </article>
        </div>
        <img
          class="mask mask-circle border-4 border-primary rounded-full"
          src={profile}
          alt="profile image"
          width={250}
          height={250}
        />
      </article>
      <TechList />
    </Layout>
  );
}

export default App;
