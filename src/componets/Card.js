export default class Card {
  constructor({ data, handleCardClick }, template) {
    this._data = data;
    this._handleCardClick = handleCardClick;
    this._template = document.querySelector(template).content.querySelector('.projects__card').cloneNode(true);
    this._cardImage = this._template.querySelector('.projects__card-image');
    this._cardLink = this._template.querySelector('.projects__card-link');
  }

  createCard() {
    this._cardImage.src = this._data.image;
    this._cardImage.alt = `Проект: ${this._data.title}`;
    this._cardLink.textContent = this._data.title;
    this._cardLink.href = this._data.link;
    this._setEventListeners();
    return this._template;
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick();
    });
  }
}