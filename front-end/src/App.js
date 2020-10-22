import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { FaCameraRetro, FaTachometerAlt, FaBriefcase, FaArrowDown } from 'react-icons/fa'

import Header from './components/Header/Header'

import img from './images/bg.jpg'

import './App.css';

const initialValue = {
  file_name: '',
  crypto: '',
  url_name: ''
}

var erer = '';

function App(props) {
  const [uploadImg, setUploadImg] = useState(img)
  const [values, setValues] = useState({values: ''})
  const history = useHistory()


  function onChange(e) {
      let formdata = new FormData()
      const imagedata = e.target.files[0];
      formdata.append('bg', imagedata)
      console.log(formdata.get('bg'));
      erer = imagedata
  }

  function onClick(ev) {
    ev.preventDefault()
    let formdata = new FormData()
    formdata.append('image', erer, erer.name)
    console.log(formdata)
    axios.put('http://localhost:3333/upload/1', formdata)
    .then((response) => {
      history.push('/')
    })
  }

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
      <Header />
      <section>
        <main style={{ background: `url(${uploadImg}) no-repeat center center / cover` }}>
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
            <p className="sub-title">Selecione uma imagem já existente ou faça upload de uma nova imagem</p>
            <form id="form" method="post" enctype="multipart/form-data">
              <div class="input">
                <label for="image">Enviar arquivo</label>
                <input type="file" name="image" onChange={onChange}/>
              </div>
              <br />
              <div className="submit">
                <button className="salvar" onClick={onClick} name="upload">Upload</button>
              </div>
              <br />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
