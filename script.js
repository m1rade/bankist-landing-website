'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.getElementById('section--1');

const links = document.querySelectorAll('.nav__link');

///////////////////////////////////////
////* Modal window */

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
    btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

///////////////////////////////////////
////* Scrolling sections */
btnScrollTo.addEventListener('click', function (e) {
    // get the coordinates
    const s1coords = section1.getBoundingClientRect();
    // console.log(s1coords);

    // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

    // Visible part of website
    // console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

    // Scrolling old method
    window.scrollTo({
        left: s1coords.left + window.pageXOffset,
        top: s1coords.top + window.pageYOffset,
        behavior: 'smooth',
    });

    // modern method (old browsers do not support)
    // section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////
////* Page navigation */

// Event Delegation
// 1. Add event listener to common parent element
document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();
    // 2. Determine what element originated the event

    // Matching strategy
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});

////////////////////////////////////////////////////////////////////
///////* Selecting Elements */
////////////////////////////////////////////////////////////////////
/* console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
// Returns NodeList
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
// Returns HTMLCollection
console.log(allButtons);
// Also return HTMLCollection
console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML =
    'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// add html element at the beginning
header.prepend(message);
// add at the end
// header.append(message); // but we cannot have the same element in two different places at ones, we should first copy it or clone
// header.append(message.cloneNode(true));
header.append(message);

// header.before(message);
// header.after(message);

// Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
    // a new way
    // message.remove();
    // an old way
    message.parentElement.removeChild(message);
}); */
///////////////////////////////////////////////////////////////////
// Styles, attributes and classes
//////////////////////////////////////////////////////////////////
// Style
/* message.style.backgroundColor = '#37383d';
message.style.width = '110%';
// get style from browser
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// css custom properties
// change style globally
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
// change attribute
logo.alt = 'Beautiful minimalist logo';
console.log(logo.className);
// add custom attribute
console.log(logo.setAttribute('designer', 'Jonas'));
// select custom attribute
console.log(logo.getAttribute('designer'));

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
// uses to store data in html
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('j');
logo.classList.remove('c', 'j');
 */
///////////////////////////////////////////////////////////////////
/////////* Events and Event handlers */
//////////////////////////////////////////////////////////////////
// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//     alert('addEventListener: Great! You are reading the heading!');
//     // h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
// Old school
/* h1.onmouseenter = function (e) {
    alert('addEventListener: Great! You are reading the heading');
}; */
////////////////////////////////////////////////////////////////
///// Bubbling and capturing phases of Event Propagation
/* const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('LINK', e.target, e.currentTarget);

    // Stop propagation
    // e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('CONTAINER', e.target, e.currentTarget);
});
document.querySelector('.nav').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
}); */
