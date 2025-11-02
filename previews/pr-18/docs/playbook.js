(function () {
  const toggle = document.querySelector('[data-sidebar-toggle]');
  const sidebar = document.getElementById('docs-sidebar');
  if (!toggle || !sidebar) {
    return;
  }

  const collapseClass = 'is-collapsed';
  const mediaQuery = window.matchMedia('(max-width: 768px)');

  const setExpandedState = (expanded) => {
    if (expanded) {
      sidebar.classList.remove(collapseClass);
      sidebar.removeAttribute('aria-hidden');
      toggle.setAttribute('aria-expanded', 'true');
    } else {
      sidebar.classList.add(collapseClass);
      sidebar.setAttribute('aria-hidden', 'true');
      toggle.setAttribute('aria-expanded', 'false');
    }
  };

  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    setExpandedState(!isExpanded);
  });

  sidebar.addEventListener('click', (event) => {
    if (!mediaQuery.matches) {
      return;
    }

    const link = event.target.closest('.docs-sidebar__link');
    if (link) {
      setExpandedState(false);
    }
  });

  const handleViewportChange = (event) => {
    if (event.matches) {
      setExpandedState(false);
    } else {
      setExpandedState(true);
    }
  };

  if (typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', handleViewportChange);
  } else if (typeof mediaQuery.addListener === 'function') {
    mediaQuery.addListener(handleViewportChange);
  }

  if (mediaQuery.matches) {
    setExpandedState(false);
  } else {
    setExpandedState(true);
  }
})();
