// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// jsdom doesn't implement these browser APIs used by the site's effects
window.matchMedia =
  window.matchMedia ||
  ((query) => ({
    matches: false,
    media: query,
    addEventListener: () => {},
    removeEventListener: () => {},
  }));

window.IntersectionObserver =
  window.IntersectionObserver ||
  class {
    observe() {}
    disconnect() {}
  };

window.scrollTo = () => {};
HTMLCanvasElement.prototype.getContext = () => null;
