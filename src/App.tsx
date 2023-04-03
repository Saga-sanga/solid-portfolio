import type { Component } from 'solid-js';
import profile from './assets/profile.jpeg'
import { NavBar } from './components/NavBar';

import devLogo from './assets/dev-logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <NavBar/>
      <section class='min-h-full mt-12 flex flex-col items-center justify-center gap-8'>
        <img class='mask mask-circle border-8 border-accent rounded-full' src={profile} alt="profile image" width={250} height={250}/>
        <h1 class='text-5xl text-semibold'>Hello! I'm Reckson Khiangte</h1>
        <h2 class='text-3xl'>Web Developer</h2>
        <p>This is a Work In Progress...</p>
        <article>
          {/* TODO: Add bookmarked socials style from Twitter & Socials Icons*/}
          <ul class='flex gap-2'>
            <li class='hover:opacity-60'><a href="https://github.com/Saga-sanga" target='_blank'>Github</a></li>
            <li class='hover:opacity-60'><a href="https://twitter.com/RecksonKhiangte" target='_blank'>Twitter</a></li>
            <li class='hover:opacity-60'><a href="https://www.linkedin.com/in/reckson-khiangte-65a2a3190/" target='_blank'>Linkedin</a></li>
          </ul>
        </article>
      </section>
    </div>
  );
};

export default App;
