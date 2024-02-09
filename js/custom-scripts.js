'use strict';

document.addEventListener("DOMContentLoaded", () => {

  /* Actual date */
  (() => {
    let date_items = document.querySelectorAll('.js-actual-date');

    let d = new Date();
    let p = new Date(d.getTime() - 0 * 86400000);

    let offer_month = new Date(d.getTime() - 0 * 86400000);

    p.setMonth(p.getMonth() - 1); // -1 for prev month; +1 for next month

    let monthA = 'gennaio,febbraio,marzo,aprile,maggio,giugno,luglio,agosto,settembre,ottobre,novembre,dicembre'.split(',');

    for (let i=0; i < date_items.length; i++) {
      date_items[i].innerHTML = p.getDate() + ' ' + monthA[p.getMonth()] + ' ' + p.getFullYear();
    }

    document.getElementById('js_date_before').innerHTML = p.getDate() + ' ' + monthA[p.getMonth()];
    document.getElementById('js_date_after').innerHTML = p.getDate() + ' ' + monthA[offer_month.getMonth()];
  })();

  /* Anchor smooth scroll */
  (() => {
    let scroll_links = document.querySelectorAll('a[href^="#"]');
    let scroll_offset = -30;

    scroll_links.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.body.classList.remove('opened-menu');
        document.body.classList.remove('ov-hidden');
        document.querySelector('.site-header').classList.remove('active');

        const offset = scroll_offset,
          element = document.querySelector(this.getAttribute('href')),
          target = element.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({top: target, behavior: 'smooth'});
      });
    });
  })();

});