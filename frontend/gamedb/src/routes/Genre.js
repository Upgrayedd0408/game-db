import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Genre.scss';

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