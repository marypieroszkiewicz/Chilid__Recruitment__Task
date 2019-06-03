document.addEventListener('DOMContentLoaded', function () {

  /* ---------------------------------------------------- */
  /* ----- SLIDER (SLIDESHOW) IMAGES ----- */
  /* ---------------------------------------------------- */

  let slideIndex = 0;

  function showSlide(index) {
    let slides = document.querySelectorAll('.slider__slide');

    if (index >= slides.length) {
      slideIndex = 0;
    } else if (index < 0) {
      slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[slideIndex].style.display = 'block';
  }

  showSlide(slideIndex);

  setInterval(() => {
    showSlide(++slideIndex)
  }, 4000);

  document.querySelector('.arrow-prev-js').addEventListener('click', () => {
    showSlide(--slideIndex);
  });


  document.querySelector('.arrow-next-js').addEventListener('click', () => {
    showSlide(++slideIndex);
  });

  document.querySelectorAll('.slide__btn').forEach((element) => {
    element.addEventListener('click', function () {
      let btns = Array.prototype.slice.call(this.parentElement.children);
      let btnIndex = btns.indexOf(element);
      showSlide(slideIndex = btnIndex);
    })
  });


  /* ---------------------------------------------------- */
  /* ----- HIGHLIGHT CURRENT PAGE ACTIVE MENU ITEM ----- */
  /* ---------------------------------------------------- */

  const items = document.querySelectorAll('.menu__item');

  function makeActive() {

    items.forEach(elem => elem.classList.remove('active'));
    this.classList.add('active');

  }

  items.forEach(elem => {
    elem.addEventListener('click', makeActive);
  });


  /* ---------------------------------------------------- */
  /* ----- SMOOTH SCROLL NAVIGATION ----- */
  /* ---------------------------------------------------- */

  let mainNavLinks = document.querySelectorAll('js--smooth--scroll');
  let mainSections = document.querySelectorAll('js--section');

  let lastId;
  let cur = [];

  window.addEventListener('scroll', event => {
    let fromTop = window.scrollY;

    mainNavLinks.forEach(link => {
      let section = document.querySelector(link.hash);

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add('current');
      } else {
        link.classList.remove('current');
      }
    });
  });


  /* ---------------------------------------------------- */
  /* ----- TOGGLE HEADER MENU ----- */
  /* ---------------------------------------------------- */

  const btn = document.querySelector('#btnToggle');
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.classList.toggle('menu--show');
    this.classList.toggle('btn-toggle--toggled');
  });


  /* ---------------------------------------------------- */
  /* ----- SHOW / HIDE BOXES ----- */
  /* ---------------------------------------------------- */

  const tabs = document.querySelectorAll('.tabs__el');
  const tabsCnt = document.querySelectorAll('.tab-content');

  function mark(e) {
    e.preventDefault();

    //usuwam klasę aktywna z zakladek
    tabs.forEach(el => el.classList.remove('is-active'));

    //dodaje tylko wybranej
    this.classList.add('is-active');

    const link = this.querySelector('a');
    const href = link.getAttribute('href');
    const targetTab = document.querySelector(href);

    //usuwam aktywna klase z tresci
    tabsCnt.forEach(el => el.classList.remove('is-active'));
    //dodaje tylko wybranej
    targetTab.classList.add('is-active');

  }

  function unmark() {
    tabs.forEach(el => el.classList.remove('is-active'));
    tabsCnt.forEach(el => el.classList.remove('is-active'));
  }

  tabs.forEach(el => {
    el.addEventListener('click', mark);
    // el.addEventListener('mouseover', mark);
    // el.addEventListener('mouseout', mark);
  });

});
