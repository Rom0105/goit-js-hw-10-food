import './sass/main.scss';
import menus from './menu.json';
import foodCard from '../src/templates/food-card.hbs';

const foodRef = document.querySelector('.js-menu');
const markup = foodCard(menus);
foodRef.insertAdjacentHTML('beforeend', markup);
