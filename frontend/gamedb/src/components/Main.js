import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Main() {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to GameDB</h2>
        <p>GameDB is a collection of games that you can search, view, and add to.</p>
      </main>
      <Footer />
    </div>
  );
}

export default Main;

