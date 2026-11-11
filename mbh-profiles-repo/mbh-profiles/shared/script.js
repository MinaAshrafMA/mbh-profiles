/* =============================================================
   MBH · Partner Digital Identity  —  script.js
   Deliberately tiny. The page works without it; this only adds
   graceful fallbacks while the real assets are still missing.
   ============================================================= */
(function () {
  'use strict';

  /* 1 ─ Portrait: if assets/partner.jpg is missing, show the monogram panel */
  var portrait = document.querySelector('.portrait');
  var photo = portrait && portrait.querySelector('img');

  function markEmpty() { portrait.classList.add('is-empty'); }

  if (photo) {
    // The image may already have failed before this script ran
    if (photo.complete && photo.naturalWidth === 0) markEmpty();
    photo.addEventListener('error', markEmpty, { once: true });
  }

  /* 2 ─ Logo: if assets/logo.svg is missing, show the text wordmark */
  var logo = document.querySelector('.brand img');
  var wordmark = document.querySelector('.brand__text');

  function showWordmark() {
    if (logo) logo.hidden = true;
    if (wordmark) wordmark.hidden = false;
  }

  if (logo && wordmark) {
    if (logo.complete && logo.naturalWidth === 0) showWordmark();
    logo.addEventListener('error', showWordmark, { once: true });
  }

  /* 3 ─ Placeholder links: anything still containing "REPLACE" (or just "#")
         is disabled so nobody dials or opens a dummy address.
         Once you paste in the real phone number / URL it activates by itself. */
  var links = document.querySelectorAll('a[href]');

  Array.prototype.forEach.call(links, function (a) {
    var href = a.getAttribute('href');
    if (href === '#' || /replace/i.test(href)) {
      a.setAttribute('aria-disabled', 'true');
      a.addEventListener('click', function (e) {
        e.preventDefault();
        if (window.console && console.info) {
          console.info('MBH profile: this link is still a placeholder (' + href + ').');
        }
      });
    }
  });

  /* 4 ─ Older iOS Safari only shows :active feedback if a touch listener exists */
  document.addEventListener('touchstart', function () {}, { passive: true });
})();
