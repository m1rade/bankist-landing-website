'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');
const navLinks = document.querySelector('.nav__links');

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
navLinks.addEventListener('click', function (e) {
    e.preventDefault();
    // 2. Determine what element originated the event

    // Matching strategy
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});

///////////////////////////////////////
////* Tabbed content */
tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');

    // Guard clause
    if (!clicked) return;

    // Remove active classes
    tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
    tabsContent.forEach(tContent => tContent.classList.remove('operations__content--active'));

    // Change active tab
    clicked.classList.add('operations__tab--active');
    // Activate content area
    tabsContent[clicked.dataset.tab - 1].classList.add('operations__content--active');
});

///////////////////////////////////////
////* Menu fade animation */
const handleHoverLinks = function (event) {
    if (event.target.classList.contains('nav__link')) {
        const link = event.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('.nav__logo');

        siblings.forEach(s => {
            if (s !== link) s.style.opacity = this;
        });
        logo.style.opacity = this;
    }
};

// Passing "argument" into the handler
nav.addEventListener('mouseover', handleHoverLinks.bind(0.5));
nav.addEventListener('mouseout', handleHoverLinks.bind(1));
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
////////////////////////////////////////////////////
//////* DOM Traversing */
/* const h1 = document.querySelector('h1');
// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
// Get all direct children
// console.log(h1.childNodes);
console.log(h1.children); // HTML Collection

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// Find a parent element no matter how far away it is in the DOM tree
// The closest method will select the closest parent element to our h1 element with
// header class. It is almost the opposite of querySelector
h1.closest('.header').style.background = `var(--gradient-secondary)`;

// Going sideways: siblings
// We can only access direct siblings, only the previous and the next one
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);
// All of the siblings
console.log(h1.parentElement.children); // HTMLCollection
[...h1.parentElement.children].forEach(function (el) {
    if (el !== h1) el.style.transform = 'scale(0.5)';
}); */
