import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div id="root">
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">What we do?</a></li>
            <li><a href="#">Testimonial</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
        <div className="logo">
          <img src="images/logo.png" alt="" />
        </div>
        <div className="search-box">
          <input type="text" name="search" id="search" placeholder="Search..." />
        </div>
      </header>
      <section>
        <main>
          <div>
            <h1>Art is Eternal Happiness</h1>
            <a href="#" className="cta">WORK WITH US</a>
          </div>
        </main>
      </section>
    </div>
  );
}

export default App;
