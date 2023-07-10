/* eslint-disable no-console, @typescript-eslint/no-empty-function */
export const GlobalDebug = (function () {
  const savedConsole = console;
  /**
   * @param {boolean} debugOn
   * @param {boolean} suppressAll
   */
  return function (debugOn: any, suppressAll = false) {
    if (debugOn === false) {
      // supress the default console functionality
      console.log = function () {};
      // supress all type of consoles
      if (suppressAll) {
        console.info = function () {};
        console.log = function () {};
        console.error = function () {};
        console.group = function () {};
      } else {
        console.info = savedConsole.info;
        console.log = savedConsole.warn;
        console.error = savedConsole.error;
        console.group = savedConsole.group;
      }
    } else {
      console = savedConsole;
    }
  };
})();
