import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <section class='min-h-screen flex flex-col items-center justify-center gap-8'>
        <h1 class='text-5xl text-semibold'>Hello! I'm Reckson Khiangte</h1>
        <h2 class='text-3xl'>Welcome to my site!</h2>
        <p>This is a Work In Progress...</p>
        <article>
          {/* TODO: Add bookmarked socials style from Twitter & Socials Icons*/}
          <ul class='flex gap-2'>
            <li class='hover:text-white'><a href="https://github.com/Saga-sanga" target='_blank'>Github</a></li>
            <li class='hover:text-white'><a href="https://twitter.com/RecksonKhiangte" target='_blank'>Twitter</a></li>
            <li class='hover:text-white'><a href="https://www.linkedin.com/in/reckson-khiangte-65a2a3190/" target='_blank'>Linkedin</a></li>
          </ul>
        </article>
      </section>
    </div>
  );
};

export default App;
