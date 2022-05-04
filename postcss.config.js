// https://tailwindcss.com/docs/using-with-preprocessors#nesting

const postcssImport = require('postcss-import');
const tailwindcssNesting = require('tailwindcss/nesting')(require('postcss-nesting'));
const tailwindcss = require('tailwindcss');
const postcssPresetEnv = require('postcss-preset-env')({
  stage: 1, // Default: stage: 2   @ https://cssdb.org/#staging-process
  importFrom: 'src/assets/css/base/settings.css',
  autoprefixer: {
    grid: 'autoplace',
  },
  features: {
    'nesting-rules': false,
    'custom-properties': {
      disableDeprecationNotice: true,
    },
  },
});
const postcssSortMediaQueries = require('postcss-sort-media-queries');
const postcssCombineSelectors = require('postcss-combine-duplicated-selectors');
const pxtorem = require('postcss-pxtorem')({
  replace: false,
});
const postcssCalc = require('postcss-calc');
const postcssPseudoIs = require('postcss-pseudo-is');
const postcssHexrgba = require('postcss-hexrgba');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssReporter = require('postcss-reporter')({
  positionless: 'last',
});

module.exports = {
  plugins: [
    postcssImport,
    tailwindcssNesting,
    tailwindcss,
    postcssPresetEnv,
    postcssSortMediaQueries,
    postcssCombineSelectors,
    pxtorem,
    postcssCalc,
    postcssHexrgba,
    postcssPseudoIs,
    postcssFlexbugsFixes,
    postcssReporter,
  ],
};
