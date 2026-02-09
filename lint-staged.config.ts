/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
const config = {
  '*.{html,css,json,md}': ['prettier --write'],
  '*.{js,ts,tsx}': ['eslint --fix', 'prettier --write'],
};
export default config;
