import React,{useState} from 'react';

import ButtonFox from './ButtonFox';
import warning from "./metamaskWarning.png"
function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
      <div role="button"  className={show ? "overlay-ematamsk show" : "overlay-ematamsk"}  onClick={handleClose}></div>
        <ButtonFox onClick={handleShow} />

        <div className={show ? "modal-metamask show " : " modal-metamask "}>
        <button className="close-button"  onClick={handleClose}>&#10006;</button>


          <h3>Cambia la red de la cartera</h3>

              <img alt='warning' src={warning}/>
              <div>
                <p>Cambia la red de la cartera en la aplicación MetaMask para agregar este contrato.</p>
              </div>


            <button className="btn gold"  onClick={handleClose}>
              Entiendo
            </button>


        </div>
      </>
    );
  }

  export default Example;