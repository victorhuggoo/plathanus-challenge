import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { FaCameraRetro, FaTachometerAlt, FaBriefcase, FaArrowDown } from 'react-icons/fa'

import Header from '../components/Header/Header'

import img from '../images/bg.jpg'

import './Main.css';

var valuesImg = '';

function Main() {
  const [uploadImg, setUploadImg] = useState(img)
  const [redirect, setRedirect] = useState(false)

  function getBgImg() {
    axios.get("http://localhost:3333/")
      .then((response) => {
        console.log(response.data[0].url_img);
        setUploadImg(response.data[0].url_img)
      })
  }

  function onChange(e) {
    const imagedata = e.target.files[0];
    valuesImg = imagedata
    if (valuesImg) {
      document.querySelector("#enviarArquivo").innerHTML = valuesImg.name
    } else {
      document.querySelector("#enviarArquivo").innerHTML = 'Enviar Arquivo'
    }
  }

  function onClick(ev) {
    ev.preventDefault()
    let formdata = new FormData()
    formdata.append('image', valuesImg, valuesImg.name)
    console.log(formdata)
    axios.put('http://localhost:3333/upload/1', formdata)
      .then((response) => {
          getBgImg();
          setRedirect(true)
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
    <>
      {redirect && <Redirect to="/" /> }
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
          <div id="div-modal">
            <a href="#fechar" title="Fechar" className="fechar">x</a>
            <h2>Deseja trocar imagem do background?</h2>
            <p className="sub-title">Faça upload de uma nova imagem</p>
            <form id="form" method="post" enctype="multipart/form-data">
              <div class="input">
                <label id="enviarArquivo" for="image">Enviar arquivo</label>
                <input type="file" accept=".jpg, .png, .gif, .jpeg" name="image" onChange={onChange} />
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
    </>
  );
}

export default Main;
