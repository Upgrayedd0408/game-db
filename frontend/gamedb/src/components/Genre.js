import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Genre.css';

function Genre() {
  return (
    <div className="genre">
      <Header />
      <h2 className="genre-title">Genre: RPG</h2> {/* This will be dynamic later */}
      <table className="genre-table">
        <thead>
          <tr>
            <th>Games</th>
          </tr>
        </thead>
        <tbody>
          {/* Data will be populated here */}
        </tbody>
      </table>
      <Footer />
    </div>
  );
}

export default Genre;