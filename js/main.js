// Mobile navigation toggle
(function () {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const nav = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isOpen);
      nav.classList.toggle('is-open');
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Close nav when clicking a link
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---------------------------------------------------
  // Future: Bandsintown / Songkick integration
  // ---------------------------------------------------
  // To add upcoming shows, create a "shows" section in
  // index.html and fetch data here. Example:
  //
  // async function loadShows() {
  //   const res = await fetch(
  //     'https://rest.bandsintown.com/artists/Timothy%20Wayne/events?app_id=YOUR_APP_ID'
  //   );
  //   const events = await res.json();
  //   const container = document.getElementById('shows-list');
  //   events.forEach(event => { /* render event */ });
  // }
  //
  // loadShows();
  // ---------------------------------------------------
})();
