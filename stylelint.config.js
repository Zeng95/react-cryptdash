module.exports = {
  extends: 'stylelint-config-sass-guidelines',
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    'color-named': 'always-where-possible'
  }
}
