import { A } from "@solidjs/router";

export function NavBar() {
  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <A href="/projects">Projects</A>
            </li>
            <li>
              <a href="https://blog.recksonk.in">Blog</a>
            </li>
          </ul>
        </div>
        <a href="/" class="btn btn-ghost hover:bg-base-100 normal-case text-xl">
          Reckson
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 gap-4">
          <li>
            <A href="/projects">Projects</A>
          </li>
          <li>
            <a href="https://blog.recksonk.in">Blog</a>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        
        <a class="btn btn-primary mr-4" href="mailto:recksonk94@gmail.com">
          Reach Out
        </a>
      </div>
    </div>
  );
}
