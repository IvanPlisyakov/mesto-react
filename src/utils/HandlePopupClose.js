"use strict";
import {keyCodeEsc} from './constants.js';

export class HandlePopupClose {
  constructor(callbackClose) {
    this._callbackClose = callbackClose;
  }
  open() {
    console.log(22222222222222)
    document.addEventListener('keydown', this._handleEscClose);
    document.addEventListener('click', this._handleClickClose);
  }
  
  close() {
    console.log(111111111)
    
    document.removeEventListener('keydown', this._handleEscClose);
    document.removeEventListener('click', this._handleClickClose);
    this._callbackClose();
  }

  _handleEscClose(evt) {
    if(evt.keyCode == keyCodeEsc){
      //this.close.bind(this);
      this.close()
    }
  }

  _handleClickClose(evt) {
    if(evt.target.classList.value.indexOf('popup') > -1){
      this.close();
    }
  }
}

//export const handlePopupClose = new HandlePopupClose();

