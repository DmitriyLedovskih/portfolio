import projectHowToLearn from '../images/project-how-to-learn.png';
import projectMesto from '../images/project-mesto.png';
import projectRussianTravel from '../images/project-russian-travel.png';
import projectWhereWillIGo from '../images/project-where-will-i-go.png';

export const cardArray = [
  {
    title: 'Место',
    link: 'https://dmitriyledovskih.github.io/mesto/',
    image: projectMesto,
    descr: 'Этот проект похож на социальную сеть. Можно добавлять, лайкать и удалять карточки, изменять профиль и аватарку, карточки сохраняются на сервере Яндекс.Практикума.'
  },
  {
    title: 'Путешествие по России',
    link: 'https://dmitriyledovskih.github.io/russian-travel/',
    image: projectRussianTravel,
    descr: 'Адаптивный сайт о путешествие по России на поезде. Этот проект расскажет вам про интересные места России.'
  },
  {
    title: 'Куда бы я поехал',
    link: 'https://dmitriyledovskih.github.io/where-will-i-go/',
    image: projectWhereWillIGo,
    descr: 'В этом проекте рассказывается о путешествиях и мыслях разных людей о них.'
  },
  {
    title: 'Научиться учиться',
    link: 'https://dmitriyledovskih.github.io/how-to-learn/',
    image: projectHowToLearn,
    descr: 'Лендинг о современном и эффективном подходе к обучению.'
  }
];

export const header = document.querySelector('.header');
export const menuLinks = document.querySelectorAll('.menu__link');
export const popupTypeImage = document.querySelector('.popup_type_image');
export const cardsContainer = document.querySelector('.projects__cards');
export const burger = document.querySelector('.burger');
export const burgerLine = document.querySelector('.burger__line');
export const headerNav = document.querySelector('.header__nav');
