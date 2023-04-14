import type { Component } from 'solid-js';
import profile from './assets/profile.jpeg'
import { NavBar } from './components/NavBar';

import github from './assets/github.svg'
import linkedin from './assets/linkedin_logo_icon.svg';
import twitter from './assets/twitter_logo_icon.svg'
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <NavBar/>
      <section class='min-h-full mt-12 flex flex-col items-center justify-center gap-8'>
        <img class='mask mask-circle border-8 border-primary rounded-full' src={profile} alt="profile image" width={250} height={250}/>
        <h1 class='text-5xl font-bold'>Hello! I'm Reckson Khiangte 👋</h1>
        <h2 class='text-3xl max-w-xl'>I'm a <b>Web Developer</b> who's currently learning and transitioning into <b>Web3</b>. Delving into the world of <b>Blockchain</b> with all it's cutting edge goodness.</h2>
        <p>🚧 This is a Work In Progress... 🚧</p>
        <article>
          {/* TODO: Add bookmarked socials style from Twitter & Socials Icons*/}
          <ul class='flex gap-6'>
            <li class='hover:opacity-60'><a href="https://github.com/Saga-sanga" target='_blank'><img src={github} alt="github" width={30} height={30}/></a></li>
            <li class='hover:opacity-60'><a href="https://twitter.com/RecksonKhiangte" target='_blank'><img src={twitter} alt="twitter" width={30} height={30}/></a></li>
            <li class='hover:opacity-60'><a href="https://www.linkedin.com/in/reckson-khiangte-65a2a3190/" target='_blank'><img src={linkedin} alt="linkedin" width={30} height={30}/></a></li>
          </ul>
        </article>
      </section>
    </div>
  );
};

export default App;
