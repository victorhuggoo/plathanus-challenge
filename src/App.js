import React, { useEffect, AllHTMLAttributes } from 'react';
import logo from './images/logo.png';
import './App.css';

function App() {
  
  useEffect(() => {
    interface Header extends AllHTMLAttributes<HTMLHeadingElement>{
      label: string;
    }
    // Atualiza o titulo do documento usando a API do browser
    window.onscroll = function () {
      "use strict";
      let header:Header<> = document.querySelector("header");
      if (window.pageYOffset > 50) {
        header.style.background = "#2A0052";
      } else {
        header.style.background = "transparent";
      }
    }
  },[]);

  return (

    <div id="root">
      <header id="header">
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">What we do?</a></li>
            <li><a href="#">Testimonial</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="search-box">
          <input type="text" name="search" id="search" placeholder="Search..." />
        </div>
      </header>
      <section id="slide">
        <main>
          <div>
            <h1>Art is Eternal Happiness</h1>
            <a href="#" className="cta">WORK WITH US</a>
          </div>
        </main>
      </section>
      <section id="content">
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
