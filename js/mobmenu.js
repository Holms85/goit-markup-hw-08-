(() => {
  const refs = {
    openMobmenulBtn: document.querySelector('[data-mobmenu-open]'),
    closeMobmenulBtn: document.querySelector('[data-mobmenu-close]'),
    mobmenu: document.querySelector('[data-mobmenu]'),
  };

  refs.openMobmenulBtn.addEventListener('click', toggleMobmenu);
  refs.closeMobmenulBtn.addEventListener('click', toggleMobmenu);

  function toggleMobmenu() {
    refs.mobmenu.classList.toggle('is-hidden');
  }
})();