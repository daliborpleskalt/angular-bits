import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import { themes } from '@storybook/theming';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// Import Nebular styles
import '@nebular/theme/styles/prebuilt/default.css';
import '@nebular/theme/styles/globals.css';

// Import our design tokens
import '../libs/shared/design-tokens/src/_tokens.scss';

// Provide Compodoc documentation
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.light,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#f7f9fc',
      },
      {
        name: 'dark',
        value: '#222b45',
      },
    ],
  },
  options: {
    storySort: {
      order: [
        'Introduction',
        'Design Tokens',
        'Components',
        ['Basic', 'Navigation', 'Forms', 'Data Display', 'Feedback'],
      ],
    },
  },
}; 