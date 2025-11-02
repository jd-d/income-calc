(function () {
  const THEME_STORAGE_KEY = 'income-planner-theme';
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  const getStoredTheme = () => {
    try {
      return localStorage.getItem(THEME_STORAGE_KEY);
    } catch (error) {
      return null;
    }
  };

  const applyTheme = theme => {
    const normalized = theme === 'light' ? 'light' : theme === 'dark' ? 'dark' : prefersDark.matches ? 'dark' : 'light';
    document.body.dataset.theme = normalized;
  };

  const hasExplicitTheme = () => getStoredTheme() !== null;

  applyTheme(getStoredTheme());

  const handleSystemThemeChange = event => {
    if (!hasExplicitTheme()) {
      applyTheme(event.matches ? 'dark' : 'light');
    }
  };

  if (typeof prefersDark.addEventListener === 'function') {
    prefersDark.addEventListener('change', handleSystemThemeChange);
  } else if (typeof prefersDark.addListener === 'function') {
    prefersDark.addListener(handleSystemThemeChange);
  }

  window.addEventListener('storage', event => {
    if (event.key === THEME_STORAGE_KEY) {
      applyTheme(event.newValue);
    }
  });

  const printButton = document.querySelector('[data-docs-print]');
  printButton?.addEventListener('click', () => {
    window.print();
  });

  const toggle = document.querySelector('[data-sidebar-toggle]');
  const sidebar = document.getElementById('docs-sidebar');

  if (!sidebar) {
    return;
  }

  const collapseClass = 'is-collapsed';
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  const closeButtons = Array.from(sidebar.querySelectorAll('[data-sidebar-close]'));

  const setExpandedState = expanded => {
    const isMobile = mediaQuery.matches;

    if (!isMobile) {
      sidebar.classList.remove(collapseClass);
      sidebar.removeAttribute('aria-hidden');
      toggle?.setAttribute('aria-expanded', 'true');
      return;
    }

    if (expanded) {
      sidebar.classList.remove(collapseClass);
      sidebar.removeAttribute('aria-hidden');
      toggle?.setAttribute('aria-expanded', 'true');
      requestAnimationFrame(() => {
        sidebar.scrollTop = 0;
        if (typeof sidebar.scrollIntoView === 'function') {
          sidebar.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    } else {
      sidebar.classList.add(collapseClass);
      sidebar.setAttribute('aria-hidden', 'true');
      toggle?.setAttribute('aria-expanded', 'false');
    }
  };

  const openSidebar = () => {
    setExpandedState(true);
  };

  const closeSidebar = options => {
    const { restoreFocus = true } = options ?? {};
    if (!mediaQuery.matches) {
      return;
    }

    setExpandedState(false);

    if (restoreFocus && toggle) {
      toggle.focus();
    }
  };

  toggle?.addEventListener('click', () => {
    if (!mediaQuery.matches) {
      return;
    }

    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (mediaQuery.matches) {
        closeSidebar();
      }
    });
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mediaQuery.matches && toggle?.getAttribute('aria-expanded') === 'true') {
      event.preventDefault();
      closeSidebar();
    }
  });

  sidebar.addEventListener('click', event => {
    if (!mediaQuery.matches) {
      return;
    }

    const link = event.target.closest('.docs-sidebar__link');
    if (link) {
      closeSidebar({ restoreFocus: false });
    }
  });

  const handleViewportChange = event => {
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
