import menus from './menu.json';
import foodCard from './templates/food-card.hbs';
import './styles.css';

const markup = foodCard(menus);

const foodRef = document.querySelector('.js-menu');
foodRef.insertAdjacentHTML('beforeend', markup);
