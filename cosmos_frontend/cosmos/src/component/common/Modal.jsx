import React from 'react'; 

import { AiOutlineClose } from "react-icons/ai";

import SignIn from "../../view/SignIn.jsx";
import DaumPostcode from '../common/DaumPostCode.jsx';

import "../../style/component/common/Modal.scss"

function Modal(props) {

    const { open, close, target } = props;
    const setAddress = props.setAddress;
    const address = props.address;

    return (
      // <div className={ open ? 'modal active' : 'modal'} onClick={close}>
      <div className={ open ? 'modal active' : 'modal'}>
        {/* <div className="modal_main"> */}
        <div className={target === 'address' ? 'modal_main address' : 'modal_main'}>
          <div className="modal_head">
            <AiOutlineClose className='pointer' onClick={close}/>
          </div>
          <div className="modal_body">
              {target === 'login' && <SignIn close={close}/>}
              {target === 'address' && <DaumPostcode address={address} setAddress={setAddress}/>}
          </div>
        </div>
      </div>
    );
}
  
export default Modal;