import React, { useEffect } from 'react';

import './Modal.css'

function Modal() {

    return (

        <div>
            <a href="#fechar" title="Fechar" class="fechar">x</a>
            <h2>Deseja trocar imagem do background?</h2>
            <p class="sub-title">Selecione uma imagem já existente ou faça upload de uma nova imagem</p>
            <form id="form" enctype="multipart/form-data">
                <div class="input">
                    <label for="bg">Enviar arquivo</label>
                    <input type="file" name="bg" />
                </div>
                <br />
                <div class="submit">
                    <button id="vai" class="salvar" type="submit" name="upload">Upload</button>
                </div>
                <br />
                <img id="bg" />
            </form>
        </div>
    );
}

export default Modal;