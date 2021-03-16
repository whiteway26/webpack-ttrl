function createAnalytics() {
  let count = 0;
  let isDestroyed = false;
  function listener() {
    count++;
  }

  document.addEventListener("click", listener);

  return {
    getClicks() {
      if (isDestroyed) {
        return `Analytics is destroyed. Document clicked ${count} time.`;
      }
      return count;
    },
    destroy() {
      document.removeEventListener("click", listener);
      isDestroyed = true;
    },
  };
}

window.analytics = createAnalytics();
