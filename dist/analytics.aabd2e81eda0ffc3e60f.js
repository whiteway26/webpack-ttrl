/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./analytics.js ***!
  \**********************/
function createAnalytics() {
  var count = 0;
  var isDestroyed = false;

  function listener() {
    count++;
  }

  document.addEventListener("click", listener);
  return {
    getClicks: function getClicks() {
      if (isDestroyed) {
        return "Analytics is destroyed. Document clicked ".concat(count, " time.");
      }

      return count;
    },
    destroy: function destroy() {
      document.removeEventListener("click", listener);
      isDestroyed = true;
    }
  };
}

window.analytics = createAnalytics();
/******/ })()
;