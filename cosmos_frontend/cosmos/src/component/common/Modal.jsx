import React from 'react'; 

import SignIn from "../../view/SignIn.jsx";
import DaumPostcode from '../common/DaumPostCode.jsx';

import "../../style/component/common/Modal.scss"

function Modal(props) {

    const { open, close, target } = props;
    
    return (
      // <div className={ open ? 'modal active' : 'modal'} onClick={close}>
      <div className={ open ? 'modal active' : 'modal'}>
        <div className="modal_main">
          <div className="modal_head">
            <button onClick={close}>close</button>
          </div>
          <div className="modal_body">
              {target === 'login' && <SignIn close={close}/>}
              {target === 'address' && <DaumPostcode/>}
          </div>
        </div>
      </div>
    );
}
  
export default Modal;