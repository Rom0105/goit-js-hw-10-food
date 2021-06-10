import './sass/main.scss';
import menus from './menu.json';
import foodCard from './templates/food-card.hbs';

const markup = foodCard(menus);

const foodRef = document.querySelector('.js-menu');
foodRef.insertAdjacentHTML('beforeend', markup);
