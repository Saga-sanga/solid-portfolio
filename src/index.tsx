/* @refresh reload */
import { render } from "solid-js/web";
import { inject } from "@vercel/analytics";

import "./index.css";
import App from "./App";
import Projects from "./Projects";

import { Router, Routes, Route } from "@solidjs/router";

import { onMount } from "solid-js";
import { themeChange } from "theme-change";
onMount(async () => {
  themeChange();
});

const root = document.getElementById("root");
inject();

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?"
  );
}

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={App} />
        <Route path="/projects" component={Projects} />
      </Routes>
    </Router>
  ),
  root!
);
