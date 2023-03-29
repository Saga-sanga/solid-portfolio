import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class='min-h-screen flex flex-col items-center justify-center gap-8'>
        <h1 class='text-5xl text-semibold'>Hello! I'm Reckson Khiangte</h1>
        <h2 class='text-3xl'>Welcome to my site!</h2>
        <p>This is a Work In Progress...</p>
      </header>
    </div>
  );
};

export default App;
