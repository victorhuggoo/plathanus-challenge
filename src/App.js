import React, { useEffect } from 'react';
import logo from './images/logo.png';
import { FaCameraRetro, FaTachometerAlt, FaBriefcase, FaSearch, FaArrowDown } from 'react-icons/fa'
import './App.css';

function App() {

  useEffect(() => {
    // var links = document.querySelector('.link')

    // links.addEventListener('click', () => {
    //   links.classList.remove('selected')
    //   console.log(links);
    // })

    // console.log(links);


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
      <header id="header">
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#whatwedo">What we do?</a></li>
            <li><a href="javascript:void(0)">Testimonial</a></li>
            <li><a href="#abrirModal">Config</a></li>
          </ul>
        </nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="search-box">
          <input type="text" name="search" id="search" placeholder="Search..." />
          <FaSearch />
        </div>
      </header>
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
          <div>
          <a href="#fechar" title="Fechar" className="fechar">x</a>
            <h2>Deseja trocar imagem do background?</h2>
            <p>Seleciona uma imagem já existente ou faça upload de uma nova imagem</p>
            <p>Você pode fazer qualquer coisa aqui, página de Login, pop-ups, ou formulários</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
