import Card from '../componets/Card';
import PopupWithImage from '../componets/PopupWithImage';
import Section from '../componets/Section';
import { burger, burgerLine, cardArray, cardsContainer, header, headerNav, menuLinks, popupTypeImage } from '../utils/constact';
import './index.css';

document.addEventListener('scroll', () => {
  let scrollTop = window.scrollY;
  let pos = 10;
  scrollTop >= pos ? header.classList.add('header_active') : header.classList.remove('header_active');
});

menuLinks.forEach(link => {
  link.addEventListener('click', (evt) => {
      evt.preventDefault();
      const linkId = link.getAttribute('href');
      document.querySelector(linkId).scrollIntoView({behavior: 'smooth', block: 'start'});
  });  
});

const popupImage = new PopupWithImage(popupTypeImage);
popupImage.setEventListeners();

const cardsList = new Section({
  items: cardArray.reverse(),
  renderer: (item) => {
    createCard(item);
  }
}, cardsContainer);

function createCard(item) {
  const card = new Card({
    data: item,
    handleCardClick: () => {
      popupImage.open(item);
    }
  }, '.card-template');
  const cardElement = card.createCard();
  cardsList.addItem(cardElement);
}

cardsList.renderItems();

burger.addEventListener('click', () => {
  burger.classList.toggle('burger_active');
  headerNav.classList.toggle('header__nav_active');
  burgerLine.classList.toggle('hidden');
});