
const links = document.querySelectorAll('nav a');
    const pages = document.querySelectorAll('.page');

    function setActive(viewId) {
      links.forEach(a => a.classList.toggle('active', a.dataset.view === viewId));
      pages.forEach(p => {
        p.classList.toggle('hidden', p.id !== viewId);
      });
    }

    links.forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        setActive(a.dataset.view);
        location.hash = a.dataset.view;
      });
    });

    window.addEventListener('load', () => {
      const hash = location.hash.replace('#', '') || 'home';
      setActive(hash);
    });