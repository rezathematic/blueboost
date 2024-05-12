module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  arrowParens: 'avoid',
  plugins: ['prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.svg',
      options: {
        parser: 'html'
      }
    }
  ],
  proseWrap: 'always' // printWidth line breaks in md/mdx
}
