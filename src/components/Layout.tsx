import { ParentProps } from "solid-js";
import { NavBar } from "./NavBar";

function Layout(props: ParentProps) {
  return (
    <>
      <NavBar />
      <main class="min-h-full mt-16 mb-12 mx-auto flex flex-col items-center justify-center gap-16 max-w-4xl">
        {props.children}
      </main>
    </>
  );
}

export default Layout;
