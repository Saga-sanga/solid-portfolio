import Layout from "./components/Layout";
import apologiaImage from "./assets/projects/apologia-og.webp";
import gateImage from "./assets/projects/gate-hero.webp";
import nodeBlogImage from "./assets/projects/Node-blog.webp";
import github from "./assets/github-btn.svg";
import serverSolid from "./assets/server-solid.svg";

function Projects() {
  return (
    <Layout>
      <div class="card mx-4 border-primary bg-base-100 shadow-xl shadow-secondary hover:shadow-primary ease-in duration-300 delay-0">
        <figure>
          <img
            class="object-cover"
            src={apologiaImage}
            alt="Album"
            width={864}
            height={496}
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold">Mizo Apologia</h2>
          <p>
            A question and answer site inspired by Hashnode with role based user
            authentication for admins and users, comments and user settings.
            Built using <b>NextJS</b>, <b>TRPC</b> and <b>TailwindCSS</b>
          </p>
          <div class="card-actions mt-4 justify-end">
            <a
              href="https://github.com/Saga-sanga/t3-apologia"
              target="_blank"
              class="flex gap-2 btn btn-secondary"
            >
              <img src={github} width={20} height={20} alt="github" />
              Github
            </a>
            <a
              href="https://mizoapologia.org"
              target="_blank"
              class="flex gap-2 btn btn-primary"
            >
              <img src={serverSolid} width={20} height={20} alt="server" />
              Live
            </a>
          </div>
        </div>
      </div>

      <div class="card mx-4 border-primary bg-base-100 shadow-xl shadow-secondary hover:shadow-primary ease-in duration-300 delay-0">
        <figure>
          <img
            class="object-cover"
            src={gateImage}
            alt="Album"
            width={864}
            height={496}
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold">
            GATE ATC College Website
          </h2>
          <p>
            A college website I built for a Christian Theology College with a
            CMS to manage the site content. Built using <b>NextJS</b>,{" "}
            <b>Payload CMS</b> and <b>TailwindCSS</b>
          </p>
          <div class="card-actions mt-4 justify-end">
            <a
              href="https://github.com/Saga-sanga/gate-college"
              target="_blank"
              class="flex gap-2 btn btn-secondary"
            >
              <img src={github} width={20} height={20} alt="github" />
              Github
            </a>
            <a
              href="https://gateatc.org"
              target="_blank"
              class="flex gap-2 btn btn-primary"
            >
              <img src={serverSolid} width={20} height={20} alt="server" />
              Live
            </a>
          </div>
        </div>
      </div>

      <div class="card mx-4 border-primary bg-base-100 shadow-xl shadow-secondary hover:shadow-primary ease-in duration-300 delay-0">
        <figure>
          <img
            class="object-cover"
            src={nodeBlogImage}
            alt="Album"
            width={864}
            height={496}
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold">Node Blog</h2>
          <p>
            A small blog built using <b>Node.js</b>, <b>Express</b> and the EJS
            view engine. This project was created as an exercise to learn
            Node.js and various backend technologies such as <b>JWT</b> for
            authentication and authorization.
          </p>
          <div class="card-actions mt-4 justify-end">
            <a
              href="https://github.com/Saga-sanga/node-blog"
              target="_blank"
              class="flex gap-2 btn btn-secondary"
            >
              <img src={github} width={20} height={20} alt="github" />
              Github
            </a>
            <a
              href="https://node-blog-tuts.onrender.com"
              target="_blank"
              class="flex gap-2 btn btn-primary"
            >
              <img src={serverSolid} width={20} height={20} alt="server" />
              Live
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
