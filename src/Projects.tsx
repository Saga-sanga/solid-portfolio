import Layout from "./components/Layout";
import apologiaImage from "./assets/projects/Apologia.webp";
import github from "./assets/github-btn.svg";
import serverSolid from "./assets/server-solid.svg";

function Projects() {
  return (
    <Layout>
      <div class="card mx-4 border-primary bg-base-100 shadow-xl shadow-secondary">
        <figure>
          <img class="object-cover" src={apologiaImage} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold">Question and Answer Site</h2>
          <p>
            A site using <b>Strapi CMS</b> on the backend to update and populate the
            content. Built using <b>NextJS</b> and using Incremental Site Regeneration
            to update the pages on the fly.
          </p>
          <div class="card-actions justify-end">
            <a
              href="https://github.com/Saga-sanga/mizo-apologia"
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
    </Layout>
  );
}

export default Projects;
