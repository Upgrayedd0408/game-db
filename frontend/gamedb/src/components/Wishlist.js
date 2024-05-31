import React from 'react';
import Header from './Header'; // import the Header component
import Footer from './Footer'; // import the Footer component
import '../styles/Wishlist.css'; // You'll need to create this file

function Wishlist() {
  return (
    <div className="wishlist">
      <Header />
      <h2 className="wishlist-title">Wishlist</h2>
      <table className="wishlist-table">
        <thead>
          <tr>
            <th>Game</th>
            <th>Genre</th>
            <th>Store URL</th>
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

export default Wishlist;