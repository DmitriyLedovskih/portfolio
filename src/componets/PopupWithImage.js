import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popupImage = document.querySelector('.popup__container-image');
    this._popupLink = document.querySelector('.popup__container-link');
  }

  open(data) {
    super.open();
    
    this._popupImage.src = data.image;
    this._popupImage.alt = `Проект: ${data.title}`;
    this._popupLink.textContent = data.title
    this._popupLink.href = data.link;
  }
}