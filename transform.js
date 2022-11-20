const postcss = require('postcss');
const postcssJs = require("postcss-js");

const toJSSObject = (cssText) => {
  const root = postcss.parse(cssText);
  return postcssJs.objectify(root);
};

module.exports = {
  toJSS: (cssText) => {
    try {
      return JSON.stringify(toJSSObject(cssText), null, 2);
    } catch (e) {
      return {error: "Error translating CSS to JSS"};
    }
  }
}
