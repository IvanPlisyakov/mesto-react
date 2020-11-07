import React from 'react';
function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  } 
  return (
  <div className="element">
    <div className="element__overlay">
      <img className="element__image" src={props.card.link} onClick={handleClick} alt=""/>
    </div>
    <button className="element__btn-delete element__btn-delete_inactive" type="button">
      <img className="element__img-cap" src="images/element__img-cap.svg" alt=""/>
      <img className="element__img-urn" src="images/element__img-urn.svg" alt=""/>
    </button>
    <div className="element__column">
      <h4 className="element__title">{props.card.name}</h4>
      <div className="element__column-like">
        <button className="element__btn-like" type="button"></button>
        <p className="element__number-like">{props.card.likes.length}</p>
      </div>
    </div>
  </div>
  )
}
export default Card;