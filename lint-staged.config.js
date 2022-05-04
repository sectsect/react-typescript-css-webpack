module.exports = {
  '*': ['secretlint'],
  'src/**/*.{js,jsx,ts,tsx,vue}': ['eslint --fix', 'eslint', 'npm test'],
  'src/**/*.ts?(x)': ['tsc-files --noEmit src/@types/custom.d.ts'],
  'src/**/*.{css,scss}': ['stylelint --fix', 'stylelint'],
  '*.json': ['prettier --write'],
};
