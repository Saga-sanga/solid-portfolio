import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <h1>Hello! I'm Reckson Khiangte</h1>
        <h2>Welcome to my site! This is a Work In Progress</h2>
      </header>
    </div>
  );
};

export default App;
