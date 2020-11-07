import React from 'react';
function ImagePopup(props) {
  return (
    <div className={`popup picture-opening ${props.card && 'popup_opened'}`}>
      <div className="picture-opening__box">
        <img className="picture-opening__img" src={props.card} alt=""/>
        <p className="picture-opening__title"></p>
        <button className="profile-form__btn-close" type="reset" onClick={props.onClose}></button>
      </div>
    </div>
  )
}

export default ImagePopup;