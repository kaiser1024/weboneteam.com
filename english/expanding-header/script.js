const topbar = document.querySelector('.topbar');

const main = document.querySelector('main');

let lastScroll = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0 ) {
    topbar.classList.remove('hidden');

    main.classList.remove('no-blur');
    return;
  }

  if (Math.abs(currentScroll - lastScroll) < 5) return;

  if (currentScroll > lastScroll) {
    topbar.classList.add('hidden');
    main.classList.add('no-blur'); 
  } else {
    topbar.classList.remove('hidden');
    main.classList.remove('no-blur');
  }

  lastScroll = currentScroll;
});
