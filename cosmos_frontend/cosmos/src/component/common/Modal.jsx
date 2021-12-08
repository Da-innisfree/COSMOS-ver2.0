import React from 'react'; 

import SignIn from "../../view/SignIn.jsx";

import "../../style/component/common/Modal.scss"

function Modal(props) {

    const { open, close } = props;

    return (
      <div className={ open ? 'modal active' : 'modal'}>
        <div className="modal_main">
            <button onClick={close}>close</button>
            <div>
                <SignIn/>
            </div>
        </div>
      </div>
    );
}
  
export default Modal;