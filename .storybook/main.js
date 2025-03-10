module.exports = {
  stories: [
    '../libs/**/*.stories.mdx',
    '../libs/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-measure',
    '@storybook/addon-viewport'
  ],
  framework: {
    name: '@storybook/angular',
    options: {}
  },
  docs: {
    autodocs: true
  },
  staticDirs: ['../public']
}; 