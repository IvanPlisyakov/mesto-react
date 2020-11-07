import React from 'react';
import '../index.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import {EditAvatarPopupChildren,
  EditProfilePopupChildren,
  AddPlacePopupChildren,
} from '../utils/constants.js'

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState('');

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(evt) {
    setSelectedCard(evt.link);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard('');
  }


  

  return (
  <div className="page">
    <Header />
    <Main onCardClick={handleCardClick} onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}/>
    <Footer />
    <PopupWithForm children={EditAvatarPopupChildren} isOpen={isEditAvatarPopupOpen} name="avatar-сhange" title="Обновить аватар" buttonSubmitText="Соханить" onClose={closeAllPopups} />
    <PopupWithForm children={EditProfilePopupChildren} isOpen={isEditProfilePopupOpen} name="profile-сhange" title="Редактировать профиль" buttonSubmitText="Соханить" onClose={closeAllPopups} />
    <PopupWithForm children={AddPlacePopupChildren} isOpen={isAddPlacePopupOpen} name="adding-a-picture" title="Новое место" buttonSubmitText="Соханить" onClose={closeAllPopups} />
    <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
  </div>

  );
}

export default App;

/*
      <section className="popup form form_new-avatar">
        <form className="profile-form" name="avatar-сhange" noValidate>
          <h2 className="profile-form__title">Обновить аватар</h2>
          <label className="profile-form__field">
            <input className="profile-form__user profile-form__user_data_info" id="avatar-input" type="url" name="adding-a-picture" placeholder="Ссылка на аватар" required/>
            <span className="profile-form__user-error" id="avatar-input-error"></span>
          </label>
          <button className="profile-form__btn-save" type="submit">Сохранить</button>
          <button className="profile-form__btn-close" type="reset"></button>
        </form>
      </section>
      <section className="popup form form_edit-button">
        <form className="profile-form" name="profile-сhange" noValidate>
          <h2 className="profile-form__title">Редактировать профиль</h2>
          <label className="profile-form__field">
            <input className="profile-form__user profile-form__user_data_name" id="name-input" type="text" name="profile-сhange" minLength="2" maxLength="40" required/>
            <span className="profile-form__user-error" id="name-input-error">fygiigfygiifygiigfygiifygiigfygiifygiigfygiifygiigfygiifygiigfygiifygiigfygii</span>
          </label>
          <label className="profile-form__field">
            <input className="profile-form__user profile-form__user_data_info" id="info-input" type="text" name="profile-сhange" minLength="2" maxLength="200" required/>
            <span className="profile-form__user-error" id="info-input-error">f ygiigfygiifygiigf ygiifygiigfyg iifygiigfy giifyg iifygiigfygii fygiigfygiifyg iigfygiifygiig fygiifygii</span>
          </label>
          <button className="profile-form__btn-save" type="submit">Сохранить</button>
          <button className="profile-form__btn-close" type="reset"></button>
        </form>
      </section>
      <section className="popup form form_add-button">
        <form className="profile-form" name="adding-a-picture" noValidate>
          <h2 className="profile-form__title">Новое место</h2>
          <label className="profile-form__field">
            <input className="profile-form__user profile-form__user_data_name" id="title-input" type="text" name="adding-a-picture" placeholder="Название" minLength="2" maxLength="30" required/>
            <span className="profile-form__user-error" id="title-input-error"></span>
          </label>
          <label className="profile-form__field">
            <input className="profile-form__user profile-form__user_data_info" id="link-input" type="url" name="adding-a-picture" placeholder="Ссылка на картинку" required/>
            <span className="profile-form__user-error" id="link-input-error"></span>
          </label>
          <button className="profile-form__btn-save" type="submit">Сохранить</button>
          <button className="profile-form__btn-close" type="reset"></button>
        </form>
      </section>
      <section className="popup form form_delete-popup">
        <form className="profile-form" noValidate>
          <h2 className="profile-form__title profile-form__title_delete-popup">Вы уверены?</h2>
          <button className="profile-form__btn-save" type="submit">Да</button>
          <button className="profile-form__btn-close" type="reset"></button>
        </form>
      </section>
      <template id="card">
        <div className="element">
          <div className="element__overlay">
            <img className="element__image" src="images/element-rnb_club.jpg" alt=""/>
          </div>
          <button className="element__btn-delete element__btn-delete_inactive" type="button">
            <img className="element__img-cap" src="images/element__img-cap.svg" alt=""/>
            <img className="element__img-urn" src="images/element__img-urn.svg" alt=""/>
          </button>
          <div className="element__column">
            <h4 className="element__title"></h4>
            <div className="element__column-like">
              <button className="element__btn-like" type="button"></button>
              <p className="element__number-like">15252</p>
            </div>
          </div>
        </div>
      </template>



        <div className="popup picture-opening">
          <div className="picture-opening__box">
            <img className="picture-opening__img" src="images/picture-opening_ERROR.jpg" alt=""/>
            <p className="picture-opening__title"></p>
            <button className="profile-form__btn-close" type="reset"></button>
          </div>
        </div>
*/
