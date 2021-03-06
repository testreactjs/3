module.exports = {
  extends: ['eslint-config-purrweb-react'],
  rules: {
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
  },
  "env": {
    "browser": true,
    "node": true,
    "jasmine": true
  },
};