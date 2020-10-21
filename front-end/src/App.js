import React, { useEffect } from 'react';
import { FaCameraRetro, FaTachometerAlt, FaBriefcase, FaArrowDown } from 'react-icons/fa'

import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'

import './App.css';

function App() {

  useEffect(() => {

    window.onscroll = function () {
      "use strict";
      let header = document.querySelector("header");
      let search = document.querySelector(".search-box");
      if (window.pageYOffset > 50) {
        header.style.background = "#2A0052";
        search.style.background = "#FFFF"
      } else {
        header.style.background = "transparent";
        search.style.background = "rgba(255,255,255,0.3)"

      }
    }
  }, []);

  return (

    <div id="root">
      <Header/>
      <section>
        <main>
          <div>
            <h1>Art is Eternal Happiness</h1>
            <a href="#" className="cta">WORK WITH US</a>
          </div>
          <a href="#whatwedo" className="scroll">Scroll down  <FaArrowDown /></a>
        </main>
      </section>
      <section id="whatwedo">
        <div id="title">
          <h1>What we do</h1>
          <hr />
          <p>Vivamus purus lorem, facilisis id nibh eget, facilisis gravida mauris. Maecenas eget volutpat neque</p>
        </div>
        <div id="content">
          <div id="firstItem">
            <FaCameraRetro className='icon' />
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie velit libero, sit amet dignissim sem finibus a. Vivamus porttitor purus et mi suscipit, eget vehicula turpis molestie.</p>
            <a href="#">Learn more</a>
          </div>
          <div id="secondItem">
            <FaTachometerAlt className='icon' />
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie velit libero, sit amet dignissim sem finibus a. Vivamus porttitor purus et mi suscipit, eget vehicula turpis molestie.</p>
            <a href="#">Learn more</a>
          </div>
          <div id="thridItem">
            <FaBriefcase className='icon' />
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie velit libero, sit amet dignissim sem finibus a. Vivamus porttitor purus et mi suscipit, eget vehicula turpis molestie.</p>
            <a href="#">Learn more</a>
          </div>
        </div>
      </section>
      <section>
        <div id="abrirModal" className="modal">
        <Modal />
        </div>
      </section>
    </div>
  );
}

export default App;
