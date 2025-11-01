(function () {
  const DARK_THEME_COLOR = '#0a0c12';
  const LIGHT_THEME_COLOR = '#eff4ff';
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  function resolveTheme(value) {
    return value === 'light' ? 'light' : 'dark';
  }

  function updateThemeColor(theme) {
    if (!themeColorMeta) {
      return;
    }
    const normalized = resolveTheme(theme);
    const color = normalized === 'light' ? LIGHT_THEME_COLOR : DARK_THEME_COLOR;
    themeColorMeta.setAttribute('content', color);
  }

  document.addEventListener('themechange', event => {
    updateThemeColor(event.detail);
  });

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const serviceWorkerUrl = new URL('service-worker.js', document.baseURI).href;
      navigator.serviceWorker.register(serviceWorkerUrl, { scope: './' }).catch(error => {
        console.error('Service worker registration failed:', error);
      });
    });
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    updateThemeColor(document.body.dataset.theme);
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      updateThemeColor(document.body.dataset.theme);
    });
  }
})();
