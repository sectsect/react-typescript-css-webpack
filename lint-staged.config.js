module.exports = {
  '*': ['secretlint'],
  'src/**/*.{js,jsx,ts,tsx,vue}': ['eslint --fix', 'eslint', 'npm test'],
  'src/**/*.ts?(x)': () => 'npm run type-check -- --noEmit',
  'src/**/*.{css,scss}': ['stylelint --fix', 'stylelint'],
  '*.json': ['prettier --write'],
};
