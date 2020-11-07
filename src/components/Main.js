import React from 'react';
import Card from './Card';
import {api} from '../utils/Api.js';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  React.useEffect(() => {
    api.getInitialProfile()
    .then((data) => {
      setUserAvatar(data.avatar);
      setUserName(data.name);
      setUserDescription(data.about);
    })
  }, []); 

  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api.getInitialCards()
    .then((data) => {
      setCards(data)
    })
  }, []);


  return (
     <main className="main">
      <section className="profile">
        <div className="profile__overlay">
          <button className="profile__avatar-button" type="button" onClick={props.onEditAvatar}>
            <img className="profile__avatar" src={userAvatar} alt="Аватар вашей страницы"/>
            <div className="profile__avatar-icon"></div>
          </button>
        </div>
        <div className="profile__column">
          <div className="profile__info">
            <h1 className="profile__user-name">{userName}</h1>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
            <p className="profile__user-info">{userDescription}</p>
          </div>
          <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
        </div>
      </section>
      <section className="elements">
      {cards.map((card) => (
        <Card onCardClick={props.onCardClick} card={card} key={card._id} />
      ))}
      </section>
    </main>
 )
}
export default Main;